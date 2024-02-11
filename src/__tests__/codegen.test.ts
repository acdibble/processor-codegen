import * as fs from 'node:fs/promises';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as path from 'node:path';
import * as url from 'node:url';
import events from './fixtures/events.json' with { type: 'json' };
import CodeGenerator from '../codegen';
import type { ResolvedType } from '../parser';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const pick = (paths: string[]): Record<string, Record<string, ResolvedType>> =>
  paths.reduce((acc, path) => {
    const [pallet, event] = path.split('.');
    acc[pallet] ??= {};
    acc[pallet][event] = events[pallet][event];
    return acc;
  }, {});

const getFixture = async (name: string) =>
  await fs.readFile(path.join(__dirname, 'fixtures', `${name}.ts`), 'utf-8');

async function assertGenerates(name: [string]): Promise<void>;
async function assertGenerates(
  name: string[],
  fixtureName: string,
): Promise<void>;
async function assertGenerates(name: string[], fixtureName = name[0]) {
  const fixture = await getFixture(fixtureName).catch(() => null);
  const generated = await new CodeGenerator().generate(pick(name));
  // await fs.writeFile(
  //   path.join(__dirname, 'fixtures', `${fixtureName}.ts`),
  //   generated,
  // );
  if (fixture === null) {
    console.log(generated);
  }
  assert.strictEqual(generated, fixture);
}

describe(CodeGenerator.name, () => {
  const fixtures = [
    'AccountRoles.AccountRoleRegistered',
    'BitcoinThresholdSigner.ThresholdDispatchComplete',
    'Swapping.SwapDepositAddressReady',
  ];

  for (const fixture of fixtures) {
    it(`generates ${fixture} correctly`, async () => {
      await assertGenerates([fixture]);
    });
  }

  it('generates all fixtures correctly', async () => {
    await assertGenerates(fixtures, 'all-fixtures');
  });
});
