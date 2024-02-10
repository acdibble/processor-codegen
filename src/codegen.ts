import * as prettier from 'prettier';
import {
  isPrimitiveType,
  type ArrayType,
  type EnumType,
  type PrimitiveType,
  type ResolvedType,
  type StructType,
} from './main';

const nameToIdentifier = (name: string): string =>
  name
    .replace(/::(.)/g, (_, c) => c.toUpperCase())
    .replace(/_(.)/g, (_, c) => c.toUpperCase())
    .replace(/^./, (c) => c.toLowerCase());

const generatePrimitive = (def: PrimitiveType, registry: Registry): string => {
  switch (def.name) {
    case 'u8':
    case 'u16':
    case 'u32':
      return 'z.number()';
    case 'u64':
      registry.numericString = true;
      registry.hexString = true;
      registry.numberOrHex = true;
      return 'numberOrHex';
    case 'AccountId32':
      registry.accountId = true;
      registry.hexString = true;
      return 'accountId';
  }

  throw new Error(`Unsupported primitive: ${def.name}`);
};

const generateEnum = (def: EnumType, registry: Registry): string => {
  const isSimple = def.values.every((v) => v.value.type === 'null');

  let generated: string;

  if (isSimple) {
    registry.simpleEnum = true;

    generated = `simpleEnum([${def.values.map((v) => `'${v.name}'`).join(', ')}])`;
  } else {
    generated = `z.union([${def.values
      .map((v) => {
        if (v.value.type === 'null') {
          return `z.object({ __kind: z.literal('${v.name}') })`;
        }

        return `z.object({ __kind: z.literal('${v.name}'), value: ${generateResolvedType(v.value, registry)} })`;
      })
      .join(', ')}])`;
  }

  const identifier = nameToIdentifier(def.name);

  registry.types.set(identifier, generated);

  return identifier;
};

const generateStruct = (def: StructType, registry: Registry): string => {
  const generated = `z.object({ ${Object.entries(def.fields)
    .map(([key, value]) => `${key}: ${generateResolvedType(value, registry)}`)
    .join(', ')} })`;

  const identifier = nameToIdentifier(def.name);

  registry.types.set(identifier, generated);

  return identifier;
};

const generateArray = (def: ArrayType, registry: Registry): string => {
  if (def.length) {
    if (isPrimitiveType(def.value) && def.value.name === 'u8') {
      registry.hexString = true;
      return 'hexString';
    }

    return `z.tuple([${Array(def.length).fill(generateResolvedType(def.value, registry)).join(', ')}])`;
  }

  return `z.array(${generateResolvedType(def.value, registry)})`;
};

type Registry = {
  hexString: boolean;
  accountId: boolean;
  simpleEnum: boolean;
  numericString: boolean;
  numberOrHex: boolean;
  types: Map<string, string>;
};

export const generateResolvedType = (
  def: ResolvedType,
  registry: Registry,
): string => {
  if (def.type === 'primitive') return generatePrimitive(def, registry);
  if (def.type === 'enum') return generateEnum(def, registry);
  if (def.type === 'struct') return generateStruct(def, registry);
  if (def.type === 'array') return generateArray(def, registry);
  // console.error(def);
  throw new Error(`Unsupported type: ${def.type}`);
};

type PalletName = string;
type EventName = string;
type FieldName = string;

export const generate = async (
  def: Record<PalletName, Record<EventName, Record<FieldName, ResolvedType>>>,
): Promise<string> => {
  const registry: Registry = {
    hexString: false,
    accountId: false,
    simpleEnum: false,
    numericString: false,
    numberOrHex: false,
    types: new Map(),
  };

  const prelude = ["import { z } from 'zod'"];

  const eventMaps: [string, Record<string, string>][] = [];

  for (const [palletName, events] of Object.entries(def)) {
    for (const [eventName, event] of Object.entries(events)) {
      const eventMap = {};
      for (const [fieldName, field] of Object.entries(event)) {
        eventMap[fieldName] = generateResolvedType(field, registry);
      }
      eventMaps.push([`${palletName}::${eventName}`, eventMap]);
    }
  }

  const utilities: string[] = [];

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

  for (const [name, type] of registry.types.entries()) {
    const identifier = nameToIdentifier(name);
    generated.push(`const ${identifier} = ${type};`);
    generated.push('');
  }

  for (const [eventName, eventMap] of eventMaps) {
    generated.push(`export const ${nameToIdentifier(eventName)} = z.object({`);
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

  return result;
};
