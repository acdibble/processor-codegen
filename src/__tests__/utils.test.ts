import * as fs from 'node:fs/promises';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as path from 'node:path';
import * as url from 'node:url';
import { diff } from '../utils';
import diffBetween25And100 from './fixtures/25-100-diff.json' with { type: 'json' };

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const generated = path.join(__dirname, '..', '..', 'generated');

describe(diff.name, () => {
  it('returns no diff for the same object', async () => {
    const a = JSON.parse(
      await fs.readFile(path.join(generated, 'types-25.json'), 'utf8'),
    );
    const b = JSON.parse(
      await fs.readFile(path.join(generated, 'types-25.json'), 'utf8'),
    );

    assert.strictEqual([...diff(a, b)].length, 0);
  });

  it('returns a diff for different objects', async () => {
    const a = JSON.parse(
      await fs.readFile(path.join(generated, 'types-25.json'), 'utf8'),
    );
    const b = JSON.parse(
      await fs.readFile(path.join(generated, 'types-100.json'), 'utf8'),
    );

    assert.deepEqual([...diff(a, b)], diffBetween25And100);
  });
});
