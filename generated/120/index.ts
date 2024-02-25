import { z } from 'zod';
import { environmentUtxoConsolidationParametersUpdated } from './environment/utxoConsolidationParametersUpdated';
import { emissionsBackupRewardsDistributed } from './emissions/backupRewardsDistributed';
import { emissionsNetworkFeeBurned } from './emissions/networkFeeBurned';
import { emissionsFlipBurnSkipped } from './emissions/flipBurnSkipped';
import { bitcoinChainTrackingChainStateUpdated } from './bitcoinChainTracking/chainStateUpdated';
import { ethereumBroadcasterTransactionBroadcastRequest } from './ethereumBroadcaster/transactionBroadcastRequest';
import { ethereumBroadcasterBroadcastRetryScheduled } from './ethereumBroadcaster/broadcastRetryScheduled';
import { ethereumBroadcasterBroadcastTimeout } from './ethereumBroadcaster/broadcastTimeout';
import { ethereumBroadcasterThresholdSignatureInvalid } from './ethereumBroadcaster/thresholdSignatureInvalid';
import { polkadotBroadcasterTransactionBroadcastRequest } from './polkadotBroadcaster/transactionBroadcastRequest';
import { polkadotBroadcasterBroadcastRetryScheduled } from './polkadotBroadcaster/broadcastRetryScheduled';
import { polkadotBroadcasterBroadcastTimeout } from './polkadotBroadcaster/broadcastTimeout';
import { polkadotBroadcasterThresholdSignatureInvalid } from './polkadotBroadcaster/thresholdSignatureInvalid';
import { bitcoinBroadcasterTransactionBroadcastRequest } from './bitcoinBroadcaster/transactionBroadcastRequest';
import { bitcoinBroadcasterBroadcastRetryScheduled } from './bitcoinBroadcaster/broadcastRetryScheduled';
import { bitcoinBroadcasterBroadcastTimeout } from './bitcoinBroadcaster/broadcastTimeout';
import { bitcoinBroadcasterThresholdSignatureInvalid } from './bitcoinBroadcaster/thresholdSignatureInvalid';
import { swappingSwapExecuted } from './swapping/swapExecuted';
import { swappingSwapEgressScheduled } from './swapping/swapEgressScheduled';
import { swappingWithdrawalRequested } from './swapping/withdrawalRequested';
import { swappingCcmFailed } from './swapping/ccmFailed';
import { swappingSwapEgressIgnored } from './swapping/swapEgressIgnored';
import { liquidityProviderWithdrawalEgressScheduled } from './liquidityProvider/withdrawalEgressScheduled';
import { liquidityProviderLiquidityDepositCredited } from './liquidityProvider/liquidityDepositCredited';
import { ethereumIngressEgressDepositReceived } from './ethereumIngressEgress/depositReceived';
import { ethereumIngressEgressDepositIgnored } from './ethereumIngressEgress/depositIgnored';
import { ethereumIngressEgressUtxoConsolidation } from './ethereumIngressEgress/utxoConsolidation';
import { polkadotIngressEgressDepositReceived } from './polkadotIngressEgress/depositReceived';
import { polkadotIngressEgressDepositIgnored } from './polkadotIngressEgress/depositIgnored';
import { polkadotIngressEgressUtxoConsolidation } from './polkadotIngressEgress/utxoConsolidation';
import { bitcoinIngressEgressDepositReceived } from './bitcoinIngressEgress/depositReceived';
import { bitcoinIngressEgressDepositIgnored } from './bitcoinIngressEgress/depositIgnored';
import { bitcoinIngressEgressUtxoConsolidation } from './bitcoinIngressEgress/utxoConsolidation';

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

export type EnvironmentUtxoConsolidationParametersUpdated = EventHandler<
  z.output<typeof environmentUtxoConsolidationParametersUpdated>
>;
export type EmissionsBackupRewardsDistributed = EventHandler<
  z.output<typeof emissionsBackupRewardsDistributed>
