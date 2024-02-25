import { z } from 'zod';
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

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

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
      handler:
        map.Environment?.RuntimeSafeModeUpdated &&
        ((async ({ event, ...rest }) =>
          map.Environment!.RuntimeSafeModeUpdated!({
            ...rest,
            event,
            args: environmentRuntimeSafeModeUpdated.parse(event.args),
          })) as EnvironmentRuntimeSafeModeUpdated),
    },
    {
      name: 'Witnesser.Prewitnessed',
      handler:
        map.Witnesser?.Prewitnessed &&
        ((async ({ event, ...rest }) =>
          map.Witnesser!.Prewitnessed!({
            ...rest,
            event,
            args: witnesserPrewitnessed.parse(event.args),
          })) as WitnesserPrewitnessed),
    },
    {
      name: 'Reputation.AccrualRateUpdated',
      handler:
        map.Reputation?.AccrualRateUpdated &&
        ((async ({ event, ...rest }) =>
          map.Reputation!.AccrualRateUpdated!({
            ...rest,
            event,
            args: reputationAccrualRateUpdated.parse(event.args),
          })) as ReputationAccrualRateUpdated),
    },
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler:
        map.EthereumBroadcaster?.ThresholdSignatureInvalid &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.ThresholdSignatureInvalid!({
            ...rest,
            event,
            args: ethereumBroadcasterThresholdSignatureInvalid.parse(event.args),
          })) as EthereumBroadcasterThresholdSignatureInvalid),
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRecorded',
      handler:
        map.EthereumBroadcaster?.TransactionFeeDeficitRecorded &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.TransactionFeeDeficitRecorded!({
            ...rest,
            event,
            args: ethereumBroadcasterTransactionFeeDeficitRecorded.parse(event.args),
          })) as EthereumBroadcasterTransactionFeeDeficitRecorded),
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRefused',
      handler:
        map.EthereumBroadcaster?.TransactionFeeDeficitRefused &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.TransactionFeeDeficitRefused!({
            ...rest,
            event,
            args: ethereumBroadcasterTransactionFeeDeficitRefused.parse(event.args),
          })) as EthereumBroadcasterTransactionFeeDeficitRefused),
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler:
        map.PolkadotBroadcaster?.ThresholdSignatureInvalid &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.ThresholdSignatureInvalid!({
            ...rest,
            event,
            args: polkadotBroadcasterThresholdSignatureInvalid.parse(event.args),
          })) as PolkadotBroadcasterThresholdSignatureInvalid),
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRecorded',
      handler:
        map.PolkadotBroadcaster?.TransactionFeeDeficitRecorded &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.TransactionFeeDeficitRecorded!({
            ...rest,
            event,
            args: polkadotBroadcasterTransactionFeeDeficitRecorded.parse(event.args),
          })) as PolkadotBroadcasterTransactionFeeDeficitRecorded),
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRefused',
      handler:
        map.PolkadotBroadcaster?.TransactionFeeDeficitRefused &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.TransactionFeeDeficitRefused!({
            ...rest,
            event,
            args: polkadotBroadcasterTransactionFeeDeficitRefused.parse(event.args),
          })) as PolkadotBroadcasterTransactionFeeDeficitRefused),
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler:
        map.BitcoinBroadcaster?.ThresholdSignatureInvalid &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.ThresholdSignatureInvalid!({
            ...rest,
            event,
            args: bitcoinBroadcasterThresholdSignatureInvalid.parse(event.args),
          })) as BitcoinBroadcasterThresholdSignatureInvalid),
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRecorded',
      handler:
        map.BitcoinBroadcaster?.TransactionFeeDeficitRecorded &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.TransactionFeeDeficitRecorded!({
            ...rest,
            event,
            args: bitcoinBroadcasterTransactionFeeDeficitRecorded.parse(event.args),
          })) as BitcoinBroadcasterTransactionFeeDeficitRecorded),
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRefused',
      handler:
        map.BitcoinBroadcaster?.TransactionFeeDeficitRefused &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.TransactionFeeDeficitRefused!({
            ...rest,
            event,
            args: bitcoinBroadcasterTransactionFeeDeficitRefused.parse(event.args),
          })) as BitcoinBroadcasterTransactionFeeDeficitRefused),
    },
    {
      name: 'Swapping.SwapDepositAddressReady',
      handler:
        map.Swapping?.SwapDepositAddressReady &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapDepositAddressReady!({
            ...rest,
            event,
            args: swappingSwapDepositAddressReady.parse(event.args),
          })) as SwappingSwapDepositAddressReady),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler:
        map.LiquidityProvider?.LiquidityDepositAddressReady &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityDepositAddressReady!({
            ...rest,
            event,
            args: liquidityProviderLiquidityDepositAddressReady.parse(event.args),
          })) as LiquidityProviderLiquidityDepositAddressReady),
    },
    {
      name: 'EthereumIngressEgress.DepositWitnessRejected',
      handler:
        map.EthereumIngressEgress?.DepositWitnessRejected &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.DepositWitnessRejected!({
            ...rest,
            event,
            args: ethereumIngressEgressDepositWitnessRejected.parse(event.args),
          })) as EthereumIngressEgressDepositWitnessRejected),
    },
    {
      name: 'PolkadotIngressEgress.DepositWitnessRejected',
      handler:
        map.PolkadotIngressEgress?.DepositWitnessRejected &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.DepositWitnessRejected!({
            ...rest,
            event,
            args: polkadotIngressEgressDepositWitnessRejected.parse(event.args),
          })) as PolkadotIngressEgressDepositWitnessRejected),
    },
    {
      name: 'BitcoinIngressEgress.DepositWitnessRejected',
      handler:
        map.BitcoinIngressEgress?.DepositWitnessRejected &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.DepositWitnessRejected!({
            ...rest,
            event,
            args: bitcoinIngressEgressDepositWitnessRejected.parse(event.args),
          })) as BitcoinIngressEgressDepositWitnessRejected),
    },
    {
      name: 'LiquidityPools.RangeOrderUpdated',
      handler:
        map.LiquidityPools?.RangeOrderUpdated &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.RangeOrderUpdated!({
            ...rest,
            event,
            args: liquidityPoolsRangeOrderUpdated.parse(event.args),
          })) as LiquidityPoolsRangeOrderUpdated),
    },
    {
      name: 'LiquidityPools.LimitOrderUpdated',
      handler:
        map.LiquidityPools?.LimitOrderUpdated &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.LimitOrderUpdated!({
            ...rest,
            event,
            args: liquidityPoolsLimitOrderUpdated.parse(event.args),
          })) as LiquidityPoolsLimitOrderUpdated),
    },
    {
      name: 'LiquidityPools.PoolFeeSet',
      handler:
        map.LiquidityPools?.PoolFeeSet &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.PoolFeeSet!({
            ...rest,
            event,
            args: liquidityPoolsPoolFeeSet.parse(event.args),
          })) as LiquidityPoolsPoolFeeSet),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
