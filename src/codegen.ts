import * as fs from 'fs/promises';
import * as path from 'path';
import {
  isPrimitiveType,
  type ArrayType,
  type EnumType,
  type OptionType,
  type PrimitiveType,
  type RangeType,
  type ResolvedType,
  type StructType,
  type TupleType,
} from './parser';
import { formatCode, getDirname, uncapitalize, unreachable } from './utils';

type PalletName = string;
type EventName = string;

const nameToIdentifier = (name: string): string =>
  name.replace(/(?:::|_)(.)/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toLowerCase());

const isNull = (type: ResolvedType) => type.type === 'primitive' && type.name === 'null';

abstract class CodegenResult {
  constructor(
    private readonly code: string,
    readonly dependencies: CodegenResult[] = [],
  ) {}

  toString() {
    return this.code;
  }

  getDirectDependencies() {
    const depMap = this.dependencies.reduce(
      (acc, dep) => {
        if (dep instanceof Identifier) {
          acc[dep.pkg] ??= new Set();
          acc[dep.pkg].add(dep.toString());
        } else if (dep instanceof Code) {
          dep.dependencies.forEach((dep) => {
            if (dep instanceof Identifier) {
              acc[dep.pkg] ??= new Set();
              acc[dep.pkg].add(dep.toString());
            }
          });
        }

        return acc;
      },
      {} as Record<string, Set<string>>,
    );

    return Object.entries(depMap).map(([pkg, deps]) => {
      let pkgPath = pkg === 'common' ? '../common' : pkg;

      return `import { ${[...deps].sort().join(', ')} } from '${pkgPath}';`;
    });
  }
}

class Identifier extends CodegenResult {
  constructor(
    identifier: string,
    readonly pkg: string = 'common',
  ) {
    super(identifier);
  }

  getDirectDependencies(): string[] {
    const pkg = this.pkg === 'common' ? '../common' : this.pkg;

    return [`import { ${this.toString()} } from '${pkg}';`];
  }
}

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
  [new Identifier('encodeAddress', '@polkadot/util-crypto')],
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
  }: { ignoredEvents?: Set<string>; trackedEvents?: Set<string> } = {}) {
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
    const identifier = nameToIdentifier(def.name);

    if (this.registry.types.has(identifier)) return new Identifier(identifier);

    const isSimple = def.values.every((v) => isNull(v.value));
    const values = def.values.filter((n) => !n.name.startsWith('__Unused'));

    let generated: string;
    const dependencies: CodegenResult[] = [];

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

          dependencies.push(value);

          return `z.object({ __kind: z.literal('${v.name}'), value: ${value} })`;
        })
        .join(', ')}])`;
    }

    this.registry.types.set(identifier, new Code(generated, dependencies));

    return new Identifier(identifier);
  }

  private generateStruct(def: StructType): CodegenResult {
    const identifier = def.name && nameToIdentifier(def.name);

    if (identifier && this.registry.types.has(identifier)) {
      return new Identifier(identifier);
    }

    const dependencies: CodegenResult[] = [];

    const code = new Code(
      `z.object({ ${Object.entries(def.fields)
        .filter(([_, value]) => !isNull(value))
        .map(([key, value]) => {
          const resolvedType = this.generateResolvedType(value);
          dependencies.push(resolvedType);

          if (resolvedType instanceof Identifier) {
            const identifier = resolvedType.toString();

            if (identifier === key) return key;

            return `${key}: ${identifier}`;
          }

          return `${key}: ${resolvedType}`;
        })
        .join(', ')} })`,
      dependencies,
    );

    if (!identifier) return code;

    this.registry.types.set(identifier, code);

    return new Identifier(identifier);
  }

  private generateArray(def: ArrayType): CodegenResult {
    if (def.length) {
      if (isPrimitiveType(def.value) && def.value.name === 'u8') {
        this.registry.types.set('hexString', hexString);
        return new Identifier('hexString');
      }

      const resolvedType = this.generateResolvedType(def.value);

      const dependencies = Array.from({ length: def.length }, () => resolvedType);

      return new Code(`z.tuple([${dependencies.join(', ')}])`, [resolvedType]);
    }

    const resolvedType = this.generateResolvedType(def.value);
    const dependencies =
      resolvedType instanceof Identifier ? [resolvedType] : [...resolvedType.dependencies];
    return new Code(`z.array(${resolvedType})`, dependencies);
  }

  private generateTuple(def: TupleType): Code {
    const dependencies = def.values.map((t) => {
      const resolvedType = this.generateResolvedType(t);
      return resolvedType;
    });

    return new Code(`z.tuple([${dependencies.join(', ')}])`, dependencies);
  }

  private generateOption(def: OptionType): Code {
    const resolvedType = this.generateResolvedType(def.value);
    return new Code(`${resolvedType}.nullish()`, [resolvedType]);
  }

  private generateRange(def: RangeType): Code {
    const resolvedType = this.generateResolvedType(def.value);
    return new Code(`z.object({ start: ${resolvedType}, end: ${resolvedType} })`, [resolvedType]);
  }

  private generateResolvedType(def: ResolvedType): CodegenResult {
    if (def.type === 'primitive') return this.generatePrimitive(def);
    if (def.type === 'enum') return this.generateEnum(def);
    if (def.type === 'struct') return this.generateStruct(def);
    if (def.type === 'array') return this.generateArray(def);
    if (def.type === 'tuple') return this.generateTuple(def);
    if (def.type === 'range') return this.generateRange(def);
    if (def.type === 'option') return this.generateOption(def);
    return unreachable(def, `Unsupported type: ${(def as any).type}`);
  }

  async generate(
    specVersion: number,
    def: Record<PalletName, Record<EventName, ResolvedType>>,
  ): Promise<void> {
    const __dirname = getDirname(import.meta.url);
    const generatedDir = path.join(__dirname, '..', 'generated');
    await fs.mkdir(generatedDir, { recursive: true });
    const specDir = path.join(generatedDir, String(specVersion));
    await fs.rm(specDir, { recursive: true }).catch(() => null);
    const unhandledEvents = new Set(this.trackedEvents);
    const generatedEvents = new Set<string>();

    for (const [palletName, events] of Object.entries(def)) {
      const palletDir = path.join(specDir, uncapitalize(palletName));

      for (const [eventName, event] of Object.entries(events)) {
        const name = `${palletName}.${eventName}`;
        if (this.ignoredEvents?.has(name)) continue;
        if (this.trackedEvents && !unhandledEvents.delete(name)) continue;
        generatedEvents.add(name);

        await fs.mkdir(specDir, { recursive: true });
        await fs.mkdir(palletDir, { recursive: true });

        let generatedEvent: CodegenResult;

        try {
          generatedEvent = this.generateResolvedType(event);
        } catch (e) {
          console.error(`failed to parse: ${name}`);
          console.error(JSON.stringify(event, null, 2));
          console.error(e);
          throw e;
        }

        const parserName = nameToIdentifier(`${palletName}::${eventName}`);

        const generated = await formatCode(
          [
            "import { z } from 'zod';",
            ...generatedEvent.getDirectDependencies(),
            '',
            `export const ${parserName} = ${generatedEvent};`,
            '',
          ].join('\n'),
        );

        await fs.writeFile(path.join(palletDir, uncapitalize(`${eventName}.ts`)), generated);
      }
    }

    if (unhandledEvents.size !== 0) {
      console.warn('Not all events were generated:');
      console.warn([...unhandledEvents].join('\n'));
    }

    if (generatedEvents.size === 0) return;

    await this.generateCommon(specDir);

    await this.generateIndex(specDir, generatedEvents, specVersion);
  }

  private async generateCommon(specDir: string) {
    const imports: string[] = ["import { z } from 'zod';"];
    const generated: string[] = [];

    for (const [identifier, type] of this.registry.types.entries()) {
      imports.push(...type.getDirectDependencies().filter((dep) => !dep.includes('../common')));
      generated.push(`export const ${identifier} = ${type};`);
      generated.push('');
    }

    if (generated.length === 0) return;

    const common = await formatCode([...imports, '', ...generated].join('\n'));

    await fs.writeFile(path.join(specDir, 'common.ts'), common);
  }

  private async generateUtils(specDir: string) {
    const utils = path.join(path.dirname(specDir), 'utils.ts');

    await fs.writeFile(
      utils,
      await formatCode(
        `import { z } from 'zod';

