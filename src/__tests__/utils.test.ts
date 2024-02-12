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

    assert.deepEqual(
      new Set([...diff(a, b)].map(({ path }) => path.slice(0, 2).join('.'))),
      new Set([
        'Environment.NextCompatibilityVersionSet',
        'Environment.RuntimeSafeModeUpdated',
        'Witnesser.Prewitnessed',
        'Governance.UpgradeConditionsSatisfied',
        'Reputation.AccrualRateUpdated',
        'EthereumBroadcaster.TransactionFeeDeficitRecorded',
        'EthereumBroadcaster.TransactionFeeDeficitRefused',
        'EthereumBroadcaster.ThresholdSignatureInvalid',
        'PolkadotBroadcaster.TransactionFeeDeficitRecorded',
        'PolkadotBroadcaster.TransactionFeeDeficitRefused',
        'PolkadotBroadcaster.ThresholdSignatureInvalid',
        'BitcoinBroadcaster.TransactionFeeDeficitRecorded',
        'BitcoinBroadcaster.TransactionFeeDeficitRefused',
        'BitcoinBroadcaster.ThresholdSignatureInvalid',
        'Swapping.SwapDepositAddressExpired',
        'Swapping.SwapTtlSet',
        'Swapping.SwapDepositAddressReady',
        'LiquidityProvider.LiquidityDepositAddressExpired',
        'LiquidityProvider.LpTtlSet',
        'LiquidityProvider.LiquidityDepositAddressReady',
        'EthereumIngressEgress.DepositWitnessRejected',
        'PolkadotIngressEgress.DepositWitnessRejected',
        'BitcoinIngressEgress.DepositWitnessRejected',
        'LiquidityPools.PoolFeeSet',
        'LiquidityPools.RangeOrderUpdated',
        'LiquidityPools.LimitOrderUpdated',
      ]),
    );
  });
});
