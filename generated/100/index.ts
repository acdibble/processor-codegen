import { z } from 'zod';
import { InternalEventHandler, EventHandler, wrapHandler } from '../utils';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { witnesserPrewitnessed } from './witnesser/prewitnessed';
import { reputationAccrualRateUpdated } from './reputation/accrualRateUpdated';
import { ethereumBroadcasterThresholdSignatureInvalid } from './ethereumBroadcaster/thresholdSignatureInvalid';
import { ethereumBroadcasterTransactionFeeDeficitRecorded } from './ethereumBroadcaster/transactionFeeDeficitRecorded';
import { ethereumBroadcasterTransactionFeeDeficitRefused } from './ethereumBroadcaster/transactionFeeDeficitRefused';
import { polkadotBroadcasterThresholdSignatureInvalid } from './polkadotBroadcaster/thresholdSignatureInvalid';
import { polkadotBroadcasterTransactionFeeDeficitRecorded } from './polkadotBroadcaster/transactionFeeDeficitRecorded';
import { polkadotBroadcasterTransactionFeeDeficitRefused } from './polkadotBroadcaster/transactionFeeDeficitRefused';
import { bitcoinBroadcasterThresholdSignatureInvalid } from './bitcoinBroadcaster/thresholdSignatureInvalid';
import { bitcoinBroadcasterTransactionFeeDeficitRecorded } from './bitcoinBroadcaster/transactionFeeDeficitRecorded';
import { bitcoinBroadcasterTransactionFeeDeficitRefused } from './bitcoinBroadcaster/transactionFeeDeficitRefused';
import { swappingSwapDepositAddressReady } from './swapping/swapDepositAddressReady';
import { liquidityProviderLiquidityDepositAddressReady } from './liquidityProvider/liquidityDepositAddressReady';
import { ethereumIngressEgressDepositWitnessRejected } from './ethereumIngressEgress/depositWitnessRejected';
import { polkadotIngressEgressDepositWitnessRejected } from './polkadotIngressEgress/depositWitnessRejected';
import { bitcoinIngressEgressDepositWitnessRejected } from './bitcoinIngressEgress/depositWitnessRejected';
import { liquidityPoolsRangeOrderUpdated } from './liquidityPools/rangeOrderUpdated';
import { liquidityPoolsLimitOrderUpdated } from './liquidityPools/limitOrderUpdated';
import { liquidityPoolsPoolFeeSet } from './liquidityPools/poolFeeSet';

export type EnvironmentRuntimeSafeModeUpdated = EventHandler<
  z.output<typeof environmentRuntimeSafeModeUpdated>
>;
export type WitnesserPrewitnessed = EventHandler<z.output<typeof witnesserPrewitnessed>>;
export type ReputationAccrualRateUpdated = EventHandler<
  z.output<typeof reputationAccrualRateUpdated>
>;
export type EthereumBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof ethereumBroadcasterThresholdSignatureInvalid>
>;
export type EthereumBroadcasterTransactionFeeDeficitRecorded = EventHandler<
  z.output<typeof ethereumBroadcasterTransactionFeeDeficitRecorded>
>;
export type EthereumBroadcasterTransactionFeeDeficitRefused = EventHandler<
  z.output<typeof ethereumBroadcasterTransactionFeeDeficitRefused>
>;
export type PolkadotBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof polkadotBroadcasterThresholdSignatureInvalid>
>;
export type PolkadotBroadcasterTransactionFeeDeficitRecorded = EventHandler<
  z.output<typeof polkadotBroadcasterTransactionFeeDeficitRecorded>
>;
export type PolkadotBroadcasterTransactionFeeDeficitRefused = EventHandler<
  z.output<typeof polkadotBroadcasterTransactionFeeDeficitRefused>
>;
export type BitcoinBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof bitcoinBroadcasterThresholdSignatureInvalid>
>;
export type BitcoinBroadcasterTransactionFeeDeficitRecorded = EventHandler<
  z.output<typeof bitcoinBroadcasterTransactionFeeDeficitRecorded>
