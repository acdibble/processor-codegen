export const capitalize = <const T extends string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;

// a function to deep diff two metadata objects
export function* diff(a: any, b: any, path: string[] = []) {
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
