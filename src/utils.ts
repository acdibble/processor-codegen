import * as path from 'path';
import * as prettier from 'prettier';
import * as url from 'url';
import { ParsedMetadata } from './parser';

export const capitalize = <const T extends string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;

export const uncapitalize = <const T extends string>(str: T): Uncapitalize<T> =>
  (str.charAt(0).toLowerCase() + str.slice(1)) as Uncapitalize<T>;

// a function to deep diff two metadata objects
function* diff(
  a: any,
  b: any,
  path: string[] = [],
): Generator<{ path: string[]; type: 'added' | 'removed' | 'changed' }> {
  const addedKeys = Object.keys(b).filter((key) => !a[key]);
  const removedKeys = Object.keys(a).filter((key) => !b[key]);
  const commonKeys = Object.keys(a).filter((key) => b[key]);

  for (const key of addedKeys) {
    yield { path: [...path, key], type: 'added' };
  }

  for (const key of removedKeys) {
    yield { path: [...path, key], type: 'removed' };
  }

  for (const key of commonKeys) {
    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
      yield* diff(a[key], b[key], [...path, key]);
    } else if (a[key] !== b[key]) {
      yield { path: [...path, key], type: 'changed' };
    }
  }
}

export const diffSpecs = (a: ParsedMetadata, b: ParsedMetadata) => {
  const seenEvents = new Set<string>();

  for (const change of diff(a, b)) {
    const [pallet, event] = change.path;
    if (event) {
      seenEvents.add(`${pallet}.${event}`);
    } else if (change.type === 'added') {
      Object.keys(b[pallet])
        .map((e) => `${pallet}.${e}`)
        .forEach(seenEvents.add, seenEvents);
    }
  }

  return seenEvents;
};

export const unreachable = (x: never, message = 'unreachable'): never => {
  throw new Error(message);
};

export const getDirname = (filename: string) => path.dirname(url.fileURLToPath(filename));

export const formatCode = (code: string) =>
  prettier.format(code, {
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
  });
