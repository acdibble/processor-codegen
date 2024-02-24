export type EventHandler = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
}) => Promise<void>;

type HandlerMap = {
  System?: {
    ExtrinsicSuccess?: EventHandler;
    ExtrinsicFailed?: EventHandler;
    CodeUpdated?: EventHandler;
    NewAccount?: EventHandler;
    KilledAccount?: EventHandler;
    Remarked?: EventHandler;
  };
  Environment?: {
    AddedNewEthAsset?: EventHandler;
    UpdatedEthAsset?: EventHandler;
    PolkadotVaultAccountSet?: EventHandler;
    BitcoinBlockNumberSetForVault?: EventHandler;
    RuntimeSafeModeUpdated?: EventHandler;
    NextCompatibilityVersionSet?: EventHandler;
  };
  Flip?: {
    RemainingImbalance?: EventHandler;
    SlashingPerformed?: EventHandler;
    AccountReaped?: EventHandler;
    SlashingRateUpdated?: EventHandler;
  };
  Emissions?: {
    SupplyUpdateBroadcastRequested?: EventHandler;
    CurrentAuthorityInflationEmissionsUpdated?: EventHandler;
    BackupNodeInflationEmissionsUpdated?: EventHandler;
    SupplyUpdateIntervalUpdated?: EventHandler;
  };
  Funding?: {
    Funded?: EventHandler;
    RedemptionRequested?: EventHandler;
    RedemptionSettled?: EventHandler;
    StoppedBidding?: EventHandler;
    StartedBidding?: EventHandler;
    RedemptionExpired?: EventHandler;
    AddedRestrictedAddress?: EventHandler;
    RemovedRestrictedAddress?: EventHandler;
    FailedFundingAttempt?: EventHandler;
    MinimumFundingUpdated?: EventHandler;
    RedemptionTaxAmountUpdated?: EventHandler;
    RedemptionAmountZero?: EventHandler;
    BoundRedeemAddress?: EventHandler;
  };
  AccountRoles?: {
    AccountRoleRegistered?: EventHandler;
  };
  TransactionPayment?: {
    TransactionFeePaid?: EventHandler;
  };
  Witnesser?: {
    WitnessExecutionFailed?: EventHandler;
  };
  Validator?: {
    RotationAborted?: EventHandler;
    NewEpoch?: EventHandler;
    RotationPhaseUpdated?: EventHandler;
    CFEVersionUpdated?: EventHandler;
    PeerIdRegistered?: EventHandler;
    PeerIdUnregistered?: EventHandler;
    VanityNameSet?: EventHandler;
    AuctionCompleted?: EventHandler;
    PalletConfigUpdated?: EventHandler;
  };
  Session?: {
    NewSession?: EventHandler;
  };
  Grandpa?: {
    NewAuthorities?: EventHandler;
    Paused?: EventHandler;
    Resumed?: EventHandler;
  };
  Governance?: {
    Proposed?: EventHandler;
    Executed?: EventHandler;
    Expired?: EventHandler;
    Approved?: EventHandler;
    FailedExecution?: EventHandler;
    DecodeOfCallFailed?: EventHandler;
    UpgradeConditionsSatisfied?: EventHandler;
    GovKeyCallExecuted?: EventHandler;
    GovKeyCallHashWhitelisted?: EventHandler;
    GovKeyCallExecutionFailed?: EventHandler;
  };
  TokenholderGovernance?: {
    ProposalSubmitted?: EventHandler;
    ProposalPassed?: EventHandler;
    ProposalRejected?: EventHandler;
    ProposalEnacted?: EventHandler;
    GovKeyUpdatedHasFailed?: EventHandler;
    GovKeyUpdatedWasSuccessful?: EventHandler;
  };
  Reputation?: {
    OffencePenalty?: EventHandler;
    AccrualRateUpdated?: EventHandler;
    MissedHeartbeatPenaltyUpdated?: EventHandler;
    PenaltyUpdated?: EventHandler;
  };
  EthereumChainTracking?: {
    ChainStateUpdated?: EventHandler;
  };
  PolkadotChainTracking?: {
    ChainStateUpdated?: EventHandler;
  };
  BitcoinChainTracking?: {
    ChainStateUpdated?: EventHandler;
  };
  EthereumVault?: {
    KeygenRequest?: EventHandler;
    KeyHandoverRequest?: EventHandler;
    VaultRotationCompleted?: EventHandler;
    VaultRotatedExternally?: EventHandler;
    KeygenSuccessReported?: EventHandler;
    KeyHandoverSuccessReported?: EventHandler;
    KeygenFailureReported?: EventHandler;
    KeyHandoverFailureReported?: EventHandler;
    KeygenSuccess?: EventHandler;
    KeyHandoverSuccess?: EventHandler;
    NoKeyHandover?: EventHandler;
    KeygenVerificationSuccess?: EventHandler;
    KeyHandoverVerificationSuccess?: EventHandler;
    KeygenVerificationFailure?: EventHandler;
    KeyHandoverVerificationFailure?: EventHandler;
    KeygenFailure?: EventHandler;
    KeygenResponseTimeout?: EventHandler;
    KeyHandoverResponseTimeout?: EventHandler;
    KeygenResponseTimeoutUpdated?: EventHandler;
    AwaitingGovernanceActivation?: EventHandler;
    KeyHandoverFailure?: EventHandler;
    VaultRotationAborted?: EventHandler;
  };
  PolkadotVault?: {
    KeygenRequest?: EventHandler;
    KeyHandoverRequest?: EventHandler;
    VaultRotationCompleted?: EventHandler;
    VaultRotatedExternally?: EventHandler;
    KeygenSuccessReported?: EventHandler;
    KeyHandoverSuccessReported?: EventHandler;
    KeygenFailureReported?: EventHandler;
    KeyHandoverFailureReported?: EventHandler;
    KeygenSuccess?: EventHandler;
    KeyHandoverSuccess?: EventHandler;
    NoKeyHandover?: EventHandler;
    KeygenVerificationSuccess?: EventHandler;
    KeyHandoverVerificationSuccess?: EventHandler;
    KeygenVerificationFailure?: EventHandler;
    KeyHandoverVerificationFailure?: EventHandler;
    KeygenFailure?: EventHandler;
    KeygenResponseTimeout?: EventHandler;
    KeyHandoverResponseTimeout?: EventHandler;
    KeygenResponseTimeoutUpdated?: EventHandler;
    AwaitingGovernanceActivation?: EventHandler;
    KeyHandoverFailure?: EventHandler;
    VaultRotationAborted?: EventHandler;
  };
  BitcoinVault?: {
    KeygenRequest?: EventHandler;
    KeyHandoverRequest?: EventHandler;
    VaultRotationCompleted?: EventHandler;
    VaultRotatedExternally?: EventHandler;
    KeygenSuccessReported?: EventHandler;
    KeyHandoverSuccessReported?: EventHandler;
    KeygenFailureReported?: EventHandler;
    KeyHandoverFailureReported?: EventHandler;
    KeygenSuccess?: EventHandler;
    KeyHandoverSuccess?: EventHandler;
    NoKeyHandover?: EventHandler;
    KeygenVerificationSuccess?: EventHandler;
    KeyHandoverVerificationSuccess?: EventHandler;
    KeygenVerificationFailure?: EventHandler;
    KeyHandoverVerificationFailure?: EventHandler;
    KeygenFailure?: EventHandler;
    KeygenResponseTimeout?: EventHandler;
    KeyHandoverResponseTimeout?: EventHandler;
    KeygenResponseTimeoutUpdated?: EventHandler;
    AwaitingGovernanceActivation?: EventHandler;
    KeyHandoverFailure?: EventHandler;
    VaultRotationAborted?: EventHandler;
  };
  EthereumThresholdSigner?: {
    ThresholdSignatureRequest?: EventHandler;
    ThresholdSignatureFailed?: EventHandler;
    ThresholdSignatureSuccess?: EventHandler;
    ThresholdDispatchComplete?: EventHandler;
    RetryRequested?: EventHandler;
    FailureReportProcessed?: EventHandler;
    SignersUnavailable?: EventHandler;
    CurrentKeyUnavailable?: EventHandler;
    ThresholdSignatureResponseTimeoutUpdated?: EventHandler;
  };
  PolkadotThresholdSigner?: {
    ThresholdSignatureRequest?: EventHandler;
    ThresholdSignatureFailed?: EventHandler;
    ThresholdSignatureSuccess?: EventHandler;
    ThresholdDispatchComplete?: EventHandler;
    RetryRequested?: EventHandler;
    FailureReportProcessed?: EventHandler;
    SignersUnavailable?: EventHandler;
    CurrentKeyUnavailable?: EventHandler;
    ThresholdSignatureResponseTimeoutUpdated?: EventHandler;
  };
  BitcoinThresholdSigner?: {
    ThresholdSignatureRequest?: EventHandler;
    ThresholdSignatureFailed?: EventHandler;
    ThresholdSignatureSuccess?: EventHandler;
    ThresholdDispatchComplete?: EventHandler;
    RetryRequested?: EventHandler;
    FailureReportProcessed?: EventHandler;
    SignersUnavailable?: EventHandler;
    CurrentKeyUnavailable?: EventHandler;
    ThresholdSignatureResponseTimeoutUpdated?: EventHandler;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastAttemptTimeout?: EventHandler;
    BroadcastAborted?: EventHandler;
    BroadcastSuccess?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
    BroadcastCallbackExecuted?: EventHandler;
  };
  PolkadotBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastAttemptTimeout?: EventHandler;
    BroadcastAborted?: EventHandler;
    BroadcastSuccess?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
    BroadcastCallbackExecuted?: EventHandler;
  };
  BitcoinBroadcaster?: {
    TransactionBroadcastRequest?: EventHandler;
    BroadcastRetryScheduled?: EventHandler;
    BroadcastAttemptTimeout?: EventHandler;
    BroadcastAborted?: EventHandler;
    BroadcastSuccess?: EventHandler;
    ThresholdSignatureInvalid?: EventHandler;
    BroadcastCallbackExecuted?: EventHandler;
  };
  Swapping?: {
    SwapDepositAddressReady?: EventHandler;
    SwapScheduled?: EventHandler;
    SwapExecuted?: EventHandler;
    SwapEgressScheduled?: EventHandler;
    WithdrawalRequested?: EventHandler;
    BatchSwapFailed?: EventHandler;
    CcmEgressScheduled?: EventHandler;
    SwapDepositAddressExpired?: EventHandler;
    SwapTtlSet?: EventHandler;
    CcmDepositReceived?: EventHandler;
    MinimumSwapAmountSet?: EventHandler;
    SwapAmountTooLow?: EventHandler;
    CcmFailed?: EventHandler;
  };
  LiquidityProvider?: {
    AccountDebited?: EventHandler;
    AccountCredited?: EventHandler;
    LiquidityDepositAddressReady?: EventHandler;
    LiquidityDepositAddressExpired?: EventHandler;
    WithdrawalEgressScheduled?: EventHandler;
    LpTtlSet?: EventHandler;
    EmergencyWithdrawalAddressRegistered?: EventHandler;
  };
  EthereumIngressEgress?: {
    StartWitnessing?: EventHandler;
    StopWitnessing?: EventHandler;
    DepositReceived?: EventHandler;
    AssetEgressStatusChanged?: EventHandler;
    EgressScheduled?: EventHandler;
    CcmBroadcastRequested?: EventHandler;
    CcmEgressInvalid?: EventHandler;
    DepositFetchesScheduled?: EventHandler;
    BatchBroadcastRequested?: EventHandler;
    MinimumDepositSet?: EventHandler;
    DepositIgnored?: EventHandler;
    VaultTransferFailed?: EventHandler;
  };
  PolkadotIngressEgress?: {
    StartWitnessing?: EventHandler;
    StopWitnessing?: EventHandler;
    DepositReceived?: EventHandler;
    AssetEgressStatusChanged?: EventHandler;
    EgressScheduled?: EventHandler;
    CcmBroadcastRequested?: EventHandler;
    CcmEgressInvalid?: EventHandler;
    DepositFetchesScheduled?: EventHandler;
    BatchBroadcastRequested?: EventHandler;
    MinimumDepositSet?: EventHandler;
    DepositIgnored?: EventHandler;
    VaultTransferFailed?: EventHandler;
  };
  BitcoinIngressEgress?: {
    StartWitnessing?: EventHandler;
    StopWitnessing?: EventHandler;
    DepositReceived?: EventHandler;
    AssetEgressStatusChanged?: EventHandler;
    EgressScheduled?: EventHandler;
    CcmBroadcastRequested?: EventHandler;
    CcmEgressInvalid?: EventHandler;
    DepositFetchesScheduled?: EventHandler;
    BatchBroadcastRequested?: EventHandler;
    MinimumDepositSet?: EventHandler;
    DepositIgnored?: EventHandler;
    VaultTransferFailed?: EventHandler;
  };
  LiquidityPools?: {
    UpdatedBuyInterval?: EventHandler;
    PoolStateUpdated?: EventHandler;
    NewPoolCreated?: EventHandler;
    RangeOrderMinted?: EventHandler;
    RangeOrderBurned?: EventHandler;
    LimitOrderMinted?: EventHandler;
    LimitOrderBurned?: EventHandler;
    NetworkFeeTaken?: EventHandler;
    AssetSwapped?: EventHandler;
    LiquidityFeeUpdated?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 12,
  handlers: [
    {
      name: 'System.ExtrinsicSuccess',
      handler: map.System?.ExtrinsicSuccess,
    },
    {
      name: 'System.ExtrinsicFailed',
      handler: map.System?.ExtrinsicFailed,
    },
    {
      name: 'System.CodeUpdated',
      handler: map.System?.CodeUpdated,
    },
    {
      name: 'System.NewAccount',
      handler: map.System?.NewAccount,
    },
    {
      name: 'System.KilledAccount',
      handler: map.System?.KilledAccount,
    },
    {
      name: 'System.Remarked',
      handler: map.System?.Remarked,
    },
    {
      name: 'Environment.AddedNewEthAsset',
      handler: map.Environment?.AddedNewEthAsset,
    },
    {
      name: 'Environment.UpdatedEthAsset',
      handler: map.Environment?.UpdatedEthAsset,
    },
    {
      name: 'Environment.PolkadotVaultAccountSet',
      handler: map.Environment?.PolkadotVaultAccountSet,
    },
    {
      name: 'Environment.BitcoinBlockNumberSetForVault',
      handler: map.Environment?.BitcoinBlockNumberSetForVault,
    },
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: map.Environment?.RuntimeSafeModeUpdated,
    },
    {
      name: 'Environment.NextCompatibilityVersionSet',
      handler: map.Environment?.NextCompatibilityVersionSet,
    },
    {
      name: 'Flip.RemainingImbalance',
      handler: map.Flip?.RemainingImbalance,
    },
    {
      name: 'Flip.SlashingPerformed',
      handler: map.Flip?.SlashingPerformed,
    },
    {
      name: 'Flip.AccountReaped',
      handler: map.Flip?.AccountReaped,
    },
    {
      name: 'Flip.SlashingRateUpdated',
      handler: map.Flip?.SlashingRateUpdated,
    },
    {
      name: 'Emissions.SupplyUpdateBroadcastRequested',
      handler: map.Emissions?.SupplyUpdateBroadcastRequested,
    },
    {
      name: 'Emissions.CurrentAuthorityInflationEmissionsUpdated',
      handler: map.Emissions?.CurrentAuthorityInflationEmissionsUpdated,
    },
    {
      name: 'Emissions.BackupNodeInflationEmissionsUpdated',
      handler: map.Emissions?.BackupNodeInflationEmissionsUpdated,
    },
    {
      name: 'Emissions.SupplyUpdateIntervalUpdated',
      handler: map.Emissions?.SupplyUpdateIntervalUpdated,
    },
    {
      name: 'Funding.Funded',
      handler: map.Funding?.Funded,
    },
    {
      name: 'Funding.RedemptionRequested',
      handler: map.Funding?.RedemptionRequested,
    },
    {
      name: 'Funding.RedemptionSettled',
      handler: map.Funding?.RedemptionSettled,
    },
    {
      name: 'Funding.StoppedBidding',
      handler: map.Funding?.StoppedBidding,
    },
    {
      name: 'Funding.StartedBidding',
      handler: map.Funding?.StartedBidding,
    },
    {
      name: 'Funding.RedemptionExpired',
      handler: map.Funding?.RedemptionExpired,
    },
    {
      name: 'Funding.AddedRestrictedAddress',
      handler: map.Funding?.AddedRestrictedAddress,
    },
    {
      name: 'Funding.RemovedRestrictedAddress',
      handler: map.Funding?.RemovedRestrictedAddress,
    },
    {
      name: 'Funding.FailedFundingAttempt',
      handler: map.Funding?.FailedFundingAttempt,
    },
    {
      name: 'Funding.MinimumFundingUpdated',
      handler: map.Funding?.MinimumFundingUpdated,
    },
    {
      name: 'Funding.RedemptionTaxAmountUpdated',
      handler: map.Funding?.RedemptionTaxAmountUpdated,
    },
    {
      name: 'Funding.RedemptionAmountZero',
      handler: map.Funding?.RedemptionAmountZero,
    },
    {
      name: 'Funding.BoundRedeemAddress',
      handler: map.Funding?.BoundRedeemAddress,
    },
    {
      name: 'AccountRoles.AccountRoleRegistered',
      handler: map.AccountRoles?.AccountRoleRegistered,
    },
    {
      name: 'TransactionPayment.TransactionFeePaid',
      handler: map.TransactionPayment?.TransactionFeePaid,
    },
    {
      name: 'Witnesser.WitnessExecutionFailed',
      handler: map.Witnesser?.WitnessExecutionFailed,
    },
    {
      name: 'Validator.RotationAborted',
      handler: map.Validator?.RotationAborted,
    },
    {
      name: 'Validator.NewEpoch',
      handler: map.Validator?.NewEpoch,
    },
    {
      name: 'Validator.RotationPhaseUpdated',
      handler: map.Validator?.RotationPhaseUpdated,
    },
    {
      name: 'Validator.CFEVersionUpdated',
      handler: map.Validator?.CFEVersionUpdated,
    },
    {
      name: 'Validator.PeerIdRegistered',
      handler: map.Validator?.PeerIdRegistered,
    },
    {
      name: 'Validator.PeerIdUnregistered',
      handler: map.Validator?.PeerIdUnregistered,
    },
    {
      name: 'Validator.VanityNameSet',
      handler: map.Validator?.VanityNameSet,
    },
    {
      name: 'Validator.AuctionCompleted',
      handler: map.Validator?.AuctionCompleted,
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler: map.Validator?.PalletConfigUpdated,
    },
    {
      name: 'Session.NewSession',
      handler: map.Session?.NewSession,
    },
    {
      name: 'Grandpa.NewAuthorities',
      handler: map.Grandpa?.NewAuthorities,
    },
    {
      name: 'Grandpa.Paused',
      handler: map.Grandpa?.Paused,
    },
    {
      name: 'Grandpa.Resumed',
      handler: map.Grandpa?.Resumed,
    },
    {
      name: 'Governance.Proposed',
      handler: map.Governance?.Proposed,
    },
    {
      name: 'Governance.Executed',
      handler: map.Governance?.Executed,
    },
    {
      name: 'Governance.Expired',
      handler: map.Governance?.Expired,
    },
    {
      name: 'Governance.Approved',
      handler: map.Governance?.Approved,
    },
    {
      name: 'Governance.FailedExecution',
      handler: map.Governance?.FailedExecution,
    },
    {
      name: 'Governance.DecodeOfCallFailed',
      handler: map.Governance?.DecodeOfCallFailed,
    },
    {
      name: 'Governance.UpgradeConditionsSatisfied',
      handler: map.Governance?.UpgradeConditionsSatisfied,
    },
    {
      name: 'Governance.GovKeyCallExecuted',
      handler: map.Governance?.GovKeyCallExecuted,
    },
    {
      name: 'Governance.GovKeyCallHashWhitelisted',
      handler: map.Governance?.GovKeyCallHashWhitelisted,
    },
    {
      name: 'Governance.GovKeyCallExecutionFailed',
      handler: map.Governance?.GovKeyCallExecutionFailed,
    },
    {
      name: 'TokenholderGovernance.ProposalSubmitted',
      handler: map.TokenholderGovernance?.ProposalSubmitted,
    },
    {
      name: 'TokenholderGovernance.ProposalPassed',
      handler: map.TokenholderGovernance?.ProposalPassed,
    },
    {
      name: 'TokenholderGovernance.ProposalRejected',
      handler: map.TokenholderGovernance?.ProposalRejected,
    },
    {
      name: 'TokenholderGovernance.ProposalEnacted',
      handler: map.TokenholderGovernance?.ProposalEnacted,
    },
    {
      name: 'TokenholderGovernance.GovKeyUpdatedHasFailed',
      handler: map.TokenholderGovernance?.GovKeyUpdatedHasFailed,
    },
    {
      name: 'TokenholderGovernance.GovKeyUpdatedWasSuccessful',
      handler: map.TokenholderGovernance?.GovKeyUpdatedWasSuccessful,
    },
    {
      name: 'Reputation.OffencePenalty',
      handler: map.Reputation?.OffencePenalty,
    },
    {
      name: 'Reputation.AccrualRateUpdated',
      handler: map.Reputation?.AccrualRateUpdated,
    },
    {
      name: 'Reputation.MissedHeartbeatPenaltyUpdated',
      handler: map.Reputation?.MissedHeartbeatPenaltyUpdated,
    },
    {
      name: 'Reputation.PenaltyUpdated',
      handler: map.Reputation?.PenaltyUpdated,
    },
    {
      name: 'EthereumChainTracking.ChainStateUpdated',
      handler: map.EthereumChainTracking?.ChainStateUpdated,
    },
    {
      name: 'PolkadotChainTracking.ChainStateUpdated',
      handler: map.PolkadotChainTracking?.ChainStateUpdated,
    },
    {
      name: 'BitcoinChainTracking.ChainStateUpdated',
      handler: map.BitcoinChainTracking?.ChainStateUpdated,
    },
    {
      name: 'EthereumVault.KeygenRequest',
      handler: map.EthereumVault?.KeygenRequest,
    },
    {
      name: 'EthereumVault.KeyHandoverRequest',
      handler: map.EthereumVault?.KeyHandoverRequest,
    },
    {
      name: 'EthereumVault.VaultRotationCompleted',
      handler: map.EthereumVault?.VaultRotationCompleted,
    },
    {
      name: 'EthereumVault.VaultRotatedExternally',
      handler: map.EthereumVault?.VaultRotatedExternally,
    },
    {
      name: 'EthereumVault.KeygenSuccessReported',
      handler: map.EthereumVault?.KeygenSuccessReported,
    },
    {
      name: 'EthereumVault.KeyHandoverSuccessReported',
      handler: map.EthereumVault?.KeyHandoverSuccessReported,
    },
    {
      name: 'EthereumVault.KeygenFailureReported',
      handler: map.EthereumVault?.KeygenFailureReported,
    },
    {
      name: 'EthereumVault.KeyHandoverFailureReported',
      handler: map.EthereumVault?.KeyHandoverFailureReported,
    },
    {
      name: 'EthereumVault.KeygenSuccess',
      handler: map.EthereumVault?.KeygenSuccess,
    },
    {
      name: 'EthereumVault.KeyHandoverSuccess',
      handler: map.EthereumVault?.KeyHandoverSuccess,
    },
    {
      name: 'EthereumVault.NoKeyHandover',
      handler: map.EthereumVault?.NoKeyHandover,
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
      name: 'EthereumVault.KeygenVerificationFailure',
      handler: map.EthereumVault?.KeygenVerificationFailure,
    },
    {
      name: 'EthereumVault.KeyHandoverVerificationFailure',
      handler: map.EthereumVault?.KeyHandoverVerificationFailure,
    },
    {
      name: 'EthereumVault.KeygenFailure',
      handler: map.EthereumVault?.KeygenFailure,
    },
    {
      name: 'EthereumVault.KeygenResponseTimeout',
      handler: map.EthereumVault?.KeygenResponseTimeout,
    },
    {
      name: 'EthereumVault.KeyHandoverResponseTimeout',
      handler: map.EthereumVault?.KeyHandoverResponseTimeout,
    },
    {
      name: 'EthereumVault.KeygenResponseTimeoutUpdated',
      handler: map.EthereumVault?.KeygenResponseTimeoutUpdated,
    },
    {
      name: 'EthereumVault.AwaitingGovernanceActivation',
      handler: map.EthereumVault?.AwaitingGovernanceActivation,
    },
    {
      name: 'EthereumVault.KeyHandoverFailure',
      handler: map.EthereumVault?.KeyHandoverFailure,
    },
    {
      name: 'EthereumVault.VaultRotationAborted',
      handler: map.EthereumVault?.VaultRotationAborted,
    },
    {
      name: 'PolkadotVault.KeygenRequest',
      handler: map.PolkadotVault?.KeygenRequest,
    },
    {
      name: 'PolkadotVault.KeyHandoverRequest',
      handler: map.PolkadotVault?.KeyHandoverRequest,
    },
    {
      name: 'PolkadotVault.VaultRotationCompleted',
      handler: map.PolkadotVault?.VaultRotationCompleted,
    },
    {
      name: 'PolkadotVault.VaultRotatedExternally',
      handler: map.PolkadotVault?.VaultRotatedExternally,
    },
    {
      name: 'PolkadotVault.KeygenSuccessReported',
      handler: map.PolkadotVault?.KeygenSuccessReported,
    },
    {
      name: 'PolkadotVault.KeyHandoverSuccessReported',
      handler: map.PolkadotVault?.KeyHandoverSuccessReported,
    },
    {
      name: 'PolkadotVault.KeygenFailureReported',
      handler: map.PolkadotVault?.KeygenFailureReported,
    },
    {
      name: 'PolkadotVault.KeyHandoverFailureReported',
      handler: map.PolkadotVault?.KeyHandoverFailureReported,
    },
    {
      name: 'PolkadotVault.KeygenSuccess',
      handler: map.PolkadotVault?.KeygenSuccess,
    },
    {
      name: 'PolkadotVault.KeyHandoverSuccess',
      handler: map.PolkadotVault?.KeyHandoverSuccess,
    },
    {
      name: 'PolkadotVault.NoKeyHandover',
      handler: map.PolkadotVault?.NoKeyHandover,
    },
    {
      name: 'PolkadotVault.KeygenVerificationSuccess',
      handler: map.PolkadotVault?.KeygenVerificationSuccess,
    },
    {
      name: 'PolkadotVault.KeyHandoverVerificationSuccess',
      handler: map.PolkadotVault?.KeyHandoverVerificationSuccess,
    },
    {
      name: 'PolkadotVault.KeygenVerificationFailure',
      handler: map.PolkadotVault?.KeygenVerificationFailure,
    },
    {
      name: 'PolkadotVault.KeyHandoverVerificationFailure',
      handler: map.PolkadotVault?.KeyHandoverVerificationFailure,
    },
    {
      name: 'PolkadotVault.KeygenFailure',
      handler: map.PolkadotVault?.KeygenFailure,
    },
    {
      name: 'PolkadotVault.KeygenResponseTimeout',
      handler: map.PolkadotVault?.KeygenResponseTimeout,
    },
    {
      name: 'PolkadotVault.KeyHandoverResponseTimeout',
      handler: map.PolkadotVault?.KeyHandoverResponseTimeout,
    },
    {
      name: 'PolkadotVault.KeygenResponseTimeoutUpdated',
      handler: map.PolkadotVault?.KeygenResponseTimeoutUpdated,
    },
    {
      name: 'PolkadotVault.AwaitingGovernanceActivation',
      handler: map.PolkadotVault?.AwaitingGovernanceActivation,
    },
    {
      name: 'PolkadotVault.KeyHandoverFailure',
      handler: map.PolkadotVault?.KeyHandoverFailure,
    },
    {
      name: 'PolkadotVault.VaultRotationAborted',
      handler: map.PolkadotVault?.VaultRotationAborted,
    },
    {
      name: 'BitcoinVault.KeygenRequest',
      handler: map.BitcoinVault?.KeygenRequest,
    },
    {
      name: 'BitcoinVault.KeyHandoverRequest',
      handler: map.BitcoinVault?.KeyHandoverRequest,
    },
    {
      name: 'BitcoinVault.VaultRotationCompleted',
      handler: map.BitcoinVault?.VaultRotationCompleted,
    },
    {
      name: 'BitcoinVault.VaultRotatedExternally',
      handler: map.BitcoinVault?.VaultRotatedExternally,
    },
    {
      name: 'BitcoinVault.KeygenSuccessReported',
      handler: map.BitcoinVault?.KeygenSuccessReported,
    },
    {
      name: 'BitcoinVault.KeyHandoverSuccessReported',
      handler: map.BitcoinVault?.KeyHandoverSuccessReported,
    },
    {
      name: 'BitcoinVault.KeygenFailureReported',
      handler: map.BitcoinVault?.KeygenFailureReported,
    },
    {
      name: 'BitcoinVault.KeyHandoverFailureReported',
      handler: map.BitcoinVault?.KeyHandoverFailureReported,
    },
    {
      name: 'BitcoinVault.KeygenSuccess',
      handler: map.BitcoinVault?.KeygenSuccess,
    },
    {
      name: 'BitcoinVault.KeyHandoverSuccess',
      handler: map.BitcoinVault?.KeyHandoverSuccess,
    },
    {
      name: 'BitcoinVault.NoKeyHandover',
      handler: map.BitcoinVault?.NoKeyHandover,
    },
    {
      name: 'BitcoinVault.KeygenVerificationSuccess',
      handler: map.BitcoinVault?.KeygenVerificationSuccess,
    },
    {
      name: 'BitcoinVault.KeyHandoverVerificationSuccess',
      handler: map.BitcoinVault?.KeyHandoverVerificationSuccess,
    },
    {
      name: 'BitcoinVault.KeygenVerificationFailure',
      handler: map.BitcoinVault?.KeygenVerificationFailure,
    },
    {
      name: 'BitcoinVault.KeyHandoverVerificationFailure',
      handler: map.BitcoinVault?.KeyHandoverVerificationFailure,
    },
    {
      name: 'BitcoinVault.KeygenFailure',
      handler: map.BitcoinVault?.KeygenFailure,
    },
    {
      name: 'BitcoinVault.KeygenResponseTimeout',
      handler: map.BitcoinVault?.KeygenResponseTimeout,
    },
    {
      name: 'BitcoinVault.KeyHandoverResponseTimeout',
      handler: map.BitcoinVault?.KeyHandoverResponseTimeout,
    },
    {
      name: 'BitcoinVault.KeygenResponseTimeoutUpdated',
      handler: map.BitcoinVault?.KeygenResponseTimeoutUpdated,
    },
    {
      name: 'BitcoinVault.AwaitingGovernanceActivation',
      handler: map.BitcoinVault?.AwaitingGovernanceActivation,
    },
    {
      name: 'BitcoinVault.KeyHandoverFailure',
      handler: map.BitcoinVault?.KeyHandoverFailure,
    },
    {
      name: 'BitcoinVault.VaultRotationAborted',
      handler: map.BitcoinVault?.VaultRotationAborted,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureRequest',
      handler: map.EthereumThresholdSigner?.ThresholdSignatureRequest,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureFailed',
      handler: map.EthereumThresholdSigner?.ThresholdSignatureFailed,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureSuccess',
      handler: map.EthereumThresholdSigner?.ThresholdSignatureSuccess,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdDispatchComplete',
      handler: map.EthereumThresholdSigner?.ThresholdDispatchComplete,
    },
    {
      name: 'EthereumThresholdSigner.RetryRequested',
      handler: map.EthereumThresholdSigner?.RetryRequested,
    },
    {
      name: 'EthereumThresholdSigner.FailureReportProcessed',
      handler: map.EthereumThresholdSigner?.FailureReportProcessed,
    },
    {
      name: 'EthereumThresholdSigner.SignersUnavailable',
      handler: map.EthereumThresholdSigner?.SignersUnavailable,
    },
    {
      name: 'EthereumThresholdSigner.CurrentKeyUnavailable',
      handler: map.EthereumThresholdSigner?.CurrentKeyUnavailable,
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler: map.EthereumThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated,
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureRequest',
      handler: map.PolkadotThresholdSigner?.ThresholdSignatureRequest,
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureFailed',
      handler: map.PolkadotThresholdSigner?.ThresholdSignatureFailed,
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureSuccess',
      handler: map.PolkadotThresholdSigner?.ThresholdSignatureSuccess,
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdDispatchComplete',
      handler: map.PolkadotThresholdSigner?.ThresholdDispatchComplete,
    },
    {
      name: 'PolkadotThresholdSigner.RetryRequested',
      handler: map.PolkadotThresholdSigner?.RetryRequested,
    },
    {
      name: 'PolkadotThresholdSigner.FailureReportProcessed',
      handler: map.PolkadotThresholdSigner?.FailureReportProcessed,
    },
    {
      name: 'PolkadotThresholdSigner.SignersUnavailable',
      handler: map.PolkadotThresholdSigner?.SignersUnavailable,
    },
    {
      name: 'PolkadotThresholdSigner.CurrentKeyUnavailable',
      handler: map.PolkadotThresholdSigner?.CurrentKeyUnavailable,
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler: map.PolkadotThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated,
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureRequest',
      handler: map.BitcoinThresholdSigner?.ThresholdSignatureRequest,
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureFailed',
      handler: map.BitcoinThresholdSigner?.ThresholdSignatureFailed,
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureSuccess',
      handler: map.BitcoinThresholdSigner?.ThresholdSignatureSuccess,
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdDispatchComplete',
      handler: map.BitcoinThresholdSigner?.ThresholdDispatchComplete,
    },
    {
      name: 'BitcoinThresholdSigner.RetryRequested',
      handler: map.BitcoinThresholdSigner?.RetryRequested,
    },
    {
      name: 'BitcoinThresholdSigner.FailureReportProcessed',
      handler: map.BitcoinThresholdSigner?.FailureReportProcessed,
    },
    {
      name: 'BitcoinThresholdSigner.SignersUnavailable',
      handler: map.BitcoinThresholdSigner?.SignersUnavailable,
    },
    {
      name: 'BitcoinThresholdSigner.CurrentKeyUnavailable',
      handler: map.BitcoinThresholdSigner?.CurrentKeyUnavailable,
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler: map.BitcoinThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated,
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
      name: 'EthereumBroadcaster.BroadcastAttemptTimeout',
      handler: map.EthereumBroadcaster?.BroadcastAttemptTimeout,
    },
    {
      name: 'EthereumBroadcaster.BroadcastAborted',
      handler: map.EthereumBroadcaster?.BroadcastAborted,
    },
    {
      name: 'EthereumBroadcaster.BroadcastSuccess',
      handler: map.EthereumBroadcaster?.BroadcastSuccess,
    },
    {
      name: 'EthereumBroadcaster.ThresholdSignatureInvalid',
      handler: map.EthereumBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'EthereumBroadcaster.BroadcastCallbackExecuted',
      handler: map.EthereumBroadcaster?.BroadcastCallbackExecuted,
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
      name: 'PolkadotBroadcaster.BroadcastAttemptTimeout',
      handler: map.PolkadotBroadcaster?.BroadcastAttemptTimeout,
    },
    {
      name: 'PolkadotBroadcaster.BroadcastAborted',
      handler: map.PolkadotBroadcaster?.BroadcastAborted,
    },
    {
      name: 'PolkadotBroadcaster.BroadcastSuccess',
      handler: map.PolkadotBroadcaster?.BroadcastSuccess,
    },
    {
      name: 'PolkadotBroadcaster.ThresholdSignatureInvalid',
      handler: map.PolkadotBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'PolkadotBroadcaster.BroadcastCallbackExecuted',
      handler: map.PolkadotBroadcaster?.BroadcastCallbackExecuted,
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
      name: 'BitcoinBroadcaster.BroadcastAttemptTimeout',
      handler: map.BitcoinBroadcaster?.BroadcastAttemptTimeout,
    },
    {
      name: 'BitcoinBroadcaster.BroadcastAborted',
      handler: map.BitcoinBroadcaster?.BroadcastAborted,
    },
    {
      name: 'BitcoinBroadcaster.BroadcastSuccess',
      handler: map.BitcoinBroadcaster?.BroadcastSuccess,
    },
    {
      name: 'BitcoinBroadcaster.ThresholdSignatureInvalid',
      handler: map.BitcoinBroadcaster?.ThresholdSignatureInvalid,
    },
    {
      name: 'BitcoinBroadcaster.BroadcastCallbackExecuted',
      handler: map.BitcoinBroadcaster?.BroadcastCallbackExecuted,
    },
    {
      name: 'Swapping.SwapDepositAddressReady',
      handler: map.Swapping?.SwapDepositAddressReady,
    },
    {
      name: 'Swapping.SwapScheduled',
      handler: map.Swapping?.SwapScheduled,
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
      name: 'Swapping.BatchSwapFailed',
      handler: map.Swapping?.BatchSwapFailed,
    },
    {
      name: 'Swapping.CcmEgressScheduled',
      handler: map.Swapping?.CcmEgressScheduled,
    },
    {
      name: 'Swapping.SwapDepositAddressExpired',
      handler: map.Swapping?.SwapDepositAddressExpired,
    },
    {
      name: 'Swapping.SwapTtlSet',
      handler: map.Swapping?.SwapTtlSet,
    },
    {
      name: 'Swapping.CcmDepositReceived',
      handler: map.Swapping?.CcmDepositReceived,
    },
    {
      name: 'Swapping.MinimumSwapAmountSet',
      handler: map.Swapping?.MinimumSwapAmountSet,
    },
    {
      name: 'Swapping.SwapAmountTooLow',
      handler: map.Swapping?.SwapAmountTooLow,
    },
    {
      name: 'Swapping.CcmFailed',
      handler: map.Swapping?.CcmFailed,
    },
    {
      name: 'LiquidityProvider.AccountDebited',
      handler: map.LiquidityProvider?.AccountDebited,
    },
    {
      name: 'LiquidityProvider.AccountCredited',
      handler: map.LiquidityProvider?.AccountCredited,
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler: map.LiquidityProvider?.LiquidityDepositAddressReady,
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressExpired',
      handler: map.LiquidityProvider?.LiquidityDepositAddressExpired,
    },
    {
      name: 'LiquidityProvider.WithdrawalEgressScheduled',
      handler: map.LiquidityProvider?.WithdrawalEgressScheduled,
    },
    {
      name: 'LiquidityProvider.LpTtlSet',
      handler: map.LiquidityProvider?.LpTtlSet,
    },
    {
      name: 'LiquidityProvider.EmergencyWithdrawalAddressRegistered',
      handler: map.LiquidityProvider?.EmergencyWithdrawalAddressRegistered,
    },
    {
      name: 'EthereumIngressEgress.StartWitnessing',
      handler: map.EthereumIngressEgress?.StartWitnessing,
    },
    {
      name: 'EthereumIngressEgress.StopWitnessing',
      handler: map.EthereumIngressEgress?.StopWitnessing,
    },
    {
      name: 'EthereumIngressEgress.DepositReceived',
      handler: map.EthereumIngressEgress?.DepositReceived,
    },
    {
      name: 'EthereumIngressEgress.AssetEgressStatusChanged',
      handler: map.EthereumIngressEgress?.AssetEgressStatusChanged,
    },
    {
      name: 'EthereumIngressEgress.EgressScheduled',
      handler: map.EthereumIngressEgress?.EgressScheduled,
    },
    {
      name: 'EthereumIngressEgress.CcmBroadcastRequested',
      handler: map.EthereumIngressEgress?.CcmBroadcastRequested,
    },
    {
      name: 'EthereumIngressEgress.CcmEgressInvalid',
      handler: map.EthereumIngressEgress?.CcmEgressInvalid,
    },
    {
      name: 'EthereumIngressEgress.DepositFetchesScheduled',
      handler: map.EthereumIngressEgress?.DepositFetchesScheduled,
    },
    {
      name: 'EthereumIngressEgress.BatchBroadcastRequested',
      handler: map.EthereumIngressEgress?.BatchBroadcastRequested,
    },
    {
      name: 'EthereumIngressEgress.MinimumDepositSet',
      handler: map.EthereumIngressEgress?.MinimumDepositSet,
    },
    {
      name: 'EthereumIngressEgress.DepositIgnored',
      handler: map.EthereumIngressEgress?.DepositIgnored,
    },
    {
      name: 'EthereumIngressEgress.VaultTransferFailed',
      handler: map.EthereumIngressEgress?.VaultTransferFailed,
    },
    {
      name: 'PolkadotIngressEgress.StartWitnessing',
      handler: map.PolkadotIngressEgress?.StartWitnessing,
    },
    {
      name: 'PolkadotIngressEgress.StopWitnessing',
      handler: map.PolkadotIngressEgress?.StopWitnessing,
    },
    {
      name: 'PolkadotIngressEgress.DepositReceived',
      handler: map.PolkadotIngressEgress?.DepositReceived,
    },
    {
      name: 'PolkadotIngressEgress.AssetEgressStatusChanged',
      handler: map.PolkadotIngressEgress?.AssetEgressStatusChanged,
    },
    {
      name: 'PolkadotIngressEgress.EgressScheduled',
      handler: map.PolkadotIngressEgress?.EgressScheduled,
    },
    {
      name: 'PolkadotIngressEgress.CcmBroadcastRequested',
      handler: map.PolkadotIngressEgress?.CcmBroadcastRequested,
    },
    {
      name: 'PolkadotIngressEgress.CcmEgressInvalid',
      handler: map.PolkadotIngressEgress?.CcmEgressInvalid,
    },
    {
      name: 'PolkadotIngressEgress.DepositFetchesScheduled',
      handler: map.PolkadotIngressEgress?.DepositFetchesScheduled,
    },
    {
      name: 'PolkadotIngressEgress.BatchBroadcastRequested',
      handler: map.PolkadotIngressEgress?.BatchBroadcastRequested,
    },
    {
      name: 'PolkadotIngressEgress.MinimumDepositSet',
      handler: map.PolkadotIngressEgress?.MinimumDepositSet,
    },
    {
      name: 'PolkadotIngressEgress.DepositIgnored',
      handler: map.PolkadotIngressEgress?.DepositIgnored,
    },
    {
      name: 'PolkadotIngressEgress.VaultTransferFailed',
      handler: map.PolkadotIngressEgress?.VaultTransferFailed,
    },
    {
      name: 'BitcoinIngressEgress.StartWitnessing',
      handler: map.BitcoinIngressEgress?.StartWitnessing,
    },
    {
      name: 'BitcoinIngressEgress.StopWitnessing',
      handler: map.BitcoinIngressEgress?.StopWitnessing,
    },
    {
      name: 'BitcoinIngressEgress.DepositReceived',
      handler: map.BitcoinIngressEgress?.DepositReceived,
    },
    {
      name: 'BitcoinIngressEgress.AssetEgressStatusChanged',
      handler: map.BitcoinIngressEgress?.AssetEgressStatusChanged,
    },
    {
      name: 'BitcoinIngressEgress.EgressScheduled',
      handler: map.BitcoinIngressEgress?.EgressScheduled,
    },
    {
      name: 'BitcoinIngressEgress.CcmBroadcastRequested',
      handler: map.BitcoinIngressEgress?.CcmBroadcastRequested,
    },
    {
      name: 'BitcoinIngressEgress.CcmEgressInvalid',
      handler: map.BitcoinIngressEgress?.CcmEgressInvalid,
    },
    {
      name: 'BitcoinIngressEgress.DepositFetchesScheduled',
      handler: map.BitcoinIngressEgress?.DepositFetchesScheduled,
    },
    {
      name: 'BitcoinIngressEgress.BatchBroadcastRequested',
      handler: map.BitcoinIngressEgress?.BatchBroadcastRequested,
    },
    {
      name: 'BitcoinIngressEgress.MinimumDepositSet',
      handler: map.BitcoinIngressEgress?.MinimumDepositSet,
    },
    {
      name: 'BitcoinIngressEgress.DepositIgnored',
      handler: map.BitcoinIngressEgress?.DepositIgnored,
    },
    {
      name: 'BitcoinIngressEgress.VaultTransferFailed',
      handler: map.BitcoinIngressEgress?.VaultTransferFailed,
    },
    {
      name: 'LiquidityPools.UpdatedBuyInterval',
      handler: map.LiquidityPools?.UpdatedBuyInterval,
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
      name: 'LiquidityPools.RangeOrderMinted',
      handler: map.LiquidityPools?.RangeOrderMinted,
    },
    {
      name: 'LiquidityPools.RangeOrderBurned',
      handler: map.LiquidityPools?.RangeOrderBurned,
    },
    {
      name: 'LiquidityPools.LimitOrderMinted',
      handler: map.LiquidityPools?.LimitOrderMinted,
    },
    {
      name: 'LiquidityPools.LimitOrderBurned',
      handler: map.LiquidityPools?.LimitOrderBurned,
    },
    {
      name: 'LiquidityPools.NetworkFeeTaken',
      handler: map.LiquidityPools?.NetworkFeeTaken,
    },
    {
      name: 'LiquidityPools.AssetSwapped',
      handler: map.LiquidityPools?.AssetSwapped,
    },
    {
      name: 'LiquidityPools.LiquidityFeeUpdated',
      handler: map.LiquidityPools?.LiquidityFeeUpdated,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
