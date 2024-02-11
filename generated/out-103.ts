import { z } from 'zod';
import { encodeAddress } from '@polkadot/util-crypto';

const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

const frameSupportDispatchDispatchClass = simpleEnum([
  'Normal',
  'Operational',
  'Mandatory',
]);

const frameSupportDispatchPays = simpleEnum(['Yes', 'No']);

export const systemEventExtrinsicSuccess = z.object({
  dispatchInfo: z.object({
    weight: z.object({ refTime: numberOrHex, proofSize: numberOrHex }),
    class: frameSupportDispatchDispatchClass,
    paysFee: frameSupportDispatchPays,
  }),
});

export type SystemEventExtrinsicSuccessArgs = z.output<
  typeof systemEventExtrinsicSuccess
>;

const spRuntimeTokenError = simpleEnum([
  'FundsUnavailable',
  'OnlyProvider',
  'BelowMinimum',
  'CannotCreate',
  'UnknownAsset',
  'Frozen',
  'Unsupported',
  'CannotCreateHold',
  'NotExpendable',
  'Blocked',
]);

const spArithmeticArithmeticError = simpleEnum([
  'Underflow',
  'Overflow',
  'DivisionByZero',
]);

const spRuntimeTransactionalError = simpleEnum(['LimitReached', 'NoLayer']);

const spRuntimeDispatchError = z.union([
  z.object({ __kind: z.literal('Other') }),
  z.object({ __kind: z.literal('CannotLookup') }),
  z.object({ __kind: z.literal('BadOrigin') }),
  z.object({
    __kind: z.literal('Module'),
    value: z.object({ index: z.number(), error: hexString }),
  }),
  z.object({ __kind: z.literal('ConsumerRemaining') }),
  z.object({ __kind: z.literal('NoProviders') }),
  z.object({ __kind: z.literal('TooManyConsumers') }),
  z.object({ __kind: z.literal('Token'), value: spRuntimeTokenError }),
  z.object({
    __kind: z.literal('Arithmetic'),
    value: spArithmeticArithmeticError,
  }),
  z.object({
    __kind: z.literal('Transactional'),
    value: spRuntimeTransactionalError,
  }),
  z.object({ __kind: z.literal('Exhausted') }),
  z.object({ __kind: z.literal('Corruption') }),
  z.object({ __kind: z.literal('Unavailable') }),
  z.object({ __kind: z.literal('RootNotAllowed') }),
]);

export const systemEventExtrinsicFailed = z.object({
  dispatchError: spRuntimeDispatchError,
  dispatchInfo: z.object({
    weight: z.object({ refTime: numberOrHex, proofSize: numberOrHex }),
    class: frameSupportDispatchDispatchClass,
    paysFee: frameSupportDispatchPays,
  }),
});

export type SystemEventExtrinsicFailedArgs = z.output<
  typeof systemEventExtrinsicFailed
>;

export const systemEventCodeUpdated = z.null();

export type SystemEventCodeUpdatedArgs = z.output<
  typeof systemEventCodeUpdated
>;

const accountId = z
  .union([
    hexString,
    z
      .string()
      .regex(/^[0-9a-f]+$/)
      .transform((v) => `0x${v}`),
  ])
  .transform((value) => encodeAddress(value, 2112));

export const systemEventNewAccount = z.object({ account: accountId });

export type SystemEventNewAccountArgs = z.output<typeof systemEventNewAccount>;

export const systemEventKilledAccount = z.object({ account: accountId });

export type SystemEventKilledAccountArgs = z.output<
  typeof systemEventKilledAccount
>;

export const systemEventRemarked = z.object({
  sender: accountId,
  hash_: hexString,
});

export type SystemEventRemarkedArgs = z.output<typeof systemEventRemarked>;

const cfPrimitivesChainsAssetsEthAsset = simpleEnum(['Eth', 'Flip', 'Usdc']);

export const environmentEventAddedNewEthAsset = z.tuple([
  cfPrimitivesChainsAssetsEthAsset,
  hexString,
]);

export type EnvironmentEventAddedNewEthAssetArgs = z.output<
  typeof environmentEventAddedNewEthAsset
>;

export const environmentEventUpdatedEthAsset = z.tuple([
  cfPrimitivesChainsAssetsEthAsset,
  hexString,
]);

export type EnvironmentEventUpdatedEthAssetArgs = z.output<
  typeof environmentEventUpdatedEthAsset
>;

export const environmentEventPolkadotVaultAccountSet = z.object({
  polkadotVaultAccountId: hexString,
});

export type EnvironmentEventPolkadotVaultAccountSetArgs = z.output<
  typeof environmentEventPolkadotVaultAccountSet
>;

export const environmentEventBitcoinBlockNumberSetForVault = z.object({
  blockNumber: numberOrHex,
});

export type EnvironmentEventBitcoinBlockNumberSetForVaultArgs = z.output<
  typeof environmentEventBitcoinBlockNumberSetForVault
>;

const palletCfWitnesserPalletSafeMode = z.union([
  z.object({ __kind: z.literal('CodeGreen') }),
  z.object({ __kind: z.literal('CodeRed') }),
  z.object({
    __kind: z.literal('CodeAmber'),
    value: z.object({
      governance: z.boolean(),
      funding: z.boolean(),
      swapping: z.boolean(),
      ethereumBroadcast: z.boolean(),
      ethereumChainTracking: z.boolean(),
      ethereumIngressEgress: z.boolean(),
      ethereumVault: z.boolean(),
      polkadotBroadcast: z.boolean(),
      polkadotChainTracking: z.boolean(),
      polkadotIngressEgress: z.boolean(),
      polkadotVault: z.boolean(),
      bitcoinBroadcast: z.boolean(),
      bitcoinChainTracking: z.boolean(),
      bitcoinIngressEgress: z.boolean(),
      bitcoinVault: z.boolean(),
    }),
  }),
]);

const palletCfEnvironmentSafeModeUpdate = z.union([
  z.object({ __kind: z.literal('CodeRed') }),
  z.object({ __kind: z.literal('CodeGreen') }),
  z.object({
    __kind: z.literal('CodeAmber'),
    value: z.object({
      emissions: z.object({ emissionsSyncEnabled: z.boolean() }),
      funding: z.object({
        redeemEnabled: z.boolean(),
        startBiddingEnabled: z.boolean(),
        stopBiddingEnabled: z.boolean(),
      }),
      swapping: z.object({
        swapsEnabled: z.boolean(),
        withdrawalsEnabled: z.boolean(),
        depositsEnabled: z.boolean(),
        brokerRegistrationEnabled: z.boolean(),
      }),
      liquidityProvider: z.object({
        depositEnabled: z.boolean(),
        withdrawalEnabled: z.boolean(),
      }),
      validator: z.object({ authorityRotationEnabled: z.boolean() }),
      pools: z.object({
        rangeOrderUpdateEnabled: z.boolean(),
        limitOrderUpdateEnabled: z.boolean(),
      }),
      reputation: z.object({ reportingEnabled: z.boolean() }),
      vaultEthereum: z.object({ slashingEnabled: z.boolean() }),
      vaultBitcoin: z.object({ slashingEnabled: z.boolean() }),
      vaultPolkadot: z.object({ slashingEnabled: z.boolean() }),
      broadcastEthereum: z.object({ retryEnabled: z.boolean() }),
      broadcastBitcoin: z.object({ retryEnabled: z.boolean() }),
      broadcastPolkadot: z.object({ retryEnabled: z.boolean() }),
      witnesser: palletCfWitnesserPalletSafeMode,
    }),
  }),
]);

export const environmentEventRuntimeSafeModeUpdated = z.object({
  safeMode: palletCfEnvironmentSafeModeUpdate,
});

export type EnvironmentEventRuntimeSafeModeUpdatedArgs = z.output<
  typeof environmentEventRuntimeSafeModeUpdated
>;

const palletCfFlipImbalancesInternalSource = z.union([
  z.object({ __kind: z.literal('Account'), value: accountId }),
  z.object({ __kind: z.literal('Reserve'), value: hexString }),
  z.object({ __kind: z.literal('PendingRedemption'), value: accountId }),
]);

const palletCfFlipImbalancesImbalanceSource = z.union([
  z.object({ __kind: z.literal('External') }),
  z.object({
    __kind: z.literal('Internal'),
    value: palletCfFlipImbalancesInternalSource,
  }),
  z.object({ __kind: z.literal('Emissions') }),
]);

export const flipEventRemainingImbalance = z.object({
  who: palletCfFlipImbalancesImbalanceSource,
  remainingImbalance: numberOrHex,
});

export type FlipEventRemainingImbalanceArgs = z.output<
  typeof flipEventRemainingImbalance
>;

export const flipEventSlashingPerformed = z.object({
  who: accountId,
  amount: numberOrHex,
});

export type FlipEventSlashingPerformedArgs = z.output<
  typeof flipEventSlashingPerformed
>;

export const flipEventAccountReaped = z.object({
  who: accountId,
  dustBurned: numberOrHex,
});

export type FlipEventAccountReapedArgs = z.output<
  typeof flipEventAccountReaped
>;

export const flipEventSlashingRateUpdated = z.object({
  slashingRate: z.number(),
});

export type FlipEventSlashingRateUpdatedArgs = z.output<
  typeof flipEventSlashingRateUpdated
>;

export const emissionsEventSupplyUpdateBroadcastRequested = z.number();

export type EmissionsEventSupplyUpdateBroadcastRequestedArgs = z.output<
  typeof emissionsEventSupplyUpdateBroadcastRequested
>;

export const emissionsEventCurrentAuthorityInflationEmissionsUpdated =
  z.number();

export type EmissionsEventCurrentAuthorityInflationEmissionsUpdatedArgs =
  z.output<typeof emissionsEventCurrentAuthorityInflationEmissionsUpdated>;

export const emissionsEventBackupNodeInflationEmissionsUpdated = z.number();

export type EmissionsEventBackupNodeInflationEmissionsUpdatedArgs = z.output<
  typeof emissionsEventBackupNodeInflationEmissionsUpdated
