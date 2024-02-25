import { z } from 'zod';
import { ethereumBroadcasterThresholdSignatureInvalid } from './ethereumBroadcaster/thresholdSignatureInvalid';
import { ethereumBroadcasterCallResigned } from './ethereumBroadcaster/callResigned';
import { polkadotBroadcasterThresholdSignatureInvalid } from './polkadotBroadcaster/thresholdSignatureInvalid';
import { polkadotBroadcasterCallResigned } from './polkadotBroadcaster/callResigned';
import { bitcoinBroadcasterThresholdSignatureInvalid } from './bitcoinBroadcaster/thresholdSignatureInvalid';
import { bitcoinBroadcasterCallResigned } from './bitcoinBroadcaster/callResigned';
import { ethereumIngressEgressTransferFallbackRequested } from './ethereumIngressEgress/transferFallbackRequested';
import { ethereumIngressEgressCcmBroadcastFailed } from './ethereumIngressEgress/ccmBroadcastFailed';
import { ethereumIngressEgressFailedForeignChainCallResigned } from './ethereumIngressEgress/failedForeignChainCallResigned';
import { ethereumIngressEgressFailedForeignChainCallExpired } from './ethereumIngressEgress/failedForeignChainCallExpired';
import { polkadotIngressEgressTransferFallbackRequested } from './polkadotIngressEgress/transferFallbackRequested';
import { polkadotIngressEgressCcmBroadcastFailed } from './polkadotIngressEgress/ccmBroadcastFailed';
import { polkadotIngressEgressFailedForeignChainCallResigned } from './polkadotIngressEgress/failedForeignChainCallResigned';
import { polkadotIngressEgressFailedForeignChainCallExpired } from './polkadotIngressEgress/failedForeignChainCallExpired';
import { bitcoinIngressEgressTransferFallbackRequested } from './bitcoinIngressEgress/transferFallbackRequested';
import { bitcoinIngressEgressCcmBroadcastFailed } from './bitcoinIngressEgress/ccmBroadcastFailed';
import { bitcoinIngressEgressFailedForeignChainCallResigned } from './bitcoinIngressEgress/failedForeignChainCallResigned';
import { bitcoinIngressEgressFailedForeignChainCallExpired } from './bitcoinIngressEgress/failedForeignChainCallExpired';
import { liquidityPoolsNewPoolCreated } from './liquidityPools/newPoolCreated';
import { liquidityPoolsRangeOrderUpdated } from './liquidityPools/rangeOrderUpdated';
import { liquidityPoolsLimitOrderUpdated } from './liquidityPools/limitOrderUpdated';
import { liquidityPoolsPoolFeeSet } from './liquidityPools/poolFeeSet';
import { liquidityPoolsScheduledLimitOrderUpdateDispatchSuccess } from './liquidityPools/scheduledLimitOrderUpdateDispatchSuccess';
import { liquidityPoolsScheduledLimitOrderUpdateDispatchFailure } from './liquidityPools/scheduledLimitOrderUpdateDispatchFailure';
import { liquidityPoolsLimitOrderSetOrUpdateScheduled } from './liquidityPools/limitOrderSetOrUpdateScheduled';

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

export type EthereumBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof ethereumBroadcasterThresholdSignatureInvalid>
>;
export type EthereumBroadcasterCallResigned = EventHandler<
  z.output<typeof ethereumBroadcasterCallResigned>
>;
export type PolkadotBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof polkadotBroadcasterThresholdSignatureInvalid>
>;
export type PolkadotBroadcasterCallResigned = EventHandler<
  z.output<typeof polkadotBroadcasterCallResigned>
>;
export type BitcoinBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof bitcoinBroadcasterThresholdSignatureInvalid>
>;
export type BitcoinBroadcasterCallResigned = EventHandler<
  z.output<typeof bitcoinBroadcasterCallResigned>
>;
export type EthereumIngressEgressTransferFallbackRequested = EventHandler<
  z.output<typeof ethereumIngressEgressTransferFallbackRequested>
>;
export type EthereumIngressEgressCcmBroadcastFailed = EventHandler<
  z.output<typeof ethereumIngressEgressCcmBroadcastFailed>
>;
export type EthereumIngressEgressFailedForeignChainCallResigned = EventHandler<
  z.output<typeof ethereumIngressEgressFailedForeignChainCallResigned>
