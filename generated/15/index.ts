export type EventHandler = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
}) => Promise<void>;

type HandlerMap = {
  Environment?: {
    RuntimeSafeModeUpdated?: EventHandler;
  };
  EthereumVault?: {
    KeyHandoverRequest?: EventHandler;
    VaultRotatedExternally?: EventHandler;
    KeygenVerificationSuccess?: EventHandler;
    KeyHandoverVerificationSuccess?: EventHandler;
    AwaitingGovernanceActivation?: EventHandler;
  };
  EthereumThresholdSigner?: {
    ThresholdSignatureRequest?: EventHandler;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastSuccess?: EventHandler;
  };
  LiquidityPools?: {
    PoolStateUpdated?: EventHandler;
    NewPoolCreated?: EventHandler;
    RangeOrderUpdated?: EventHandler;
    LimitOrderUpdated?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 15,
  handlers: [
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: map.Environment?.RuntimeSafeModeUpdated,
    },
    {
      name: 'EthereumVault.KeyHandoverRequest',
      handler: map.EthereumVault?.KeyHandoverRequest,
    },
    {
      name: 'EthereumVault.VaultRotatedExternally',
      handler: map.EthereumVault?.VaultRotatedExternally,
    },
    {
      name: 'EthereumVault.KeygenVerificationSuccess',
      handler: map.EthereumVault?.KeygenVerificationSuccess,
    },
    {
      name: 'EthereumVault.KeyHandoverVerificationSuccess',
      handler: map.EthereumVault?.KeyHandoverVerificationSuccess,
    },
    {
      name: 'EthereumVault.AwaitingGovernanceActivation',
      handler: map.EthereumVault?.AwaitingGovernanceActivation,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureRequest',
      handler: map.EthereumThresholdSigner?.ThresholdSignatureRequest,
    },
    {
      name: 'EthereumBroadcaster.TransactionBroadcastRequest',
      handler: map.EthereumBroadcaster?.TransactionBroadcastRequest,
    },
    {
      name: 'EthereumBroadcaster.BroadcastSuccess',
      handler: map.EthereumBroadcaster?.BroadcastSuccess,
    },
    {
      name: 'LiquidityPools.PoolStateUpdated',
      handler: map.LiquidityPools?.PoolStateUpdated,
    },
    {
      name: 'LiquidityPools.NewPoolCreated',
      handler: map.LiquidityPools?.NewPoolCreated,
    },
    {
      name: 'LiquidityPools.RangeOrderUpdated',
      handler: map.LiquidityPools?.RangeOrderUpdated,
    },
    {
      name: 'LiquidityPools.LimitOrderUpdated',
      handler: map.LiquidityPools?.LimitOrderUpdated,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