>;

export const emissionsEventSupplyUpdateIntervalUpdated = z.number();

export type EmissionsEventSupplyUpdateIntervalUpdatedArgs = z.output<
  typeof emissionsEventSupplyUpdateIntervalUpdated
>;

export const fundingEventFunded = z.object({
  accountId,
  txHash: hexString,
  fundsAdded: numberOrHex,
  totalBalance: numberOrHex,
});

export type FundingEventFundedArgs = z.output<typeof fundingEventFunded>;

export const fundingEventRedemptionRequested = z.object({
  accountId,
  amount: numberOrHex,
  broadcastId: z.number(),
  expiryTime: numberOrHex,
});

export type FundingEventRedemptionRequestedArgs = z.output<
  typeof fundingEventRedemptionRequested
>;

export const fundingEventRedemptionSettled = z.tuple([accountId, numberOrHex]);

export type FundingEventRedemptionSettledArgs = z.output<
  typeof fundingEventRedemptionSettled
>;

export const fundingEventStoppedBidding = z.object({ accountId });

export type FundingEventStoppedBiddingArgs = z.output<
  typeof fundingEventStoppedBidding
>;

export const fundingEventStartedBidding = z.object({ accountId });

export type FundingEventStartedBiddingArgs = z.output<
  typeof fundingEventStartedBidding
>;

export const fundingEventRedemptionExpired = z.object({ accountId });

export type FundingEventRedemptionExpiredArgs = z.output<
  typeof fundingEventRedemptionExpired
>;

export const fundingEventAddedRestrictedAddress = z.object({
  address: hexString,
});

export type FundingEventAddedRestrictedAddressArgs = z.output<
  typeof fundingEventAddedRestrictedAddress
>;

export const fundingEventRemovedRestrictedAddress = z.object({
  address: hexString,
});

export type FundingEventRemovedRestrictedAddressArgs = z.output<
  typeof fundingEventRemovedRestrictedAddress
>;

export const fundingEventFailedFundingAttempt = z.object({
  accountId,
  withdrawalAddress: hexString,
  amount: numberOrHex,
});

export type FundingEventFailedFundingAttemptArgs = z.output<
  typeof fundingEventFailedFundingAttempt
>;

export const fundingEventMinimumFundingUpdated = z.object({
  newMinimum: numberOrHex,
});

export type FundingEventMinimumFundingUpdatedArgs = z.output<
  typeof fundingEventMinimumFundingUpdated
>;

export const fundingEventRedemptionTaxAmountUpdated = z.object({
  amount: numberOrHex,
});

export type FundingEventRedemptionTaxAmountUpdatedArgs = z.output<
  typeof fundingEventRedemptionTaxAmountUpdated
>;

export const fundingEventRedemptionAmountZero = z.object({ accountId });

export type FundingEventRedemptionAmountZeroArgs = z.output<
  typeof fundingEventRedemptionAmountZero
>;

export const fundingEventBoundRedeemAddress = z.object({
  accountId,
  address: hexString,
});

export type FundingEventBoundRedeemAddressArgs = z.output<
  typeof fundingEventBoundRedeemAddress
>;

export const fundingEventBoundExecutorAddress = z.object({
  accountId,
  address: hexString,
});

export type FundingEventBoundExecutorAddressArgs = z.output<
  typeof fundingEventBoundExecutorAddress
>;

const cfPrimitivesAccountRole = simpleEnum([
  'Unregistered',
  'Validator',
  'LiquidityProvider',
  'Broker',
]);

export const accountRolesEventAccountRoleRegistered = z.object({
  accountId,
  role: cfPrimitivesAccountRole,
});

export type AccountRolesEventAccountRoleRegisteredArgs = z.output<
  typeof accountRolesEventAccountRoleRegistered
>;

export const transactionPaymentEventTransactionFeePaid = z.object({
  who: accountId,
  actualFee: numberOrHex,
  tip: numberOrHex,
});

export type TransactionPaymentEventTransactionFeePaidArgs = z.output<
  typeof transactionPaymentEventTransactionFeePaid
>;

export const witnesserEventWitnessExecutionFailed = z.object({
  callHash: hexString,
  error: spRuntimeDispatchError,
});

export type WitnesserEventWitnessExecutionFailedArgs = z.output<
  typeof witnesserEventWitnessExecutionFailed
>;

export const witnesserEventPrewitnessed = z.object({ call: z.unknown() });

export type WitnesserEventPrewitnessedArgs = z.output<
  typeof witnesserEventPrewitnessed
>;

export const validatorEventRotationAborted = z.null();

export type ValidatorEventRotationAbortedArgs = z.output<
  typeof validatorEventRotationAborted
>;

export const validatorEventNewEpoch = z.number();

export type ValidatorEventNewEpochArgs = z.output<
  typeof validatorEventNewEpoch
>;

const palletCfValidatorRotationPhase = z.union([
  z.object({ __kind: z.literal('Idle') }),
  z.object({
    __kind: z.literal('KeygensInProgress'),
    value: z.object({
      primaryCandidates: z.array(accountId),
      secondaryCandidates: z.array(accountId),
      banned: z.array(accountId),
      bond: numberOrHex,
      newEpochIndex: z.number(),
    }),
  }),
  z.object({
    __kind: z.literal('KeyHandoversInProgress'),
    value: z.object({
      primaryCandidates: z.array(accountId),
      secondaryCandidates: z.array(accountId),
      banned: z.array(accountId),
      bond: numberOrHex,
      newEpochIndex: z.number(),
    }),
  }),
  z.object({
    __kind: z.literal('ActivatingKeys'),
    value: z.object({
      primaryCandidates: z.array(accountId),
      secondaryCandidates: z.array(accountId),
      banned: z.array(accountId),
      bond: numberOrHex,
      newEpochIndex: z.number(),
    }),
  }),
  z.object({
    __kind: z.literal('NewKeysActivated'),
    value: z.object({
      primaryCandidates: z.array(accountId),
      secondaryCandidates: z.array(accountId),
      banned: z.array(accountId),
      bond: numberOrHex,
      newEpochIndex: z.number(),
    }),
  }),
  z.object({
    __kind: z.literal('SessionRotating'),
    value: z.object({
      primaryCandidates: z.array(accountId),
      secondaryCandidates: z.array(accountId),
      banned: z.array(accountId),
      bond: numberOrHex,
      newEpochIndex: z.number(),
    }),
  }),
]);

export const validatorEventRotationPhaseUpdated = z.object({
  newPhase: palletCfValidatorRotationPhase,
});

export type ValidatorEventRotationPhaseUpdatedArgs = z.output<
  typeof validatorEventRotationPhaseUpdated
>;

export const validatorEventCFEVersionUpdated = z.object({
  accountId,
  oldVersion: z.object({
    major: z.number(),
    minor: z.number(),
    patch: z.number(),
  }),
  newVersion: z.object({
    major: z.number(),
    minor: z.number(),
    patch: z.number(),
  }),
});

export type ValidatorEventCFEVersionUpdatedArgs = z.output<
  typeof validatorEventCFEVersionUpdated
>;

export const validatorEventPeerIdRegistered = z.tuple([
  accountId,
  hexString,
  z.number(),
  numberOrHex,
]);

export type ValidatorEventPeerIdRegisteredArgs = z.output<
  typeof validatorEventPeerIdRegistered
>;

export const validatorEventPeerIdUnregistered = z.tuple([accountId, hexString]);

export type ValidatorEventPeerIdUnregisteredArgs = z.output<
  typeof validatorEventPeerIdUnregistered
>;

export const validatorEventVanityNameSet = z.tuple([accountId, hexString]);

export type ValidatorEventVanityNameSetArgs = z.output<
  typeof validatorEventVanityNameSet
>;

export const validatorEventAuctionCompleted = z.tuple([
  z.array(accountId),
  numberOrHex,
]);

export type ValidatorEventAuctionCompletedArgs = z.output<
  typeof validatorEventAuctionCompleted
>;

const palletCfValidatorPalletConfigUpdate = z.union([
  z.object({
    __kind: z.literal('RegistrationBondPercentage'),
    value: z.object({ percentage: z.number() }),
  }),
  z.object({
    __kind: z.literal('AuctionBidCutoffPercentage'),
    value: z.object({ percentage: z.number() }),
  }),
  z.object({
    __kind: z.literal('RedemptionPeriodAsPercentage'),
    value: z.object({ percentage: z.number() }),
  }),
  z.object({
    __kind: z.literal('BackupRewardNodePercentage'),
    value: z.object({ percentage: z.number() }),
  }),
  z.object({
    __kind: z.literal('EpochDuration'),
    value: z.object({ blocks: z.number() }),
  }),
  z.object({
    __kind: z.literal('AuthoritySetMinSize'),
    value: z.object({ minSize: z.number() }),
  }),
  z.object({
    __kind: z.literal('AuctionParameters'),
    value: z.object({
      parameters: z.object({
        minSize: z.number(),
        maxSize: z.number(),
        maxExpansion: z.number(),
      }),
    }),
  }),
  z.object({
    __kind: z.literal('MinimumReportedCfeVersion'),
    value: z.object({
      version: z.object({
        major: z.number(),
        minor: z.number(),
        patch: z.number(),
      }),
    }),
  }),
  z.object({
    __kind: z.literal('MaxAuthoritySetContractionPercentage'),
    value: z.object({ percentage: z.number() }),
  }),
]);

export const validatorEventPalletConfigUpdated = z.object({
  update: palletCfValidatorPalletConfigUpdate,
});

export type ValidatorEventPalletConfigUpdatedArgs = z.output<
  typeof validatorEventPalletConfigUpdated
>;

export const sessionEventNewSession = z.object({ sessionIndex: z.number() });

export type SessionEventNewSessionArgs = z.output<
  typeof sessionEventNewSession
>;

export const grandpaEventNewAuthorities = z.object({
  authoritySet: z.array(z.tuple([hexString, numberOrHex])),
});

