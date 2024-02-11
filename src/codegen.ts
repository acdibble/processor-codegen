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

type PalletName = string;
type EventName = string;
type FieldName = string;

const nameToIdentifier = (name: string): string =>
  name
    .replace(/::(.)/g, (_, c) => c.toUpperCase())
    .replace(/_(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());

export default class CodeGenerator {
  private registry = {
    hexString: false,
    accountId: false,
    simpleEnum: false,
    numericString: false,
    numberOrHex: false,
    types: new Map<string, string>(),
  };

  private ignoredEvents = new Set<string>();

  constructor({ ignoredEvents = [] }: { ignoredEvents?: string[] } = {}) {
    this.ignoredEvents = new Set(ignoredEvents);
  }

  private generatePrimitive(def: PrimitiveType): string {
    switch (def.name) {
      case 'i8':
      case 'u8':
      case 'i16':
      case 'u16':
      case 'i32':
      case 'u32':
      case 'Percent':
      case 'Permill':
        return 'z.number()';
      case 'u64':
      case 'u128':
      case 'U256':
        this.registry.numericString = true;
        this.registry.hexString = true;
        this.registry.numberOrHex = true;
        return 'numberOrHex';
      case 'AccountId32':
        this.registry.accountId = true;
        this.registry.hexString = true;
        return 'accountId';
      case 'H160':
      case 'H256':
        this.registry.hexString = true;
        return 'hexString';
      case 'Call':
        // we would need to parse the calls as well
        return 'z.unknown()';
      case 'Bytes':
        this.registry.hexString = true;
        this.registry.types.set(
          'utf8String',
          "hexString.transform((v) => Buffer.from(v.slice(2), 'hex').toString('utf8'))",
        );
        return 'utf8String';
      case 'bool':
        return 'z.boolean()';
    }

    throw new Error(`Unsupported primitive: ${def.name}`);
  }

  private generateEnum(def: EnumType): string {
    const isSimple = def.values.every((v) => v.value.type === 'null');
    const values = def.values.filter((n) => !n.name.startsWith('__Unused'));

    let generated: string;

    if (isSimple) {
      this.registry.simpleEnum = true;

      generated = `simpleEnum([${values.map((v) => `'${v.name}'`).join(', ')}])`;
    } else {
      generated = `z.union([${values
        .map((v) => {
          if (v.value.type === 'null') {
            return `z.object({ __kind: z.literal('${v.name}') })`;
          }

          return `z.object({ __kind: z.literal('${v.name}'), value: ${this.generateResolvedType(v.value)} })`;
        })
        .join(', ')}])`;
    }

    const identifier = nameToIdentifier(def.name);

    this.registry.types.set(identifier, generated);

    return identifier;
  }

  private generateStructFields(fields: Record<string, ResolvedType>): string {
    return `z.object({ ${Object.entries(fields)
      .filter(([_, value]) => value.type !== 'null')
      .map(([key, value]) => {
        const resolvedType = this.generateResolvedType(value);
        return key === resolvedType ? key : `${key}: ${resolvedType}`;
      })
      .join(', ')} })`;
  }

  private generateStruct(def: StructType): string {
    const generated = this.generateStructFields(def.fields);

    const identifier = nameToIdentifier(def.name);

    this.registry.types.set(identifier, generated);

    return identifier;
  }

  private generateArray(def: ArrayType): string {
    if (def.length) {
      if (isPrimitiveType(def.value) && def.value.name === 'u8') {
        this.registry.hexString = true;
        return 'hexString';
      }

      return `z.tuple([${Array(def.length).fill(this.generateResolvedType(def.value)).join(', ')}])`;
    }

    return `z.array(${this.generateResolvedType(def.value)})`;
  }

  private generateTuple(def: TupleType): string {
    return `z.tuple([${def.values.map((t) => this.generateResolvedType(t)).join(', ')}])`;
  }

  private generateOption(def: OptionType): string {
    return `${this.generateResolvedType(def.value)}.nullish()`;
  }

  private generateRange(def: RangeType): string {
    const resolvedType = this.generateResolvedType(def.value);

    return `z.object({ start: ${resolvedType}, end: ${resolvedType} })`;
  }

  private generateResolvedType(def: ResolvedType): string {
    if (def.type === 'primitive') return this.generatePrimitive(def);
    if (def.type === 'enum') return this.generateEnum(def);
    if (def.type === 'struct') return this.generateStruct(def);
    if (def.type === 'array') return this.generateArray(def);
    if (def.type === 'tuple') return this.generateTuple(def);
    if (def.type === 'range') return this.generateRange(def);
    if (def.type === 'option') return this.generateOption(def);
    // console.error(def);
    throw new Error(`Unsupported type: ${def.type}`);
  }

  async generate(
    def: Record<PalletName, Record<EventName, Record<FieldName, ResolvedType>>>,
  ): Promise<string> {
    const prelude = ["import { z } from 'zod'"];

    const eventMaps: [string, string][] = [];

    for (const [palletName, events] of Object.entries(def)) {
      for (const [eventName, event] of Object.entries(events)) {
        const name = `${palletName}.${eventName}`;

        if (this.ignoredEvents.has(name)) continue;

        try {
          eventMaps.push([
            `${palletName}::${eventName}`,
            this.generateStructFields(event),
          ]);
        } catch (e) {
          console.error(`failed to parse: ${name}`);
          console.error(JSON.stringify(event, null, 2));
          console.error(e);
          throw e;
        }
      }
    }

    const utilities: string[] = [];

    const { registry } = this;

    if (registry.hexString) {
      utilities.push(
        "const hexString = z.string().refine((v) => /^0x[\\da-f]*$/i.test(v), { message: 'Invalid hex string' });",
      );
      utilities.push('');
    }

    if (registry.numericString) {
      utilities.push(
        "const numericString = z.string().refine((v) => /^\\d+$/.test(v), { message: 'Invalid numeric string' });",
      );
      utilities.push('');
    }

    if (registry.numberOrHex) {
      utilities.push(
        'const numberOrHex = z.union([z.number(), hexString, numericString]).transform((n) => BigInt(n));',
      );
      utilities.push('');
    }

    if (registry.accountId) {
      prelude.push("import { encodeAddress } from '@polkadot/util-crypto'");

      utilities.push(
        'const accountId = z.union([hexString, z.string().regex(/^[0-9a-f]+$/).transform((v) => `0x${v}`)]).transform((value) => encodeAddress(value, 2112));',
      );
      utilities.push('');
    }

    if (registry.simpleEnum) {
      utilities.push(
        'const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(values: T) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);',
      );
      utilities.push('');
    }

    const generated: string[] = [];

    for (const [name, type] of this.registry.types.entries()) {
      const identifier = nameToIdentifier(name);
      generated.push(`const ${identifier} = ${type};`);
      generated.push('');
    }

    for (const [eventName, eventCode] of eventMaps) {
      generated.push(
        `export const ${nameToIdentifier(eventName)} = ${eventCode};`,
      );
      generated.push('');
    }

    const result = await prettier.format(
      [...prelude, '', ...utilities, '', ...generated].join('\n'),
      {
        parser: 'typescript',
        singleQuote: true,
      },
    );

    return result;
  }
}