>;
export type EmissionsNetworkFeeBurned = EventHandler<z.output<typeof emissionsNetworkFeeBurned>>;
export type EmissionsFlipBurnSkipped = EventHandler<z.output<typeof emissionsFlipBurnSkipped>>;
export type BitcoinChainTrackingChainStateUpdated = EventHandler<
  z.output<typeof bitcoinChainTrackingChainStateUpdated>
>;
export type EthereumBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof ethereumBroadcasterTransactionBroadcastRequest>
>;
export type EthereumBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastRetryScheduled>
>;
export type EthereumBroadcasterBroadcastTimeout = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastTimeout>
>;
export type EthereumBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof ethereumBroadcasterThresholdSignatureInvalid>
>;
export type PolkadotBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof polkadotBroadcasterTransactionBroadcastRequest>
>;
export type PolkadotBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastRetryScheduled>
>;
export type PolkadotBroadcasterBroadcastTimeout = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastTimeout>
>;
export type PolkadotBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof polkadotBroadcasterThresholdSignatureInvalid>
>;
export type BitcoinBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof bitcoinBroadcasterTransactionBroadcastRequest>
>;
export type BitcoinBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastRetryScheduled>
>;
export type BitcoinBroadcasterBroadcastTimeout = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastTimeout>
>;
export type BitcoinBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof bitcoinBroadcasterThresholdSignatureInvalid>
>;
export type SwappingSwapExecuted = EventHandler<z.output<typeof swappingSwapExecuted>>;
export type SwappingSwapEgressScheduled = EventHandler<
  z.output<typeof swappingSwapEgressScheduled>
>;
export type SwappingWithdrawalRequested = EventHandler<
  z.output<typeof swappingWithdrawalRequested>
>;
export type SwappingCcmFailed = EventHandler<z.output<typeof swappingCcmFailed>>;
export type SwappingSwapEgressIgnored = EventHandler<z.output<typeof swappingSwapEgressIgnored>>;
export type LiquidityProviderWithdrawalEgressScheduled = EventHandler<
  z.output<typeof liquidityProviderWithdrawalEgressScheduled>
>;
export type LiquidityProviderLiquidityDepositCredited = EventHandler<
  z.output<typeof liquidityProviderLiquidityDepositCredited>
>;
export type EthereumIngressEgressDepositReceived = EventHandler<
  z.output<typeof ethereumIngressEgressDepositReceived>
>;
export type EthereumIngressEgressDepositIgnored = EventHandler<
  z.output<typeof ethereumIngressEgressDepositIgnored>
>;
export type EthereumIngressEgressUtxoConsolidation = EventHandler<
  z.output<typeof ethereumIngressEgressUtxoConsolidation>
>;
export type PolkadotIngressEgressDepositReceived = EventHandler<
  z.output<typeof polkadotIngressEgressDepositReceived>
>;
export type PolkadotIngressEgressDepositIgnored = EventHandler<
  z.output<typeof polkadotIngressEgressDepositIgnored>
>;
export type PolkadotIngressEgressUtxoConsolidation = EventHandler<
  z.output<typeof polkadotIngressEgressUtxoConsolidation>
>;
export type BitcoinIngressEgressDepositReceived = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositReceived>
>;
export type BitcoinIngressEgressDepositIgnored = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositIgnored>
>;
export type BitcoinIngressEgressUtxoConsolidation = EventHandler<
  z.output<typeof bitcoinIngressEgressUtxoConsolidation>
>;

