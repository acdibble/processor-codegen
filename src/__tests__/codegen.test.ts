import * as fs from 'node:fs/promises';
import { describe, it } from 'node:test';
import assert from 'node:assert';
import * as path from 'node:path';
import * as url from 'node:url';
import { generate } from '../codegen';
import type { ResolvedType } from '../main';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const events = {
  AccountRoles: {
    AccountRoleRegistered: {
      accountId: {
        type: 'primitive',
        name: 'AccountId32',
      },
      role: {
        type: 'enum',
        name: 'cf_primitives::AccountRole',
        values: [
          {
            name: 'Unregistered',
            value: {
              type: 'null',
            },
          },
          {
            name: 'Validator',
            value: {
              type: 'null',
            },
          },
          {
            name: 'LiquidityProvider',
            value: {
              type: 'null',
            },
          },
          {
            name: 'Broker',
            value: {
              type: 'null',
            },
          },
        ],
      },
    },
  },
  BitcoinThresholdSigner: {
    ThresholdDispatchComplete: {
      requestId: {
        type: 'primitive',
        name: 'u32',
      },
      ceremonyId: {
        type: 'primitive',
        name: 'u64',
      },
      result: {
        type: 'enum',
        name: 'Result',
        values: [
          {
            name: 'Ok',
            value: {
              type: 'null',
            },
          },
          {
            name: 'Err',
            value: {
              type: 'enum',
              name: 'sp_runtime::DispatchError',
              values: [
                {
                  name: 'Other',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'CannotLookup',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'BadOrigin',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'Module',
                  value: {
                    type: 'struct',
                    name: 'sp_runtime::ModuleError',
                    fields: {
                      index: {
                        type: 'primitive',
                        name: 'u8',
                      },
                      error: {
                        type: 'array',
                        value: {
                          type: 'primitive',
                          name: 'u8',
                        },
                        length: 4,
                      },
                    },
                  },
                },
                {
                  name: 'ConsumerRemaining',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'NoProviders',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'TooManyConsumers',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'Token',
                  value: {
                    type: 'enum',
                    name: 'sp_runtime::TokenError',
                    values: [
                      {
                        name: 'FundsUnavailable',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'OnlyProvider',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'BelowMinimum',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'CannotCreate',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'UnknownAsset',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'Frozen',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'Unsupported',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'CannotCreateHold',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'NotExpendable',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'Blocked',
                        value: {
                          type: 'null',
                        },
                      },
                    ],
                  },
                },
                {
                  name: 'Arithmetic',
                  value: {
                    type: 'enum',
                    name: 'sp_arithmetic::ArithmeticError',
                    values: [
                      {
                        name: 'Underflow',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'Overflow',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'DivisionByZero',
                        value: {
                          type: 'null',
                        },
                      },
                    ],
                  },
                },
                {
                  name: 'Transactional',
                  value: {
                    type: 'enum',
                    name: 'sp_runtime::TransactionalError',
                    values: [
                      {
                        name: 'LimitReached',
                        value: {
                          type: 'null',
                        },
                      },
                      {
                        name: 'NoLayer',
                        value: {
                          type: 'null',
                        },
                      },
                    ],
                  },
                },
                {
                  name: 'Exhausted',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'Corruption',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'Unavailable',
                  value: {
                    type: 'null',
                  },
                },
                {
                  name: 'RootNotAllowed',
                  value: {
                    type: 'null',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};

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
