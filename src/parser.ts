import assert from 'assert';
import axios from 'axios';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
import { TypeRegistry, Metadata, TypeDefInfo } from '@polkadot/types';
import { TypeDef } from '@polkadot/types/types';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export type MetadataOpts = {
  rpcUrl?: string;
  hash?: string;
};

const fetchMetadata = async ({
  rpcUrl = 'https://backspin-rpc.staging/',
  hash,
}: MetadataOpts = {}) => {
  const runtimeVersionRes = await axios.post(rpcUrl, {
    id: 1,
    jsonrpc: '2.0',
    method: 'state_getRuntimeVersion',
    params: [hash],
  });

  const { specVersion } = runtimeVersionRes.data.result;

  const filePath = path.join(
    __dirname,
    '..',
    'metadata',
    `${specVersion}.scale`,
  );

  let bytes = await fs.readFile(filePath).catch(() => null);

  if (!bytes) {
    const metadataRes = await axios.post(rpcUrl, {
      id: 1,
      jsonrpc: '2.0',
      method: 'state_getMetadata',
      params: [hash],
    });

    bytes = Buffer.from(metadataRes.data.result.slice(2), 'hex');

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, bytes);
  }

  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, bytes);
  registry.setMetadata(metadata);
  return { specVersion, metadata };
};

const hasSubs = <T extends TypeDef>(type: T): type is T & { sub: TypeDef[] } =>
  Array.isArray(type.sub);

const hasSub = <T extends TypeDef>(type: T): type is T & { sub: TypeDef } =>
  !Array.isArray(type.sub) && type.sub !== undefined;

const isSi = <T extends TypeDef>(
  type: T,
): type is T & { info: TypeDefInfo.Si; type: `Lookup${number}` } =>
  type.info === TypeDefInfo.Si && /^Lookup\d+$/.test(type.type);

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
  fields: Record<string, ResolvedType>;
};

export type ArrayType = { type: 'array'; value: ResolvedType; length?: number };

export type TupleType = { type: 'tuple'; values: ResolvedType[] };

export type OptionType = { type: 'option'; value: ResolvedType };

export type RangeType = { type: 'range'; value: ResolvedType };

export type ResolvedType =
  | PrimitiveType
  | EnumType
  | StructType
  | ArrayType
  | TupleType
  | OptionType
  | { type: 'null' }
  | RangeType;

function genericNamespace(namespace: string, palletName: string): string;
function genericNamespace(
  namespace: string | undefined,
  palletName: string,
): string | undefined;
function genericNamespace(namespace: string | undefined, palletName: string) {
  if (!namespace) return namespace;

  if (namespace.startsWith('pallet_cf_ingress_egress')) {
    const chain = /^(.+)IngressEgress$/.exec(palletName)![1];
    return namespace.replace(
      'pallet_cf_ingress_egress',
      `pallet_cf_${chain.toLowerCase()}_ingress_egress`,
    );
  }
  return namespace;
}

const resolveType = (
  metadata: Metadata,
  type: TypeDef,
  palletName: string,
): ResolvedType => {
  try {
    switch (type.info) {
      case TypeDefInfo.Enum: {
        assert(hasSubs(type));

        const result: EnumType = {
          type: 'enum',
          name: genericNamespace(type.namespace!, palletName),
          values: [],
        };

        for (const sub of type.sub) {
          result.values[sub.index!] = {
            name: sub.name!,
            value: resolveType(metadata, sub, palletName),
          };
        }

        return result;
      }
      case TypeDefInfo.Struct: {
        assert(hasSubs(type));

        const result: StructType = {
          type: 'struct',
          fields: {},
        };

        for (const sub of type.sub) {
          result.fields[sub.name!] = resolveType(metadata, sub, palletName);
        }

        return result;
      }
      case TypeDefInfo.Si:
        assert(isSi(type));
        return resolveType(
          metadata,
          metadata.registry.lookup.getTypeDef(type.type),
          palletName,
        );
      case TypeDefInfo.Compact:
        assert(hasSub(type));
        return resolveType(metadata, type.sub, palletName);
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
          value: resolveType(metadata, type.sub, palletName),
          length: type.length,
        };
      case TypeDefInfo.Tuple:
        assert(hasSubs(type));

        return {
          type: 'tuple',
          values: type.sub.map((t) => resolveType(metadata, t, palletName)),
        };
      case TypeDefInfo.Option:
        assert(hasSub(type));
        return {
          type: 'option',
          value: resolveType(metadata, type.sub, palletName),
        };
      case TypeDefInfo.Result:
        assert(hasSubs(type));
        return {
          type: 'enum',
          name: type.typeName!,
          values: [
            {
              name: 'Ok',
              value: resolveType(metadata, type.sub[0], palletName),
            },
            {
              name: 'Err',
              value: resolveType(metadata, type.sub[1], palletName),
            },
          ],
        };
      case TypeDefInfo.Range:
        assert(hasSub(type));
        return {
          type: 'range',
          value: resolveType(metadata, type.sub, palletName),
        };
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

export const parseMetadata = async (opts?: MetadataOpts) => {
  const { metadata, specVersion } = await fetchMetadata(opts);

  return {
    specVersion,
    parsedMetadata: Object.fromEntries(
      metadata.asV14.pallets
        .filter((pallet) => pallet.events.isSome)
        .map((pallet) => {
          const palletMetadata = pallet.events.unwrap();
          const events = metadata.registry.lookup.getTypeDef(
            palletMetadata.type,
          );
          const palletName = pallet.name.toString();

          assert(hasSubs(events));

          return [palletName, events] as const;
        })
        .map(
          ([palletName, events]) =>
            [
              palletName,
              Object.fromEntries(
                events.sub
                  .filter(hasName)
                  .map(
                    (event) =>
                      [
                        event.name,
                        resolveType(metadata, event, palletName),
                      ] as const,
                  ),
              ),
            ] as const,
        ),
    ),
  };
};