export type GrandpaEventNewAuthoritiesArgs = z.output<
  typeof grandpaEventNewAuthorities
>;

export const grandpaEventPaused = z.null();

export type GrandpaEventPausedArgs = z.output<typeof grandpaEventPaused>;

export const grandpaEventResumed = z.null();

export type GrandpaEventResumedArgs = z.output<typeof grandpaEventResumed>;

export const governanceEventProposed = z.number();

export type GovernanceEventProposedArgs = z.output<
  typeof governanceEventProposed
>;

export const governanceEventExecuted = z.number();

export type GovernanceEventExecutedArgs = z.output<
  typeof governanceEventExecuted
>;

export const governanceEventExpired = z.number();

export type GovernanceEventExpiredArgs = z.output<
  typeof governanceEventExpired
>;

export const governanceEventApproved = z.number();

export type GovernanceEventApprovedArgs = z.output<
  typeof governanceEventApproved
>;

export const governanceEventFailedExecution = spRuntimeDispatchError;

export type GovernanceEventFailedExecutionArgs = z.output<
  typeof governanceEventFailedExecution
>;

export const governanceEventDecodeOfCallFailed = z.number();

export type GovernanceEventDecodeOfCallFailedArgs = z.output<
  typeof governanceEventDecodeOfCallFailed
>;

export const governanceEventGovKeyCallExecuted = z.object({
  callHash: hexString,
});

export type GovernanceEventGovKeyCallExecutedArgs = z.output<
  typeof governanceEventGovKeyCallExecuted
>;

export const governanceEventGovKeyCallHashWhitelisted = z.object({
  callHash: hexString,
});

export type GovernanceEventGovKeyCallHashWhitelistedArgs = z.output<
  typeof governanceEventGovKeyCallHashWhitelisted
>;

export const governanceEventGovKeyCallExecutionFailed = z.object({
  callHash: hexString,
  error: spRuntimeDispatchError,
});

export type GovernanceEventGovKeyCallExecutionFailedArgs = z.output<
  typeof governanceEventGovKeyCallExecutionFailed
>;

const cfPrimitivesChainsForeignChain = simpleEnum([
  'Ethereum',
  'Polkadot',
  'Bitcoin',
]);

const palletCfTokenholderGovernanceProposal = z.union([
  z.object({
    __kind: z.literal('SetGovernanceKey'),
    value: z.tuple([cfPrimitivesChainsForeignChain, hexString]),
  }),
  z.object({ __kind: z.literal('SetCommunityKey'), value: hexString }),
]);

export const tokenholderGovernanceEventProposalSubmitted = z.object({
  proposal: palletCfTokenholderGovernanceProposal,
});

export type TokenholderGovernanceEventProposalSubmittedArgs = z.output<
  typeof tokenholderGovernanceEventProposalSubmitted
>;

export const tokenholderGovernanceEventProposalPassed = z.object({
  proposal: palletCfTokenholderGovernanceProposal,
});

export type TokenholderGovernanceEventProposalPassedArgs = z.output<
  typeof tokenholderGovernanceEventProposalPassed
>;

export const tokenholderGovernanceEventProposalRejected = z.object({
  proposal: palletCfTokenholderGovernanceProposal,
});

export type TokenholderGovernanceEventProposalRejectedArgs = z.output<
  typeof tokenholderGovernanceEventProposalRejected
>;

export const tokenholderGovernanceEventProposalEnacted = z.object({
  proposal: palletCfTokenholderGovernanceProposal,
});

export type TokenholderGovernanceEventProposalEnactedArgs = z.output<
  typeof tokenholderGovernanceEventProposalEnacted
>;

export const tokenholderGovernanceEventGovKeyUpdatedHasFailed = z.object({
  chain: cfPrimitivesChainsForeignChain,
  key: hexString,
});

export type TokenholderGovernanceEventGovKeyUpdatedHasFailedArgs = z.output<
  typeof tokenholderGovernanceEventGovKeyUpdatedHasFailed
>;

export const tokenholderGovernanceEventGovKeyUpdatedWasSuccessful = z.object({
  chain: cfPrimitivesChainsForeignChain,
  key: hexString,
});

export type TokenholderGovernanceEventGovKeyUpdatedWasSuccessfulArgs = z.output<
  typeof tokenholderGovernanceEventGovKeyUpdatedWasSuccessful
>;

const stateChainRuntimeChainflipOffencesOffence = simpleEnum([
  'ParticipateSigningFailed',
  'ParticipateKeygenFailed',
  'FailedToBroadcastTransaction',
  'MissedAuthorshipSlot',
  'MissedHeartbeat',
  'GrandpaEquivocation',
  'ParticipateKeyHandoverFailed',
]);

export const reputationEventOffencePenalty = z.object({
  offender: accountId,
  offence: stateChainRuntimeChainflipOffencesOffence,
  penalty: z.number(),
});

export type ReputationEventOffencePenaltyArgs = z.output<
  typeof reputationEventOffencePenalty
>;

export const reputationEventAccrualRateUpdated = z.object({
  reputationPoints: z.number(),
  numberOfBlocks: z.number(),
});

export type ReputationEventAccrualRateUpdatedArgs = z.output<
  typeof reputationEventAccrualRateUpdated
>;

export const reputationEventMissedHeartbeatPenaltyUpdated = z.object({
  newReputationPenalty: z.number(),
});

export type ReputationEventMissedHeartbeatPenaltyUpdatedArgs = z.output<
  typeof reputationEventMissedHeartbeatPenaltyUpdated
>;

export const reputationEventPenaltyUpdated = z.object({
  offence: stateChainRuntimeChainflipOffencesOffence,
  oldPenalty: z.object({ reputation: z.number(), suspension: z.number() }),
  newPenalty: z.object({ reputation: z.number(), suspension: z.number() }),
});

export type ReputationEventPenaltyUpdatedArgs = z.output<
  typeof reputationEventPenaltyUpdated
>;

export const ethereumChainTrackingEventChainStateUpdated = z.object({
  newChainState: z.object({
    blockHeight: numberOrHex,
    trackedData: z.object({ baseFee: numberOrHex, priorityFee: numberOrHex }),
  }),
});

export type EthereumChainTrackingEventChainStateUpdatedArgs = z.output<
  typeof ethereumChainTrackingEventChainStateUpdated
>;

export const polkadotChainTrackingEventChainStateUpdated = z.object({
  newChainState: z.object({
    blockHeight: z.number(),
    trackedData: z.object({
      medianTip: numberOrHex,
      runtimeVersion: z.object({
        specVersion: z.number(),
        transactionVersion: z.number(),
      }),
    }),
  }),
});

export type PolkadotChainTrackingEventChainStateUpdatedArgs = z.output<
  typeof polkadotChainTrackingEventChainStateUpdated
>;

export const bitcoinChainTrackingEventChainStateUpdated = z.object({
  newChainState: z.object({
    blockHeight: numberOrHex,
    trackedData: z.object({
      btcFeeInfo: z.object({
        feePerInputUtxo: numberOrHex,
        feePerOutputUtxo: numberOrHex,
        minFeeRequiredPerTx: numberOrHex,
      }),
    }),
  }),
});

export type BitcoinChainTrackingEventChainStateUpdatedArgs = z.output<
  typeof bitcoinChainTrackingEventChainStateUpdated
>;

export const ethereumVaultEventKeygenRequest = z.object({
  ceremonyId: numberOrHex,
  participants: z.array(accountId),
  epochIndex: z.number(),
});

export type EthereumVaultEventKeygenRequestArgs = z.output<
  typeof ethereumVaultEventKeygenRequest
>;

const cfChainsEvmParityBit = simpleEnum(['Odd', 'Even']);

export const ethereumVaultEventKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: z.object({
    pubKeyX: hexString,
    pubKeyYParity: cfChainsEvmParityBit,
  }),
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: z.object({ pubKeyX: hexString, pubKeyYParity: cfChainsEvmParityBit }),
  toEpoch: z.number(),
});

export type EthereumVaultEventKeyHandoverRequestArgs = z.output<
  typeof ethereumVaultEventKeyHandoverRequest
>;

export const ethereumVaultEventVaultRotationCompleted = z.null();

export type EthereumVaultEventVaultRotationCompletedArgs = z.output<
  typeof ethereumVaultEventVaultRotationCompleted
>;

export const ethereumVaultEventVaultRotatedExternally = z.object({
  pubKeyX: hexString,
  pubKeyYParity: cfChainsEvmParityBit,
});

export type EthereumVaultEventVaultRotatedExternallyArgs = z.output<
  typeof ethereumVaultEventVaultRotatedExternally
>;

export const ethereumVaultEventKeygenSuccessReported = accountId;

export type EthereumVaultEventKeygenSuccessReportedArgs = z.output<
  typeof ethereumVaultEventKeygenSuccessReported
>;

export const ethereumVaultEventKeyHandoverSuccessReported = accountId;

export type EthereumVaultEventKeyHandoverSuccessReportedArgs = z.output<
  typeof ethereumVaultEventKeyHandoverSuccessReported
>;

export const ethereumVaultEventKeygenFailureReported = accountId;

export type EthereumVaultEventKeygenFailureReportedArgs = z.output<
  typeof ethereumVaultEventKeygenFailureReported
>;

export const ethereumVaultEventKeyHandoverFailureReported = accountId;

export type EthereumVaultEventKeyHandoverFailureReportedArgs = z.output<
  typeof ethereumVaultEventKeyHandoverFailureReported
>;

export const ethereumVaultEventKeygenSuccess = numberOrHex;

export type EthereumVaultEventKeygenSuccessArgs = z.output<
  typeof ethereumVaultEventKeygenSuccess
>;

export const ethereumVaultEventKeyHandoverSuccess = z.object({
  ceremonyId: numberOrHex,
});

export type EthereumVaultEventKeyHandoverSuccessArgs = z.output<
  typeof ethereumVaultEventKeyHandoverSuccess
>;

export const ethereumVaultEventNoKeyHandover = z.null();

