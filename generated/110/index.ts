export type EventHandler = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
}) => Promise<void>;

type HandlerMap = {
  EthereumBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    CallResigned?: EventHandler;
  };
  PolkadotBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    CallResigned?: EventHandler;
  };
  BitcoinBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    CallResigned?: EventHandler;
  };
  EthereumIngressEgress?: {
    TransferFallbackRequested?: EventHandler;
    CcmBroadcastFailed?: EventHandler;
    FailedForeignChainCallResigned?: EventHandler;
    FailedForeignChainCallExpired?: EventHandler;
  };
  PolkadotIngressEgress?: {
    TransferFallbackRequested?: EventHandler;
    CcmBroadcastFailed?: EventHandler;
    FailedForeignChainCallResigned?: EventHandler;
    FailedForeignChainCallExpired?: EventHandler;
  };
  BitcoinIngressEgress?: {
    TransferFallbackRequested?: EventHandler;
    CcmBroadcastFailed?: EventHandler;
    FailedForeignChainCallResigned?: EventHandler;
    FailedForeignChainCallExpired?: EventHandler;
  };
  LiquidityPools?: {
    NewPoolCreated?: EventHandler;
    RangeOrderUpdated?: EventHandler;
    LimitOrderUpdated?: EventHandler;
    PoolFeeSet?: EventHandler;
    ScheduledLimitOrderUpdateDispatchSuccess?: EventHandler;
    ScheduledLimitOrderUpdateDispatchFailure?: EventHandler;
    LimitOrderSetOrUpdateScheduled?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 110,
  handlers: [
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler: map.EthereumBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'EthereumBroadcaster.CallResigned',
      handler: map.EthereumBroadcaster?.CallResigned,
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler: map.PolkadotBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'PolkadotBroadcaster.CallResigned',
      handler: map.PolkadotBroadcaster?.CallResigned,
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler: map.BitcoinBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'BitcoinBroadcaster.CallResigned',
      handler: map.BitcoinBroadcaster?.CallResigned,
    },
    {
      name: 'EthereumIngressEgress.TransferFallbackRequested',
      handler: map.EthereumIngressEgress?.TransferFallbackRequested,
    },
    {
      name: 'EthereumIngressEgress.CcmBroadcastFailed',
      handler: map.EthereumIngressEgress?.CcmBroadcastFailed,
    },
    {
      name: 'EthereumIngressEgress.FailedForeignChainCallResigned',
      handler: map.EthereumIngressEgress?.FailedForeignChainCallResigned,
    },
    {
      name: 'EthereumIngressEgress.FailedForeignChainCallExpired',
      handler: map.EthereumIngressEgress?.FailedForeignChainCallExpired,
    },
    {
      name: 'PolkadotIngressEgress.TransferFallbackRequested',
      handler: map.PolkadotIngressEgress?.TransferFallbackRequested,
    },
    {
      name: 'PolkadotIngressEgress.CcmBroadcastFailed',
      handler: map.PolkadotIngressEgress?.CcmBroadcastFailed,
    },
    {
      name: 'PolkadotIngressEgress.FailedForeignChainCallResigned',
      handler: map.PolkadotIngressEgress?.FailedForeignChainCallResigned,
    },
    {
      name: 'PolkadotIngressEgress.FailedForeignChainCallExpired',
      handler: map.PolkadotIngressEgress?.FailedForeignChainCallExpired,
    },
    {
      name: 'BitcoinIngressEgress.TransferFallbackRequested',
      handler: map.BitcoinIngressEgress?.TransferFallbackRequested,
    },
    {
      name: 'BitcoinIngressEgress.CcmBroadcastFailed',
      handler: map.BitcoinIngressEgress?.CcmBroadcastFailed,
    },
    {
      name: 'BitcoinIngressEgress.FailedForeignChainCallResigned',
      handler: map.BitcoinIngressEgress?.FailedForeignChainCallResigned,
    },
    {
      name: 'BitcoinIngressEgress.FailedForeignChainCallExpired',
      handler: map.BitcoinIngressEgress?.FailedForeignChainCallExpired,
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
    {
      name: 'LiquidityPools.PoolFeeSet',
      handler: map.LiquidityPools?.PoolFeeSet,
    },
    {
      name: 'LiquidityPools.ScheduledLimitOrderUpdateDispatchSuccess',
      handler: map.LiquidityPools?.ScheduledLimitOrderUpdateDispatchSuccess,
    },
    {
      name: 'LiquidityPools.ScheduledLimitOrderUpdateDispatchFailure',
      handler: map.LiquidityPools?.ScheduledLimitOrderUpdateDispatchFailure,
    },
    {
      name: 'LiquidityPools.LimitOrderSetOrUpdateScheduled',
      handler: map.LiquidityPools?.LimitOrderSetOrUpdateScheduled,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
