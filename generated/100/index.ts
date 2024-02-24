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
  Witnesser?: {
    Prewitnessed?: EventHandler;
  };
  Reputation?: {
    AccrualRateUpdated?: EventHandler;
  };
  EthereumBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    TransactionFeeDeficitRecorded?: EventHandler;
    TransactionFeeDeficitRefused?: EventHandler;
  };
  PolkadotBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    TransactionFeeDeficitRecorded?: EventHandler;
    TransactionFeeDeficitRefused?: EventHandler;
  };
  BitcoinBroadcaster?: {
    ThresholdSignatureInvalid?: EventHandler;
    TransactionFeeDeficitRecorded?: EventHandler;
    TransactionFeeDeficitRefused?: EventHandler;
  };
  Swapping?: {
    SwapDepositAddressReady?: EventHandler;
  };
  LiquidityProvider?: {
    LiquidityDepositAddressReady?: EventHandler;
  };
  EthereumIngressEgress?: {
    DepositWitnessRejected?: EventHandler;
  };
  PolkadotIngressEgress?: {
    DepositWitnessRejected?: EventHandler;
  };
  BitcoinIngressEgress?: {
    DepositWitnessRejected?: EventHandler;
  };
  LiquidityPools?: {
    RangeOrderUpdated?: EventHandler;
    LimitOrderUpdated?: EventHandler;
    PoolFeeSet?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 100,
  handlers: [
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: map.Environment?.RuntimeSafeModeUpdated,
    },
    {
      name: 'Witnesser.Prewitnessed',
      handler: map.Witnesser?.Prewitnessed,
    },
    {
      name: 'Reputation.AccrualRateUpdated',
      handler: map.Reputation?.AccrualRateUpdated,
    },
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler: map.EthereumBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRecorded',
      handler: map.EthereumBroadcaster?.TransactionFeeDeficitRecorded,
    },
    {
      name: 'EthereumBroadcaster.TransactionFeeDeficitRefused',
      handler: map.EthereumBroadcaster?.TransactionFeeDeficitRefused,
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler: map.PolkadotBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRecorded',
      handler: map.PolkadotBroadcaster?.TransactionFeeDeficitRecorded,
    },
    {
      name: 'PolkadotBroadcaster.TransactionFeeDeficitRefused',
      handler: map.PolkadotBroadcaster?.TransactionFeeDeficitRefused,
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler: map.BitcoinBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRecorded',
      handler: map.BitcoinBroadcaster?.TransactionFeeDeficitRecorded,
    },
    {
      name: 'BitcoinBroadcaster.TransactionFeeDeficitRefused',
      handler: map.BitcoinBroadcaster?.TransactionFeeDeficitRefused,
    },
    {
      name: 'Swapping.SwapDepositAddressReady',
      handler: map.Swapping?.SwapDepositAddressReady,
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler: map.LiquidityProvider?.LiquidityDepositAddressReady,
    },
    {
      name: 'EthereumIngressEgress.DepositWitnessRejected',
      handler: map.EthereumIngressEgress?.DepositWitnessRejected,
    },
    {
      name: 'PolkadotIngressEgress.DepositWitnessRejected',
      handler: map.PolkadotIngressEgress?.DepositWitnessRejected,
    },
    {
      name: 'BitcoinIngressEgress.DepositWitnessRejected',
      handler: map.BitcoinIngressEgress?.DepositWitnessRejected,
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
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