export type EthereumVaultEventNoKeyHandoverArgs = z.output<
  typeof ethereumVaultEventNoKeyHandover
>;

export const ethereumVaultEventKeygenVerificationSuccess = z.object({
  aggKey: z.object({ pubKeyX: hexString, pubKeyYParity: cfChainsEvmParityBit }),
});

export type EthereumVaultEventKeygenVerificationSuccessArgs = z.output<
  typeof ethereumVaultEventKeygenVerificationSuccess
>;

export const ethereumVaultEventKeyHandoverVerificationSuccess = z.object({
  aggKey: z.object({ pubKeyX: hexString, pubKeyYParity: cfChainsEvmParityBit }),
});

export type EthereumVaultEventKeyHandoverVerificationSuccessArgs = z.output<
  typeof ethereumVaultEventKeyHandoverVerificationSuccess
>;

export const ethereumVaultEventKeygenVerificationFailure = z.object({
  keygenCeremonyId: numberOrHex,
});

export type EthereumVaultEventKeygenVerificationFailureArgs = z.output<
  typeof ethereumVaultEventKeygenVerificationFailure
>;

export const ethereumVaultEventKeyHandoverVerificationFailure = z.object({
  handoverCeremonyId: numberOrHex,
});

export type EthereumVaultEventKeyHandoverVerificationFailureArgs = z.output<
  typeof ethereumVaultEventKeyHandoverVerificationFailure
>;

export const ethereumVaultEventKeygenFailure = numberOrHex;

export type EthereumVaultEventKeygenFailureArgs = z.output<
  typeof ethereumVaultEventKeygenFailure
>;

export const ethereumVaultEventKeygenResponseTimeout = numberOrHex;

export type EthereumVaultEventKeygenResponseTimeoutArgs = z.output<
  typeof ethereumVaultEventKeygenResponseTimeout
>;

export const ethereumVaultEventKeyHandoverResponseTimeout = z.object({
  ceremonyId: numberOrHex,
});

export type EthereumVaultEventKeyHandoverResponseTimeoutArgs = z.output<
  typeof ethereumVaultEventKeyHandoverResponseTimeout
>;

export const ethereumVaultEventKeygenResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type EthereumVaultEventKeygenResponseTimeoutUpdatedArgs = z.output<
  typeof ethereumVaultEventKeygenResponseTimeoutUpdated
>;

export const ethereumVaultEventAwaitingGovernanceActivation = z.object({
  newPublicKey: z.object({
    pubKeyX: hexString,
    pubKeyYParity: cfChainsEvmParityBit,
  }),
});

export type EthereumVaultEventAwaitingGovernanceActivationArgs = z.output<
  typeof ethereumVaultEventAwaitingGovernanceActivation
>;

export const ethereumVaultEventKeyHandoverFailure = z.object({
  ceremonyId: numberOrHex,
});

export type EthereumVaultEventKeyHandoverFailureArgs = z.output<
  typeof ethereumVaultEventKeyHandoverFailure
>;

export const ethereumVaultEventVaultRotationAborted = z.null();

export type EthereumVaultEventVaultRotationAbortedArgs = z.output<
  typeof ethereumVaultEventVaultRotationAborted
>;

export const polkadotVaultEventKeygenRequest = z.object({
  ceremonyId: numberOrHex,
  participants: z.array(accountId),
  epochIndex: z.number(),
});

export type PolkadotVaultEventKeygenRequestArgs = z.output<
  typeof polkadotVaultEventKeygenRequest
>;

export const polkadotVaultEventKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: hexString,
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: hexString,
  toEpoch: z.number(),
});

export type PolkadotVaultEventKeyHandoverRequestArgs = z.output<
  typeof polkadotVaultEventKeyHandoverRequest
>;

export const polkadotVaultEventVaultRotationCompleted = z.null();

export type PolkadotVaultEventVaultRotationCompletedArgs = z.output<
  typeof polkadotVaultEventVaultRotationCompleted
>;

export const polkadotVaultEventVaultRotatedExternally = hexString;

export type PolkadotVaultEventVaultRotatedExternallyArgs = z.output<
  typeof polkadotVaultEventVaultRotatedExternally
>;

export const polkadotVaultEventKeygenSuccessReported = accountId;

export type PolkadotVaultEventKeygenSuccessReportedArgs = z.output<
  typeof polkadotVaultEventKeygenSuccessReported
>;

export const polkadotVaultEventKeyHandoverSuccessReported = accountId;

export type PolkadotVaultEventKeyHandoverSuccessReportedArgs = z.output<
  typeof polkadotVaultEventKeyHandoverSuccessReported
>;

export const polkadotVaultEventKeygenFailureReported = accountId;

export type PolkadotVaultEventKeygenFailureReportedArgs = z.output<
  typeof polkadotVaultEventKeygenFailureReported
>;

export const polkadotVaultEventKeyHandoverFailureReported = accountId;

export type PolkadotVaultEventKeyHandoverFailureReportedArgs = z.output<
  typeof polkadotVaultEventKeyHandoverFailureReported
>;

export const polkadotVaultEventKeygenSuccess = numberOrHex;

export type PolkadotVaultEventKeygenSuccessArgs = z.output<
  typeof polkadotVaultEventKeygenSuccess
>;

export const polkadotVaultEventKeyHandoverSuccess = z.object({
  ceremonyId: numberOrHex,
});

export type PolkadotVaultEventKeyHandoverSuccessArgs = z.output<
  typeof polkadotVaultEventKeyHandoverSuccess
>;

export const polkadotVaultEventNoKeyHandover = z.null();

export type PolkadotVaultEventNoKeyHandoverArgs = z.output<
  typeof polkadotVaultEventNoKeyHandover
>;

export const polkadotVaultEventKeygenVerificationSuccess = z.object({
  aggKey: hexString,
});

export type PolkadotVaultEventKeygenVerificationSuccessArgs = z.output<
  typeof polkadotVaultEventKeygenVerificationSuccess
>;

export const polkadotVaultEventKeyHandoverVerificationSuccess = z.object({
  aggKey: hexString,
});

export type PolkadotVaultEventKeyHandoverVerificationSuccessArgs = z.output<
  typeof polkadotVaultEventKeyHandoverVerificationSuccess
>;

export const polkadotVaultEventKeygenVerificationFailure = z.object({
  keygenCeremonyId: numberOrHex,
});

export type PolkadotVaultEventKeygenVerificationFailureArgs = z.output<
  typeof polkadotVaultEventKeygenVerificationFailure
>;

export const polkadotVaultEventKeyHandoverVerificationFailure = z.object({
  handoverCeremonyId: numberOrHex,
});

export type PolkadotVaultEventKeyHandoverVerificationFailureArgs = z.output<
  typeof polkadotVaultEventKeyHandoverVerificationFailure
>;

export const polkadotVaultEventKeygenFailure = numberOrHex;

export type PolkadotVaultEventKeygenFailureArgs = z.output<
  typeof polkadotVaultEventKeygenFailure
>;

export const polkadotVaultEventKeygenResponseTimeout = numberOrHex;

export type PolkadotVaultEventKeygenResponseTimeoutArgs = z.output<
  typeof polkadotVaultEventKeygenResponseTimeout
>;

export const polkadotVaultEventKeyHandoverResponseTimeout = z.object({
  ceremonyId: numberOrHex,
});

export type PolkadotVaultEventKeyHandoverResponseTimeoutArgs = z.output<
  typeof polkadotVaultEventKeyHandoverResponseTimeout
>;

export const polkadotVaultEventKeygenResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type PolkadotVaultEventKeygenResponseTimeoutUpdatedArgs = z.output<
  typeof polkadotVaultEventKeygenResponseTimeoutUpdated
>;

export const polkadotVaultEventAwaitingGovernanceActivation = z.object({
  newPublicKey: hexString,
});

export type PolkadotVaultEventAwaitingGovernanceActivationArgs = z.output<
  typeof polkadotVaultEventAwaitingGovernanceActivation
>;

export const polkadotVaultEventKeyHandoverFailure = z.object({
  ceremonyId: numberOrHex,
});

export type PolkadotVaultEventKeyHandoverFailureArgs = z.output<
  typeof polkadotVaultEventKeyHandoverFailure
>;

export const polkadotVaultEventVaultRotationAborted = z.null();

export type PolkadotVaultEventVaultRotationAbortedArgs = z.output<
  typeof polkadotVaultEventVaultRotationAborted
>;

export const bitcoinVaultEventKeygenRequest = z.object({
  ceremonyId: numberOrHex,
  participants: z.array(accountId),
  epochIndex: z.number(),
});

export type BitcoinVaultEventKeygenRequestArgs = z.output<
  typeof bitcoinVaultEventKeygenRequest
>;

export const bitcoinVaultEventKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: z.object({ previous: hexString.nullish(), current: hexString }),
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: z.object({ previous: hexString.nullish(), current: hexString }),
  toEpoch: z.number(),
});

export type BitcoinVaultEventKeyHandoverRequestArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverRequest
>;

export const bitcoinVaultEventVaultRotationCompleted = z.null();

export type BitcoinVaultEventVaultRotationCompletedArgs = z.output<
  typeof bitcoinVaultEventVaultRotationCompleted
>;

export const bitcoinVaultEventVaultRotatedExternally = z.object({
  previous: hexString.nullish(),
  current: hexString,
});

export type BitcoinVaultEventVaultRotatedExternallyArgs = z.output<
  typeof bitcoinVaultEventVaultRotatedExternally
>;

export const bitcoinVaultEventKeygenSuccessReported = accountId;

export type BitcoinVaultEventKeygenSuccessReportedArgs = z.output<
  typeof bitcoinVaultEventKeygenSuccessReported
>;

export const bitcoinVaultEventKeyHandoverSuccessReported = accountId;

export type BitcoinVaultEventKeyHandoverSuccessReportedArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverSuccessReported
>;

export const bitcoinVaultEventKeygenFailureReported = accountId;

export type BitcoinVaultEventKeygenFailureReportedArgs = z.output<
  typeof bitcoinVaultEventKeygenFailureReported
