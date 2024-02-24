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
    UtxoConsolidationParametersUpdated?: EventHandler;
  };
  Emissions?: {
    BackupRewardsDistributed?: EventHandler;
    NetworkFeeBurned?: EventHandler;
    FlipBurnSkipped?: EventHandler;
  };
  BitcoinChainTracking?: {
    ChainStateUpdated?: EventHandler;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastTimeout?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
  };
  PolkadotBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastTimeout?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
  };
  BitcoinBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastTimeout?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
  };
  Swapping?: {
    SwapExecuted?: EventHandler;
    SwapEgressScheduled?: EventHandler;
    WithdrawalRequested?: EventHandler;
    CcmFailed?: EventHandler;
    SwapEgressIgnored?: EventHandler;
  };
  LiquidityProvider?: {
    WithdrawalEgressScheduled?: EventHandler;
    LiquidityDepositCredited?: EventHandler;
  };
  EthereumIngressEgress?: {
    DepositReceived?: EventHandler;
    DepositIgnored?: EventHandler;
    UtxoConsolidation?: EventHandler;
  };
  PolkadotIngressEgress?: {
    DepositReceived?: EventHandler;
    DepositIgnored?: EventHandler;
    UtxoConsolidation?: EventHandler;
  };
  BitcoinIngressEgress?: {
    DepositReceived?: EventHandler;
    DepositIgnored?: EventHandler;
    UtxoConsolidation?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 120,
  handlers: [
    {
      name: 'Environment.UtxoConsolidationParametersUpdated',
      handler: map.Environment?.UtxoConsolidationParametersUpdated,
    },
    {
      name: 'Emissions.BackupRewardsDistributed',
      handler: map.Emissions?.BackupRewardsDistributed,
    },
    {
      name: 'Emissions.NetworkFeeBurned',
      handler: map.Emissions?.NetworkFeeBurned,
    },
    {
      name: 'Emissions.FlipBurnSkipped',
      handler: map.Emissions?.FlipBurnSkipped,
    },
    {
      name: 'BitcoinChainTracking.ChainStateUpdated',
      handler: map.BitcoinChainTracking?.ChainStateUpdated,
    },
    {
      name: 'EthereumBroadcaster.TransactionBroadcastRequest',
      handler: map.EthereumBroadcaster?.TransactionBroadcastRequest,
    },
    {
      name: 'EthereumBroadcaster.BroadcastRetryScheduled',
      handler: map.EthereumBroadcaster?.BroadcastRetryScheduled,
    },
    {
      name: 'EthereumBroadcaster.BroadcastTimeout',
      handler: map.EthereumBroadcaster?.BroadcastTimeout,
    },
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler: map.EthereumBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'PolkadotBroadcaster.TransactionBroadcastRequest',
      handler: map.PolkadotBroadcaster?.TransactionBroadcastRequest,
    },
    {
      name: 'PolkadotBroadcaster.BroadcastRetryScheduled',
      handler: map.PolkadotBroadcaster?.BroadcastRetryScheduled,
    },
    {
      name: 'PolkadotBroadcaster.BroadcastTimeout',
      handler: map.PolkadotBroadcaster?.BroadcastTimeout,
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler: map.PolkadotBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'BitcoinBroadcaster.TransactionBroadcastRequest',
      handler: map.BitcoinBroadcaster?.TransactionBroadcastRequest,
    },
    {
      name: 'BitcoinBroadcaster.BroadcastRetryScheduled',
      handler: map.BitcoinBroadcaster?.BroadcastRetryScheduled,
    },
    {
      name: 'BitcoinBroadcaster.BroadcastTimeout',
      handler: map.BitcoinBroadcaster?.BroadcastTimeout,
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler: map.BitcoinBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'Swapping.SwapExecuted',
      handler: map.Swapping?.SwapExecuted,
    },
    {
      name: 'Swapping.SwapEgressScheduled',
      handler: map.Swapping?.SwapEgressScheduled,
    },
    {
      name: 'Swapping.WithdrawalRequested',
      handler: map.Swapping?.WithdrawalRequested,
    },
    {
      name: 'Swapping.CcmFailed',
      handler: map.Swapping?.CcmFailed,
    },
    {
      name: 'Swapping.SwapEgressIgnored',
      handler: map.Swapping?.SwapEgressIgnored,
    },
    {
      name: 'LiquidityProvider.WithdrawalEgressScheduled',
      handler: map.LiquidityProvider?.WithdrawalEgressScheduled,
    },
    {
      name: 'LiquidityProvider.LiquidityDepositCredited',
      handler: map.LiquidityProvider?.LiquidityDepositCredited,
    },
    {
      name: 'EthereumIngressEgress.DepositReceived',
      handler: map.EthereumIngressEgress?.DepositReceived,
    },
    {
      name: 'EthereumIngressEgress.DepositIgnored',
      handler: map.EthereumIngressEgress?.DepositIgnored,
    },
    {
      name: 'EthereumIngressEgress.UtxoConsolidation',
      handler: map.EthereumIngressEgress?.UtxoConsolidation,
    },
    {
      name: 'PolkadotIngressEgress.DepositReceived',
      handler: map.PolkadotIngressEgress?.DepositReceived,
    },
    {
      name: 'PolkadotIngressEgress.DepositIgnored',
      handler: map.PolkadotIngressEgress?.DepositIgnored,
    },
    {
      name: 'PolkadotIngressEgress.UtxoConsolidation',
      handler: map.PolkadotIngressEgress?.UtxoConsolidation,
    },
    {
      name: 'BitcoinIngressEgress.DepositReceived',
      handler: map.BitcoinIngressEgress?.DepositReceived,
    },
    {
      name: 'BitcoinIngressEgress.DepositIgnored',
      handler: map.BitcoinIngressEgress?.DepositIgnored,
    },
    {
      name: 'BitcoinIngressEgress.UtxoConsolidation',
      handler: map.BitcoinIngressEgress?.UtxoConsolidation,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
