import * as prettier from 'prettier';
import {
  isPrimitiveType,
  type ArrayType,
  type EnumType,
  type PrimitiveType,
  type ResolvedType,
  type StructType,
  OptionType,
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
  registry = {
    hexString: false,
    accountId: false,
    simpleEnum: false,
    numericString: false,
    numberOrHex: false,
    types: new Map<string, string>(),
  };

  generatePrimitive(def: PrimitiveType): string {
    switch (def.name) {
      case 'u8':
      case 'u16':
      case 'u32':
        return 'z.number()';
      case 'u64':
      case 'u128':
        this.registry.numericString = true;
        this.registry.hexString = true;
        this.registry.numberOrHex = true;
        return 'numberOrHex';
      case 'AccountId32':
        this.registry.accountId = true;
        this.registry.hexString = true;
        return 'accountId';
      case 'Bytes':
        this.registry.hexString = true;
        this.registry.types.set(
          'utf8String',
          "hexString.transform((v) => Buffer.from(v.slice(2), 'hex').toString('utf8'))",
        );
        return 'utf8String';
    }

    throw new Error(`Unsupported primitive: ${def.name}`);
  }

  generateEnum(def: EnumType): string {
    const isSimple = def.values.every((v) => v.value.type === 'null');

    let generated: string;

    if (isSimple) {
      this.registry.simpleEnum = true;

      generated = `simpleEnum([${def.values.map((v) => `'${v.name}'`).join(', ')}])`;
    } else {
      generated = `z.union([${def.values
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

  generateStruct = (def: StructType): string => {
    const generated = `z.object({ ${Object.entries(def.fields)
      .map(([key, value]) => `${key}: ${this.generateResolvedType(value)}`)
      .join(', ')} })`;

    const identifier = nameToIdentifier(def.name);

    this.registry.types.set(identifier, generated);

    return identifier;
  };

  generateArray(def: ArrayType): string {
    if (def.length) {
      if (isPrimitiveType(def.value) && def.value.name === 'u8') {
        this.registry.hexString = true;
        return 'hexString';
      }

      return `z.tuple([${Array(def.length).fill(this.generateResolvedType(def.value)).join(', ')}])`;
    }

    return `z.array(${this.generateResolvedType(def.value)})`;
  }

  generateOption(def: OptionType): string {
    return `${this.generateResolvedType(def.value)}.nullish()`;
  }

  generateResolvedType(def: ResolvedType): string {
    if (def.type === 'primitive') return this.generatePrimitive(def);
    if (def.type === 'enum') return this.generateEnum(def);
    if (def.type === 'struct') return this.generateStruct(def);
    if (def.type === 'array') return this.generateArray(def);
    if (def.type === 'option') return this.generateOption(def);
    // console.error(def);
    throw new Error(`Unsupported type: ${def.type}`);
  }

  async generate(
    def: Record<PalletName, Record<EventName, Record<FieldName, ResolvedType>>>,
  ): Promise<string> {
    const prelude = ["import { z } from 'zod'"];

    const eventMaps: [string, Record<string, string>][] = [];

    for (const [palletName, events] of Object.entries(def)) {
      for (const [eventName, event] of Object.entries(events)) {
        const eventMap = {};
        for (const [fieldName, field] of Object.entries(event)) {
          eventMap[fieldName] = this.generateResolvedType(field);
        }
        eventMaps.push([`${palletName}::${eventName}`, eventMap]);
      }
    }

    const utilities: string[] = [];

    const { registry } = this;

    if (registry.hexString) {
      utilities.push(
        "const hexString = z.string().refine((v) => /^[0-9a-fA-F]*$/.test(v), { message: 'Invalid hex string' });",
      );
      utilities.push('');
    }

    if (registry.numericString) {
      utilities.push(
        "const numericString = z.string().refine((v) => /^[0-9]+$/.test(v), { message: 'Invalid numeric string' });",
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

    for (const [eventName, eventMap] of eventMaps) {
      generated.push(
        `export const ${nameToIdentifier(eventName)} = z.object({`,
      );
      for (const [fieldName, fieldType] of Object.entries(eventMap)) {
        if (fieldName === fieldType) {
          generated.push(`${fieldName},`);
        } else {
          generated.push(`${fieldName}: ${fieldType},`);
        }
      }
      generated.push('});');
      generated.push('');
    }

    const result = await prettier.format(
      [...prelude, '', ...utilities, '', ...generated].join('\n'),
      {
        parser: 'typescript',
        singleQuote: true,
      },
    );

    console.log(result);

    return result;
  }
}