>;

export const bitcoinVaultEventKeyHandoverFailureReported = accountId;

export type BitcoinVaultEventKeyHandoverFailureReportedArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverFailureReported
>;

export const bitcoinVaultEventKeygenSuccess = numberOrHex;

export type BitcoinVaultEventKeygenSuccessArgs = z.output<
  typeof bitcoinVaultEventKeygenSuccess
>;

export const bitcoinVaultEventKeyHandoverSuccess = z.object({
  ceremonyId: numberOrHex,
});

export type BitcoinVaultEventKeyHandoverSuccessArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverSuccess
>;

export const bitcoinVaultEventNoKeyHandover = z.null();

export type BitcoinVaultEventNoKeyHandoverArgs = z.output<
  typeof bitcoinVaultEventNoKeyHandover
>;

export const bitcoinVaultEventKeygenVerificationSuccess = z.object({
  aggKey: z.object({ previous: hexString.nullish(), current: hexString }),
});

export type BitcoinVaultEventKeygenVerificationSuccessArgs = z.output<
  typeof bitcoinVaultEventKeygenVerificationSuccess
>;

export const bitcoinVaultEventKeyHandoverVerificationSuccess = z.object({
  aggKey: z.object({ previous: hexString.nullish(), current: hexString }),
});

export type BitcoinVaultEventKeyHandoverVerificationSuccessArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverVerificationSuccess
>;

export const bitcoinVaultEventKeygenVerificationFailure = z.object({
  keygenCeremonyId: numberOrHex,
});

export type BitcoinVaultEventKeygenVerificationFailureArgs = z.output<
  typeof bitcoinVaultEventKeygenVerificationFailure
>;

export const bitcoinVaultEventKeyHandoverVerificationFailure = z.object({
  handoverCeremonyId: numberOrHex,
});

export type BitcoinVaultEventKeyHandoverVerificationFailureArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverVerificationFailure
>;

export const bitcoinVaultEventKeygenFailure = numberOrHex;

export type BitcoinVaultEventKeygenFailureArgs = z.output<
  typeof bitcoinVaultEventKeygenFailure
>;

export const bitcoinVaultEventKeygenResponseTimeout = numberOrHex;

export type BitcoinVaultEventKeygenResponseTimeoutArgs = z.output<
  typeof bitcoinVaultEventKeygenResponseTimeout
>;

export const bitcoinVaultEventKeyHandoverResponseTimeout = z.object({
  ceremonyId: numberOrHex,
});

export type BitcoinVaultEventKeyHandoverResponseTimeoutArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverResponseTimeout
>;

export const bitcoinVaultEventKeygenResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type BitcoinVaultEventKeygenResponseTimeoutUpdatedArgs = z.output<
  typeof bitcoinVaultEventKeygenResponseTimeoutUpdated
>;

export const bitcoinVaultEventAwaitingGovernanceActivation = z.object({
  newPublicKey: z.object({ previous: hexString.nullish(), current: hexString }),
});

export type BitcoinVaultEventAwaitingGovernanceActivationArgs = z.output<
  typeof bitcoinVaultEventAwaitingGovernanceActivation
>;

export const bitcoinVaultEventKeyHandoverFailure = z.object({
  ceremonyId: numberOrHex,
});

export type BitcoinVaultEventKeyHandoverFailureArgs = z.output<
  typeof bitcoinVaultEventKeyHandoverFailure
>;

export const bitcoinVaultEventVaultRotationAborted = z.null();

export type BitcoinVaultEventVaultRotationAbortedArgs = z.output<
  typeof bitcoinVaultEventVaultRotationAborted
>;

export const ethereumThresholdSignerEventThresholdSignatureRequest = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  epoch: z.number(),
  key: z.object({ pubKeyX: hexString, pubKeyYParity: cfChainsEvmParityBit }),
  signatories: z.array(accountId),
  payload: hexString,
});

export type EthereumThresholdSignerEventThresholdSignatureRequestArgs =
  z.output<typeof ethereumThresholdSignerEventThresholdSignatureRequest>;

export const ethereumThresholdSignerEventThresholdSignatureFailed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  offenders: z.array(accountId),
});

export type EthereumThresholdSignerEventThresholdSignatureFailedArgs = z.output<
  typeof ethereumThresholdSignerEventThresholdSignatureFailed
>;

export const ethereumThresholdSignerEventThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type EthereumThresholdSignerEventThresholdSignatureSuccessArgs =
  z.output<typeof ethereumThresholdSignerEventThresholdSignatureSuccess>;

const dispatchResult = z.union([
  z.object({ __kind: z.literal('Ok') }),
  z.object({ __kind: z.literal('Err'), value: spRuntimeDispatchError }),
]);

export const ethereumThresholdSignerEventThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type EthereumThresholdSignerEventThresholdDispatchCompleteArgs =
  z.output<typeof ethereumThresholdSignerEventThresholdDispatchComplete>;

export const ethereumThresholdSignerEventRetryRequested = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type EthereumThresholdSignerEventRetryRequestedArgs = z.output<
  typeof ethereumThresholdSignerEventRetryRequested
>;

export const ethereumThresholdSignerEventFailureReportProcessed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  reporterId: accountId,
});

export type EthereumThresholdSignerEventFailureReportProcessedArgs = z.output<
  typeof ethereumThresholdSignerEventFailureReportProcessed
>;

export const ethereumThresholdSignerEventSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type EthereumThresholdSignerEventSignersUnavailableArgs = z.output<
  typeof ethereumThresholdSignerEventSignersUnavailable
>;

export const ethereumThresholdSignerEventCurrentKeyUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type EthereumThresholdSignerEventCurrentKeyUnavailableArgs = z.output<
  typeof ethereumThresholdSignerEventCurrentKeyUnavailable
>;

export const ethereumThresholdSignerEventThresholdSignatureResponseTimeoutUpdated =
  z.object({ newTimeout: z.number() });

export type EthereumThresholdSignerEventThresholdSignatureResponseTimeoutUpdatedArgs =
  z.output<
    typeof ethereumThresholdSignerEventThresholdSignatureResponseTimeoutUpdated
  >;

export const polkadotThresholdSignerEventThresholdSignatureRequest = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  epoch: z.number(),
  key: hexString,
  signatories: z.array(accountId),
  payload: hexString,
});

export type PolkadotThresholdSignerEventThresholdSignatureRequestArgs =
  z.output<typeof polkadotThresholdSignerEventThresholdSignatureRequest>;

export const polkadotThresholdSignerEventThresholdSignatureFailed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  offenders: z.array(accountId),
});

export type PolkadotThresholdSignerEventThresholdSignatureFailedArgs = z.output<
  typeof polkadotThresholdSignerEventThresholdSignatureFailed
>;

export const polkadotThresholdSignerEventThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type PolkadotThresholdSignerEventThresholdSignatureSuccessArgs =
  z.output<typeof polkadotThresholdSignerEventThresholdSignatureSuccess>;

export const polkadotThresholdSignerEventThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type PolkadotThresholdSignerEventThresholdDispatchCompleteArgs =
  z.output<typeof polkadotThresholdSignerEventThresholdDispatchComplete>;

export const polkadotThresholdSignerEventRetryRequested = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type PolkadotThresholdSignerEventRetryRequestedArgs = z.output<
  typeof polkadotThresholdSignerEventRetryRequested
>;

export const polkadotThresholdSignerEventFailureReportProcessed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  reporterId: accountId,
});

export type PolkadotThresholdSignerEventFailureReportProcessedArgs = z.output<
  typeof polkadotThresholdSignerEventFailureReportProcessed
>;

export const polkadotThresholdSignerEventSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type PolkadotThresholdSignerEventSignersUnavailableArgs = z.output<
  typeof polkadotThresholdSignerEventSignersUnavailable
>;

export const polkadotThresholdSignerEventCurrentKeyUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type PolkadotThresholdSignerEventCurrentKeyUnavailableArgs = z.output<
  typeof polkadotThresholdSignerEventCurrentKeyUnavailable
>;

export const polkadotThresholdSignerEventThresholdSignatureResponseTimeoutUpdated =
  z.object({ newTimeout: z.number() });

export type PolkadotThresholdSignerEventThresholdSignatureResponseTimeoutUpdatedArgs =
  z.output<
    typeof polkadotThresholdSignerEventThresholdSignatureResponseTimeoutUpdated
  >;

const cfChainsBtcPreviousOrCurrent = simpleEnum(['Previous', 'Current']);

export const bitcoinThresholdSignerEventThresholdSignatureRequest = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  epoch: z.number(),
  key: z.object({ previous: hexString.nullish(), current: hexString }),
  signatories: z.array(accountId),
  payload: z.array(z.tuple([cfChainsBtcPreviousOrCurrent, hexString])),
});

export type BitcoinThresholdSignerEventThresholdSignatureRequestArgs = z.output<
  typeof bitcoinThresholdSignerEventThresholdSignatureRequest
>;

export const bitcoinThresholdSignerEventThresholdSignatureFailed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  offenders: z.array(accountId),
});

export type BitcoinThresholdSignerEventThresholdSignatureFailedArgs = z.output<
  typeof bitcoinThresholdSignerEventThresholdSignatureFailed
>;

export const bitcoinThresholdSignerEventThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type BitcoinThresholdSignerEventThresholdSignatureSuccessArgs = z.output<
  typeof bitcoinThresholdSignerEventThresholdSignatureSuccess
>;

export const bitcoinThresholdSignerEventThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type BitcoinThresholdSignerEventThresholdDispatchCompleteArgs = z.output<
  typeof bitcoinThresholdSignerEventThresholdDispatchComplete
>;

export const bitcoinThresholdSignerEventRetryRequested = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type BitcoinThresholdSignerEventRetryRequestedArgs = z.output<
  typeof bitcoinThresholdSignerEventRetryRequested
>;

export const bitcoinThresholdSignerEventFailureReportProcessed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  reporterId: accountId,
});