>;
export type BitcoinBroadcasterTransactionFeeDeficitRefused = EventHandler<
  z.output<typeof bitcoinBroadcasterTransactionFeeDeficitRefused>
>;
export type SwappingSwapDepositAddressReady = EventHandler<
  z.output<typeof swappingSwapDepositAddressReady>
>;
export type LiquidityProviderLiquidityDepositAddressReady = EventHandler<
  z.output<typeof liquidityProviderLiquidityDepositAddressReady>
>;
export type EthereumIngressEgressDepositWitnessRejected = EventHandler<
  z.output<typeof ethereumIngressEgressDepositWitnessRejected>
>;
export type PolkadotIngressEgressDepositWitnessRejected = EventHandler<
  z.output<typeof polkadotIngressEgressDepositWitnessRejected>
>;
export type BitcoinIngressEgressDepositWitnessRejected = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositWitnessRejected>
>;
export type LiquidityPoolsRangeOrderUpdated = EventHandler<
  z.output<typeof liquidityPoolsRangeOrderUpdated>
>;
export type LiquidityPoolsLimitOrderUpdated = EventHandler<
  z.output<typeof liquidityPoolsLimitOrderUpdated>
>;
export type LiquidityPoolsPoolFeeSet = EventHandler<z.output<typeof liquidityPoolsPoolFeeSet>>;

