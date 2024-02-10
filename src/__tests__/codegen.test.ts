import * as fs from 'node:fs/promises';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as path from 'node:path';
import * as url from 'node:url';
import events from './fixtures/events.json' with { type: 'json' };
import { generate } from '../codegen';
import type { ResolvedType } from '../parser';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const pick = (
  path: string,
): Record<string, Record<string, Record<string, ResolvedType>>> => {
  const [pallet, event] = path.split('.');
  return { [pallet]: { [event]: events[pallet][event] } };
};

const getFixture = async (name: string) =>
  await fs.readFile(path.join(__dirname, 'fixtures', `${name}.ts`), 'utf-8');

const assertGenerates = async <const T extends string>(name: T) =>
  assert.strictEqual(await generate(pick(name)), await getFixture(name));

describe(generate.name, () => {
  const fixtures = [
    'AccountRoles.AccountRoleRegistered',
    'BitcoinThresholdSigner.ThresholdDispatchComplete',
  ];

  for (const fixture of fixtures) {
    it(`generates ${fixture} correctly`, async () => {
      await assertGenerates(fixture);
    });
  }
});