export type BitcoinThresholdSignerEventFailureReportProcessedArgs = z.output<
  typeof bitcoinThresholdSignerEventFailureReportProcessed
>;

export const bitcoinThresholdSignerEventSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type BitcoinThresholdSignerEventSignersUnavailableArgs = z.output<
  typeof bitcoinThresholdSignerEventSignersUnavailable
>;

export const bitcoinThresholdSignerEventCurrentKeyUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type BitcoinThresholdSignerEventCurrentKeyUnavailableArgs = z.output<
  typeof bitcoinThresholdSignerEventCurrentKeyUnavailable
>;

export const bitcoinThresholdSignerEventThresholdSignatureResponseTimeoutUpdated =
  z.object({ newTimeout: z.number() });

export type BitcoinThresholdSignerEventThresholdSignatureResponseTimeoutUpdatedArgs =
  z.output<
    typeof bitcoinThresholdSignerEventThresholdSignatureResponseTimeoutUpdated
  >;

export const ethereumBroadcasterEventTransactionBroadcastRequest = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
  nominee: accountId,
  transactionPayload: z.object({
    chainId: numberOrHex,
    maxPriorityFeePerGas: numberOrHex.nullish(),
    maxFeePerGas: numberOrHex.nullish(),
    gasLimit: numberOrHex.nullish(),
    contract: hexString,
    value: numberOrHex,
    data: hexString,
  }),
  transactionOutId: z.object({ s: hexString, kTimesGAddress: hexString }),
});

export type EthereumBroadcasterEventTransactionBroadcastRequestArgs = z.output<
  typeof ethereumBroadcasterEventTransactionBroadcastRequest
>;

export const ethereumBroadcasterEventBroadcastRetryScheduled = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type EthereumBroadcasterEventBroadcastRetryScheduledArgs = z.output<
  typeof ethereumBroadcasterEventBroadcastRetryScheduled
>;

export const ethereumBroadcasterEventBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type EthereumBroadcasterEventBroadcastAttemptTimeoutArgs = z.output<
  typeof ethereumBroadcasterEventBroadcastAttemptTimeout
>;

export const ethereumBroadcasterEventBroadcastAborted = z.object({
  broadcastId: z.number(),
});

export type EthereumBroadcasterEventBroadcastAbortedArgs = z.output<
  typeof ethereumBroadcasterEventBroadcastAborted
>;

export const ethereumBroadcasterEventBroadcastSuccess = z.object({
  broadcastId: z.number(),
  transactionOutId: z.object({ s: hexString, kTimesGAddress: hexString }),
});

export type EthereumBroadcasterEventBroadcastSuccessArgs = z.output<
  typeof ethereumBroadcasterEventBroadcastSuccess
>;

export const ethereumBroadcasterEventThresholdSignatureInvalid = z.object({
  broadcastId: z.number(),
  retryBroadcastId: z.number(),
});

export type EthereumBroadcasterEventThresholdSignatureInvalidArgs = z.output<
  typeof ethereumBroadcasterEventThresholdSignatureInvalid
>;

export const ethereumBroadcasterEventBroadcastCallbackExecuted = z.object({
  broadcastId: z.number(),
  result: dispatchResult,
});

export type EthereumBroadcasterEventBroadcastCallbackExecutedArgs = z.output<
  typeof ethereumBroadcasterEventBroadcastCallbackExecuted
>;

export const ethereumBroadcasterEventTransactionFeeDeficitRecorded = z.object({
  beneficiary: hexString,
  amount: numberOrHex,
});

export type EthereumBroadcasterEventTransactionFeeDeficitRecordedArgs =
  z.output<typeof ethereumBroadcasterEventTransactionFeeDeficitRecorded>;

export const ethereumBroadcasterEventTransactionFeeDeficitRefused = z.object({
  beneficiary: hexString,
});

export type EthereumBroadcasterEventTransactionFeeDeficitRefusedArgs = z.output<
  typeof ethereumBroadcasterEventTransactionFeeDeficitRefused
>;

export const polkadotBroadcasterEventTransactionBroadcastRequest = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
  nominee: accountId,
  transactionPayload: z.object({ encodedExtrinsic: hexString }),
  transactionOutId: hexString,
});

export type PolkadotBroadcasterEventTransactionBroadcastRequestArgs = z.output<
  typeof polkadotBroadcasterEventTransactionBroadcastRequest
>;

export const polkadotBroadcasterEventBroadcastRetryScheduled = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type PolkadotBroadcasterEventBroadcastRetryScheduledArgs = z.output<
  typeof polkadotBroadcasterEventBroadcastRetryScheduled
>;

export const polkadotBroadcasterEventBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type PolkadotBroadcasterEventBroadcastAttemptTimeoutArgs = z.output<
  typeof polkadotBroadcasterEventBroadcastAttemptTimeout
>;

export const polkadotBroadcasterEventBroadcastAborted = z.object({
  broadcastId: z.number(),
});

export type PolkadotBroadcasterEventBroadcastAbortedArgs = z.output<
  typeof polkadotBroadcasterEventBroadcastAborted
>;

export const polkadotBroadcasterEventBroadcastSuccess = z.object({
  broadcastId: z.number(),
  transactionOutId: hexString,
});

export type PolkadotBroadcasterEventBroadcastSuccessArgs = z.output<
  typeof polkadotBroadcasterEventBroadcastSuccess
>;

export const polkadotBroadcasterEventThresholdSignatureInvalid = z.object({
  broadcastId: z.number(),
  retryBroadcastId: z.number(),
});

export type PolkadotBroadcasterEventThresholdSignatureInvalidArgs = z.output<
  typeof polkadotBroadcasterEventThresholdSignatureInvalid
>;

export const polkadotBroadcasterEventBroadcastCallbackExecuted = z.object({
  broadcastId: z.number(),
  result: dispatchResult,
});

export type PolkadotBroadcasterEventBroadcastCallbackExecutedArgs = z.output<
  typeof polkadotBroadcasterEventBroadcastCallbackExecuted
>;

export const polkadotBroadcasterEventTransactionFeeDeficitRecorded = z.object({
  beneficiary: hexString,
  amount: numberOrHex,
});

export type PolkadotBroadcasterEventTransactionFeeDeficitRecordedArgs =
  z.output<typeof polkadotBroadcasterEventTransactionFeeDeficitRecorded>;

export const polkadotBroadcasterEventTransactionFeeDeficitRefused = z.object({
  beneficiary: hexString,
});

export type PolkadotBroadcasterEventTransactionFeeDeficitRefusedArgs = z.output<
  typeof polkadotBroadcasterEventTransactionFeeDeficitRefused
>;

export const bitcoinBroadcasterEventTransactionBroadcastRequest = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
  nominee: accountId,
  transactionPayload: z.object({ encodedTransaction: hexString }),
  transactionOutId: hexString,
});

export type BitcoinBroadcasterEventTransactionBroadcastRequestArgs = z.output<
  typeof bitcoinBroadcasterEventTransactionBroadcastRequest
>;

export const bitcoinBroadcasterEventBroadcastRetryScheduled = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type BitcoinBroadcasterEventBroadcastRetryScheduledArgs = z.output<
  typeof bitcoinBroadcasterEventBroadcastRetryScheduled
>;

export const bitcoinBroadcasterEventBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: z.object({
    broadcastId: z.number(),
    attemptCount: z.number(),
  }),
});

export type BitcoinBroadcasterEventBroadcastAttemptTimeoutArgs = z.output<
  typeof bitcoinBroadcasterEventBroadcastAttemptTimeout
>;

export const bitcoinBroadcasterEventBroadcastAborted = z.object({
  broadcastId: z.number(),
});

export type BitcoinBroadcasterEventBroadcastAbortedArgs = z.output<
  typeof bitcoinBroadcasterEventBroadcastAborted
>;

export const bitcoinBroadcasterEventBroadcastSuccess = z.object({
  broadcastId: z.number(),
  transactionOutId: hexString,
});

export type BitcoinBroadcasterEventBroadcastSuccessArgs = z.output<
  typeof bitcoinBroadcasterEventBroadcastSuccess
>;

export const bitcoinBroadcasterEventThresholdSignatureInvalid = z.object({
  broadcastId: z.number(),
  retryBroadcastId: z.number(),
});

export type BitcoinBroadcasterEventThresholdSignatureInvalidArgs = z.output<
  typeof bitcoinBroadcasterEventThresholdSignatureInvalid
>;

export const bitcoinBroadcasterEventBroadcastCallbackExecuted = z.object({
  broadcastId: z.number(),
  result: dispatchResult,
});

export type BitcoinBroadcasterEventBroadcastCallbackExecutedArgs = z.output<
  typeof bitcoinBroadcasterEventBroadcastCallbackExecuted
>;

const cfChainsBtcScriptPubkey = z.union([
  z.object({ __kind: z.literal('P2PKH'), value: hexString }),
  z.object({ __kind: z.literal('P2SH'), value: hexString }),
  z.object({ __kind: z.literal('P2WPKH'), value: hexString }),
  z.object({ __kind: z.literal('P2WSH'), value: hexString }),
  z.object({ __kind: z.literal('Taproot'), value: hexString }),
  z.object({
    __kind: z.literal('OtherSegwit'),
    value: z.object({ version: z.number(), program: hexString }),
  }),
]);

export const bitcoinBroadcasterEventTransactionFeeDeficitRecorded = z.object({
  beneficiary: cfChainsBtcScriptPubkey,
  amount: numberOrHex,
});

export type BitcoinBroadcasterEventTransactionFeeDeficitRecordedArgs = z.output<
  typeof bitcoinBroadcasterEventTransactionFeeDeficitRecorded
>;

export const bitcoinBroadcasterEventTransactionFeeDeficitRefused = z.object({
  beneficiary: cfChainsBtcScriptPubkey,
});

export type BitcoinBroadcasterEventTransactionFeeDeficitRefusedArgs = z.output<
  typeof bitcoinBroadcasterEventTransactionFeeDeficitRefused
>;

const cfChainsAddressEncodedAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: hexString }),
]);