>;
export type EthereumIngressEgressFailedForeignChainCallExpired = EventHandler<
  z.output<typeof ethereumIngressEgressFailedForeignChainCallExpired>
>;
export type PolkadotIngressEgressTransferFallbackRequested = EventHandler<
  z.output<typeof polkadotIngressEgressTransferFallbackRequested>
>;
export type PolkadotIngressEgressCcmBroadcastFailed = EventHandler<
  z.output<typeof polkadotIngressEgressCcmBroadcastFailed>
>;
export type PolkadotIngressEgressFailedForeignChainCallResigned = EventHandler<
  z.output<typeof polkadotIngressEgressFailedForeignChainCallResigned>
>;
export type PolkadotIngressEgressFailedForeignChainCallExpired = EventHandler<
  z.output<typeof polkadotIngressEgressFailedForeignChainCallExpired>
>;
export type BitcoinIngressEgressTransferFallbackRequested = EventHandler<
  z.output<typeof bitcoinIngressEgressTransferFallbackRequested>
>;
export type BitcoinIngressEgressCcmBroadcastFailed = EventHandler<
  z.output<typeof bitcoinIngressEgressCcmBroadcastFailed>
>;
export type BitcoinIngressEgressFailedForeignChainCallResigned = EventHandler<
  z.output<typeof bitcoinIngressEgressFailedForeignChainCallResigned>
>;
export type BitcoinIngressEgressFailedForeignChainCallExpired = EventHandler<
  z.output<typeof bitcoinIngressEgressFailedForeignChainCallExpired>
>;
export type LiquidityPoolsNewPoolCreated = EventHandler<
  z.output<typeof liquidityPoolsNewPoolCreated>
>;
export type LiquidityPoolsRangeOrderUpdated = EventHandler<
  z.output<typeof liquidityPoolsRangeOrderUpdated>
>;
export type LiquidityPoolsLimitOrderUpdated = EventHandler<
  z.output<typeof liquidityPoolsLimitOrderUpdated>
>;
export type LiquidityPoolsPoolFeeSet = EventHandler<z.output<typeof liquidityPoolsPoolFeeSet>>;
export type LiquidityPoolsScheduledLimitOrderUpdateDispatchSuccess = EventHandler<
  z.output<typeof liquidityPoolsScheduledLimitOrderUpdateDispatchSuccess>
>;
export type LiquidityPoolsScheduledLimitOrderUpdateDispatchFailure = EventHandler<
  z.output<typeof liquidityPoolsScheduledLimitOrderUpdateDispatchFailure>
>;
export type LiquidityPoolsLimitOrderSetOrUpdateScheduled = EventHandler<
  z.output<typeof liquidityPoolsLimitOrderSetOrUpdateScheduled>
>;

