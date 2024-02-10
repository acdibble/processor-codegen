import assert from 'assert';
import axios from 'axios';
import * as fs from 'fs/promises';
import { TypeRegistry, Metadata, TypeDefInfo } from '@polkadot/types';
import { TypeDef } from '@polkadot/types/types';

const fetchMetadata = async () => {
  let bytes = await fs.readFile('metadata.scale').catch(() => null);

  if (!bytes) {
    const res = await axios.post('https://backspin-rpc.staging/', {
      id: 1,
      jsonrpc: '2.0',
      method: 'state_getMetadata',
      params: [],
    });

    bytes = Buffer.from(res.data.result.slice(2), 'hex');

    await fs.writeFile('metadata.scale', bytes);
  }

  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, bytes);
  registry.setMetadata(metadata);
  return metadata;
};

const hasSubs = <T extends TypeDef>(type: T): type is T & { sub: TypeDef[] } =>
  Array.isArray(type.sub);

const hasSub = <T extends TypeDef>(type: T): type is T & { sub: TypeDef } =>
  !Array.isArray(type.sub) && type.sub !== undefined;

const isSi = <T extends TypeDef>(
  type: T,
): type is T & { info: TypeDefInfo.Si; type: `Lookup${number}` } =>
  type.info === TypeDefInfo.Si && /^Lookup[0-9]+$/.test(type.type);

export type PrimitiveType = { type: 'primitive'; name: string };

export const isPrimitiveType = (type: ResolvedType): type is PrimitiveType =>
  type.type === 'primitive';

export type EnumType = {
  type: 'enum';
  name: string;
  values: { name: string; value: ResolvedType }[];
};

export type StructType = {
  type: 'struct';
  name: string;
  fields: Record<string, ResolvedType>;
};

export type ArrayType = { type: 'array'; value: ResolvedType; length?: number };

export type ResolvedType =
  | PrimitiveType
  | EnumType
  | StructType
  | ArrayType
  | { type: 'tuple'; values: ResolvedType[] }
  | { type: 'option'; value: ResolvedType }
  | { type: 'null' }
  | { type: 'range'; value: ResolvedType };

const resolveType = (metadata: Metadata, type: TypeDef): ResolvedType => {
  try {
    switch (type.info) {
      case TypeDefInfo.Enum: {
        assert(hasSubs(type));

        const result: EnumType = {
          type: 'enum',
          name: type.namespace!,
          values: [],
        };

        for (const sub of type.sub) {
          result.values[sub.index!] = {
            name: sub.name!,
            value: resolveType(metadata, sub),
          };
        }

        return result;
      }
      case TypeDefInfo.Struct: {
        assert(hasSubs(type));

        const result: StructType = {
          type: 'struct',
          name: type.namespace!,
          fields: {},
        };

        for (const sub of type.sub) {
          result.fields[sub.name!] = resolveType(metadata, sub);
        }

        return result;
      }
      case TypeDefInfo.Si:
        assert(isSi(type));
        return resolveType(
          metadata,
          metadata.registry.lookup.getTypeDef(type.type),
        );
      case TypeDefInfo.Compact:
        assert(hasSub(type));
        return resolveType(metadata, type.sub);
      case TypeDefInfo.Null:
        return { type: 'null' };
      case TypeDefInfo.Plain:
        return { type: 'primitive', name: type.type };
      case TypeDefInfo.BTreeSet:
      case TypeDefInfo.Vec:
      case TypeDefInfo.VecFixed:
        assert(hasSub(type));
        return {
          type: 'array',
          value: resolveType(metadata, type.sub),
          length: type.length,
        };
      case TypeDefInfo.Tuple:
        assert(hasSubs(type));

        return {
          type: 'tuple',
          values: type.sub.map((t) => resolveType(metadata, t)),
        };
      case TypeDefInfo.Option:
        assert(hasSub(type));
        return { type: 'option', value: resolveType(metadata, type.sub) };
      case TypeDefInfo.Result:
        assert(hasSubs(type));
        return {
          type: 'enum',
          name: type.typeName!,
          values: [
            { name: 'Ok', value: resolveType(metadata, type.sub[0]) },
            { name: 'Err', value: resolveType(metadata, type.sub[1]) },
          ],
        };
      case TypeDefInfo.Range:
        assert(hasSub(type));
        return { type: 'range', value: resolveType(metadata, type.sub) };
    }
  } catch (error) {
    console.error('failed to parse type:');
    console.error(type);
    console.error(error);
    throw error;
  }

  console.error(type);
  throw new Error(`Unhandled type: ${type.info}`);
};

const hasName = <T extends { name?: string }>(
  obj: T,
): obj is T & { name: string } => obj.name !== undefined;

const isNotNullish = <T>(value: T): value is NonNullable<T> =>
  value !== null && value !== undefined;

export const parseMetadata = async () => {
  const metadata = await fetchMetadata();

  return Object.fromEntries(
    metadata.asV14.pallets
      .filter((pallet) => pallet.events.isSome)
      .map((pallet) => {
        const palletMetadata = pallet.events.unwrap();
        const events = metadata.registry.lookup.getTypeDef(palletMetadata.type);
        const palletName = pallet.name.toString();

        if (hasSubs(events)) return [palletName, events] as const;

        return null;
      })
      .filter(isNotNullish)
      .map(
        ([palletName, events]) =>
          [
            palletName,
            Object.fromEntries(
              events.sub
                .filter(hasName)
                .filter(hasSubs)
                .map(
                  (event) =>
                    [
                      event.name,
                      Object.fromEntries(
                        event.sub
                          .filter(hasName)
                          .map(
                            (sub) =>
                              [sub.name, resolveType(metadata, sub)] as const,
                          ),
                      ),
                    ] as const,
                ),
            ),
          ] as const,
      ),
  );
};
