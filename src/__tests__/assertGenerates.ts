import assert from 'node:assert';
import { generateAndFormat, get, getFixture } from './codegen.test';

const assertGenerates = async <const T extends string>(name: T) => {
  assert.strictEqual(
    await generateAndFormat(get(name)),
    await getFixture(name),
  );
};
