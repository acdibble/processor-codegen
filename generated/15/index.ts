import { z } from 'zod';
import { InternalEventHandler, EventHandler, wrapHandler } from '../utils';
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
      handler: wrapHandler(
        map.Environment?.RuntimeSafeModeUpdated,
        environmentRuntimeSafeModeUpdated,
      ),
    },
    {
      name: 'EthereumVault.KeyHandoverRequest',
      handler: wrapHandler(map.EthereumVault?.KeyHandoverRequest, ethereumVaultKeyHandoverRequest),
    },
    {
      name: 'EthereumVault.VaultRotatedExternally',
      handler: wrapHandler(
        map.EthereumVault?.VaultRotatedExternally,
        ethereumVaultVaultRotatedExternally,
      ),
    },
    {
      name: 'EthereumVault.KeygenVerificationSuccess',
      handler: wrapHandler(
        map.EthereumVault?.KeygenVerificationSuccess,
        ethereumVaultKeygenVerificationSuccess,
      ),
    },
    {
      name: 'EthereumVault.KeyHandoverVerificationSuccess',
      handler: wrapHandler(
        map.EthereumVault?.KeyHandoverVerificationSuccess,
        ethereumVaultKeyHandoverVerificationSuccess,
      ),
    },
    {
      name: 'EthereumVault.AwaitingGovernanceActivation',
      handler: wrapHandler(
        map.EthereumVault?.AwaitingGovernanceActivation,
        ethereumVaultAwaitingGovernanceActivation,
      ),
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureRequest',
      handler: wrapHandler(
        map.EthereumThresholdSigner?.ThresholdSignatureRequest,
        ethereumThresholdSignerThresholdSignatureRequest,
      ),
    },
    {
      name: 'EthereumBroadcaster.TransactionBroadcastRequest',
      handler: wrapHandler(
        map.EthereumBroadcaster?.TransactionBroadcastRequest,
        ethereumBroadcasterTransactionBroadcastRequest,
      ),
    },
    {
      name: 'EthereumBroadcaster.BroadcastSuccess',
      handler: wrapHandler(
        map.EthereumBroadcaster?.BroadcastSuccess,
        ethereumBroadcasterBroadcastSuccess,
      ),
    },
    {
      name: 'LiquidityPools.PoolStateUpdated',
      handler: wrapHandler(map.LiquidityPools?.PoolStateUpdated, liquidityPoolsPoolStateUpdated),
    },
    {
      name: 'LiquidityPools.NewPoolCreated',
      handler: wrapHandler(map.LiquidityPools?.NewPoolCreated, liquidityPoolsNewPoolCreated),
    },
    {
      name: 'LiquidityPools.RangeOrderUpdated',
      handler: wrapHandler(map.LiquidityPools?.RangeOrderUpdated, liquidityPoolsRangeOrderUpdated),
    },
    {
      name: 'LiquidityPools.LimitOrderUpdated',
      handler: wrapHandler(map.LiquidityPools?.LimitOrderUpdated, liquidityPoolsLimitOrderUpdated),
    },
  ].filter((h): h is { name: string; handler: InternalEventHandler } => h.handler !== undefined),
});
