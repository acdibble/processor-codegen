import assert from 'assert';
import axios from 'axios';
import * as fs from 'fs/promises';
import { TypeRegistry, Metadata, TypeDefInfo } from '@polkadot/types';
import { TypeDef } from '@polkadot/types/types';

const fetchMetadata = async () => {
  let bytes = await fs.readFile('metadata.json').catch(() => null);

  if (!bytes) {
    const res = await axios.post('https://backspin-rpc.staging/', {
      id: 1,
      jsonrpc: '2.0',
      method: 'state_getMetadata',
      params: [],
    });

    bytes = Buffer.from(res.data.result.slice(2), 'hex');

    await fs.writeFile('metadata.json', bytes);
  }

  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, bytes);
  registry.setMetadata(metadata);
  return metadata;
};

const metadata = await fetchMetadata();

const hasSubs = <T extends TypeDef>(type: T): type is T & { sub: TypeDef[] } =>
  Array.isArray(type.sub);

const hasSub = <T extends TypeDef>(type: T): type is T & { sub: TypeDef } =>
  !Array.isArray(type.sub) && type.sub !== undefined;

const isSi = <T extends TypeDef>(
  type: T
): type is T & { info: TypeDefInfo.Si; type: `Lookup${number}` } =>
  type.info === TypeDefInfo.Si && /^Lookup[0-9]+$/.test(type.type);

type ResolvedType =
  | string
  | {
      type: 'enum';
      name: string;
      values: { name: string; value: ResolvedType }[];
    }
  | { type: 'struct'; name: string; fields: Record<string, ResolvedType> }
  | { type: 'array'; value: ResolvedType; length?: number }
  | { type: 'tuple'; values: ResolvedType[] }
  | { type: 'option'; value: ResolvedType }
  | { type: 'null' }
  | { type: 'range'; value: ResolvedType };

const resolveType = (type: TypeDef): ResolvedType => {
  try {
    switch (type.info) {
      case TypeDefInfo.Enum: {
        assert(hasSubs(type));

        console.log(type);

        const result: ResolvedType = {
          type: 'enum',
          name: type.namespace!,
          values: [],
        };

        for (const sub of type.sub) {
          result.values[sub.index!] = {
            name: sub.name!,
            value: resolveType(sub),
          };
        }

        return result;
      }
      case TypeDefInfo.Struct: {
        assert(hasSubs(type));

        const result: ResolvedType = {
          type: 'struct',
          name: type.namespace!,
          fields: {},
        };

        for (const sub of type.sub) {
          result.fields[sub.name!] = resolveType(sub);
        }

        return result;
      }
      case TypeDefInfo.Si:
        assert(isSi(type));
        return resolveType(metadata.registry.lookup.getTypeDef(type.type));
      case TypeDefInfo.Compact:
        assert(hasSub(type));
        return resolveType(type.sub);
      case TypeDefInfo.Null:
        return { type: 'null' };
      case TypeDefInfo.Plain:
        return type.type;
      case TypeDefInfo.BTreeSet:
      case TypeDefInfo.Vec:
      case TypeDefInfo.VecFixed:
        assert(hasSub(type));
        return {
          type: 'array',
          value: resolveType(type.sub),
          length: type.length,
        };
      case TypeDefInfo.Tuple:
        assert(hasSubs(type));

        return { type: 'tuple', values: type.sub.map(resolveType) };
      case TypeDefInfo.Option:
        assert(hasSub(type));
        return { type: 'option', value: resolveType(type.sub) };
      case TypeDefInfo.Result:
        assert(hasSubs(type));
        return {
          type: 'enum',
          name: 'Result',
          values: [
            { name: 'Ok', value: resolveType(type.sub[0]) },
            { name: 'Err', value: resolveType(type.sub[1]) },
          ],
        };
      case TypeDefInfo.Range:
        assert(hasSub(type));
        return { type: 'range', value: resolveType(type.sub) };
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
  obj: T
): obj is T & { name: string } => obj.name !== undefined;

const eventMap = Object.fromEntries(
  metadata.asV14.pallets
    .filter((pallet) => pallet.events.isSome)
    .map((pallet) => {
      const palletMetadata = pallet.events.unwrap();
      const events = metadata.registry.lookup.getTypeDef(palletMetadata.type);

      if (!hasSubs(events)) return [pallet.name.toString(), null];

      return [
        pallet.name.toString(),
        Object.fromEntries(
          events.sub.filter(hasName).map((event) => {
            if (!hasSubs(event)) return [event.name, null];

            return [
              event.name,
              Object.fromEntries(
                event.sub.map((sub, index) => {
                  const type = resolveType(sub);
                  return [sub.name, type];
                })
              ),
            ];
          })
        ),
      ];
    })
);

await fs.mkdir('generated', { recursive: true });
await fs.writeFile(
  './generated/events.json',
  JSON.stringify(eventMap, null, 2)
);