const cfPrimitivesChainsAssetsAnyAsset = simpleEnum([
  'Eth',
  'Flip',
  'Usdc',
  'Dot',
  'Btc',
]);

export const swappingEventSwapDepositAddressReady = z.object({
  depositAddress: cfChainsAddressEncodedAddress,
  destinationAddress: cfChainsAddressEncodedAddress,
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  channelId: numberOrHex,
  brokerCommissionRate: z.number(),
  channelMetadata: z
    .object({
      message: hexString,
      gasBudget: numberOrHex,
      cfParameters: hexString,
    })
    .nullish(),
  sourceChainExpiryBlock: numberOrHex,
});

export type SwappingEventSwapDepositAddressReadyArgs = z.output<
  typeof swappingEventSwapDepositAddressReady
>;

const cfChainsSwapOrigin = z.union([
  z.object({
    __kind: z.literal('DepositChannel'),
    value: z.object({
      depositAddress: cfChainsAddressEncodedAddress,
      channelId: numberOrHex,
      depositBlockHeight: numberOrHex,
    }),
  }),
  z.object({
    __kind: z.literal('Vault'),
    value: z.object({ txHash: hexString }),
  }),
]);

const cfChainsAddressForeignChainAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: cfChainsBtcScriptPubkey }),
]);

const palletCfSwappingSwapType = z.union([
  z.object({
    __kind: z.literal('Swap'),
    value: cfChainsAddressForeignChainAddress,
  }),
  z.object({ __kind: z.literal('CcmPrincipal'), value: numberOrHex }),
  z.object({ __kind: z.literal('CcmGas'), value: numberOrHex }),
]);

export const swappingEventSwapScheduled = z.object({
  swapId: numberOrHex,
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  depositAmount: numberOrHex,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  destinationAddress: cfChainsAddressEncodedAddress,
  origin: cfChainsSwapOrigin,
  swapType: palletCfSwappingSwapType,
  brokerCommission: numberOrHex.nullish(),
});

export type SwappingEventSwapScheduledArgs = z.output<
  typeof swappingEventSwapScheduled
>;

export const swappingEventSwapExecuted = z.object({
  swapId: numberOrHex,
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  depositAmount: numberOrHex,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  egressAmount: numberOrHex,
  intermediateAmount: numberOrHex.nullish(),
});

export type SwappingEventSwapExecutedArgs = z.output<
  typeof swappingEventSwapExecuted
>;

export const swappingEventSwapEgressScheduled = z.object({
  swapId: numberOrHex,
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
});

export type SwappingEventSwapEgressScheduledArgs = z.output<
  typeof swappingEventSwapEgressScheduled
>;

export const swappingEventWithdrawalRequested = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  egressAmount: numberOrHex,
  destinationAddress: cfChainsAddressEncodedAddress,
});

export type SwappingEventWithdrawalRequestedArgs = z.output<
  typeof swappingEventWithdrawalRequested
>;

const cfPrimitivesSwapLeg = simpleEnum(['FromStable', 'ToStable']);

export const swappingEventBatchSwapFailed = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  direction: cfPrimitivesSwapLeg,
  amount: numberOrHex,
});

export type SwappingEventBatchSwapFailedArgs = z.output<
  typeof swappingEventBatchSwapFailed
>;

export const swappingEventCcmEgressScheduled = z.object({
  ccmId: numberOrHex,
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
});

export type SwappingEventCcmEgressScheduledArgs = z.output<
  typeof swappingEventCcmEgressScheduled
>;

export const swappingEventCcmDepositReceived = z.object({
  ccmId: numberOrHex,
  principalSwapId: numberOrHex.nullish(),
  gasSwapId: numberOrHex.nullish(),
  depositAmount: numberOrHex,
  destinationAddress: cfChainsAddressEncodedAddress,
  depositMetadata: z.object({
    sourceChain: cfPrimitivesChainsForeignChain,
    sourceAddress: cfChainsAddressForeignChainAddress.nullish(),
    channelMetadata: z.object({
      message: hexString,
      gasBudget: numberOrHex,
      cfParameters: hexString,
    }),
  }),
});

export type SwappingEventCcmDepositReceivedArgs = z.output<
  typeof swappingEventCcmDepositReceived
>;

export const swappingEventMinimumSwapAmountSet = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
});

export type SwappingEventMinimumSwapAmountSetArgs = z.output<
  typeof swappingEventMinimumSwapAmountSet
>;

export const swappingEventSwapAmountTooLow = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
  destinationAddress: cfChainsAddressEncodedAddress,
  origin: cfChainsSwapOrigin,
});

export type SwappingEventSwapAmountTooLowArgs = z.output<
  typeof swappingEventSwapAmountTooLow
>;

const palletCfSwappingCcmFailReason = simpleEnum([
  'UnsupportedForTargetChain',
  'InsufficientDepositAmount',
  'PrincipalSwapAmountTooLow',
]);

export const swappingEventCcmFailed = z.object({
  reason: palletCfSwappingCcmFailReason,
  destinationAddress: cfChainsAddressEncodedAddress,
  depositMetadata: z.object({
    sourceChain: cfPrimitivesChainsForeignChain,
    sourceAddress: cfChainsAddressForeignChainAddress.nullish(),
    channelMetadata: z.object({
      message: hexString,
      gasBudget: numberOrHex,
      cfParameters: hexString,
    }),
  }),
});

export type SwappingEventCcmFailedArgs = z.output<
  typeof swappingEventCcmFailed
>;

export const swappingEventMaximumSwapAmountSet = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex.nullish(),
});

export type SwappingEventMaximumSwapAmountSetArgs = z.output<
  typeof swappingEventMaximumSwapAmountSet
>;

export const swappingEventSwapAmountConfiscated = z.object({
  swapId: numberOrHex,
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  totalAmount: numberOrHex,
  confiscatedAmount: numberOrHex,
});

export type SwappingEventSwapAmountConfiscatedArgs = z.output<
  typeof swappingEventSwapAmountConfiscated
>;

export const liquidityProviderEventAccountDebited = z.object({
  accountId,
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amountDebited: numberOrHex,
});

export type LiquidityProviderEventAccountDebitedArgs = z.output<
  typeof liquidityProviderEventAccountDebited
>;

export const liquidityProviderEventAccountCredited = z.object({
  accountId,
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amountCredited: numberOrHex,
});

export type LiquidityProviderEventAccountCreditedArgs = z.output<
  typeof liquidityProviderEventAccountCredited
>;

export const liquidityProviderEventLiquidityDepositAddressReady = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsAnyAsset,
  depositAddress: cfChainsAddressEncodedAddress,
  accountId,
  depositChainExpiryBlock: numberOrHex,
});

export type LiquidityProviderEventLiquidityDepositAddressReadyArgs = z.output<
  typeof liquidityProviderEventLiquidityDepositAddressReady
>;

export const liquidityProviderEventWithdrawalEgressScheduled = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
  destinationAddress: cfChainsAddressEncodedAddress,
});

export type LiquidityProviderEventWithdrawalEgressScheduledArgs = z.output<
  typeof liquidityProviderEventWithdrawalEgressScheduled
>;

export const liquidityProviderEventLiquidityRefundAddressRegistered = z.object({
  accountId,
  chain: cfPrimitivesChainsForeignChain,
  address: cfChainsAddressForeignChainAddress,
});

export type LiquidityProviderEventLiquidityRefundAddressRegisteredArgs =
  z.output<typeof liquidityProviderEventLiquidityRefundAddressRegistered>;

export const ethereumIngressEgressEventDepositReceived = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
});

export type EthereumIngressEgressEventDepositReceivedArgs = z.output<
  typeof ethereumIngressEgressEventDepositReceived
>;

export const ethereumIngressEgressEventAssetEgressStatusChanged = z.object({
  asset: cfPrimitivesChainsAssetsEthAsset,
  disabled: z.boolean(),
});

export type EthereumIngressEgressEventAssetEgressStatusChangedArgs = z.output<
  typeof ethereumIngressEgressEventAssetEgressStatusChanged
>;

export const ethereumIngressEgressEventEgressScheduled = z.object({
  id: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type EthereumIngressEgressEventEgressScheduledArgs = z.output<
  typeof ethereumIngressEgressEventEgressScheduled
>;

export const ethereumIngressEgressEventCcmBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
});

export type EthereumIngressEgressEventCcmBroadcastRequestedArgs = z.output<
  typeof ethereumIngressEgressEventCcmBroadcastRequested
>;

export const ethereumIngressEgressEventCcmEgressInvalid = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  error: spRuntimeDispatchError,
});

export type EthereumIngressEgressEventCcmEgressInvalidArgs = z.output<
  typeof ethereumIngressEgressEventCcmEgressInvalid
>;

export const ethereumIngressEgressEventDepositFetchesScheduled = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsEthAsset,
});

export type EthereumIngressEgressEventDepositFetchesScheduledArgs = z.output<
  typeof ethereumIngressEgressEventDepositFetchesScheduled
>;

export const ethereumIngressEgressEventBatchBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressIds: z.array(z.tuple([cfPrimitivesChainsForeignChain, numberOrHex])),
});

export type EthereumIngressEgressEventBatchBroadcastRequestedArgs = z.output<
  typeof ethereumIngressEgressEventBatchBroadcastRequested
>;

export const ethereumIngressEgressEventMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsEthAsset,
  minimumDeposit: numberOrHex,
});

export type EthereumIngressEgressEventMinimumDepositSetArgs = z.output<
  typeof ethereumIngressEgressEventMinimumDepositSet
>;

export const ethereumIngressEgressEventDepositIgnored = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
});

export type EthereumIngressEgressEventDepositIgnoredArgs = z.output<
  typeof ethereumIngressEgressEventDepositIgnored
>;

export const ethereumIngressEgressEventVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type EthereumIngressEgressEventVaultTransferFailedArgs = z.output<
  typeof ethereumIngressEgressEventVaultTransferFailed
>;