type HandlerMap = {
  Environment?: {
    RuntimeSafeModeUpdated?: EnvironmentRuntimeSafeModeUpdated;
  };
  Witnesser?: {
    Prewitnessed?: WitnesserPrewitnessed;
  };
  Reputation?: {
    AccrualRateUpdated?: ReputationAccrualRateUpdated;
  };
  EthereumBroadcaster?: {
    ThresholdSignatureInvalid?: EthereumBroadcasterThresholdSignatureInvalid;
    TransactionFeeDeficitRecorded?: EthereumBroadcasterTransactionFeeDeficitRecorded;
    TransactionFeeDeficitRefused?: EthereumBroadcasterTransactionFeeDeficitRefused;
  };
  PolkadotBroadcaster?: {
    ThresholdSignatureInvalid?: PolkadotBroadcasterThresholdSignatureInvalid;
    TransactionFeeDeficitRecorded?: PolkadotBroadcasterTransactionFeeDeficitRecorded;
    TransactionFeeDeficitRefused?: PolkadotBroadcasterTransactionFeeDeficitRefused;
  };
  BitcoinBroadcaster?: {
    ThresholdSignatureInvalid?: BitcoinBroadcasterThresholdSignatureInvalid;
    TransactionFeeDeficitRecorded?: BitcoinBroadcasterTransactionFeeDeficitRecorded;
    TransactionFeeDeficitRefused?: BitcoinBroadcasterTransactionFeeDeficitRefused;
  };
  Swapping?: {
    SwapDepositAddressReady?: SwappingSwapDepositAddressReady;
  };
  LiquidityProvider?: {
    LiquidityDepositAddressReady?: LiquidityProviderLiquidityDepositAddressReady;
  };
  EthereumIngressEgress?: {
    DepositWitnessRejected?: EthereumIngressEgressDepositWitnessRejected;
  };
  PolkadotIngressEgress?: {
    DepositWitnessRejected?: PolkadotIngressEgressDepositWitnessRejected;
  };
  BitcoinIngressEgress?: {
    DepositWitnessRejected?: BitcoinIngressEgressDepositWitnessRejected;
  };
  LiquidityPools?: {
    RangeOrderUpdated?: LiquidityPoolsRangeOrderUpdated;
    LimitOrderUpdated?: LiquidityPoolsLimitOrderUpdated;
    PoolFeeSet?: LiquidityPoolsPoolFeeSet;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 100,
  handlers: [
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: wrapHandler(
        map.Environment?.RuntimeSafeModeUpdated,
        environmentRuntimeSafeModeUpdated,
      ),
    },
    {
      name: 'Witnesser.Prewitnessed',
      handler: wrapHandler(map.Witnesser?.Prewitnessed, witnesserPrewitnessed),
    },
    {
      name: 'Reputation.AccrualRateUpdated',
      handler: wrapHandler(map.Reputation?.AccrualRateUpdated, reputationAccrualRateUpdated),
    },
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler: wrapHandler(
        map.EthereumBroadcaster?.ThresholdSignatureInvalid,
        ethereumBroadcasterThresholdSignatureInvalid,
      ),
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRecorded',
      handler: wrapHandler(
        map.EthereumBroadcaster?.TransactionFeeDeficitRecorded,
        ethereumBroadcasterTransactionFeeDeficitRecorded,
      ),
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRefused',
      handler: wrapHandler(
        map.EthereumBroadcaster?.TransactionFeeDeficitRefused,
        ethereumBroadcasterTransactionFeeDeficitRefused,
      ),
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler: wrapHandler(
        map.PolkadotBroadcaster?.ThresholdSignatureInvalid,
        polkadotBroadcasterThresholdSignatureInvalid,
      ),
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRecorded',
      handler: wrapHandler(
        map.PolkadotBroadcaster?.TransactionFeeDeficitRecorded,
        polkadotBroadcasterTransactionFeeDeficitRecorded,
      ),
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRefused',
      handler: wrapHandler(
        map.PolkadotBroadcaster?.TransactionFeeDeficitRefused,
        polkadotBroadcasterTransactionFeeDeficitRefused,
      ),
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler: wrapHandler(
        map.BitcoinBroadcaster?.ThresholdSignatureInvalid,
        bitcoinBroadcasterThresholdSignatureInvalid,
      ),
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRecorded',
      handler: wrapHandler(
        map.BitcoinBroadcaster?.TransactionFeeDeficitRecorded,
        bitcoinBroadcasterTransactionFeeDeficitRecorded,
      ),
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRefused',
      handler: wrapHandler(
        map.BitcoinBroadcaster?.TransactionFeeDeficitRefused,
        bitcoinBroadcasterTransactionFeeDeficitRefused,
      ),
    },
    {
      name: 'Swapping.SwapDepositAddressReady',
      handler: wrapHandler(map.Swapping?.SwapDepositAddressReady, swappingSwapDepositAddressReady),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler: wrapHandler(
        map.LiquidityProvider?.LiquidityDepositAddressReady,
        liquidityProviderLiquidityDepositAddressReady,
      ),
    },
    {
      name: 'EthereumIngressEgress.DepositWitnessRejected',
      handler: wrapHandler(
        map.EthereumIngressEgress?.DepositWitnessRejected,
        ethereumIngressEgressDepositWitnessRejected,
      ),
    },
    {
      name: 'PolkadotIngressEgress.DepositWitnessRejected',
      handler: wrapHandler(
        map.PolkadotIngressEgress?.DepositWitnessRejected,
        polkadotIngressEgressDepositWitnessRejected,
      ),
    },
    {
      name: 'BitcoinIngressEgress.DepositWitnessRejected',
      handler: wrapHandler(
        map.BitcoinIngressEgress?.DepositWitnessRejected,
        bitcoinIngressEgressDepositWitnessRejected,
      ),
    },
    {
      name: 'LiquidityPools.RangeOrderUpdated',
      handler: wrapHandler(map.LiquidityPools?.RangeOrderUpdated, liquidityPoolsRangeOrderUpdated),
    },
    {
      name: 'LiquidityPools.LimitOrderUpdated',
      handler: wrapHandler(map.LiquidityPools?.LimitOrderUpdated, liquidityPoolsLimitOrderUpdated),
    },
    {
      name: 'LiquidityPools.PoolFeeSet',
      handler: wrapHandler(map.LiquidityPools?.PoolFeeSet, liquidityPoolsPoolFeeSet),
    },
  ].filter((h): h is { name: string; handler: InternalEventHandler } => h.handler !== undefined),
});