type EventHandlerArgs = {
  // todo: fix \`any\`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
};

type ParsedEventHandlerArgs<T> = EventHandlerArgs & { args: T };

export type InternalEventHandler = (args: EventHandlerArgs) => Promise<void>;

export type EventHandler<T> = (args: ParsedEventHandlerArgs<T>) => Promise<void>;

export const wrapHandler = <T extends z.ZodTypeAny>(
  handler: EventHandler<z.output<T>> | undefined,
  schema: T,
): InternalEventHandler | undefined => {
  if (!handler) return undefined;

  return async ({ event, ...rest }) => handler({ ...rest, event, args: schema.parse(event.args) });
}`,
      ),
    );
  }

  private async generateIndex(specDir: string, generatedEvents: Set<string>, specVersion: number) {
    await this.generateUtils(specDir);

    const palletsAndEvents = [...generatedEvents]
      .map((name) => name.split('.'))
      .reduce(
        (acc, [pallet, event]) => {
          acc[pallet] ??= [];
          acc[pallet].push(event);
          return acc;
        },
        {} as Record<string, string[]>,
      );

    const imports = Object.entries(palletsAndEvents).flatMap(([pallet, events]) =>
      events.map(
        (event) =>
          `import { ${uncapitalize(pallet)}${event} } from './${uncapitalize(pallet)}/${uncapitalize(event)}';`,
      ),
    );

    const generated = `import { z } from 'zod';
    import { InternalEventHandler, EventHandler, wrapHandler } from '../utils';
    ${imports.join('\n')}

    ${Object.entries(palletsAndEvents)
      .flatMap(([pallet, events]) =>
        events.map(
          (event) =>
            `export type ${pallet}${event} = EventHandler<z.output<typeof ${uncapitalize(pallet)}${event}>>;`,
        ),
      )
      .join('\n')}

    type HandlerMap = {
      ${Object.entries(palletsAndEvents)
        .map(([pallet, events]) => {
          return `${pallet}?: {
            ${events.map((event) => `${event}?: ${pallet}${event}`).join('\n')}
          };`;
        })
        .join('\n')}
    };

    export const handleEvents = (map: HandlerMap) => ({
      spec: ${specVersion},
      handlers: [
        ${Object.entries(palletsAndEvents)
          .flatMap(([pallet, events]) =>
            events.map(
              (event) => `({
            name: '${pallet}.${event}',
            handler: wrapHandler(map.${pallet}?.${event}, ${uncapitalize(pallet)}${event}),
          })`,
            ),
          )
          .join(',\n')}
      ].filter((h): h is { name: string; handler: InternalEventHandler } => h.handler !== undefined),
    })
    `;

    await fs.writeFile(path.join(specDir, 'index.ts'), await formatCode(generated));
  }
}
