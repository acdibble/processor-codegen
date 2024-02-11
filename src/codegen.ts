import * as prettier from 'prettier';
import {
  isPrimitiveType,
  type ArrayType,
  type EnumType,
  type PrimitiveType,
  type ResolvedType,
  type StructType,
  OptionType,
  TupleType,
  RangeType,
} from './parser';
import { capitalize } from './utils';

type PalletName = string;
type EventName = string;

const nameToIdentifier = (name: string): string =>
  name
    .replace(/(?:::|_)(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());

const isNull = (type: ResolvedType) =>
  type.type === 'primitive' && type.name === 'null';

abstract class CodegenResult {
  shouldExport: boolean;
  prelude?: string;

  constructor(
    private readonly code: string,
    {
      shouldExport,
      prelude,
    }: { shouldExport?: boolean; prelude?: string } = {},
  ) {
    this.shouldExport = shouldExport ?? false;
    this.prelude = prelude;
  }

  toString() {
    return this.code;
  }
}

class Identifier extends CodegenResult {}

class Code extends CodegenResult {}

const hexString = new Code(
  "z.string().refine((v) => /^0x[\\da-f]*$/i.test(v), { message: 'Invalid hex string' })",
);
const numericString = new Code(
  "z.string().refine((v) => /^\\d+$/.test(v), { message: 'Invalid numeric string' })",
);
const numberOrHex = new Code(
  'z.union([z.number(), hexString, numericString]).transform((n) => BigInt(n))',
);
const accountId = new Code(
  'z.union([hexString, z.string().regex(/^[0-9a-f]+$/).transform((v) => `0x${v}`)]).transform((value) => encodeAddress(value, 2112))',
  {
    prelude: "import { encodeAddress } from '@polkadot/util-crypto';",
  },
);
const simpleEnum = new Code(
  '<U extends string, T extends readonly [U, ...U[]]>(values: T) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!)',
);

export default class CodeGenerator {
  private registry = {
    types: new Map<string, CodegenResult>(),
  };

  private ignoredEvents?: Set<string>;
  private trackedEvents?: Set<string>;

  constructor({
    ignoredEvents,
    trackedEvents,
  }: { ignoredEvents?: string[]; trackedEvents?: string[] } = {}) {
    if (ignoredEvents) this.ignoredEvents = new Set(ignoredEvents);
    if (trackedEvents) this.trackedEvents = new Set(trackedEvents);
  }

  private generatePrimitive(def: PrimitiveType): CodegenResult {
    switch (def.name) {
      case 'i8':
      case 'u8':
      case 'i16':
      case 'u16':
      case 'i32':
      case 'u32':
      case 'Percent':
      case 'Permill':
        return new Code('z.number()');
      case 'u64':
      case 'u128':
      case 'U256':
        this.registry.types.set('numericString', numericString);
        this.registry.types.set('hexString', hexString);
        this.registry.types.set('numberOrHex', numberOrHex);
        return new Identifier('numberOrHex');
      case 'AccountId32':
        this.registry.types.set('hexString', hexString);
        this.registry.types.set('accountId', accountId);
        return new Identifier('accountId');
      case 'H160':
      case 'H256':
        this.registry.types.set('hexString', hexString);
        return new Identifier('hexString');
      case 'Call':
        // we would need to parse the calls as well
        return new Code('z.unknown()');
      case 'Bytes':
        this.registry.types.set('hexString', hexString);
        return new Identifier('hexString');
      case 'bool':
        return new Code('z.boolean()');
      case 'null':
        return new Code('z.null()');
    }

    throw new Error(`Unsupported primitive: ${def.name}`);
  }

  private generateEnum(def: EnumType): Identifier {
    const isSimple = def.values.every((v) => isNull(v.value));
    const values = def.values.filter((n) => !n.name.startsWith('__Unused'));

    let generated: string;

    if (isSimple) {
      this.registry.types.set('simpleEnum', simpleEnum);
      generated = `simpleEnum([${values.map((v) => `'${v.name}'`).join(', ')}])`;
    } else {
      generated = `z.union([${values
        .map((v) => {
          if (isNull(v.value)) {
            return `z.object({ __kind: z.literal('${v.name}') })`;
          }

          const value = this.generateResolvedType(v.value);

          return `z.object({ __kind: z.literal('${v.name}'), value: ${value} })`;
        })
        .join(', ')}])`;
    }

    const identifier = nameToIdentifier(def.name);

    this.registry.types.set(identifier, new Code(generated));

    return new Identifier(identifier);
  }

  private generateStruct(def: StructType): Code {
    return new Code(
      `z.object({ ${Object.entries(def.fields)
        .filter(([_, value]) => !isNull(value))
        .map(([key, value]) => {
          const resolvedType = this.generateResolvedType(value);

          if (resolvedType instanceof Identifier) {
            const identifier = resolvedType.toString();

            if (identifier === key) return key;

            return `${key}: ${identifier}`;
          }

          return `${key}: ${resolvedType}`;
        })
        .join(', ')} })`,
    );
  }

  private generateArray(def: ArrayType): CodegenResult {
    if (def.length) {
      if (isPrimitiveType(def.value) && def.value.name === 'u8') {
        this.registry.types.set('hexString', hexString);
        return new Identifier('hexString');
      }

      return new Code(
        `z.tuple([${Array(def.length).fill(this.generateResolvedType(def.value)).join(', ')}])`,
      );
    }

    return new Code(`z.array(${this.generateResolvedType(def.value)})`);
  }

  private generateTuple(def: TupleType): Code {
    return new Code(
      `z.tuple([${def.values
        .map((t) => this.generateResolvedType(t))
        .join(', ')}])`,
    );
  }

  private generateOption(def: OptionType): Code {
    return new Code(`${this.generateResolvedType(def.value)}.nullish()`);
  }

  private generateRange(def: RangeType): Code {
    const resolvedType = this.generateResolvedType(def.value);
    return new Code(
      `z.object({ start: ${resolvedType}, end: ${resolvedType} })`,
    );
  }

  private generateResolvedType(def: ResolvedType): CodegenResult {
    if (def.type === 'primitive') return this.generatePrimitive(def);
    if (def.type === 'enum') return this.generateEnum(def);
    if (def.type === 'struct') return this.generateStruct(def);
    if (def.type === 'array') return this.generateArray(def);
    if (def.type === 'tuple') return this.generateTuple(def);
    if (def.type === 'range') return this.generateRange(def);
    if (def.type === 'option') return this.generateOption(def);
    throw new Error(`Unsupported type: ${(def as any).type}`);
  }

  async generate(
    def: Record<PalletName, Record<EventName, ResolvedType>>,
  ): Promise<string> {
    const prelude = ["import { z } from 'zod';"];

    for (const [palletName, events] of Object.entries(def)) {
      for (const [eventName, event] of Object.entries(events)) {
        const name = `${palletName}.${eventName}`;

        if (this.ignoredEvents?.has(name)) continue;
        if (this.trackedEvents && !this.trackedEvents.delete(name)) continue;

        try {
          const generatedEvent = this.generateResolvedType(event);

          generatedEvent.shouldExport = true;
          this.registry.types.set(
            nameToIdentifier(`${palletName}::Event::${eventName}`),
            generatedEvent,
          );
        } catch (e) {
          console.error(`failed to parse: ${name}`);
          console.error(JSON.stringify(event, null, 2));
          console.error(e);
          throw e;
        }
      }
    }

    if (this.trackedEvents && this.trackedEvents.size !== 0) {
      console.warn('Not all events were generated:');
      console.warn([...this.trackedEvents].join('\n'));
    }

    const generated: string[] = [];

    for (const [identifier, type] of this.registry.types.entries()) {
      if (type.prelude) prelude.push(type.prelude);
      generated.push(
        `${type.shouldExport ? 'export ' : ''}const ${identifier} = ${type};`,
      );
      if (type.shouldExport) {
        generated.push('');
        generated.push(
          `export type ${capitalize(identifier)}Args = z.output<typeof ${identifier}>;`,
        );
      }
      generated.push('');
    }

    const result = await prettier.format(
      [...prelude, '', ...generated].join('\n'),
      {
        parser: 'typescript',
        singleQuote: true,
      },
    );

    return result;
  }
}
