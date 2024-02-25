import { z } from 'zod';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { ethereumVaultKeyHandoverRequest } from './ethereumVault/keyHandoverRequest';
import { ethereumVaultVaultRotatedExternally } from './ethereumVault/vaultRotatedExternally';
import { ethereumVaultKeygenVerificationSuccess } from './ethereumVault/keygenVerificationSuccess';
import { ethereumVaultKeyHandoverVerificationSuccess } from './ethereumVault/keyHandoverVerificationSuccess';
import { ethereumVaultAwaitingGovernanceActivation } from './ethereumVault/awaitingGovernanceActivation';
import { ethereumThresholdSignerThresholdSignatureRequest } from './ethereumThresholdSigner/thresholdSignatureRequest';
import { ethereumBroadcasterTransactionBroadcastRequest } from './ethereumBroadcaster/transactionBroadcastRequest';
import { ethereumBroadcasterBroadcastSuccess } from './ethereumBroadcaster/broadcastSuccess';
import { liquidityPoolsPoolStateUpdated } from './liquidityPools/poolStateUpdated';
import { liquidityPoolsNewPoolCreated } from './liquidityPools/newPoolCreated';
import { liquidityPoolsRangeOrderUpdated } from './liquidityPools/rangeOrderUpdated';
import { liquidityPoolsLimitOrderUpdated } from './liquidityPools/limitOrderUpdated';

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
export type EthereumVaultKeyHandoverRequest = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverRequest>
>;
export type EthereumVaultVaultRotatedExternally = EventHandler<
  z.output<typeof ethereumVaultVaultRotatedExternally>
>;
export type EthereumVaultKeygenVerificationSuccess = EventHandler<
  z.output<typeof ethereumVaultKeygenVerificationSuccess>
>;
export type EthereumVaultKeyHandoverVerificationSuccess = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverVerificationSuccess>
>;
export type EthereumVaultAwaitingGovernanceActivation = EventHandler<
  z.output<typeof ethereumVaultAwaitingGovernanceActivation>
>;
export type EthereumThresholdSignerThresholdSignatureRequest = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdSignatureRequest>
>;
export type EthereumBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof ethereumBroadcasterTransactionBroadcastRequest>
>;
export type EthereumBroadcasterBroadcastSuccess = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastSuccess>
>;
export type LiquidityPoolsPoolStateUpdated = EventHandler<
  z.output<typeof liquidityPoolsPoolStateUpdated>
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

type HandlerMap = {
  Environment?: {
    RuntimeSafeModeUpdated?: EnvironmentRuntimeSafeModeUpdated;
  };
  EthereumVault?: {
    KeyHandoverRequest?: EthereumVaultKeyHandoverRequest;
    VaultRotatedExternally?: EthereumVaultVaultRotatedExternally;
    KeygenVerificationSuccess?: EthereumVaultKeygenVerificationSuccess;
    KeyHandoverVerificationSuccess?: EthereumVaultKeyHandoverVerificationSuccess;
    AwaitingGovernanceActivation?: EthereumVaultAwaitingGovernanceActivation;
  };
  EthereumThresholdSigner?: {
    ThresholdSignatureRequest?: EthereumThresholdSignerThresholdSignatureRequest;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EthereumBroadcasterTransactionBroadcastRequest;
    BroadcastSuccess?: EthereumBroadcasterBroadcastSuccess;
  };
  LiquidityPools?: {
    PoolStateUpdated?: LiquidityPoolsPoolStateUpdated;
    NewPoolCreated?: LiquidityPoolsNewPoolCreated;
    RangeOrderUpdated?: LiquidityPoolsRangeOrderUpdated;
    LimitOrderUpdated?: LiquidityPoolsLimitOrderUpdated;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 15,
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
      name: 'EthereumVault.KeyHandoverRequest',
      handler:
        map.EthereumVault?.KeyHandoverRequest &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverRequest!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverRequest.parse(event.args),
          })) as EthereumVaultKeyHandoverRequest),
    },
    {
      name: 'EthereumVault.VaultRotatedExternally',
      handler:
        map.EthereumVault?.VaultRotatedExternally &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.VaultRotatedExternally!({
            ...rest,
            event,
            args: ethereumVaultVaultRotatedExternally.parse(event.args),
          })) as EthereumVaultVaultRotatedExternally),
    },
    {
      name: 'EthereumVault.KeygenVerificationSuccess',
      handler:
        map.EthereumVault?.KeygenVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenVerificationSuccess!({
            ...rest,
            event,
            args: ethereumVaultKeygenVerificationSuccess.parse(event.args),
          })) as EthereumVaultKeygenVerificationSuccess),
    },
    {
      name: 'EthereumVault.KeyHandoverVerificationSuccess',
      handler:
        map.EthereumVault?.KeyHandoverVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverVerificationSuccess!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverVerificationSuccess.parse(event.args),
          })) as EthereumVaultKeyHandoverVerificationSuccess),
    },
    {
      name: 'EthereumVault.AwaitingGovernanceActivation',
      handler:
        map.EthereumVault?.AwaitingGovernanceActivation &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.AwaitingGovernanceActivation!({
            ...rest,
            event,
            args: ethereumVaultAwaitingGovernanceActivation.parse(event.args),
          })) as EthereumVaultAwaitingGovernanceActivation),
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureRequest',
      handler:
        map.EthereumThresholdSigner?.ThresholdSignatureRequest &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.ThresholdSignatureRequest!({
            ...rest,
            event,
            args: ethereumThresholdSignerThresholdSignatureRequest.parse(event.args),
          })) as EthereumThresholdSignerThresholdSignatureRequest),
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
      name: 'EthereumBroadcaster.BroadcastSuccess',
      handler:
        map.EthereumBroadcaster?.BroadcastSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastSuccess!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastSuccess.parse(event.args),
          })) as EthereumBroadcasterBroadcastSuccess),
    },
    {
      name: 'LiquidityPools.PoolStateUpdated',
      handler:
        map.LiquidityPools?.PoolStateUpdated &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.PoolStateUpdated!({
            ...rest,
            event,
            args: liquidityPoolsPoolStateUpdated.parse(event.args),
          })) as LiquidityPoolsPoolStateUpdated),
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
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