export const ethereumIngressEgressEventDepositWitnessRejected = z.object({
  reason: spRuntimeDispatchError,
  depositWitness: z.object({
    depositAddress: hexString,
    asset: cfPrimitivesChainsAssetsEthAsset,
    amount: numberOrHex,
  }),
});

export type EthereumIngressEgressEventDepositWitnessRejectedArgs = z.output<
  typeof ethereumIngressEgressEventDepositWitnessRejected
>;

const cfPrimitivesChainsAssetsDotAsset = simpleEnum(['Dot']);

export const polkadotIngressEgressEventDepositReceived = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
});

export type PolkadotIngressEgressEventDepositReceivedArgs = z.output<
  typeof polkadotIngressEgressEventDepositReceived
>;

export const polkadotIngressEgressEventAssetEgressStatusChanged = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  disabled: z.boolean(),
});

export type PolkadotIngressEgressEventAssetEgressStatusChangedArgs = z.output<
  typeof polkadotIngressEgressEventAssetEgressStatusChanged
>;

export const polkadotIngressEgressEventEgressScheduled = z.object({
  id: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type PolkadotIngressEgressEventEgressScheduledArgs = z.output<
  typeof polkadotIngressEgressEventEgressScheduled
>;

export const polkadotIngressEgressEventCcmBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
});

export type PolkadotIngressEgressEventCcmBroadcastRequestedArgs = z.output<
  typeof polkadotIngressEgressEventCcmBroadcastRequested
>;

export const polkadotIngressEgressEventCcmEgressInvalid = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  error: spRuntimeDispatchError,
});

export type PolkadotIngressEgressEventCcmEgressInvalidArgs = z.output<
  typeof polkadotIngressEgressEventCcmEgressInvalid
>;

export const polkadotIngressEgressEventDepositFetchesScheduled = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsDotAsset,
});

export type PolkadotIngressEgressEventDepositFetchesScheduledArgs = z.output<
  typeof polkadotIngressEgressEventDepositFetchesScheduled
>;

export const polkadotIngressEgressEventBatchBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressIds: z.array(z.tuple([cfPrimitivesChainsForeignChain, numberOrHex])),
});

export type PolkadotIngressEgressEventBatchBroadcastRequestedArgs = z.output<
  typeof polkadotIngressEgressEventBatchBroadcastRequested
>;

export const polkadotIngressEgressEventMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  minimumDeposit: numberOrHex,
});

export type PolkadotIngressEgressEventMinimumDepositSetArgs = z.output<
  typeof polkadotIngressEgressEventMinimumDepositSet
>;

export const polkadotIngressEgressEventDepositIgnored = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
});

export type PolkadotIngressEgressEventDepositIgnoredArgs = z.output<
  typeof polkadotIngressEgressEventDepositIgnored
>;

export const polkadotIngressEgressEventVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type PolkadotIngressEgressEventVaultTransferFailedArgs = z.output<
  typeof polkadotIngressEgressEventVaultTransferFailed
>;

export const polkadotIngressEgressEventDepositWitnessRejected = z.object({
  reason: spRuntimeDispatchError,
  depositWitness: z.object({
    depositAddress: hexString,
    asset: cfPrimitivesChainsAssetsDotAsset,
    amount: numberOrHex,
  }),
});

export type PolkadotIngressEgressEventDepositWitnessRejectedArgs = z.output<
  typeof polkadotIngressEgressEventDepositWitnessRejected
>;

const cfPrimitivesChainsAssetsBtcAsset = simpleEnum(['Btc']);

export const bitcoinIngressEgressEventDepositReceived = z.object({
  depositAddress: cfChainsBtcScriptPubkey,
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  depositDetails: z.object({ txId: hexString, vout: z.number() }),
});

export type BitcoinIngressEgressEventDepositReceivedArgs = z.output<
  typeof bitcoinIngressEgressEventDepositReceived
>;

export const bitcoinIngressEgressEventAssetEgressStatusChanged = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  disabled: z.boolean(),
});

export type BitcoinIngressEgressEventAssetEgressStatusChangedArgs = z.output<
  typeof bitcoinIngressEgressEventAssetEgressStatusChanged
>;

export const bitcoinIngressEgressEventEgressScheduled = z.object({
  id: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  destinationAddress: cfChainsBtcScriptPubkey,
});

export type BitcoinIngressEgressEventEgressScheduledArgs = z.output<
  typeof bitcoinIngressEgressEventEgressScheduled
>;

export const bitcoinIngressEgressEventCcmBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
});

export type BitcoinIngressEgressEventCcmBroadcastRequestedArgs = z.output<
  typeof bitcoinIngressEgressEventCcmBroadcastRequested
>;

export const bitcoinIngressEgressEventCcmEgressInvalid = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  error: spRuntimeDispatchError,
});

export type BitcoinIngressEgressEventCcmEgressInvalidArgs = z.output<
  typeof bitcoinIngressEgressEventCcmEgressInvalid
>;

export const bitcoinIngressEgressEventDepositFetchesScheduled = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsBtcAsset,
});

export type BitcoinIngressEgressEventDepositFetchesScheduledArgs = z.output<
  typeof bitcoinIngressEgressEventDepositFetchesScheduled
>;

export const bitcoinIngressEgressEventBatchBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressIds: z.array(z.tuple([cfPrimitivesChainsForeignChain, numberOrHex])),
});

export type BitcoinIngressEgressEventBatchBroadcastRequestedArgs = z.output<
  typeof bitcoinIngressEgressEventBatchBroadcastRequested
>;

export const bitcoinIngressEgressEventMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  minimumDeposit: numberOrHex,
});

export type BitcoinIngressEgressEventMinimumDepositSetArgs = z.output<
  typeof bitcoinIngressEgressEventMinimumDepositSet
>;

export const bitcoinIngressEgressEventDepositIgnored = z.object({
  depositAddress: cfChainsBtcScriptPubkey,
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  depositDetails: z.object({ txId: hexString, vout: z.number() }),
});

export type BitcoinIngressEgressEventDepositIgnoredArgs = z.output<
  typeof bitcoinIngressEgressEventDepositIgnored
>;

export const bitcoinIngressEgressEventVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  destinationAddress: cfChainsBtcScriptPubkey,
});

export type BitcoinIngressEgressEventVaultTransferFailedArgs = z.output<
  typeof bitcoinIngressEgressEventVaultTransferFailed
>;

export const bitcoinIngressEgressEventDepositWitnessRejected = z.object({
  reason: spRuntimeDispatchError,
  depositWitness: z.object({
    depositAddress: cfChainsBtcScriptPubkey,
    asset: cfPrimitivesChainsAssetsBtcAsset,
    amount: numberOrHex,
    depositDetails: z.object({ txId: hexString, vout: z.number() }),
  }),
});

export type BitcoinIngressEgressEventDepositWitnessRejectedArgs = z.output<
  typeof bitcoinIngressEgressEventDepositWitnessRejected
>;

export const liquidityPoolsEventUpdatedBuyInterval = z.object({
  buyInterval: z.number(),
});

export type LiquidityPoolsEventUpdatedBuyIntervalArgs = z.output<
  typeof liquidityPoolsEventUpdatedBuyInterval
>;

export const liquidityPoolsEventPoolStateUpdated = z.object({
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  enabled: z.boolean(),
});

export type LiquidityPoolsEventPoolStateUpdatedArgs = z.output<
  typeof liquidityPoolsEventPoolStateUpdated
>;

export const liquidityPoolsEventNewPoolCreated = z.object({
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  feeHundredthPips: z.number(),
  initialPrice: numberOrHex,
});

export type LiquidityPoolsEventNewPoolCreatedArgs = z.output<
  typeof liquidityPoolsEventNewPoolCreated
>;

const palletCfPoolsPalletIncreaseOrDecrease = z.union([
  z.object({ __kind: z.literal('Increase'), value: numberOrHex }),
  z.object({ __kind: z.literal('Decrease'), value: numberOrHex }),
]);

export const liquidityPoolsEventRangeOrderUpdated = z.object({
  lp: accountId,
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  id: numberOrHex,
  tickRange: z.object({ start: z.number(), end: z.number() }),
  sizeChange: palletCfPoolsPalletIncreaseOrDecrease.nullish(),
  liquidityTotal: numberOrHex,
  collectedFees: z.object({ base: numberOrHex, pair: numberOrHex }),
});

export type LiquidityPoolsEventRangeOrderUpdatedArgs = z.output<
  typeof liquidityPoolsEventRangeOrderUpdated
>;

export const liquidityPoolsEventLimitOrderUpdated = z.object({
  lp: accountId,
  sellAsset: cfPrimitivesChainsAssetsAnyAsset,
  buyAsset: cfPrimitivesChainsAssetsAnyAsset,
  id: numberOrHex,
  tick: z.number(),
  amountChange: palletCfPoolsPalletIncreaseOrDecrease.nullish(),
  amountTotal: numberOrHex,
  collectedFees: numberOrHex,
  boughtAmount: numberOrHex,
});

export type LiquidityPoolsEventLimitOrderUpdatedArgs = z.output<
  typeof liquidityPoolsEventLimitOrderUpdated
>;

export const liquidityPoolsEventNetworkFeeTaken = z.object({
  feeAmount: numberOrHex,
});

export type LiquidityPoolsEventNetworkFeeTakenArgs = z.output<
  typeof liquidityPoolsEventNetworkFeeTaken
>;

export const liquidityPoolsEventAssetSwapped = z.object({
  from: cfPrimitivesChainsAssetsAnyAsset,
  to: cfPrimitivesChainsAssetsAnyAsset,
  inputAmount: numberOrHex,
  outputAmount: numberOrHex,
});

export type LiquidityPoolsEventAssetSwappedArgs = z.output<
  typeof liquidityPoolsEventAssetSwapped
>;

export const liquidityPoolsEventPoolFeeSet = z.object({
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  feeHundredthPips: z.number(),
});

export type LiquidityPoolsEventPoolFeeSetArgs = z.output<
  typeof liquidityPoolsEventPoolFeeSet
>;