type HandlerMap = {
  EthereumBroadcaster?: {
    ThresholdSignatureInvalid?: EthereumBroadcasterThresholdSignatureInvalid;
    CallResigned?: EthereumBroadcasterCallResigned;
  };
  PolkadotBroadcaster?: {
    ThresholdSignatureInvalid?: PolkadotBroadcasterThresholdSignatureInvalid;
    CallResigned?: PolkadotBroadcasterCallResigned;
  };
  BitcoinBroadcaster?: {
    ThresholdSignatureInvalid?: BitcoinBroadcasterThresholdSignatureInvalid;
    CallResigned?: BitcoinBroadcasterCallResigned;
  };
  EthereumIngressEgress?: {
    TransferFallbackRequested?: EthereumIngressEgressTransferFallbackRequested;
    CcmBroadcastFailed?: EthereumIngressEgressCcmBroadcastFailed;
    FailedForeignChainCallResigned?: EthereumIngressEgressFailedForeignChainCallResigned;
    FailedForeignChainCallExpired?: EthereumIngressEgressFailedForeignChainCallExpired;
  };
  PolkadotIngressEgress?: {
    TransferFallbackRequested?: PolkadotIngressEgressTransferFallbackRequested;
    CcmBroadcastFailed?: PolkadotIngressEgressCcmBroadcastFailed;
    FailedForeignChainCallResigned?: PolkadotIngressEgressFailedForeignChainCallResigned;
    FailedForeignChainCallExpired?: PolkadotIngressEgressFailedForeignChainCallExpired;
  };
  BitcoinIngressEgress?: {
    TransferFallbackRequested?: BitcoinIngressEgressTransferFallbackRequested;
    CcmBroadcastFailed?: BitcoinIngressEgressCcmBroadcastFailed;
    FailedForeignChainCallResigned?: BitcoinIngressEgressFailedForeignChainCallResigned;
    FailedForeignChainCallExpired?: BitcoinIngressEgressFailedForeignChainCallExpired;
  };
  LiquidityPools?: {
    NewPoolCreated?: LiquidityPoolsNewPoolCreated;
    RangeOrderUpdated?: LiquidityPoolsRangeOrderUpdated;
    LimitOrderUpdated?: LiquidityPoolsLimitOrderUpdated;
    PoolFeeSet?: LiquidityPoolsPoolFeeSet;
    ScheduledLimitOrderUpdateDispatchSuccess?: LiquidityPoolsScheduledLimitOrderUpdateDispatchSuccess;
    ScheduledLimitOrderUpdateDispatchFailure?: LiquidityPoolsScheduledLimitOrderUpdateDispatchFailure;
    LimitOrderSetOrUpdateScheduled?: LiquidityPoolsLimitOrderSetOrUpdateScheduled;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 110,
  handlers: [
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
      name: 'EthereumBroadcaster.CallResigned',
      handler:
        map.EthereumBroadcaster?.CallResigned &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.CallResigned!({
            ...rest,
            event,
            args: ethereumBroadcasterCallResigned.parse(event.args),
          })) as EthereumBroadcasterCallResigned),
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
      name: 'PolkadotBroadcaster.CallResigned',
      handler:
        map.PolkadotBroadcaster?.CallResigned &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.CallResigned!({
            ...rest,
            event,
            args: polkadotBroadcasterCallResigned.parse(event.args),
          })) as PolkadotBroadcasterCallResigned),
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
      name: 'BitcoinBroadcaster.CallResigned',
      handler:
        map.BitcoinBroadcaster?.CallResigned &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.CallResigned!({
            ...rest,
            event,
            args: bitcoinBroadcasterCallResigned.parse(event.args),
          })) as BitcoinBroadcasterCallResigned),
    },
    {
      name: 'EthereumIngressEgress.TransferFallbackRequested',
      handler:
        map.EthereumIngressEgress?.TransferFallbackRequested &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.TransferFallbackRequested!({
            ...rest,
            event,
            args: ethereumIngressEgressTransferFallbackRequested.parse(event.args),
          })) as EthereumIngressEgressTransferFallbackRequested),
    },
    {
      name: 'EthereumIngressEgress.CcmBroadcastFailed',
      handler:
        map.EthereumIngressEgress?.CcmBroadcastFailed &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.CcmBroadcastFailed!({
            ...rest,
            event,
            args: ethereumIngressEgressCcmBroadcastFailed.parse(event.args),
          })) as EthereumIngressEgressCcmBroadcastFailed),
    },
    {
      name: 'EthereumIngressEgress.FailedForeignChainCallResigned',
      handler:
        map.EthereumIngressEgress?.FailedForeignChainCallResigned &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.FailedForeignChainCallResigned!({
            ...rest,
            event,
            args: ethereumIngressEgressFailedForeignChainCallResigned.parse(event.args),
          })) as EthereumIngressEgressFailedForeignChainCallResigned),
    },
    {
      name: 'EthereumIngressEgress.FailedForeignChainCallExpired',
      handler:
        map.EthereumIngressEgress?.FailedForeignChainCallExpired &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.FailedForeignChainCallExpired!({
            ...rest,
            event,
            args: ethereumIngressEgressFailedForeignChainCallExpired.parse(event.args),
          })) as EthereumIngressEgressFailedForeignChainCallExpired),
    },
    {
      name: 'PolkadotIngressEgress.TransferFallbackRequested',
      handler:
        map.PolkadotIngressEgress?.TransferFallbackRequested &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.TransferFallbackRequested!({
            ...rest,
            event,
            args: polkadotIngressEgressTransferFallbackRequested.parse(event.args),
          })) as PolkadotIngressEgressTransferFallbackRequested),
    },
    {
      name: 'PolkadotIngressEgress.CcmBroadcastFailed',
      handler:
        map.PolkadotIngressEgress?.CcmBroadcastFailed &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.CcmBroadcastFailed!({
            ...rest,
            event,
            args: polkadotIngressEgressCcmBroadcastFailed.parse(event.args),
          })) as PolkadotIngressEgressCcmBroadcastFailed),
    },
    {
      name: 'PolkadotIngressEgress.FailedForeignChainCallResigned',
      handler:
        map.PolkadotIngressEgress?.FailedForeignChainCallResigned &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.FailedForeignChainCallResigned!({
            ...rest,
            event,
            args: polkadotIngressEgressFailedForeignChainCallResigned.parse(event.args),
          })) as PolkadotIngressEgressFailedForeignChainCallResigned),
    },
    {
      name: 'PolkadotIngressEgress.FailedForeignChainCallExpired',
      handler:
        map.PolkadotIngressEgress?.FailedForeignChainCallExpired &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.FailedForeignChainCallExpired!({
            ...rest,
            event,
            args: polkadotIngressEgressFailedForeignChainCallExpired.parse(event.args),
          })) as PolkadotIngressEgressFailedForeignChainCallExpired),
    },
    {
      name: 'BitcoinIngressEgress.TransferFallbackRequested',
      handler:
        map.BitcoinIngressEgress?.TransferFallbackRequested &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.TransferFallbackRequested!({
            ...rest,
            event,
            args: bitcoinIngressEgressTransferFallbackRequested.parse(event.args),
          })) as BitcoinIngressEgressTransferFallbackRequested),
    },
    {
      name: 'BitcoinIngressEgress.CcmBroadcastFailed',
      handler:
        map.BitcoinIngressEgress?.CcmBroadcastFailed &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.CcmBroadcastFailed!({
            ...rest,
            event,
            args: bitcoinIngressEgressCcmBroadcastFailed.parse(event.args),
          })) as BitcoinIngressEgressCcmBroadcastFailed),
    },
    {
      name: 'BitcoinIngressEgress.FailedForeignChainCallResigned',
      handler:
        map.BitcoinIngressEgress?.FailedForeignChainCallResigned &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.FailedForeignChainCallResigned!({
            ...rest,
            event,
            args: bitcoinIngressEgressFailedForeignChainCallResigned.parse(event.args),
          })) as BitcoinIngressEgressFailedForeignChainCallResigned),
    },
    {
      name: 'BitcoinIngressEgress.FailedForeignChainCallExpired',
      handler:
        map.BitcoinIngressEgress?.FailedForeignChainCallExpired &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.FailedForeignChainCallExpired!({
            ...rest,
            event,
            args: bitcoinIngressEgressFailedForeignChainCallExpired.parse(event.args),
          })) as BitcoinIngressEgressFailedForeignChainCallExpired),
    },
    {
      name: 'LiquidityPools.NewPoolCreated',
      handler:
        map.LiquidityPools?.NewPoolCreated &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.NewPoolCreated!({
            ...rest,
            event,
            args: liquidityPoolsNewPoolCreated.parse(event.args),
          })) as LiquidityPoolsNewPoolCreated),
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
    {
      name: 'LiquidityPools.ScheduledLimitOrderUpdateDispatchSuccess',
      handler:
        map.LiquidityPools?.ScheduledLimitOrderUpdateDispatchSuccess &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.ScheduledLimitOrderUpdateDispatchSuccess!({
            ...rest,
            event,
            args: liquidityPoolsScheduledLimitOrderUpdateDispatchSuccess.parse(event.args),
          })) as LiquidityPoolsScheduledLimitOrderUpdateDispatchSuccess),
    },
    {
      name: 'LiquidityPools.ScheduledLimitOrderUpdateDispatchFailure',
      handler:
        map.LiquidityPools?.ScheduledLimitOrderUpdateDispatchFailure &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.ScheduledLimitOrderUpdateDispatchFailure!({
            ...rest,
            event,
            args: liquidityPoolsScheduledLimitOrderUpdateDispatchFailure.parse(event.args),
          })) as LiquidityPoolsScheduledLimitOrderUpdateDispatchFailure),
    },
    {
      name: 'LiquidityPools.LimitOrderSetOrUpdateScheduled',
      handler:
        map.LiquidityPools?.LimitOrderSetOrUpdateScheduled &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.LimitOrderSetOrUpdateScheduled!({
            ...rest,
            event,
            args: liquidityPoolsLimitOrderSetOrUpdateScheduled.parse(event.args),
          })) as LiquidityPoolsLimitOrderSetOrUpdateScheduled),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