type HandlerMap = {
  Environment?: {
    UtxoConsolidationParametersUpdated?: EnvironmentUtxoConsolidationParametersUpdated;
  };
  Emissions?: {
    BackupRewardsDistributed?: EmissionsBackupRewardsDistributed;
    NetworkFeeBurned?: EmissionsNetworkFeeBurned;
    FlipBurnSkipped?: EmissionsFlipBurnSkipped;
  };
  BitcoinChainTracking?: {
    ChainStateUpdated?: BitcoinChainTrackingChainStateUpdated;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EthereumBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: EthereumBroadcasterBroadcastRetryScheduled;
    BroadcastTimeout?: EthereumBroadcasterBroadcastTimeout;
    ThresholdSignatureInvalid?: EthereumBroadcasterThresholdSignatureInvalid;
  };
  PolkadotBroadcaster?: {
    TransactionBroadcastRequest?: PolkadotBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: PolkadotBroadcasterBroadcastRetryScheduled;
    BroadcastTimeout?: PolkadotBroadcasterBroadcastTimeout;
    ThresholdSignatureInvalid?: PolkadotBroadcasterThresholdSignatureInvalid;
  };
  BitcoinBroadcaster?: {
    TransactionBroadcastRequest?: BitcoinBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: BitcoinBroadcasterBroadcastRetryScheduled;
    BroadcastTimeout?: BitcoinBroadcasterBroadcastTimeout;
    ThresholdSignatureInvalid?: BitcoinBroadcasterThresholdSignatureInvalid;
  };
  Swapping?: {
    SwapExecuted?: SwappingSwapExecuted;
    SwapEgressScheduled?: SwappingSwapEgressScheduled;
    WithdrawalRequested?: SwappingWithdrawalRequested;
    CcmFailed?: SwappingCcmFailed;
    SwapEgressIgnored?: SwappingSwapEgressIgnored;
  };
  LiquidityProvider?: {
    WithdrawalEgressScheduled?: LiquidityProviderWithdrawalEgressScheduled;
    LiquidityDepositCredited?: LiquidityProviderLiquidityDepositCredited;
  };
  EthereumIngressEgress?: {
    DepositReceived?: EthereumIngressEgressDepositReceived;
    DepositIgnored?: EthereumIngressEgressDepositIgnored;
    UtxoConsolidation?: EthereumIngressEgressUtxoConsolidation;
  };
  PolkadotIngressEgress?: {
    DepositReceived?: PolkadotIngressEgressDepositReceived;
    DepositIgnored?: PolkadotIngressEgressDepositIgnored;
    UtxoConsolidation?: PolkadotIngressEgressUtxoConsolidation;
  };
  BitcoinIngressEgress?: {
    DepositReceived?: BitcoinIngressEgressDepositReceived;
    DepositIgnored?: BitcoinIngressEgressDepositIgnored;
    UtxoConsolidation?: BitcoinIngressEgressUtxoConsolidation;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 120,
  handlers: [
    {
      name: 'Environment.UtxoConsolidationParametersUpdated',
      handler:
        map.Environment?.UtxoConsolidationParametersUpdated &&
        ((async ({ event, ...rest }) =>
          map.Environment!.UtxoConsolidationParametersUpdated!({
            ...rest,
            event,
            args: environmentUtxoConsolidationParametersUpdated.parse(event.args),
          })) as EnvironmentUtxoConsolidationParametersUpdated),
    },
    {
      name: 'Emissions.BackupRewardsDistributed',
      handler:
        map.Emissions?.BackupRewardsDistributed &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.BackupRewardsDistributed!({
            ...rest,
            event,
            args: emissionsBackupRewardsDistributed.parse(event.args),
          })) as EmissionsBackupRewardsDistributed),
    },
    {
      name: 'Emissions.NetworkFeeBurned',
      handler:
        map.Emissions?.NetworkFeeBurned &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.NetworkFeeBurned!({
            ...rest,
            event,
            args: emissionsNetworkFeeBurned.parse(event.args),
          })) as EmissionsNetworkFeeBurned),
    },
    {
      name: 'Emissions.FlipBurnSkipped',
      handler:
        map.Emissions?.FlipBurnSkipped &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.FlipBurnSkipped!({
            ...rest,
            event,
            args: emissionsFlipBurnSkipped.parse(event.args),
          })) as EmissionsFlipBurnSkipped),
    },
    {
      name: 'BitcoinChainTracking.ChainStateUpdated',
      handler:
        map.BitcoinChainTracking?.ChainStateUpdated &&
        ((async ({ event, ...rest }) =>
          map.BitcoinChainTracking!.ChainStateUpdated!({
            ...rest,
            event,
            args: bitcoinChainTrackingChainStateUpdated.parse(event.args),
          })) as BitcoinChainTrackingChainStateUpdated),
    },
    {
      name: 'EthereumBroadcaster.TransactionBroadcastRequest',
      handler:
        map.EthereumBroadcaster?.TransactionBroadcastRequest &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.TransactionBroadcastRequest!({
            ...rest,
            event,
            args: ethereumBroadcasterTransactionBroadcastRequest.parse(event.args),
          })) as EthereumBroadcasterTransactionBroadcastRequest),
    },
    {
      name: 'EthereumBroadcaster.BroadcastRetryScheduled',
      handler:
        map.EthereumBroadcaster?.BroadcastRetryScheduled &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastRetryScheduled!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastRetryScheduled.parse(event.args),
          })) as EthereumBroadcasterBroadcastRetryScheduled),
    },
    {
      name: 'EthereumBroadcaster.BroadcastTimeout',
      handler:
        map.EthereumBroadcaster?.BroadcastTimeout &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastTimeout!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastTimeout.parse(event.args),
          })) as EthereumBroadcasterBroadcastTimeout),
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
      name: 'PolkadotBroadcaster.TransactionBroadcastRequest',
      handler:
        map.PolkadotBroadcaster?.TransactionBroadcastRequest &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.TransactionBroadcastRequest!({
            ...rest,
            event,
            args: polkadotBroadcasterTransactionBroadcastRequest.parse(event.args),
          })) as PolkadotBroadcasterTransactionBroadcastRequest),
    },
    {
      name: 'PolkadotBroadcaster.BroadcastRetryScheduled',
      handler:
        map.PolkadotBroadcaster?.BroadcastRetryScheduled &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastRetryScheduled!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastRetryScheduled.parse(event.args),
          })) as PolkadotBroadcasterBroadcastRetryScheduled),
    },
    {
      name: 'PolkadotBroadcaster.BroadcastTimeout',
      handler:
        map.PolkadotBroadcaster?.BroadcastTimeout &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastTimeout!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastTimeout.parse(event.args),
          })) as PolkadotBroadcasterBroadcastTimeout),
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
      name: 'BitcoinBroadcaster.TransactionBroadcastRequest',
      handler:
        map.BitcoinBroadcaster?.TransactionBroadcastRequest &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.TransactionBroadcastRequest!({
            ...rest,
            event,
            args: bitcoinBroadcasterTransactionBroadcastRequest.parse(event.args),
          })) as BitcoinBroadcasterTransactionBroadcastRequest),
    },
    {
      name: 'BitcoinBroadcaster.BroadcastRetryScheduled',
      handler:
        map.BitcoinBroadcaster?.BroadcastRetryScheduled &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastRetryScheduled!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastRetryScheduled.parse(event.args),
          })) as BitcoinBroadcasterBroadcastRetryScheduled),
    },
    {
      name: 'BitcoinBroadcaster.BroadcastTimeout',
      handler:
        map.BitcoinBroadcaster?.BroadcastTimeout &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastTimeout!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastTimeout.parse(event.args),
          })) as BitcoinBroadcasterBroadcastTimeout),
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
      name: 'Swapping.SwapExecuted',
      handler:
        map.Swapping?.SwapExecuted &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapExecuted!({
            ...rest,
            event,
            args: swappingSwapExecuted.parse(event.args),
          })) as SwappingSwapExecuted),
    },
    {
      name: 'Swapping.SwapEgressScheduled',
      handler:
        map.Swapping?.SwapEgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapEgressScheduled!({
            ...rest,
            event,
            args: swappingSwapEgressScheduled.parse(event.args),
          })) as SwappingSwapEgressScheduled),
    },
    {
      name: 'Swapping.WithdrawalRequested',
      handler:
        map.Swapping?.WithdrawalRequested &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.WithdrawalRequested!({
            ...rest,
            event,
            args: swappingWithdrawalRequested.parse(event.args),
          })) as SwappingWithdrawalRequested),
    },
    {
      name: 'Swapping.CcmFailed',
      handler:
        map.Swapping?.CcmFailed &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.CcmFailed!({
            ...rest,
            event,
            args: swappingCcmFailed.parse(event.args),
          })) as SwappingCcmFailed),
    },
    {
      name: 'Swapping.SwapEgressIgnored',
      handler:
        map.Swapping?.SwapEgressIgnored &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapEgressIgnored!({
            ...rest,
            event,
            args: swappingSwapEgressIgnored.parse(event.args),
          })) as SwappingSwapEgressIgnored),
    },
    {
      name: 'LiquidityProvider.WithdrawalEgressScheduled',
      handler:
        map.LiquidityProvider?.WithdrawalEgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.WithdrawalEgressScheduled!({
            ...rest,
            event,
            args: liquidityProviderWithdrawalEgressScheduled.parse(event.args),
          })) as LiquidityProviderWithdrawalEgressScheduled),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositCredited',
      handler:
        map.LiquidityProvider?.LiquidityDepositCredited &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityDepositCredited!({
            ...rest,
            event,
            args: liquidityProviderLiquidityDepositCredited.parse(event.args),
          })) as LiquidityProviderLiquidityDepositCredited),
    },
    {
      name: 'EthereumIngressEgress.DepositReceived',
      handler:
        map.EthereumIngressEgress?.DepositReceived &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.DepositReceived!({
            ...rest,
            event,
            args: ethereumIngressEgressDepositReceived.parse(event.args),
          })) as EthereumIngressEgressDepositReceived),
    },
    {
      name: 'EthereumIngressEgress.DepositIgnored',
      handler:
        map.EthereumIngressEgress?.DepositIgnored &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.DepositIgnored!({
            ...rest,
            event,
            args: ethereumIngressEgressDepositIgnored.parse(event.args),
          })) as EthereumIngressEgressDepositIgnored),
    },
    {
      name: 'EthereumIngressEgress.UtxoConsolidation',
      handler:
        map.EthereumIngressEgress?.UtxoConsolidation &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.UtxoConsolidation!({
            ...rest,
            event,
            args: ethereumIngressEgressUtxoConsolidation.parse(event.args),
          })) as EthereumIngressEgressUtxoConsolidation),
    },
    {
      name: 'PolkadotIngressEgress.DepositReceived',
      handler:
        map.PolkadotIngressEgress?.DepositReceived &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.DepositReceived!({
            ...rest,
            event,
            args: polkadotIngressEgressDepositReceived.parse(event.args),
          })) as PolkadotIngressEgressDepositReceived),
    },
    {
      name: 'PolkadotIngressEgress.DepositIgnored',
      handler:
        map.PolkadotIngressEgress?.DepositIgnored &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.DepositIgnored!({
            ...rest,
            event,
            args: polkadotIngressEgressDepositIgnored.parse(event.args),
          })) as PolkadotIngressEgressDepositIgnored),
    },
    {
      name: 'PolkadotIngressEgress.UtxoConsolidation',
      handler:
        map.PolkadotIngressEgress?.UtxoConsolidation &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.UtxoConsolidation!({
            ...rest,
            event,
            args: polkadotIngressEgressUtxoConsolidation.parse(event.args),
          })) as PolkadotIngressEgressUtxoConsolidation),
    },
    {
      name: 'BitcoinIngressEgress.DepositReceived',
      handler:
        map.BitcoinIngressEgress?.DepositReceived &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.DepositReceived!({
            ...rest,
            event,
            args: bitcoinIngressEgressDepositReceived.parse(event.args),
          })) as BitcoinIngressEgressDepositReceived),
    },
    {
      name: 'BitcoinIngressEgress.DepositIgnored',
      handler:
        map.BitcoinIngressEgress?.DepositIgnored &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.DepositIgnored!({
            ...rest,
            event,
            args: bitcoinIngressEgressDepositIgnored.parse(event.args),
          })) as BitcoinIngressEgressDepositIgnored),
    },
    {
      name: 'BitcoinIngressEgress.UtxoConsolidation',
      handler:
        map.BitcoinIngressEgress?.UtxoConsolidation &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.UtxoConsolidation!({
            ...rest,
            event,
            args: bitcoinIngressEgressUtxoConsolidation.parse(event.args),
          })) as BitcoinIngressEgressUtxoConsolidation),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
