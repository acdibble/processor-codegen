import { z } from 'zod';
import { systemExtrinsicSuccess } from './system/extrinsicSuccess';
import { systemExtrinsicFailed } from './system/extrinsicFailed';
import { systemCodeUpdated } from './system/codeUpdated';
import { systemNewAccount } from './system/newAccount';
import { systemKilledAccount } from './system/killedAccount';
import { systemRemarked } from './system/remarked';
import { environmentAddedNewEthAsset } from './environment/addedNewEthAsset';
import { environmentUpdatedEthAsset } from './environment/updatedEthAsset';
import { environmentPolkadotVaultAccountSet } from './environment/polkadotVaultAccountSet';
import { environmentBitcoinBlockNumberSetForVault } from './environment/bitcoinBlockNumberSetForVault';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { environmentNextCompatibilityVersionSet } from './environment/nextCompatibilityVersionSet';
import { flipRemainingImbalance } from './flip/remainingImbalance';
import { flipSlashingPerformed } from './flip/slashingPerformed';
import { flipAccountReaped } from './flip/accountReaped';
import { flipSlashingRateUpdated } from './flip/slashingRateUpdated';
import { emissionsSupplyUpdateBroadcastRequested } from './emissions/supplyUpdateBroadcastRequested';
import { emissionsCurrentAuthorityInflationEmissionsUpdated } from './emissions/currentAuthorityInflationEmissionsUpdated';
import { emissionsBackupNodeInflationEmissionsUpdated } from './emissions/backupNodeInflationEmissionsUpdated';
import { emissionsSupplyUpdateIntervalUpdated } from './emissions/supplyUpdateIntervalUpdated';
import { fundingFunded } from './funding/funded';
import { fundingRedemptionRequested } from './funding/redemptionRequested';
import { fundingRedemptionSettled } from './funding/redemptionSettled';
import { fundingStoppedBidding } from './funding/stoppedBidding';
import { fundingStartedBidding } from './funding/startedBidding';
import { fundingRedemptionExpired } from './funding/redemptionExpired';
import { fundingAddedRestrictedAddress } from './funding/addedRestrictedAddress';
import { fundingRemovedRestrictedAddress } from './funding/removedRestrictedAddress';
import { fundingFailedFundingAttempt } from './funding/failedFundingAttempt';
import { fundingMinimumFundingUpdated } from './funding/minimumFundingUpdated';
import { fundingRedemptionTaxAmountUpdated } from './funding/redemptionTaxAmountUpdated';
import { fundingRedemptionAmountZero } from './funding/redemptionAmountZero';
import { fundingBoundRedeemAddress } from './funding/boundRedeemAddress';
import { accountRolesAccountRoleRegistered } from './accountRoles/accountRoleRegistered';
import { transactionPaymentTransactionFeePaid } from './transactionPayment/transactionFeePaid';
import { witnesserWitnessExecutionFailed } from './witnesser/witnessExecutionFailed';
import { validatorRotationAborted } from './validator/rotationAborted';
import { validatorNewEpoch } from './validator/newEpoch';
import { validatorRotationPhaseUpdated } from './validator/rotationPhaseUpdated';
import { validatorCFEVersionUpdated } from './validator/cFEVersionUpdated';
import { validatorPeerIdRegistered } from './validator/peerIdRegistered';
import { validatorPeerIdUnregistered } from './validator/peerIdUnregistered';
import { validatorVanityNameSet } from './validator/vanityNameSet';
import { validatorAuctionCompleted } from './validator/auctionCompleted';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { sessionNewSession } from './session/newSession';
import { grandpaNewAuthorities } from './grandpa/newAuthorities';
import { grandpaPaused } from './grandpa/paused';
import { grandpaResumed } from './grandpa/resumed';
import { governanceProposed } from './governance/proposed';
import { governanceExecuted } from './governance/executed';
import { governanceExpired } from './governance/expired';
import { governanceApproved } from './governance/approved';
import { governanceFailedExecution } from './governance/failedExecution';
import { governanceDecodeOfCallFailed } from './governance/decodeOfCallFailed';
import { governanceUpgradeConditionsSatisfied } from './governance/upgradeConditionsSatisfied';
import { governanceGovKeyCallExecuted } from './governance/govKeyCallExecuted';
import { governanceGovKeyCallHashWhitelisted } from './governance/govKeyCallHashWhitelisted';
import { governanceGovKeyCallExecutionFailed } from './governance/govKeyCallExecutionFailed';
import { tokenholderGovernanceProposalSubmitted } from './tokenholderGovernance/proposalSubmitted';
import { tokenholderGovernanceProposalPassed } from './tokenholderGovernance/proposalPassed';
import { tokenholderGovernanceProposalRejected } from './tokenholderGovernance/proposalRejected';
import { tokenholderGovernanceProposalEnacted } from './tokenholderGovernance/proposalEnacted';
import { tokenholderGovernanceGovKeyUpdatedHasFailed } from './tokenholderGovernance/govKeyUpdatedHasFailed';
import { tokenholderGovernanceGovKeyUpdatedWasSuccessful } from './tokenholderGovernance/govKeyUpdatedWasSuccessful';
import { reputationOffencePenalty } from './reputation/offencePenalty';
import { reputationAccrualRateUpdated } from './reputation/accrualRateUpdated';
import { reputationMissedHeartbeatPenaltyUpdated } from './reputation/missedHeartbeatPenaltyUpdated';
import { reputationPenaltyUpdated } from './reputation/penaltyUpdated';
import { ethereumChainTrackingChainStateUpdated } from './ethereumChainTracking/chainStateUpdated';
import { polkadotChainTrackingChainStateUpdated } from './polkadotChainTracking/chainStateUpdated';
import { bitcoinChainTrackingChainStateUpdated } from './bitcoinChainTracking/chainStateUpdated';
import { ethereumVaultKeygenRequest } from './ethereumVault/keygenRequest';
import { ethereumVaultKeyHandoverRequest } from './ethereumVault/keyHandoverRequest';
import { ethereumVaultVaultRotationCompleted } from './ethereumVault/vaultRotationCompleted';
import { ethereumVaultVaultRotatedExternally } from './ethereumVault/vaultRotatedExternally';
import { ethereumVaultKeygenSuccessReported } from './ethereumVault/keygenSuccessReported';
import { ethereumVaultKeyHandoverSuccessReported } from './ethereumVault/keyHandoverSuccessReported';
import { ethereumVaultKeygenFailureReported } from './ethereumVault/keygenFailureReported';
import { ethereumVaultKeyHandoverFailureReported } from './ethereumVault/keyHandoverFailureReported';
import { ethereumVaultKeygenSuccess } from './ethereumVault/keygenSuccess';
import { ethereumVaultKeyHandoverSuccess } from './ethereumVault/keyHandoverSuccess';
import { ethereumVaultNoKeyHandover } from './ethereumVault/noKeyHandover';
import { ethereumVaultKeygenVerificationSuccess } from './ethereumVault/keygenVerificationSuccess';
import { ethereumVaultKeyHandoverVerificationSuccess } from './ethereumVault/keyHandoverVerificationSuccess';
import { ethereumVaultKeygenVerificationFailure } from './ethereumVault/keygenVerificationFailure';
import { ethereumVaultKeyHandoverVerificationFailure } from './ethereumVault/keyHandoverVerificationFailure';
import { ethereumVaultKeygenFailure } from './ethereumVault/keygenFailure';
import { ethereumVaultKeygenResponseTimeout } from './ethereumVault/keygenResponseTimeout';
import { ethereumVaultKeyHandoverResponseTimeout } from './ethereumVault/keyHandoverResponseTimeout';
import { ethereumVaultKeygenResponseTimeoutUpdated } from './ethereumVault/keygenResponseTimeoutUpdated';
import { ethereumVaultAwaitingGovernanceActivation } from './ethereumVault/awaitingGovernanceActivation';
import { ethereumVaultKeyHandoverFailure } from './ethereumVault/keyHandoverFailure';
import { ethereumVaultVaultRotationAborted } from './ethereumVault/vaultRotationAborted';
import { polkadotVaultKeygenRequest } from './polkadotVault/keygenRequest';
import { polkadotVaultKeyHandoverRequest } from './polkadotVault/keyHandoverRequest';
import { polkadotVaultVaultRotationCompleted } from './polkadotVault/vaultRotationCompleted';
import { polkadotVaultVaultRotatedExternally } from './polkadotVault/vaultRotatedExternally';
import { polkadotVaultKeygenSuccessReported } from './polkadotVault/keygenSuccessReported';
import { polkadotVaultKeyHandoverSuccessReported } from './polkadotVault/keyHandoverSuccessReported';
import { polkadotVaultKeygenFailureReported } from './polkadotVault/keygenFailureReported';
import { polkadotVaultKeyHandoverFailureReported } from './polkadotVault/keyHandoverFailureReported';
import { polkadotVaultKeygenSuccess } from './polkadotVault/keygenSuccess';
import { polkadotVaultKeyHandoverSuccess } from './polkadotVault/keyHandoverSuccess';
import { polkadotVaultNoKeyHandover } from './polkadotVault/noKeyHandover';
import { polkadotVaultKeygenVerificationSuccess } from './polkadotVault/keygenVerificationSuccess';
import { polkadotVaultKeyHandoverVerificationSuccess } from './polkadotVault/keyHandoverVerificationSuccess';
import { polkadotVaultKeygenVerificationFailure } from './polkadotVault/keygenVerificationFailure';
import { polkadotVaultKeyHandoverVerificationFailure } from './polkadotVault/keyHandoverVerificationFailure';
import { polkadotVaultKeygenFailure } from './polkadotVault/keygenFailure';
import { polkadotVaultKeygenResponseTimeout } from './polkadotVault/keygenResponseTimeout';
import { polkadotVaultKeyHandoverResponseTimeout } from './polkadotVault/keyHandoverResponseTimeout';
import { polkadotVaultKeygenResponseTimeoutUpdated } from './polkadotVault/keygenResponseTimeoutUpdated';
import { polkadotVaultAwaitingGovernanceActivation } from './polkadotVault/awaitingGovernanceActivation';
import { polkadotVaultKeyHandoverFailure } from './polkadotVault/keyHandoverFailure';
import { polkadotVaultVaultRotationAborted } from './polkadotVault/vaultRotationAborted';
import { bitcoinVaultKeygenRequest } from './bitcoinVault/keygenRequest';
import { bitcoinVaultKeyHandoverRequest } from './bitcoinVault/keyHandoverRequest';
import { bitcoinVaultVaultRotationCompleted } from './bitcoinVault/vaultRotationCompleted';
import { bitcoinVaultVaultRotatedExternally } from './bitcoinVault/vaultRotatedExternally';
import { bitcoinVaultKeygenSuccessReported } from './bitcoinVault/keygenSuccessReported';
import { bitcoinVaultKeyHandoverSuccessReported } from './bitcoinVault/keyHandoverSuccessReported';
import { bitcoinVaultKeygenFailureReported } from './bitcoinVault/keygenFailureReported';
import { bitcoinVaultKeyHandoverFailureReported } from './bitcoinVault/keyHandoverFailureReported';
import { bitcoinVaultKeygenSuccess } from './bitcoinVault/keygenSuccess';
import { bitcoinVaultKeyHandoverSuccess } from './bitcoinVault/keyHandoverSuccess';
import { bitcoinVaultNoKeyHandover } from './bitcoinVault/noKeyHandover';
import { bitcoinVaultKeygenVerificationSuccess } from './bitcoinVault/keygenVerificationSuccess';
import { bitcoinVaultKeyHandoverVerificationSuccess } from './bitcoinVault/keyHandoverVerificationSuccess';
import { bitcoinVaultKeygenVerificationFailure } from './bitcoinVault/keygenVerificationFailure';
import { bitcoinVaultKeyHandoverVerificationFailure } from './bitcoinVault/keyHandoverVerificationFailure';
import { bitcoinVaultKeygenFailure } from './bitcoinVault/keygenFailure';
import { bitcoinVaultKeygenResponseTimeout } from './bitcoinVault/keygenResponseTimeout';
import { bitcoinVaultKeyHandoverResponseTimeout } from './bitcoinVault/keyHandoverResponseTimeout';
import { bitcoinVaultKeygenResponseTimeoutUpdated } from './bitcoinVault/keygenResponseTimeoutUpdated';
import { bitcoinVaultAwaitingGovernanceActivation } from './bitcoinVault/awaitingGovernanceActivation';
import { bitcoinVaultKeyHandoverFailure } from './bitcoinVault/keyHandoverFailure';
import { bitcoinVaultVaultRotationAborted } from './bitcoinVault/vaultRotationAborted';
import { ethereumThresholdSignerThresholdSignatureRequest } from './ethereumThresholdSigner/thresholdSignatureRequest';
import { ethereumThresholdSignerThresholdSignatureFailed } from './ethereumThresholdSigner/thresholdSignatureFailed';
import { ethereumThresholdSignerThresholdSignatureSuccess } from './ethereumThresholdSigner/thresholdSignatureSuccess';
import { ethereumThresholdSignerThresholdDispatchComplete } from './ethereumThresholdSigner/thresholdDispatchComplete';
import { ethereumThresholdSignerRetryRequested } from './ethereumThresholdSigner/retryRequested';
import { ethereumThresholdSignerFailureReportProcessed } from './ethereumThresholdSigner/failureReportProcessed';
import { ethereumThresholdSignerSignersUnavailable } from './ethereumThresholdSigner/signersUnavailable';
import { ethereumThresholdSignerCurrentKeyUnavailable } from './ethereumThresholdSigner/currentKeyUnavailable';
import { ethereumThresholdSignerThresholdSignatureResponseTimeoutUpdated } from './ethereumThresholdSigner/thresholdSignatureResponseTimeoutUpdated';
import { polkadotThresholdSignerThresholdSignatureRequest } from './polkadotThresholdSigner/thresholdSignatureRequest';
import { polkadotThresholdSignerThresholdSignatureFailed } from './polkadotThresholdSigner/thresholdSignatureFailed';
import { polkadotThresholdSignerThresholdSignatureSuccess } from './polkadotThresholdSigner/thresholdSignatureSuccess';
import { polkadotThresholdSignerThresholdDispatchComplete } from './polkadotThresholdSigner/thresholdDispatchComplete';
import { polkadotThresholdSignerRetryRequested } from './polkadotThresholdSigner/retryRequested';
import { polkadotThresholdSignerFailureReportProcessed } from './polkadotThresholdSigner/failureReportProcessed';
import { polkadotThresholdSignerSignersUnavailable } from './polkadotThresholdSigner/signersUnavailable';
import { polkadotThresholdSignerCurrentKeyUnavailable } from './polkadotThresholdSigner/currentKeyUnavailable';
import { polkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated } from './polkadotThresholdSigner/thresholdSignatureResponseTimeoutUpdated';
import { bitcoinThresholdSignerThresholdSignatureRequest } from './bitcoinThresholdSigner/thresholdSignatureRequest';
import { bitcoinThresholdSignerThresholdSignatureFailed } from './bitcoinThresholdSigner/thresholdSignatureFailed';
import { bitcoinThresholdSignerThresholdSignatureSuccess } from './bitcoinThresholdSigner/thresholdSignatureSuccess';
import { bitcoinThresholdSignerThresholdDispatchComplete } from './bitcoinThresholdSigner/thresholdDispatchComplete';
import { bitcoinThresholdSignerRetryRequested } from './bitcoinThresholdSigner/retryRequested';
import { bitcoinThresholdSignerFailureReportProcessed } from './bitcoinThresholdSigner/failureReportProcessed';
import { bitcoinThresholdSignerSignersUnavailable } from './bitcoinThresholdSigner/signersUnavailable';
import { bitcoinThresholdSignerCurrentKeyUnavailable } from './bitcoinThresholdSigner/currentKeyUnavailable';
import { bitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated } from './bitcoinThresholdSigner/thresholdSignatureResponseTimeoutUpdated';
import { ethereumBroadcasterTransactionBroadcastRequest } from './ethereumBroadcaster/transactionBroadcastRequest';
import { ethereumBroadcasterBroadcastRetryScheduled } from './ethereumBroadcaster/broadcastRetryScheduled';
import { ethereumBroadcasterBroadcastAttemptTimeout } from './ethereumBroadcaster/broadcastAttemptTimeout';
import { ethereumBroadcasterBroadcastAborted } from './ethereumBroadcaster/broadcastAborted';
import { ethereumBroadcasterBroadcastSuccess } from './ethereumBroadcaster/broadcastSuccess';
import { ethereumBroadcasterThresholdSignatureInvalid } from './ethereumBroadcaster/thresholdSignatureInvalid';
import { ethereumBroadcasterBroadcastCallbackExecuted } from './ethereumBroadcaster/broadcastCallbackExecuted';
import { polkadotBroadcasterTransactionBroadcastRequest } from './polkadotBroadcaster/transactionBroadcastRequest';
import { polkadotBroadcasterBroadcastRetryScheduled } from './polkadotBroadcaster/broadcastRetryScheduled';
import { polkadotBroadcasterBroadcastAttemptTimeout } from './polkadotBroadcaster/broadcastAttemptTimeout';
import { polkadotBroadcasterBroadcastAborted } from './polkadotBroadcaster/broadcastAborted';
import { polkadotBroadcasterBroadcastSuccess } from './polkadotBroadcaster/broadcastSuccess';
import { polkadotBroadcasterThresholdSignatureInvalid } from './polkadotBroadcaster/thresholdSignatureInvalid';
import { polkadotBroadcasterBroadcastCallbackExecuted } from './polkadotBroadcaster/broadcastCallbackExecuted';
import { bitcoinBroadcasterTransactionBroadcastRequest } from './bitcoinBroadcaster/transactionBroadcastRequest';
import { bitcoinBroadcasterBroadcastRetryScheduled } from './bitcoinBroadcaster/broadcastRetryScheduled';
import { bitcoinBroadcasterBroadcastAttemptTimeout } from './bitcoinBroadcaster/broadcastAttemptTimeout';
import { bitcoinBroadcasterBroadcastAborted } from './bitcoinBroadcaster/broadcastAborted';
import { bitcoinBroadcasterBroadcastSuccess } from './bitcoinBroadcaster/broadcastSuccess';
import { bitcoinBroadcasterThresholdSignatureInvalid } from './bitcoinBroadcaster/thresholdSignatureInvalid';
import { bitcoinBroadcasterBroadcastCallbackExecuted } from './bitcoinBroadcaster/broadcastCallbackExecuted';
import { swappingSwapDepositAddressReady } from './swapping/swapDepositAddressReady';
import { swappingSwapScheduled } from './swapping/swapScheduled';
import { swappingSwapExecuted } from './swapping/swapExecuted';
import { swappingSwapEgressScheduled } from './swapping/swapEgressScheduled';
import { swappingWithdrawalRequested } from './swapping/withdrawalRequested';
import { swappingBatchSwapFailed } from './swapping/batchSwapFailed';
import { swappingCcmEgressScheduled } from './swapping/ccmEgressScheduled';
import { swappingSwapDepositAddressExpired } from './swapping/swapDepositAddressExpired';
import { swappingSwapTtlSet } from './swapping/swapTtlSet';
import { swappingCcmDepositReceived } from './swapping/ccmDepositReceived';
import { swappingMinimumSwapAmountSet } from './swapping/minimumSwapAmountSet';
import { swappingSwapAmountTooLow } from './swapping/swapAmountTooLow';
import { swappingCcmFailed } from './swapping/ccmFailed';
import { liquidityProviderAccountDebited } from './liquidityProvider/accountDebited';
import { liquidityProviderAccountCredited } from './liquidityProvider/accountCredited';
import { liquidityProviderLiquidityDepositAddressReady } from './liquidityProvider/liquidityDepositAddressReady';
import { liquidityProviderLiquidityDepositAddressExpired } from './liquidityProvider/liquidityDepositAddressExpired';
import { liquidityProviderWithdrawalEgressScheduled } from './liquidityProvider/withdrawalEgressScheduled';
import { liquidityProviderLpTtlSet } from './liquidityProvider/lpTtlSet';
import { liquidityProviderEmergencyWithdrawalAddressRegistered } from './liquidityProvider/emergencyWithdrawalAddressRegistered';
import { ethereumIngressEgressStartWitnessing } from './ethereumIngressEgress/startWitnessing';
import { ethereumIngressEgressStopWitnessing } from './ethereumIngressEgress/stopWitnessing';
import { ethereumIngressEgressDepositReceived } from './ethereumIngressEgress/depositReceived';
import { ethereumIngressEgressAssetEgressStatusChanged } from './ethereumIngressEgress/assetEgressStatusChanged';
import { ethereumIngressEgressEgressScheduled } from './ethereumIngressEgress/egressScheduled';
import { ethereumIngressEgressCcmBroadcastRequested } from './ethereumIngressEgress/ccmBroadcastRequested';
import { ethereumIngressEgressCcmEgressInvalid } from './ethereumIngressEgress/ccmEgressInvalid';
import { ethereumIngressEgressDepositFetchesScheduled } from './ethereumIngressEgress/depositFetchesScheduled';
import { ethereumIngressEgressBatchBroadcastRequested } from './ethereumIngressEgress/batchBroadcastRequested';
import { ethereumIngressEgressMinimumDepositSet } from './ethereumIngressEgress/minimumDepositSet';
import { ethereumIngressEgressDepositIgnored } from './ethereumIngressEgress/depositIgnored';
import { ethereumIngressEgressVaultTransferFailed } from './ethereumIngressEgress/vaultTransferFailed';
import { polkadotIngressEgressStartWitnessing } from './polkadotIngressEgress/startWitnessing';
import { polkadotIngressEgressStopWitnessing } from './polkadotIngressEgress/stopWitnessing';
import { polkadotIngressEgressDepositReceived } from './polkadotIngressEgress/depositReceived';
import { polkadotIngressEgressAssetEgressStatusChanged } from './polkadotIngressEgress/assetEgressStatusChanged';
import { polkadotIngressEgressEgressScheduled } from './polkadotIngressEgress/egressScheduled';
import { polkadotIngressEgressCcmBroadcastRequested } from './polkadotIngressEgress/ccmBroadcastRequested';
import { polkadotIngressEgressCcmEgressInvalid } from './polkadotIngressEgress/ccmEgressInvalid';
import { polkadotIngressEgressDepositFetchesScheduled } from './polkadotIngressEgress/depositFetchesScheduled';
import { polkadotIngressEgressBatchBroadcastRequested } from './polkadotIngressEgress/batchBroadcastRequested';
import { polkadotIngressEgressMinimumDepositSet } from './polkadotIngressEgress/minimumDepositSet';
import { polkadotIngressEgressDepositIgnored } from './polkadotIngressEgress/depositIgnored';
import { polkadotIngressEgressVaultTransferFailed } from './polkadotIngressEgress/vaultTransferFailed';
import { bitcoinIngressEgressStartWitnessing } from './bitcoinIngressEgress/startWitnessing';
import { bitcoinIngressEgressStopWitnessing } from './bitcoinIngressEgress/stopWitnessing';
import { bitcoinIngressEgressDepositReceived } from './bitcoinIngressEgress/depositReceived';
import { bitcoinIngressEgressAssetEgressStatusChanged } from './bitcoinIngressEgress/assetEgressStatusChanged';
import { bitcoinIngressEgressEgressScheduled } from './bitcoinIngressEgress/egressScheduled';
import { bitcoinIngressEgressCcmBroadcastRequested } from './bitcoinIngressEgress/ccmBroadcastRequested';
import { bitcoinIngressEgressCcmEgressInvalid } from './bitcoinIngressEgress/ccmEgressInvalid';
import { bitcoinIngressEgressDepositFetchesScheduled } from './bitcoinIngressEgress/depositFetchesScheduled';
import { bitcoinIngressEgressBatchBroadcastRequested } from './bitcoinIngressEgress/batchBroadcastRequested';
import { bitcoinIngressEgressMinimumDepositSet } from './bitcoinIngressEgress/minimumDepositSet';
import { bitcoinIngressEgressDepositIgnored } from './bitcoinIngressEgress/depositIgnored';
import { bitcoinIngressEgressVaultTransferFailed } from './bitcoinIngressEgress/vaultTransferFailed';
import { liquidityPoolsUpdatedBuyInterval } from './liquidityPools/updatedBuyInterval';
import { liquidityPoolsPoolStateUpdated } from './liquidityPools/poolStateUpdated';
import { liquidityPoolsNewPoolCreated } from './liquidityPools/newPoolCreated';
import { liquidityPoolsRangeOrderMinted } from './liquidityPools/rangeOrderMinted';
import { liquidityPoolsRangeOrderBurned } from './liquidityPools/rangeOrderBurned';
import { liquidityPoolsLimitOrderMinted } from './liquidityPools/limitOrderMinted';
import { liquidityPoolsLimitOrderBurned } from './liquidityPools/limitOrderBurned';
import { liquidityPoolsNetworkFeeTaken } from './liquidityPools/networkFeeTaken';
import { liquidityPoolsAssetSwapped } from './liquidityPools/assetSwapped';
import { liquidityPoolsLiquidityFeeUpdated } from './liquidityPools/liquidityFeeUpdated';

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

export type SystemExtrinsicSuccess = EventHandler<z.output<typeof systemExtrinsicSuccess>>;
export type SystemExtrinsicFailed = EventHandler<z.output<typeof systemExtrinsicFailed>>;
export type SystemCodeUpdated = EventHandler<z.output<typeof systemCodeUpdated>>;
export type SystemNewAccount = EventHandler<z.output<typeof systemNewAccount>>;
export type SystemKilledAccount = EventHandler<z.output<typeof systemKilledAccount>>;
export type SystemRemarked = EventHandler<z.output<typeof systemRemarked>>;
export type EnvironmentAddedNewEthAsset = EventHandler<
  z.output<typeof environmentAddedNewEthAsset>
>;
export type EnvironmentUpdatedEthAsset = EventHandler<z.output<typeof environmentUpdatedEthAsset>>;
export type EnvironmentPolkadotVaultAccountSet = EventHandler<
  z.output<typeof environmentPolkadotVaultAccountSet>
>;
export type EnvironmentBitcoinBlockNumberSetForVault = EventHandler<
  z.output<typeof environmentBitcoinBlockNumberSetForVault>
>;
export type EnvironmentRuntimeSafeModeUpdated = EventHandler<
  z.output<typeof environmentRuntimeSafeModeUpdated>
>;
export type EnvironmentNextCompatibilityVersionSet = EventHandler<
  z.output<typeof environmentNextCompatibilityVersionSet>
>;
export type FlipRemainingImbalance = EventHandler<z.output<typeof flipRemainingImbalance>>;
export type FlipSlashingPerformed = EventHandler<z.output<typeof flipSlashingPerformed>>;
export type FlipAccountReaped = EventHandler<z.output<typeof flipAccountReaped>>;
export type FlipSlashingRateUpdated = EventHandler<z.output<typeof flipSlashingRateUpdated>>;
export type EmissionsSupplyUpdateBroadcastRequested = EventHandler<
  z.output<typeof emissionsSupplyUpdateBroadcastRequested>
>;
export type EmissionsCurrentAuthorityInflationEmissionsUpdated = EventHandler<
  z.output<typeof emissionsCurrentAuthorityInflationEmissionsUpdated>
>;
export type EmissionsBackupNodeInflationEmissionsUpdated = EventHandler<
  z.output<typeof emissionsBackupNodeInflationEmissionsUpdated>
>;
export type EmissionsSupplyUpdateIntervalUpdated = EventHandler<
  z.output<typeof emissionsSupplyUpdateIntervalUpdated>
>;
export type FundingFunded = EventHandler<z.output<typeof fundingFunded>>;
export type FundingRedemptionRequested = EventHandler<z.output<typeof fundingRedemptionRequested>>;
export type FundingRedemptionSettled = EventHandler<z.output<typeof fundingRedemptionSettled>>;
export type FundingStoppedBidding = EventHandler<z.output<typeof fundingStoppedBidding>>;
export type FundingStartedBidding = EventHandler<z.output<typeof fundingStartedBidding>>;
export type FundingRedemptionExpired = EventHandler<z.output<typeof fundingRedemptionExpired>>;
export type FundingAddedRestrictedAddress = EventHandler<
  z.output<typeof fundingAddedRestrictedAddress>
>;
export type FundingRemovedRestrictedAddress = EventHandler<
  z.output<typeof fundingRemovedRestrictedAddress>
>;
export type FundingFailedFundingAttempt = EventHandler<
  z.output<typeof fundingFailedFundingAttempt>
>;
export type FundingMinimumFundingUpdated = EventHandler<
  z.output<typeof fundingMinimumFundingUpdated>
>;
export type FundingRedemptionTaxAmountUpdated = EventHandler<
  z.output<typeof fundingRedemptionTaxAmountUpdated>
>;
export type FundingRedemptionAmountZero = EventHandler<
  z.output<typeof fundingRedemptionAmountZero>
>;
export type FundingBoundRedeemAddress = EventHandler<z.output<typeof fundingBoundRedeemAddress>>;
export type AccountRolesAccountRoleRegistered = EventHandler<
  z.output<typeof accountRolesAccountRoleRegistered>
>;
export type TransactionPaymentTransactionFeePaid = EventHandler<
  z.output<typeof transactionPaymentTransactionFeePaid>
>;
export type WitnesserWitnessExecutionFailed = EventHandler<
  z.output<typeof witnesserWitnessExecutionFailed>
>;
export type ValidatorRotationAborted = EventHandler<z.output<typeof validatorRotationAborted>>;
export type ValidatorNewEpoch = EventHandler<z.output<typeof validatorNewEpoch>>;
export type ValidatorRotationPhaseUpdated = EventHandler<
  z.output<typeof validatorRotationPhaseUpdated>
>;
export type ValidatorCFEVersionUpdated = EventHandler<z.output<typeof validatorCFEVersionUpdated>>;
export type ValidatorPeerIdRegistered = EventHandler<z.output<typeof validatorPeerIdRegistered>>;
export type ValidatorPeerIdUnregistered = EventHandler<
  z.output<typeof validatorPeerIdUnregistered>
>;
export type ValidatorVanityNameSet = EventHandler<z.output<typeof validatorVanityNameSet>>;
export type ValidatorAuctionCompleted = EventHandler<z.output<typeof validatorAuctionCompleted>>;
export type ValidatorPalletConfigUpdated = EventHandler<
  z.output<typeof validatorPalletConfigUpdated>
>;
export type SessionNewSession = EventHandler<z.output<typeof sessionNewSession>>;
export type GrandpaNewAuthorities = EventHandler<z.output<typeof grandpaNewAuthorities>>;
export type GrandpaPaused = EventHandler<z.output<typeof grandpaPaused>>;
export type GrandpaResumed = EventHandler<z.output<typeof grandpaResumed>>;
export type GovernanceProposed = EventHandler<z.output<typeof governanceProposed>>;
export type GovernanceExecuted = EventHandler<z.output<typeof governanceExecuted>>;
export type GovernanceExpired = EventHandler<z.output<typeof governanceExpired>>;
export type GovernanceApproved = EventHandler<z.output<typeof governanceApproved>>;
export type GovernanceFailedExecution = EventHandler<z.output<typeof governanceFailedExecution>>;
export type GovernanceDecodeOfCallFailed = EventHandler<
  z.output<typeof governanceDecodeOfCallFailed>
>;
export type GovernanceUpgradeConditionsSatisfied = EventHandler<
  z.output<typeof governanceUpgradeConditionsSatisfied>
>;
export type GovernanceGovKeyCallExecuted = EventHandler<
  z.output<typeof governanceGovKeyCallExecuted>
>;
export type GovernanceGovKeyCallHashWhitelisted = EventHandler<
  z.output<typeof governanceGovKeyCallHashWhitelisted>
>;
export type GovernanceGovKeyCallExecutionFailed = EventHandler<
  z.output<typeof governanceGovKeyCallExecutionFailed>
>;
export type TokenholderGovernanceProposalSubmitted = EventHandler<
  z.output<typeof tokenholderGovernanceProposalSubmitted>
>;
export type TokenholderGovernanceProposalPassed = EventHandler<
  z.output<typeof tokenholderGovernanceProposalPassed>
>;
export type TokenholderGovernanceProposalRejected = EventHandler<
  z.output<typeof tokenholderGovernanceProposalRejected>
>;
export type TokenholderGovernanceProposalEnacted = EventHandler<
  z.output<typeof tokenholderGovernanceProposalEnacted>
>;
export type TokenholderGovernanceGovKeyUpdatedHasFailed = EventHandler<
  z.output<typeof tokenholderGovernanceGovKeyUpdatedHasFailed>
>;
export type TokenholderGovernanceGovKeyUpdatedWasSuccessful = EventHandler<
  z.output<typeof tokenholderGovernanceGovKeyUpdatedWasSuccessful>
>;
export type ReputationOffencePenalty = EventHandler<z.output<typeof reputationOffencePenalty>>;
export type ReputationAccrualRateUpdated = EventHandler<
  z.output<typeof reputationAccrualRateUpdated>
>;
export type ReputationMissedHeartbeatPenaltyUpdated = EventHandler<
  z.output<typeof reputationMissedHeartbeatPenaltyUpdated>
>;
export type ReputationPenaltyUpdated = EventHandler<z.output<typeof reputationPenaltyUpdated>>;
export type EthereumChainTrackingChainStateUpdated = EventHandler<
  z.output<typeof ethereumChainTrackingChainStateUpdated>
>;
export type PolkadotChainTrackingChainStateUpdated = EventHandler<
  z.output<typeof polkadotChainTrackingChainStateUpdated>
>;
export type BitcoinChainTrackingChainStateUpdated = EventHandler<
  z.output<typeof bitcoinChainTrackingChainStateUpdated>
>;
export type EthereumVaultKeygenRequest = EventHandler<z.output<typeof ethereumVaultKeygenRequest>>;
export type EthereumVaultKeyHandoverRequest = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverRequest>
>;
export type EthereumVaultVaultRotationCompleted = EventHandler<
  z.output<typeof ethereumVaultVaultRotationCompleted>
>;
export type EthereumVaultVaultRotatedExternally = EventHandler<
  z.output<typeof ethereumVaultVaultRotatedExternally>
>;
export type EthereumVaultKeygenSuccessReported = EventHandler<
  z.output<typeof ethereumVaultKeygenSuccessReported>
>;
export type EthereumVaultKeyHandoverSuccessReported = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverSuccessReported>
>;
export type EthereumVaultKeygenFailureReported = EventHandler<
  z.output<typeof ethereumVaultKeygenFailureReported>
>;
export type EthereumVaultKeyHandoverFailureReported = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverFailureReported>
>;
export type EthereumVaultKeygenSuccess = EventHandler<z.output<typeof ethereumVaultKeygenSuccess>>;
export type EthereumVaultKeyHandoverSuccess = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverSuccess>
>;
export type EthereumVaultNoKeyHandover = EventHandler<z.output<typeof ethereumVaultNoKeyHandover>>;
export type EthereumVaultKeygenVerificationSuccess = EventHandler<
  z.output<typeof ethereumVaultKeygenVerificationSuccess>
>;
export type EthereumVaultKeyHandoverVerificationSuccess = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverVerificationSuccess>
>;
export type EthereumVaultKeygenVerificationFailure = EventHandler<
  z.output<typeof ethereumVaultKeygenVerificationFailure>
>;
export type EthereumVaultKeyHandoverVerificationFailure = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverVerificationFailure>
>;
export type EthereumVaultKeygenFailure = EventHandler<z.output<typeof ethereumVaultKeygenFailure>>;
export type EthereumVaultKeygenResponseTimeout = EventHandler<
  z.output<typeof ethereumVaultKeygenResponseTimeout>
>;
export type EthereumVaultKeyHandoverResponseTimeout = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverResponseTimeout>
>;
export type EthereumVaultKeygenResponseTimeoutUpdated = EventHandler<
  z.output<typeof ethereumVaultKeygenResponseTimeoutUpdated>
>;
export type EthereumVaultAwaitingGovernanceActivation = EventHandler<
  z.output<typeof ethereumVaultAwaitingGovernanceActivation>
>;
export type EthereumVaultKeyHandoverFailure = EventHandler<
  z.output<typeof ethereumVaultKeyHandoverFailure>
>;
export type EthereumVaultVaultRotationAborted = EventHandler<
  z.output<typeof ethereumVaultVaultRotationAborted>
>;
export type PolkadotVaultKeygenRequest = EventHandler<z.output<typeof polkadotVaultKeygenRequest>>;
export type PolkadotVaultKeyHandoverRequest = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverRequest>
>;
export type PolkadotVaultVaultRotationCompleted = EventHandler<
  z.output<typeof polkadotVaultVaultRotationCompleted>
>;
export type PolkadotVaultVaultRotatedExternally = EventHandler<
  z.output<typeof polkadotVaultVaultRotatedExternally>
>;
export type PolkadotVaultKeygenSuccessReported = EventHandler<
  z.output<typeof polkadotVaultKeygenSuccessReported>
>;
export type PolkadotVaultKeyHandoverSuccessReported = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverSuccessReported>
>;
export type PolkadotVaultKeygenFailureReported = EventHandler<
  z.output<typeof polkadotVaultKeygenFailureReported>
>;
export type PolkadotVaultKeyHandoverFailureReported = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverFailureReported>
>;
export type PolkadotVaultKeygenSuccess = EventHandler<z.output<typeof polkadotVaultKeygenSuccess>>;
export type PolkadotVaultKeyHandoverSuccess = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverSuccess>
>;
export type PolkadotVaultNoKeyHandover = EventHandler<z.output<typeof polkadotVaultNoKeyHandover>>;
export type PolkadotVaultKeygenVerificationSuccess = EventHandler<
  z.output<typeof polkadotVaultKeygenVerificationSuccess>
>;
export type PolkadotVaultKeyHandoverVerificationSuccess = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverVerificationSuccess>
>;
export type PolkadotVaultKeygenVerificationFailure = EventHandler<
  z.output<typeof polkadotVaultKeygenVerificationFailure>
>;
export type PolkadotVaultKeyHandoverVerificationFailure = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverVerificationFailure>
>;
export type PolkadotVaultKeygenFailure = EventHandler<z.output<typeof polkadotVaultKeygenFailure>>;
export type PolkadotVaultKeygenResponseTimeout = EventHandler<
  z.output<typeof polkadotVaultKeygenResponseTimeout>
>;
export type PolkadotVaultKeyHandoverResponseTimeout = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverResponseTimeout>
>;
export type PolkadotVaultKeygenResponseTimeoutUpdated = EventHandler<
  z.output<typeof polkadotVaultKeygenResponseTimeoutUpdated>
>;
export type PolkadotVaultAwaitingGovernanceActivation = EventHandler<
  z.output<typeof polkadotVaultAwaitingGovernanceActivation>
>;
export type PolkadotVaultKeyHandoverFailure = EventHandler<
  z.output<typeof polkadotVaultKeyHandoverFailure>
>;
export type PolkadotVaultVaultRotationAborted = EventHandler<
  z.output<typeof polkadotVaultVaultRotationAborted>
>;
export type BitcoinVaultKeygenRequest = EventHandler<z.output<typeof bitcoinVaultKeygenRequest>>;
export type BitcoinVaultKeyHandoverRequest = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverRequest>
>;
export type BitcoinVaultVaultRotationCompleted = EventHandler<
  z.output<typeof bitcoinVaultVaultRotationCompleted>
>;
export type BitcoinVaultVaultRotatedExternally = EventHandler<
  z.output<typeof bitcoinVaultVaultRotatedExternally>
>;
export type BitcoinVaultKeygenSuccessReported = EventHandler<
  z.output<typeof bitcoinVaultKeygenSuccessReported>
>;
export type BitcoinVaultKeyHandoverSuccessReported = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverSuccessReported>
>;
export type BitcoinVaultKeygenFailureReported = EventHandler<
  z.output<typeof bitcoinVaultKeygenFailureReported>
>;
export type BitcoinVaultKeyHandoverFailureReported = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverFailureReported>
>;
export type BitcoinVaultKeygenSuccess = EventHandler<z.output<typeof bitcoinVaultKeygenSuccess>>;
export type BitcoinVaultKeyHandoverSuccess = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverSuccess>
>;
export type BitcoinVaultNoKeyHandover = EventHandler<z.output<typeof bitcoinVaultNoKeyHandover>>;
export type BitcoinVaultKeygenVerificationSuccess = EventHandler<
  z.output<typeof bitcoinVaultKeygenVerificationSuccess>
>;
export type BitcoinVaultKeyHandoverVerificationSuccess = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverVerificationSuccess>
>;
export type BitcoinVaultKeygenVerificationFailure = EventHandler<
  z.output<typeof bitcoinVaultKeygenVerificationFailure>
>;
export type BitcoinVaultKeyHandoverVerificationFailure = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverVerificationFailure>
>;
export type BitcoinVaultKeygenFailure = EventHandler<z.output<typeof bitcoinVaultKeygenFailure>>;
export type BitcoinVaultKeygenResponseTimeout = EventHandler<
  z.output<typeof bitcoinVaultKeygenResponseTimeout>
>;
export type BitcoinVaultKeyHandoverResponseTimeout = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverResponseTimeout>
>;
export type BitcoinVaultKeygenResponseTimeoutUpdated = EventHandler<
  z.output<typeof bitcoinVaultKeygenResponseTimeoutUpdated>
>;
export type BitcoinVaultAwaitingGovernanceActivation = EventHandler<
  z.output<typeof bitcoinVaultAwaitingGovernanceActivation>
>;
export type BitcoinVaultKeyHandoverFailure = EventHandler<
  z.output<typeof bitcoinVaultKeyHandoverFailure>
>;
export type BitcoinVaultVaultRotationAborted = EventHandler<
  z.output<typeof bitcoinVaultVaultRotationAborted>
>;
export type EthereumThresholdSignerThresholdSignatureRequest = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdSignatureRequest>
>;
export type EthereumThresholdSignerThresholdSignatureFailed = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdSignatureFailed>
>;
export type EthereumThresholdSignerThresholdSignatureSuccess = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdSignatureSuccess>
>;
export type EthereumThresholdSignerThresholdDispatchComplete = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdDispatchComplete>
>;
export type EthereumThresholdSignerRetryRequested = EventHandler<
  z.output<typeof ethereumThresholdSignerRetryRequested>
>;
export type EthereumThresholdSignerFailureReportProcessed = EventHandler<
  z.output<typeof ethereumThresholdSignerFailureReportProcessed>
>;
export type EthereumThresholdSignerSignersUnavailable = EventHandler<
  z.output<typeof ethereumThresholdSignerSignersUnavailable>
>;
export type EthereumThresholdSignerCurrentKeyUnavailable = EventHandler<
  z.output<typeof ethereumThresholdSignerCurrentKeyUnavailable>
>;
export type EthereumThresholdSignerThresholdSignatureResponseTimeoutUpdated = EventHandler<
  z.output<typeof ethereumThresholdSignerThresholdSignatureResponseTimeoutUpdated>
>;
export type PolkadotThresholdSignerThresholdSignatureRequest = EventHandler<
  z.output<typeof polkadotThresholdSignerThresholdSignatureRequest>
>;
export type PolkadotThresholdSignerThresholdSignatureFailed = EventHandler<
  z.output<typeof polkadotThresholdSignerThresholdSignatureFailed>
>;
export type PolkadotThresholdSignerThresholdSignatureSuccess = EventHandler<
  z.output<typeof polkadotThresholdSignerThresholdSignatureSuccess>
>;
export type PolkadotThresholdSignerThresholdDispatchComplete = EventHandler<
  z.output<typeof polkadotThresholdSignerThresholdDispatchComplete>
>;
export type PolkadotThresholdSignerRetryRequested = EventHandler<
  z.output<typeof polkadotThresholdSignerRetryRequested>
>;
export type PolkadotThresholdSignerFailureReportProcessed = EventHandler<
  z.output<typeof polkadotThresholdSignerFailureReportProcessed>
>;
export type PolkadotThresholdSignerSignersUnavailable = EventHandler<
  z.output<typeof polkadotThresholdSignerSignersUnavailable>
>;
export type PolkadotThresholdSignerCurrentKeyUnavailable = EventHandler<
  z.output<typeof polkadotThresholdSignerCurrentKeyUnavailable>
>;
export type PolkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated = EventHandler<
  z.output<typeof polkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated>
>;
export type BitcoinThresholdSignerThresholdSignatureRequest = EventHandler<
  z.output<typeof bitcoinThresholdSignerThresholdSignatureRequest>
>;
export type BitcoinThresholdSignerThresholdSignatureFailed = EventHandler<
  z.output<typeof bitcoinThresholdSignerThresholdSignatureFailed>
>;
export type BitcoinThresholdSignerThresholdSignatureSuccess = EventHandler<
  z.output<typeof bitcoinThresholdSignerThresholdSignatureSuccess>
>;
export type BitcoinThresholdSignerThresholdDispatchComplete = EventHandler<
  z.output<typeof bitcoinThresholdSignerThresholdDispatchComplete>
>;
export type BitcoinThresholdSignerRetryRequested = EventHandler<
  z.output<typeof bitcoinThresholdSignerRetryRequested>
>;
export type BitcoinThresholdSignerFailureReportProcessed = EventHandler<
  z.output<typeof bitcoinThresholdSignerFailureReportProcessed>
>;
export type BitcoinThresholdSignerSignersUnavailable = EventHandler<
  z.output<typeof bitcoinThresholdSignerSignersUnavailable>
>;
export type BitcoinThresholdSignerCurrentKeyUnavailable = EventHandler<
  z.output<typeof bitcoinThresholdSignerCurrentKeyUnavailable>
>;
export type BitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated = EventHandler<
  z.output<typeof bitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated>
>;
export type EthereumBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof ethereumBroadcasterTransactionBroadcastRequest>
>;
export type EthereumBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastRetryScheduled>
>;
export type EthereumBroadcasterBroadcastAttemptTimeout = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastAttemptTimeout>
>;
export type EthereumBroadcasterBroadcastAborted = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastAborted>
>;
export type EthereumBroadcasterBroadcastSuccess = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastSuccess>
>;
export type EthereumBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof ethereumBroadcasterThresholdSignatureInvalid>
>;
export type EthereumBroadcasterBroadcastCallbackExecuted = EventHandler<
  z.output<typeof ethereumBroadcasterBroadcastCallbackExecuted>
>;
export type PolkadotBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof polkadotBroadcasterTransactionBroadcastRequest>
>;
export type PolkadotBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastRetryScheduled>
>;
export type PolkadotBroadcasterBroadcastAttemptTimeout = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastAttemptTimeout>
>;
export type PolkadotBroadcasterBroadcastAborted = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastAborted>
>;
export type PolkadotBroadcasterBroadcastSuccess = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastSuccess>
>;
export type PolkadotBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof polkadotBroadcasterThresholdSignatureInvalid>
>;
export type PolkadotBroadcasterBroadcastCallbackExecuted = EventHandler<
  z.output<typeof polkadotBroadcasterBroadcastCallbackExecuted>
>;
export type BitcoinBroadcasterTransactionBroadcastRequest = EventHandler<
  z.output<typeof bitcoinBroadcasterTransactionBroadcastRequest>
>;
export type BitcoinBroadcasterBroadcastRetryScheduled = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastRetryScheduled>
>;
export type BitcoinBroadcasterBroadcastAttemptTimeout = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastAttemptTimeout>
>;
export type BitcoinBroadcasterBroadcastAborted = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastAborted>
>;
export type BitcoinBroadcasterBroadcastSuccess = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastSuccess>
>;
export type BitcoinBroadcasterThresholdSignatureInvalid = EventHandler<
  z.output<typeof bitcoinBroadcasterThresholdSignatureInvalid>
>;
export type BitcoinBroadcasterBroadcastCallbackExecuted = EventHandler<
  z.output<typeof bitcoinBroadcasterBroadcastCallbackExecuted>
>;
export type SwappingSwapDepositAddressReady = EventHandler<
  z.output<typeof swappingSwapDepositAddressReady>
>;
export type SwappingSwapScheduled = EventHandler<z.output<typeof swappingSwapScheduled>>;
export type SwappingSwapExecuted = EventHandler<z.output<typeof swappingSwapExecuted>>;
export type SwappingSwapEgressScheduled = EventHandler<
  z.output<typeof swappingSwapEgressScheduled>
>;
export type SwappingWithdrawalRequested = EventHandler<
  z.output<typeof swappingWithdrawalRequested>
>;
export type SwappingBatchSwapFailed = EventHandler<z.output<typeof swappingBatchSwapFailed>>;
export type SwappingCcmEgressScheduled = EventHandler<z.output<typeof swappingCcmEgressScheduled>>;
export type SwappingSwapDepositAddressExpired = EventHandler<
  z.output<typeof swappingSwapDepositAddressExpired>
>;
export type SwappingSwapTtlSet = EventHandler<z.output<typeof swappingSwapTtlSet>>;
export type SwappingCcmDepositReceived = EventHandler<z.output<typeof swappingCcmDepositReceived>>;
export type SwappingMinimumSwapAmountSet = EventHandler<
  z.output<typeof swappingMinimumSwapAmountSet>
>;
export type SwappingSwapAmountTooLow = EventHandler<z.output<typeof swappingSwapAmountTooLow>>;
export type SwappingCcmFailed = EventHandler<z.output<typeof swappingCcmFailed>>;
export type LiquidityProviderAccountDebited = EventHandler<
  z.output<typeof liquidityProviderAccountDebited>
>;
export type LiquidityProviderAccountCredited = EventHandler<
  z.output<typeof liquidityProviderAccountCredited>
>;
export type LiquidityProviderLiquidityDepositAddressReady = EventHandler<
  z.output<typeof liquidityProviderLiquidityDepositAddressReady>
>;
export type LiquidityProviderLiquidityDepositAddressExpired = EventHandler<
  z.output<typeof liquidityProviderLiquidityDepositAddressExpired>
>;
export type LiquidityProviderWithdrawalEgressScheduled = EventHandler<
  z.output<typeof liquidityProviderWithdrawalEgressScheduled>
>;
export type LiquidityProviderLpTtlSet = EventHandler<z.output<typeof liquidityProviderLpTtlSet>>;
export type LiquidityProviderEmergencyWithdrawalAddressRegistered = EventHandler<
  z.output<typeof liquidityProviderEmergencyWithdrawalAddressRegistered>
>;
export type EthereumIngressEgressStartWitnessing = EventHandler<
  z.output<typeof ethereumIngressEgressStartWitnessing>
>;
export type EthereumIngressEgressStopWitnessing = EventHandler<
  z.output<typeof ethereumIngressEgressStopWitnessing>
>;
export type EthereumIngressEgressDepositReceived = EventHandler<
  z.output<typeof ethereumIngressEgressDepositReceived>
>;
export type EthereumIngressEgressAssetEgressStatusChanged = EventHandler<
  z.output<typeof ethereumIngressEgressAssetEgressStatusChanged>
>;
export type EthereumIngressEgressEgressScheduled = EventHandler<
  z.output<typeof ethereumIngressEgressEgressScheduled>
>;
export type EthereumIngressEgressCcmBroadcastRequested = EventHandler<
  z.output<typeof ethereumIngressEgressCcmBroadcastRequested>
>;
export type EthereumIngressEgressCcmEgressInvalid = EventHandler<
  z.output<typeof ethereumIngressEgressCcmEgressInvalid>
>;
export type EthereumIngressEgressDepositFetchesScheduled = EventHandler<
  z.output<typeof ethereumIngressEgressDepositFetchesScheduled>
>;
export type EthereumIngressEgressBatchBroadcastRequested = EventHandler<
  z.output<typeof ethereumIngressEgressBatchBroadcastRequested>
>;
export type EthereumIngressEgressMinimumDepositSet = EventHandler<
  z.output<typeof ethereumIngressEgressMinimumDepositSet>
>;
export type EthereumIngressEgressDepositIgnored = EventHandler<
  z.output<typeof ethereumIngressEgressDepositIgnored>
>;
export type EthereumIngressEgressVaultTransferFailed = EventHandler<
  z.output<typeof ethereumIngressEgressVaultTransferFailed>
>;
export type PolkadotIngressEgressStartWitnessing = EventHandler<
  z.output<typeof polkadotIngressEgressStartWitnessing>
>;
export type PolkadotIngressEgressStopWitnessing = EventHandler<
  z.output<typeof polkadotIngressEgressStopWitnessing>
>;
export type PolkadotIngressEgressDepositReceived = EventHandler<
  z.output<typeof polkadotIngressEgressDepositReceived>
>;
export type PolkadotIngressEgressAssetEgressStatusChanged = EventHandler<
  z.output<typeof polkadotIngressEgressAssetEgressStatusChanged>
>;
export type PolkadotIngressEgressEgressScheduled = EventHandler<
  z.output<typeof polkadotIngressEgressEgressScheduled>
>;
export type PolkadotIngressEgressCcmBroadcastRequested = EventHandler<
  z.output<typeof polkadotIngressEgressCcmBroadcastRequested>
>;
export type PolkadotIngressEgressCcmEgressInvalid = EventHandler<
  z.output<typeof polkadotIngressEgressCcmEgressInvalid>
>;
export type PolkadotIngressEgressDepositFetchesScheduled = EventHandler<
  z.output<typeof polkadotIngressEgressDepositFetchesScheduled>
>;
export type PolkadotIngressEgressBatchBroadcastRequested = EventHandler<
  z.output<typeof polkadotIngressEgressBatchBroadcastRequested>
>;
export type PolkadotIngressEgressMinimumDepositSet = EventHandler<
  z.output<typeof polkadotIngressEgressMinimumDepositSet>
>;
export type PolkadotIngressEgressDepositIgnored = EventHandler<
  z.output<typeof polkadotIngressEgressDepositIgnored>
>;
export type PolkadotIngressEgressVaultTransferFailed = EventHandler<
  z.output<typeof polkadotIngressEgressVaultTransferFailed>
>;
export type BitcoinIngressEgressStartWitnessing = EventHandler<
  z.output<typeof bitcoinIngressEgressStartWitnessing>
>;
export type BitcoinIngressEgressStopWitnessing = EventHandler<
  z.output<typeof bitcoinIngressEgressStopWitnessing>
>;
export type BitcoinIngressEgressDepositReceived = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositReceived>
>;
export type BitcoinIngressEgressAssetEgressStatusChanged = EventHandler<
  z.output<typeof bitcoinIngressEgressAssetEgressStatusChanged>
>;
export type BitcoinIngressEgressEgressScheduled = EventHandler<
  z.output<typeof bitcoinIngressEgressEgressScheduled>
>;
export type BitcoinIngressEgressCcmBroadcastRequested = EventHandler<
  z.output<typeof bitcoinIngressEgressCcmBroadcastRequested>
>;
export type BitcoinIngressEgressCcmEgressInvalid = EventHandler<
  z.output<typeof bitcoinIngressEgressCcmEgressInvalid>
>;
export type BitcoinIngressEgressDepositFetchesScheduled = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositFetchesScheduled>
>;
export type BitcoinIngressEgressBatchBroadcastRequested = EventHandler<
  z.output<typeof bitcoinIngressEgressBatchBroadcastRequested>
>;
export type BitcoinIngressEgressMinimumDepositSet = EventHandler<
  z.output<typeof bitcoinIngressEgressMinimumDepositSet>
>;
export type BitcoinIngressEgressDepositIgnored = EventHandler<
  z.output<typeof bitcoinIngressEgressDepositIgnored>
>;
export type BitcoinIngressEgressVaultTransferFailed = EventHandler<
  z.output<typeof bitcoinIngressEgressVaultTransferFailed>
>;
export type LiquidityPoolsUpdatedBuyInterval = EventHandler<
  z.output<typeof liquidityPoolsUpdatedBuyInterval>
>;
export type LiquidityPoolsPoolStateUpdated = EventHandler<
  z.output<typeof liquidityPoolsPoolStateUpdated>
>;
export type LiquidityPoolsNewPoolCreated = EventHandler<
  z.output<typeof liquidityPoolsNewPoolCreated>
>;
export type LiquidityPoolsRangeOrderMinted = EventHandler<
  z.output<typeof liquidityPoolsRangeOrderMinted>
>;
export type LiquidityPoolsRangeOrderBurned = EventHandler<
  z.output<typeof liquidityPoolsRangeOrderBurned>
>;
export type LiquidityPoolsLimitOrderMinted = EventHandler<
  z.output<typeof liquidityPoolsLimitOrderMinted>
>;
export type LiquidityPoolsLimitOrderBurned = EventHandler<
  z.output<typeof liquidityPoolsLimitOrderBurned>
>;
export type LiquidityPoolsNetworkFeeTaken = EventHandler<
  z.output<typeof liquidityPoolsNetworkFeeTaken>
>;
export type LiquidityPoolsAssetSwapped = EventHandler<z.output<typeof liquidityPoolsAssetSwapped>>;
export type LiquidityPoolsLiquidityFeeUpdated = EventHandler<
  z.output<typeof liquidityPoolsLiquidityFeeUpdated>
>;

type HandlerMap = {
  System?: {
    ExtrinsicSuccess?: SystemExtrinsicSuccess;
    ExtrinsicFailed?: SystemExtrinsicFailed;
    CodeUpdated?: SystemCodeUpdated;
    NewAccount?: SystemNewAccount;
    KilledAccount?: SystemKilledAccount;
    Remarked?: SystemRemarked;
  };
  Environment?: {
    AddedNewEthAsset?: EnvironmentAddedNewEthAsset;
    UpdatedEthAsset?: EnvironmentUpdatedEthAsset;
    PolkadotVaultAccountSet?: EnvironmentPolkadotVaultAccountSet;
    BitcoinBlockNumberSetForVault?: EnvironmentBitcoinBlockNumberSetForVault;
    RuntimeSafeModeUpdated?: EnvironmentRuntimeSafeModeUpdated;
    NextCompatibilityVersionSet?: EnvironmentNextCompatibilityVersionSet;
  };
  Flip?: {
    RemainingImbalance?: FlipRemainingImbalance;
    SlashingPerformed?: FlipSlashingPerformed;
    AccountReaped?: FlipAccountReaped;
    SlashingRateUpdated?: FlipSlashingRateUpdated;
  };
  Emissions?: {
    SupplyUpdateBroadcastRequested?: EmissionsSupplyUpdateBroadcastRequested;
    CurrentAuthorityInflationEmissionsUpdated?: EmissionsCurrentAuthorityInflationEmissionsUpdated;
    BackupNodeInflationEmissionsUpdated?: EmissionsBackupNodeInflationEmissionsUpdated;
    SupplyUpdateIntervalUpdated?: EmissionsSupplyUpdateIntervalUpdated;
  };
  Funding?: {
    Funded?: FundingFunded;
    RedemptionRequested?: FundingRedemptionRequested;
    RedemptionSettled?: FundingRedemptionSettled;
    StoppedBidding?: FundingStoppedBidding;
    StartedBidding?: FundingStartedBidding;
    RedemptionExpired?: FundingRedemptionExpired;
    AddedRestrictedAddress?: FundingAddedRestrictedAddress;
    RemovedRestrictedAddress?: FundingRemovedRestrictedAddress;
    FailedFundingAttempt?: FundingFailedFundingAttempt;
    MinimumFundingUpdated?: FundingMinimumFundingUpdated;
    RedemptionTaxAmountUpdated?: FundingRedemptionTaxAmountUpdated;
    RedemptionAmountZero?: FundingRedemptionAmountZero;
    BoundRedeemAddress?: FundingBoundRedeemAddress;
  };
  AccountRoles?: {
    AccountRoleRegistered?: AccountRolesAccountRoleRegistered;
  };
  TransactionPayment?: {
    TransactionFeePaid?: TransactionPaymentTransactionFeePaid;
  };
  Witnesser?: {
    WitnessExecutionFailed?: WitnesserWitnessExecutionFailed;
  };
  Validator?: {
    RotationAborted?: ValidatorRotationAborted;
    NewEpoch?: ValidatorNewEpoch;
    RotationPhaseUpdated?: ValidatorRotationPhaseUpdated;
    CFEVersionUpdated?: ValidatorCFEVersionUpdated;
    PeerIdRegistered?: ValidatorPeerIdRegistered;
    PeerIdUnregistered?: ValidatorPeerIdUnregistered;
    VanityNameSet?: ValidatorVanityNameSet;
    AuctionCompleted?: ValidatorAuctionCompleted;
    PalletConfigUpdated?: ValidatorPalletConfigUpdated;
  };
  Session?: {
    NewSession?: SessionNewSession;
  };
  Grandpa?: {
    NewAuthorities?: GrandpaNewAuthorities;
    Paused?: GrandpaPaused;
    Resumed?: GrandpaResumed;
  };
  Governance?: {
    Proposed?: GovernanceProposed;
    Executed?: GovernanceExecuted;
    Expired?: GovernanceExpired;
    Approved?: GovernanceApproved;
    FailedExecution?: GovernanceFailedExecution;
    DecodeOfCallFailed?: GovernanceDecodeOfCallFailed;
    UpgradeConditionsSatisfied?: GovernanceUpgradeConditionsSatisfied;
    GovKeyCallExecuted?: GovernanceGovKeyCallExecuted;
    GovKeyCallHashWhitelisted?: GovernanceGovKeyCallHashWhitelisted;
    GovKeyCallExecutionFailed?: GovernanceGovKeyCallExecutionFailed;
  };
  TokenholderGovernance?: {
    ProposalSubmitted?: TokenholderGovernanceProposalSubmitted;
    ProposalPassed?: TokenholderGovernanceProposalPassed;
    ProposalRejected?: TokenholderGovernanceProposalRejected;
    ProposalEnacted?: TokenholderGovernanceProposalEnacted;
    GovKeyUpdatedHasFailed?: TokenholderGovernanceGovKeyUpdatedHasFailed;
    GovKeyUpdatedWasSuccessful?: TokenholderGovernanceGovKeyUpdatedWasSuccessful;
  };
  Reputation?: {
    OffencePenalty?: ReputationOffencePenalty;
    AccrualRateUpdated?: ReputationAccrualRateUpdated;
    MissedHeartbeatPenaltyUpdated?: ReputationMissedHeartbeatPenaltyUpdated;
    PenaltyUpdated?: ReputationPenaltyUpdated;
  };
  EthereumChainTracking?: {
    ChainStateUpdated?: EthereumChainTrackingChainStateUpdated;
  };
  PolkadotChainTracking?: {
    ChainStateUpdated?: PolkadotChainTrackingChainStateUpdated;
  };
  BitcoinChainTracking?: {
    ChainStateUpdated?: BitcoinChainTrackingChainStateUpdated;
  };
  EthereumVault?: {
    KeygenRequest?: EthereumVaultKeygenRequest;
    KeyHandoverRequest?: EthereumVaultKeyHandoverRequest;
    VaultRotationCompleted?: EthereumVaultVaultRotationCompleted;
    VaultRotatedExternally?: EthereumVaultVaultRotatedExternally;
    KeygenSuccessReported?: EthereumVaultKeygenSuccessReported;
    KeyHandoverSuccessReported?: EthereumVaultKeyHandoverSuccessReported;
    KeygenFailureReported?: EthereumVaultKeygenFailureReported;
    KeyHandoverFailureReported?: EthereumVaultKeyHandoverFailureReported;
    KeygenSuccess?: EthereumVaultKeygenSuccess;
    KeyHandoverSuccess?: EthereumVaultKeyHandoverSuccess;
    NoKeyHandover?: EthereumVaultNoKeyHandover;
    KeygenVerificationSuccess?: EthereumVaultKeygenVerificationSuccess;
    KeyHandoverVerificationSuccess?: EthereumVaultKeyHandoverVerificationSuccess;
    KeygenVerificationFailure?: EthereumVaultKeygenVerificationFailure;
    KeyHandoverVerificationFailure?: EthereumVaultKeyHandoverVerificationFailure;
    KeygenFailure?: EthereumVaultKeygenFailure;
    KeygenResponseTimeout?: EthereumVaultKeygenResponseTimeout;
    KeyHandoverResponseTimeout?: EthereumVaultKeyHandoverResponseTimeout;
    KeygenResponseTimeoutUpdated?: EthereumVaultKeygenResponseTimeoutUpdated;
    AwaitingGovernanceActivation?: EthereumVaultAwaitingGovernanceActivation;
    KeyHandoverFailure?: EthereumVaultKeyHandoverFailure;
    VaultRotationAborted?: EthereumVaultVaultRotationAborted;
  };
  PolkadotVault?: {
    KeygenRequest?: PolkadotVaultKeygenRequest;
    KeyHandoverRequest?: PolkadotVaultKeyHandoverRequest;
    VaultRotationCompleted?: PolkadotVaultVaultRotationCompleted;
    VaultRotatedExternally?: PolkadotVaultVaultRotatedExternally;
    KeygenSuccessReported?: PolkadotVaultKeygenSuccessReported;
    KeyHandoverSuccessReported?: PolkadotVaultKeyHandoverSuccessReported;
    KeygenFailureReported?: PolkadotVaultKeygenFailureReported;
    KeyHandoverFailureReported?: PolkadotVaultKeyHandoverFailureReported;
    KeygenSuccess?: PolkadotVaultKeygenSuccess;
    KeyHandoverSuccess?: PolkadotVaultKeyHandoverSuccess;
    NoKeyHandover?: PolkadotVaultNoKeyHandover;
    KeygenVerificationSuccess?: PolkadotVaultKeygenVerificationSuccess;
    KeyHandoverVerificationSuccess?: PolkadotVaultKeyHandoverVerificationSuccess;
    KeygenVerificationFailure?: PolkadotVaultKeygenVerificationFailure;
    KeyHandoverVerificationFailure?: PolkadotVaultKeyHandoverVerificationFailure;
    KeygenFailure?: PolkadotVaultKeygenFailure;
    KeygenResponseTimeout?: PolkadotVaultKeygenResponseTimeout;
    KeyHandoverResponseTimeout?: PolkadotVaultKeyHandoverResponseTimeout;
    KeygenResponseTimeoutUpdated?: PolkadotVaultKeygenResponseTimeoutUpdated;
    AwaitingGovernanceActivation?: PolkadotVaultAwaitingGovernanceActivation;
    KeyHandoverFailure?: PolkadotVaultKeyHandoverFailure;
    VaultRotationAborted?: PolkadotVaultVaultRotationAborted;
  };
  BitcoinVault?: {
    KeygenRequest?: BitcoinVaultKeygenRequest;
    KeyHandoverRequest?: BitcoinVaultKeyHandoverRequest;
    VaultRotationCompleted?: BitcoinVaultVaultRotationCompleted;
    VaultRotatedExternally?: BitcoinVaultVaultRotatedExternally;
    KeygenSuccessReported?: BitcoinVaultKeygenSuccessReported;
    KeyHandoverSuccessReported?: BitcoinVaultKeyHandoverSuccessReported;
    KeygenFailureReported?: BitcoinVaultKeygenFailureReported;
    KeyHandoverFailureReported?: BitcoinVaultKeyHandoverFailureReported;
    KeygenSuccess?: BitcoinVaultKeygenSuccess;
    KeyHandoverSuccess?: BitcoinVaultKeyHandoverSuccess;
    NoKeyHandover?: BitcoinVaultNoKeyHandover;
    KeygenVerificationSuccess?: BitcoinVaultKeygenVerificationSuccess;
    KeyHandoverVerificationSuccess?: BitcoinVaultKeyHandoverVerificationSuccess;
    KeygenVerificationFailure?: BitcoinVaultKeygenVerificationFailure;
    KeyHandoverVerificationFailure?: BitcoinVaultKeyHandoverVerificationFailure;
    KeygenFailure?: BitcoinVaultKeygenFailure;
    KeygenResponseTimeout?: BitcoinVaultKeygenResponseTimeout;
    KeyHandoverResponseTimeout?: BitcoinVaultKeyHandoverResponseTimeout;
    KeygenResponseTimeoutUpdated?: BitcoinVaultKeygenResponseTimeoutUpdated;
    AwaitingGovernanceActivation?: BitcoinVaultAwaitingGovernanceActivation;
    KeyHandoverFailure?: BitcoinVaultKeyHandoverFailure;
    VaultRotationAborted?: BitcoinVaultVaultRotationAborted;
  };
  EthereumThresholdSigner?: {
    ThresholdSignatureRequest?: EthereumThresholdSignerThresholdSignatureRequest;
    ThresholdSignatureFailed?: EthereumThresholdSignerThresholdSignatureFailed;
    ThresholdSignatureSuccess?: EthereumThresholdSignerThresholdSignatureSuccess;
    ThresholdDispatchComplete?: EthereumThresholdSignerThresholdDispatchComplete;
    RetryRequested?: EthereumThresholdSignerRetryRequested;
    FailureReportProcessed?: EthereumThresholdSignerFailureReportProcessed;
    SignersUnavailable?: EthereumThresholdSignerSignersUnavailable;
    CurrentKeyUnavailable?: EthereumThresholdSignerCurrentKeyUnavailable;
    ThresholdSignatureResponseTimeoutUpdated?: EthereumThresholdSignerThresholdSignatureResponseTimeoutUpdated;
  };
  PolkadotThresholdSigner?: {
    ThresholdSignatureRequest?: PolkadotThresholdSignerThresholdSignatureRequest;
    ThresholdSignatureFailed?: PolkadotThresholdSignerThresholdSignatureFailed;
    ThresholdSignatureSuccess?: PolkadotThresholdSignerThresholdSignatureSuccess;
    ThresholdDispatchComplete?: PolkadotThresholdSignerThresholdDispatchComplete;
    RetryRequested?: PolkadotThresholdSignerRetryRequested;
    FailureReportProcessed?: PolkadotThresholdSignerFailureReportProcessed;
    SignersUnavailable?: PolkadotThresholdSignerSignersUnavailable;
    CurrentKeyUnavailable?: PolkadotThresholdSignerCurrentKeyUnavailable;
    ThresholdSignatureResponseTimeoutUpdated?: PolkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated;
  };
  BitcoinThresholdSigner?: {
    ThresholdSignatureRequest?: BitcoinThresholdSignerThresholdSignatureRequest;
    ThresholdSignatureFailed?: BitcoinThresholdSignerThresholdSignatureFailed;
    ThresholdSignatureSuccess?: BitcoinThresholdSignerThresholdSignatureSuccess;
    ThresholdDispatchComplete?: BitcoinThresholdSignerThresholdDispatchComplete;
    RetryRequested?: BitcoinThresholdSignerRetryRequested;
    FailureReportProcessed?: BitcoinThresholdSignerFailureReportProcessed;
    SignersUnavailable?: BitcoinThresholdSignerSignersUnavailable;
    CurrentKeyUnavailable?: BitcoinThresholdSignerCurrentKeyUnavailable;
    ThresholdSignatureResponseTimeoutUpdated?: BitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated;
  };
  EthereumBroadcaster?: {
    TransactionBroadcastRequest?: EthereumBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: EthereumBroadcasterBroadcastRetryScheduled;
    BroadcastAttemptTimeout?: EthereumBroadcasterBroadcastAttemptTimeout;
    BroadcastAborted?: EthereumBroadcasterBroadcastAborted;
    BroadcastSuccess?: EthereumBroadcasterBroadcastSuccess;
    ThresholdSignatureInvalid?: EthereumBroadcasterThresholdSignatureInvalid;
    BroadcastCallbackExecuted?: EthereumBroadcasterBroadcastCallbackExecuted;
  };
  PolkadotBroadcaster?: {
    TransactionBroadcastRequest?: PolkadotBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: PolkadotBroadcasterBroadcastRetryScheduled;
    BroadcastAttemptTimeout?: PolkadotBroadcasterBroadcastAttemptTimeout;
    BroadcastAborted?: PolkadotBroadcasterBroadcastAborted;
    BroadcastSuccess?: PolkadotBroadcasterBroadcastSuccess;
    ThresholdSignatureInvalid?: PolkadotBroadcasterThresholdSignatureInvalid;
    BroadcastCallbackExecuted?: PolkadotBroadcasterBroadcastCallbackExecuted;
  };
  BitcoinBroadcaster?: {
    TransactionBroadcastRequest?: BitcoinBroadcasterTransactionBroadcastRequest;
    BroadcastRetryScheduled?: BitcoinBroadcasterBroadcastRetryScheduled;
    BroadcastAttemptTimeout?: BitcoinBroadcasterBroadcastAttemptTimeout;
    BroadcastAborted?: BitcoinBroadcasterBroadcastAborted;
    BroadcastSuccess?: BitcoinBroadcasterBroadcastSuccess;
    ThresholdSignatureInvalid?: BitcoinBroadcasterThresholdSignatureInvalid;
    BroadcastCallbackExecuted?: BitcoinBroadcasterBroadcastCallbackExecuted;
  };
  Swapping?: {
    SwapDepositAddressReady?: SwappingSwapDepositAddressReady;
    SwapScheduled?: SwappingSwapScheduled;
    SwapExecuted?: SwappingSwapExecuted;
    SwapEgressScheduled?: SwappingSwapEgressScheduled;
    WithdrawalRequested?: SwappingWithdrawalRequested;
    BatchSwapFailed?: SwappingBatchSwapFailed;
    CcmEgressScheduled?: SwappingCcmEgressScheduled;
    SwapDepositAddressExpired?: SwappingSwapDepositAddressExpired;
    SwapTtlSet?: SwappingSwapTtlSet;
    CcmDepositReceived?: SwappingCcmDepositReceived;
    MinimumSwapAmountSet?: SwappingMinimumSwapAmountSet;
    SwapAmountTooLow?: SwappingSwapAmountTooLow;
    CcmFailed?: SwappingCcmFailed;
  };
  LiquidityProvider?: {
    AccountDebited?: LiquidityProviderAccountDebited;
    AccountCredited?: LiquidityProviderAccountCredited;
    LiquidityDepositAddressReady?: LiquidityProviderLiquidityDepositAddressReady;
    LiquidityDepositAddressExpired?: LiquidityProviderLiquidityDepositAddressExpired;
    WithdrawalEgressScheduled?: LiquidityProviderWithdrawalEgressScheduled;
    LpTtlSet?: LiquidityProviderLpTtlSet;
    EmergencyWithdrawalAddressRegistered?: LiquidityProviderEmergencyWithdrawalAddressRegistered;
  };
  EthereumIngressEgress?: {
    StartWitnessing?: EthereumIngressEgressStartWitnessing;
    StopWitnessing?: EthereumIngressEgressStopWitnessing;
    DepositReceived?: EthereumIngressEgressDepositReceived;
    AssetEgressStatusChanged?: EthereumIngressEgressAssetEgressStatusChanged;
    EgressScheduled?: EthereumIngressEgressEgressScheduled;
    CcmBroadcastRequested?: EthereumIngressEgressCcmBroadcastRequested;
    CcmEgressInvalid?: EthereumIngressEgressCcmEgressInvalid;
    DepositFetchesScheduled?: EthereumIngressEgressDepositFetchesScheduled;
    BatchBroadcastRequested?: EthereumIngressEgressBatchBroadcastRequested;
    MinimumDepositSet?: EthereumIngressEgressMinimumDepositSet;
    DepositIgnored?: EthereumIngressEgressDepositIgnored;
    VaultTransferFailed?: EthereumIngressEgressVaultTransferFailed;
  };
  PolkadotIngressEgress?: {
    StartWitnessing?: PolkadotIngressEgressStartWitnessing;
    StopWitnessing?: PolkadotIngressEgressStopWitnessing;
    DepositReceived?: PolkadotIngressEgressDepositReceived;
    AssetEgressStatusChanged?: PolkadotIngressEgressAssetEgressStatusChanged;
    EgressScheduled?: PolkadotIngressEgressEgressScheduled;
    CcmBroadcastRequested?: PolkadotIngressEgressCcmBroadcastRequested;
    CcmEgressInvalid?: PolkadotIngressEgressCcmEgressInvalid;
    DepositFetchesScheduled?: PolkadotIngressEgressDepositFetchesScheduled;
    BatchBroadcastRequested?: PolkadotIngressEgressBatchBroadcastRequested;
    MinimumDepositSet?: PolkadotIngressEgressMinimumDepositSet;
    DepositIgnored?: PolkadotIngressEgressDepositIgnored;
    VaultTransferFailed?: PolkadotIngressEgressVaultTransferFailed;
  };
  BitcoinIngressEgress?: {
    StartWitnessing?: BitcoinIngressEgressStartWitnessing;
    StopWitnessing?: BitcoinIngressEgressStopWitnessing;
    DepositReceived?: BitcoinIngressEgressDepositReceived;
    AssetEgressStatusChanged?: BitcoinIngressEgressAssetEgressStatusChanged;
    EgressScheduled?: BitcoinIngressEgressEgressScheduled;
    CcmBroadcastRequested?: BitcoinIngressEgressCcmBroadcastRequested;
    CcmEgressInvalid?: BitcoinIngressEgressCcmEgressInvalid;
    DepositFetchesScheduled?: BitcoinIngressEgressDepositFetchesScheduled;
    BatchBroadcastRequested?: BitcoinIngressEgressBatchBroadcastRequested;
    MinimumDepositSet?: BitcoinIngressEgressMinimumDepositSet;
    DepositIgnored?: BitcoinIngressEgressDepositIgnored;
    VaultTransferFailed?: BitcoinIngressEgressVaultTransferFailed;
  };
  LiquidityPools?: {
    UpdatedBuyInterval?: LiquidityPoolsUpdatedBuyInterval;
    PoolStateUpdated?: LiquidityPoolsPoolStateUpdated;
    NewPoolCreated?: LiquidityPoolsNewPoolCreated;
    RangeOrderMinted?: LiquidityPoolsRangeOrderMinted;
    RangeOrderBurned?: LiquidityPoolsRangeOrderBurned;
    LimitOrderMinted?: LiquidityPoolsLimitOrderMinted;
    LimitOrderBurned?: LiquidityPoolsLimitOrderBurned;
    NetworkFeeTaken?: LiquidityPoolsNetworkFeeTaken;
    AssetSwapped?: LiquidityPoolsAssetSwapped;
    LiquidityFeeUpdated?: LiquidityPoolsLiquidityFeeUpdated;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 12,
  handlers: [
    {
      name: 'System.ExtrinsicSuccess',
      handler:
        map.System?.ExtrinsicSuccess &&
        ((async ({ event, ...rest }) =>
          map.System!.ExtrinsicSuccess!({
            ...rest,
            event,
            args: systemExtrinsicSuccess.parse(event.args),
          })) as SystemExtrinsicSuccess),
    },
    {
      name: 'System.ExtrinsicFailed',
      handler:
        map.System?.ExtrinsicFailed &&
        ((async ({ event, ...rest }) =>
          map.System!.ExtrinsicFailed!({
            ...rest,
            event,
            args: systemExtrinsicFailed.parse(event.args),
          })) as SystemExtrinsicFailed),
    },
    {
      name: 'System.CodeUpdated',
      handler:
        map.System?.CodeUpdated &&
        ((async ({ event, ...rest }) =>
          map.System!.CodeUpdated!({
            ...rest,
            event,
            args: systemCodeUpdated.parse(event.args),
          })) as SystemCodeUpdated),
    },
    {
      name: 'System.NewAccount',
      handler:
        map.System?.NewAccount &&
        ((async ({ event, ...rest }) =>
          map.System!.NewAccount!({
            ...rest,
            event,
            args: systemNewAccount.parse(event.args),
          })) as SystemNewAccount),
    },
    {
      name: 'System.KilledAccount',
      handler:
        map.System?.KilledAccount &&
        ((async ({ event, ...rest }) =>
          map.System!.KilledAccount!({
            ...rest,
            event,
            args: systemKilledAccount.parse(event.args),
          })) as SystemKilledAccount),
    },
    {
      name: 'System.Remarked',
      handler:
        map.System?.Remarked &&
        ((async ({ event, ...rest }) =>
          map.System!.Remarked!({
            ...rest,
            event,
            args: systemRemarked.parse(event.args),
          })) as SystemRemarked),
    },
    {
      name: 'Environment.AddedNewEthAsset',
      handler:
        map.Environment?.AddedNewEthAsset &&
        ((async ({ event, ...rest }) =>
          map.Environment!.AddedNewEthAsset!({
            ...rest,
            event,
            args: environmentAddedNewEthAsset.parse(event.args),
          })) as EnvironmentAddedNewEthAsset),
    },
    {
      name: 'Environment.UpdatedEthAsset',
      handler:
        map.Environment?.UpdatedEthAsset &&
        ((async ({ event, ...rest }) =>
          map.Environment!.UpdatedEthAsset!({
            ...rest,
            event,
            args: environmentUpdatedEthAsset.parse(event.args),
          })) as EnvironmentUpdatedEthAsset),
    },
    {
      name: 'Environment.PolkadotVaultAccountSet',
      handler:
        map.Environment?.PolkadotVaultAccountSet &&
        ((async ({ event, ...rest }) =>
          map.Environment!.PolkadotVaultAccountSet!({
            ...rest,
            event,
            args: environmentPolkadotVaultAccountSet.parse(event.args),
          })) as EnvironmentPolkadotVaultAccountSet),
    },
    {
      name: 'Environment.BitcoinBlockNumberSetForVault',
      handler:
        map.Environment?.BitcoinBlockNumberSetForVault &&
        ((async ({ event, ...rest }) =>
          map.Environment!.BitcoinBlockNumberSetForVault!({
            ...rest,
            event,
            args: environmentBitcoinBlockNumberSetForVault.parse(event.args),
          })) as EnvironmentBitcoinBlockNumberSetForVault),
    },
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
      name: 'Environment.NextCompatibilityVersionSet',
      handler:
        map.Environment?.NextCompatibilityVersionSet &&
        ((async ({ event, ...rest }) =>
          map.Environment!.NextCompatibilityVersionSet!({
            ...rest,
            event,
            args: environmentNextCompatibilityVersionSet.parse(event.args),
          })) as EnvironmentNextCompatibilityVersionSet),
    },
    {
      name: 'Flip.RemainingImbalance',
      handler:
        map.Flip?.RemainingImbalance &&
        ((async ({ event, ...rest }) =>
          map.Flip!.RemainingImbalance!({
            ...rest,
            event,
            args: flipRemainingImbalance.parse(event.args),
          })) as FlipRemainingImbalance),
    },
    {
      name: 'Flip.SlashingPerformed',
      handler:
        map.Flip?.SlashingPerformed &&
        ((async ({ event, ...rest }) =>
          map.Flip!.SlashingPerformed!({
            ...rest,
            event,
            args: flipSlashingPerformed.parse(event.args),
          })) as FlipSlashingPerformed),
    },
    {
      name: 'Flip.AccountReaped',
      handler:
        map.Flip?.AccountReaped &&
        ((async ({ event, ...rest }) =>
          map.Flip!.AccountReaped!({
            ...rest,
            event,
            args: flipAccountReaped.parse(event.args),
          })) as FlipAccountReaped),
    },
    {
      name: 'Flip.SlashingRateUpdated',
      handler:
        map.Flip?.SlashingRateUpdated &&
        ((async ({ event, ...rest }) =>
          map.Flip!.SlashingRateUpdated!({
            ...rest,
            event,
            args: flipSlashingRateUpdated.parse(event.args),
          })) as FlipSlashingRateUpdated),
    },
    {
      name: 'Emissions.SupplyUpdateBroadcastRequested',
      handler:
        map.Emissions?.SupplyUpdateBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.SupplyUpdateBroadcastRequested!({
            ...rest,
            event,
            args: emissionsSupplyUpdateBroadcastRequested.parse(event.args),
          })) as EmissionsSupplyUpdateBroadcastRequested),
    },
    {
      name: 'Emissions.CurrentAuthorityInflationEmissionsUpdated',
      handler:
        map.Emissions?.CurrentAuthorityInflationEmissionsUpdated &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.CurrentAuthorityInflationEmissionsUpdated!({
            ...rest,
            event,
            args: emissionsCurrentAuthorityInflationEmissionsUpdated.parse(event.args),
          })) as EmissionsCurrentAuthorityInflationEmissionsUpdated),
    },
    {
      name: 'Emissions.BackupNodeInflationEmissionsUpdated',
      handler:
        map.Emissions?.BackupNodeInflationEmissionsUpdated &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.BackupNodeInflationEmissionsUpdated!({
            ...rest,
            event,
            args: emissionsBackupNodeInflationEmissionsUpdated.parse(event.args),
          })) as EmissionsBackupNodeInflationEmissionsUpdated),
    },
    {
      name: 'Emissions.SupplyUpdateIntervalUpdated',
      handler:
        map.Emissions?.SupplyUpdateIntervalUpdated &&
        ((async ({ event, ...rest }) =>
          map.Emissions!.SupplyUpdateIntervalUpdated!({
            ...rest,
            event,
            args: emissionsSupplyUpdateIntervalUpdated.parse(event.args),
          })) as EmissionsSupplyUpdateIntervalUpdated),
    },
    {
      name: 'Funding.Funded',
      handler:
        map.Funding?.Funded &&
        ((async ({ event, ...rest }) =>
          map.Funding!.Funded!({
            ...rest,
            event,
            args: fundingFunded.parse(event.args),
          })) as FundingFunded),
    },
    {
      name: 'Funding.RedemptionRequested',
      handler:
        map.Funding?.RedemptionRequested &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RedemptionRequested!({
            ...rest,
            event,
            args: fundingRedemptionRequested.parse(event.args),
          })) as FundingRedemptionRequested),
    },
    {
      name: 'Funding.RedemptionSettled',
      handler:
        map.Funding?.RedemptionSettled &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RedemptionSettled!({
            ...rest,
            event,
            args: fundingRedemptionSettled.parse(event.args),
          })) as FundingRedemptionSettled),
    },
    {
      name: 'Funding.StoppedBidding',
      handler:
        map.Funding?.StoppedBidding &&
        ((async ({ event, ...rest }) =>
          map.Funding!.StoppedBidding!({
            ...rest,
            event,
            args: fundingStoppedBidding.parse(event.args),
          })) as FundingStoppedBidding),
    },
    {
      name: 'Funding.StartedBidding',
      handler:
        map.Funding?.StartedBidding &&
        ((async ({ event, ...rest }) =>
          map.Funding!.StartedBidding!({
            ...rest,
            event,
            args: fundingStartedBidding.parse(event.args),
          })) as FundingStartedBidding),
    },
    {
      name: 'Funding.RedemptionExpired',
      handler:
        map.Funding?.RedemptionExpired &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RedemptionExpired!({
            ...rest,
            event,
            args: fundingRedemptionExpired.parse(event.args),
          })) as FundingRedemptionExpired),
    },
    {
      name: 'Funding.AddedRestrictedAddress',
      handler:
        map.Funding?.AddedRestrictedAddress &&
        ((async ({ event, ...rest }) =>
          map.Funding!.AddedRestrictedAddress!({
            ...rest,
            event,
            args: fundingAddedRestrictedAddress.parse(event.args),
          })) as FundingAddedRestrictedAddress),
    },
    {
      name: 'Funding.RemovedRestrictedAddress',
      handler:
        map.Funding?.RemovedRestrictedAddress &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RemovedRestrictedAddress!({
            ...rest,
            event,
            args: fundingRemovedRestrictedAddress.parse(event.args),
          })) as FundingRemovedRestrictedAddress),
    },
    {
      name: 'Funding.FailedFundingAttempt',
      handler:
        map.Funding?.FailedFundingAttempt &&
        ((async ({ event, ...rest }) =>
          map.Funding!.FailedFundingAttempt!({
            ...rest,
            event,
            args: fundingFailedFundingAttempt.parse(event.args),
          })) as FundingFailedFundingAttempt),
    },
    {
      name: 'Funding.MinimumFundingUpdated',
      handler:
        map.Funding?.MinimumFundingUpdated &&
        ((async ({ event, ...rest }) =>
          map.Funding!.MinimumFundingUpdated!({
            ...rest,
            event,
            args: fundingMinimumFundingUpdated.parse(event.args),
          })) as FundingMinimumFundingUpdated),
    },
    {
      name: 'Funding.RedemptionTaxAmountUpdated',
      handler:
        map.Funding?.RedemptionTaxAmountUpdated &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RedemptionTaxAmountUpdated!({
            ...rest,
            event,
            args: fundingRedemptionTaxAmountUpdated.parse(event.args),
          })) as FundingRedemptionTaxAmountUpdated),
    },
    {
      name: 'Funding.RedemptionAmountZero',
      handler:
        map.Funding?.RedemptionAmountZero &&
        ((async ({ event, ...rest }) =>
          map.Funding!.RedemptionAmountZero!({
            ...rest,
            event,
            args: fundingRedemptionAmountZero.parse(event.args),
          })) as FundingRedemptionAmountZero),
    },
    {
      name: 'Funding.BoundRedeemAddress',
      handler:
        map.Funding?.BoundRedeemAddress &&
        ((async ({ event, ...rest }) =>
          map.Funding!.BoundRedeemAddress!({
            ...rest,
            event,
            args: fundingBoundRedeemAddress.parse(event.args),
          })) as FundingBoundRedeemAddress),
    },
    {
      name: 'AccountRoles.AccountRoleRegistered',
      handler:
        map.AccountRoles?.AccountRoleRegistered &&
        ((async ({ event, ...rest }) =>
          map.AccountRoles!.AccountRoleRegistered!({
            ...rest,
            event,
            args: accountRolesAccountRoleRegistered.parse(event.args),
          })) as AccountRolesAccountRoleRegistered),
    },
    {
      name: 'TransactionPayment.TransactionFeePaid',
      handler:
        map.TransactionPayment?.TransactionFeePaid &&
        ((async ({ event, ...rest }) =>
          map.TransactionPayment!.TransactionFeePaid!({
            ...rest,
            event,
            args: transactionPaymentTransactionFeePaid.parse(event.args),
          })) as TransactionPaymentTransactionFeePaid),
    },
    {
      name: 'Witnesser.WitnessExecutionFailed',
      handler:
        map.Witnesser?.WitnessExecutionFailed &&
        ((async ({ event, ...rest }) =>
          map.Witnesser!.WitnessExecutionFailed!({
            ...rest,
            event,
            args: witnesserWitnessExecutionFailed.parse(event.args),
          })) as WitnesserWitnessExecutionFailed),
    },
    {
      name: 'Validator.RotationAborted',
      handler:
        map.Validator?.RotationAborted &&
        ((async ({ event, ...rest }) =>
          map.Validator!.RotationAborted!({
            ...rest,
            event,
            args: validatorRotationAborted.parse(event.args),
          })) as ValidatorRotationAborted),
    },
    {
      name: 'Validator.NewEpoch',
      handler:
        map.Validator?.NewEpoch &&
        ((async ({ event, ...rest }) =>
          map.Validator!.NewEpoch!({
            ...rest,
            event,
            args: validatorNewEpoch.parse(event.args),
          })) as ValidatorNewEpoch),
    },
    {
      name: 'Validator.RotationPhaseUpdated',
      handler:
        map.Validator?.RotationPhaseUpdated &&
        ((async ({ event, ...rest }) =>
          map.Validator!.RotationPhaseUpdated!({
            ...rest,
            event,
            args: validatorRotationPhaseUpdated.parse(event.args),
          })) as ValidatorRotationPhaseUpdated),
    },
    {
      name: 'Validator.CFEVersionUpdated',
      handler:
        map.Validator?.CFEVersionUpdated &&
        ((async ({ event, ...rest }) =>
          map.Validator!.CFEVersionUpdated!({
            ...rest,
            event,
            args: validatorCFEVersionUpdated.parse(event.args),
          })) as ValidatorCFEVersionUpdated),
    },
    {
      name: 'Validator.PeerIdRegistered',
      handler:
        map.Validator?.PeerIdRegistered &&
        ((async ({ event, ...rest }) =>
          map.Validator!.PeerIdRegistered!({
            ...rest,
            event,
            args: validatorPeerIdRegistered.parse(event.args),
          })) as ValidatorPeerIdRegistered),
    },
    {
      name: 'Validator.PeerIdUnregistered',
      handler:
        map.Validator?.PeerIdUnregistered &&
        ((async ({ event, ...rest }) =>
          map.Validator!.PeerIdUnregistered!({
            ...rest,
            event,
            args: validatorPeerIdUnregistered.parse(event.args),
          })) as ValidatorPeerIdUnregistered),
    },
    {
      name: 'Validator.VanityNameSet',
      handler:
        map.Validator?.VanityNameSet &&
        ((async ({ event, ...rest }) =>
          map.Validator!.VanityNameSet!({
            ...rest,
            event,
            args: validatorVanityNameSet.parse(event.args),
          })) as ValidatorVanityNameSet),
    },
    {
      name: 'Validator.AuctionCompleted',
      handler:
        map.Validator?.AuctionCompleted &&
        ((async ({ event, ...rest }) =>
          map.Validator!.AuctionCompleted!({
            ...rest,
            event,
            args: validatorAuctionCompleted.parse(event.args),
          })) as ValidatorAuctionCompleted),
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler:
        map.Validator?.PalletConfigUpdated &&
        ((async ({ event, ...rest }) =>
          map.Validator!.PalletConfigUpdated!({
            ...rest,
            event,
            args: validatorPalletConfigUpdated.parse(event.args),
          })) as ValidatorPalletConfigUpdated),
    },
    {
      name: 'Session.NewSession',
      handler:
        map.Session?.NewSession &&
        ((async ({ event, ...rest }) =>
          map.Session!.NewSession!({
            ...rest,
            event,
            args: sessionNewSession.parse(event.args),
          })) as SessionNewSession),
    },
    {
      name: 'Grandpa.NewAuthorities',
      handler:
        map.Grandpa?.NewAuthorities &&
        ((async ({ event, ...rest }) =>
          map.Grandpa!.NewAuthorities!({
            ...rest,
            event,
            args: grandpaNewAuthorities.parse(event.args),
          })) as GrandpaNewAuthorities),
    },
    {
      name: 'Grandpa.Paused',
      handler:
        map.Grandpa?.Paused &&
        ((async ({ event, ...rest }) =>
          map.Grandpa!.Paused!({
            ...rest,
            event,
            args: grandpaPaused.parse(event.args),
          })) as GrandpaPaused),
    },
    {
      name: 'Grandpa.Resumed',
      handler:
        map.Grandpa?.Resumed &&
        ((async ({ event, ...rest }) =>
          map.Grandpa!.Resumed!({
            ...rest,
            event,
            args: grandpaResumed.parse(event.args),
          })) as GrandpaResumed),
    },
    {
      name: 'Governance.Proposed',
      handler:
        map.Governance?.Proposed &&
        ((async ({ event, ...rest }) =>
          map.Governance!.Proposed!({
            ...rest,
            event,
            args: governanceProposed.parse(event.args),
          })) as GovernanceProposed),
    },
    {
      name: 'Governance.Executed',
      handler:
        map.Governance?.Executed &&
        ((async ({ event, ...rest }) =>
          map.Governance!.Executed!({
            ...rest,
            event,
            args: governanceExecuted.parse(event.args),
          })) as GovernanceExecuted),
    },
    {
      name: 'Governance.Expired',
      handler:
        map.Governance?.Expired &&
        ((async ({ event, ...rest }) =>
          map.Governance!.Expired!({
            ...rest,
            event,
            args: governanceExpired.parse(event.args),
          })) as GovernanceExpired),
    },
    {
      name: 'Governance.Approved',
      handler:
        map.Governance?.Approved &&
        ((async ({ event, ...rest }) =>
          map.Governance!.Approved!({
            ...rest,
            event,
            args: governanceApproved.parse(event.args),
          })) as GovernanceApproved),
    },
    {
      name: 'Governance.FailedExecution',
      handler:
        map.Governance?.FailedExecution &&
        ((async ({ event, ...rest }) =>
          map.Governance!.FailedExecution!({
            ...rest,
            event,
            args: governanceFailedExecution.parse(event.args),
          })) as GovernanceFailedExecution),
    },
    {
      name: 'Governance.DecodeOfCallFailed',
      handler:
        map.Governance?.DecodeOfCallFailed &&
        ((async ({ event, ...rest }) =>
          map.Governance!.DecodeOfCallFailed!({
            ...rest,
            event,
            args: governanceDecodeOfCallFailed.parse(event.args),
          })) as GovernanceDecodeOfCallFailed),
    },
    {
      name: 'Governance.UpgradeConditionsSatisfied',
      handler:
        map.Governance?.UpgradeConditionsSatisfied &&
        ((async ({ event, ...rest }) =>
          map.Governance!.UpgradeConditionsSatisfied!({
            ...rest,
            event,
            args: governanceUpgradeConditionsSatisfied.parse(event.args),
          })) as GovernanceUpgradeConditionsSatisfied),
    },
    {
      name: 'Governance.GovKeyCallExecuted',
      handler:
        map.Governance?.GovKeyCallExecuted &&
        ((async ({ event, ...rest }) =>
          map.Governance!.GovKeyCallExecuted!({
            ...rest,
            event,
            args: governanceGovKeyCallExecuted.parse(event.args),
          })) as GovernanceGovKeyCallExecuted),
    },
    {
      name: 'Governance.GovKeyCallHashWhitelisted',
      handler:
        map.Governance?.GovKeyCallHashWhitelisted &&
        ((async ({ event, ...rest }) =>
          map.Governance!.GovKeyCallHashWhitelisted!({
            ...rest,
            event,
            args: governanceGovKeyCallHashWhitelisted.parse(event.args),
          })) as GovernanceGovKeyCallHashWhitelisted),
    },
    {
      name: 'Governance.GovKeyCallExecutionFailed',
      handler:
        map.Governance?.GovKeyCallExecutionFailed &&
        ((async ({ event, ...rest }) =>
          map.Governance!.GovKeyCallExecutionFailed!({
            ...rest,
            event,
            args: governanceGovKeyCallExecutionFailed.parse(event.args),
          })) as GovernanceGovKeyCallExecutionFailed),
    },
    {
      name: 'TokenholderGovernance.ProposalSubmitted',
      handler:
        map.TokenholderGovernance?.ProposalSubmitted &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.ProposalSubmitted!({
            ...rest,
            event,
            args: tokenholderGovernanceProposalSubmitted.parse(event.args),
          })) as TokenholderGovernanceProposalSubmitted),
    },
    {
      name: 'TokenholderGovernance.ProposalPassed',
      handler:
        map.TokenholderGovernance?.ProposalPassed &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.ProposalPassed!({
            ...rest,
            event,
            args: tokenholderGovernanceProposalPassed.parse(event.args),
          })) as TokenholderGovernanceProposalPassed),
    },
    {
      name: 'TokenholderGovernance.ProposalRejected',
      handler:
        map.TokenholderGovernance?.ProposalRejected &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.ProposalRejected!({
            ...rest,
            event,
            args: tokenholderGovernanceProposalRejected.parse(event.args),
          })) as TokenholderGovernanceProposalRejected),
    },
    {
      name: 'TokenholderGovernance.ProposalEnacted',
      handler:
        map.TokenholderGovernance?.ProposalEnacted &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.ProposalEnacted!({
            ...rest,
            event,
            args: tokenholderGovernanceProposalEnacted.parse(event.args),
          })) as TokenholderGovernanceProposalEnacted),
    },
    {
      name: 'TokenholderGovernance.GovKeyUpdatedHasFailed',
      handler:
        map.TokenholderGovernance?.GovKeyUpdatedHasFailed &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.GovKeyUpdatedHasFailed!({
            ...rest,
            event,
            args: tokenholderGovernanceGovKeyUpdatedHasFailed.parse(event.args),
          })) as TokenholderGovernanceGovKeyUpdatedHasFailed),
    },
    {
      name: 'TokenholderGovernance.GovKeyUpdatedWasSuccessful',
      handler:
        map.TokenholderGovernance?.GovKeyUpdatedWasSuccessful &&
        ((async ({ event, ...rest }) =>
          map.TokenholderGovernance!.GovKeyUpdatedWasSuccessful!({
            ...rest,
            event,
            args: tokenholderGovernanceGovKeyUpdatedWasSuccessful.parse(event.args),
          })) as TokenholderGovernanceGovKeyUpdatedWasSuccessful),
    },
    {
      name: 'Reputation.OffencePenalty',
      handler:
        map.Reputation?.OffencePenalty &&
        ((async ({ event, ...rest }) =>
          map.Reputation!.OffencePenalty!({
            ...rest,
            event,
            args: reputationOffencePenalty.parse(event.args),
          })) as ReputationOffencePenalty),
    },
    {
      name: 'Reputation.AccrualRateUpdated',
      handler:
        map.Reputation?.AccrualRateUpdated &&
        ((async ({ event, ...rest }) =>
          map.Reputation!.AccrualRateUpdated!({
            ...rest,
            event,
            args: reputationAccrualRateUpdated.parse(event.args),
          })) as ReputationAccrualRateUpdated),
    },
    {
      name: 'Reputation.MissedHeartbeatPenaltyUpdated',
      handler:
        map.Reputation?.MissedHeartbeatPenaltyUpdated &&
        ((async ({ event, ...rest }) =>
          map.Reputation!.MissedHeartbeatPenaltyUpdated!({
            ...rest,
            event,
            args: reputationMissedHeartbeatPenaltyUpdated.parse(event.args),
          })) as ReputationMissedHeartbeatPenaltyUpdated),
    },
    {
      name: 'Reputation.PenaltyUpdated',
      handler:
        map.Reputation?.PenaltyUpdated &&
        ((async ({ event, ...rest }) =>
          map.Reputation!.PenaltyUpdated!({
            ...rest,
            event,
            args: reputationPenaltyUpdated.parse(event.args),
          })) as ReputationPenaltyUpdated),
    },
    {
      name: 'EthereumChainTracking.ChainStateUpdated',
      handler:
        map.EthereumChainTracking?.ChainStateUpdated &&
        ((async ({ event, ...rest }) =>
          map.EthereumChainTracking!.ChainStateUpdated!({
            ...rest,
            event,
            args: ethereumChainTrackingChainStateUpdated.parse(event.args),
          })) as EthereumChainTrackingChainStateUpdated),
    },
    {
      name: 'PolkadotChainTracking.ChainStateUpdated',
      handler:
        map.PolkadotChainTracking?.ChainStateUpdated &&
        ((async ({ event, ...rest }) =>
          map.PolkadotChainTracking!.ChainStateUpdated!({
            ...rest,
            event,
            args: polkadotChainTrackingChainStateUpdated.parse(event.args),
          })) as PolkadotChainTrackingChainStateUpdated),
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
      name: 'EthereumVault.KeygenRequest',
      handler:
        map.EthereumVault?.KeygenRequest &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenRequest!({
            ...rest,
            event,
            args: ethereumVaultKeygenRequest.parse(event.args),
          })) as EthereumVaultKeygenRequest),
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
      name: 'EthereumVault.VaultRotationCompleted',
      handler:
        map.EthereumVault?.VaultRotationCompleted &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.VaultRotationCompleted!({
            ...rest,
            event,
            args: ethereumVaultVaultRotationCompleted.parse(event.args),
          })) as EthereumVaultVaultRotationCompleted),
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
      name: 'EthereumVault.KeygenSuccessReported',
      handler:
        map.EthereumVault?.KeygenSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenSuccessReported!({
            ...rest,
            event,
            args: ethereumVaultKeygenSuccessReported.parse(event.args),
          })) as EthereumVaultKeygenSuccessReported),
    },
    {
      name: 'EthereumVault.KeyHandoverSuccessReported',
      handler:
        map.EthereumVault?.KeyHandoverSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverSuccessReported!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverSuccessReported.parse(event.args),
          })) as EthereumVaultKeyHandoverSuccessReported),
    },
    {
      name: 'EthereumVault.KeygenFailureReported',
      handler:
        map.EthereumVault?.KeygenFailureReported &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenFailureReported!({
            ...rest,
            event,
            args: ethereumVaultKeygenFailureReported.parse(event.args),
          })) as EthereumVaultKeygenFailureReported),
    },
    {
      name: 'EthereumVault.KeyHandoverFailureReported',
      handler:
        map.EthereumVault?.KeyHandoverFailureReported &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverFailureReported!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverFailureReported.parse(event.args),
          })) as EthereumVaultKeyHandoverFailureReported),
    },
    {
      name: 'EthereumVault.KeygenSuccess',
      handler:
        map.EthereumVault?.KeygenSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenSuccess!({
            ...rest,
            event,
            args: ethereumVaultKeygenSuccess.parse(event.args),
          })) as EthereumVaultKeygenSuccess),
    },
    {
      name: 'EthereumVault.KeyHandoverSuccess',
      handler:
        map.EthereumVault?.KeyHandoverSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverSuccess!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverSuccess.parse(event.args),
          })) as EthereumVaultKeyHandoverSuccess),
    },
    {
      name: 'EthereumVault.NoKeyHandover',
      handler:
        map.EthereumVault?.NoKeyHandover &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.NoKeyHandover!({
            ...rest,
            event,
            args: ethereumVaultNoKeyHandover.parse(event.args),
          })) as EthereumVaultNoKeyHandover),
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
      name: 'EthereumVault.KeygenVerificationFailure',
      handler:
        map.EthereumVault?.KeygenVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenVerificationFailure!({
            ...rest,
            event,
            args: ethereumVaultKeygenVerificationFailure.parse(event.args),
          })) as EthereumVaultKeygenVerificationFailure),
    },
    {
      name: 'EthereumVault.KeyHandoverVerificationFailure',
      handler:
        map.EthereumVault?.KeyHandoverVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverVerificationFailure!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverVerificationFailure.parse(event.args),
          })) as EthereumVaultKeyHandoverVerificationFailure),
    },
    {
      name: 'EthereumVault.KeygenFailure',
      handler:
        map.EthereumVault?.KeygenFailure &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenFailure!({
            ...rest,
            event,
            args: ethereumVaultKeygenFailure.parse(event.args),
          })) as EthereumVaultKeygenFailure),
    },
    {
      name: 'EthereumVault.KeygenResponseTimeout',
      handler:
        map.EthereumVault?.KeygenResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenResponseTimeout!({
            ...rest,
            event,
            args: ethereumVaultKeygenResponseTimeout.parse(event.args),
          })) as EthereumVaultKeygenResponseTimeout),
    },
    {
      name: 'EthereumVault.KeyHandoverResponseTimeout',
      handler:
        map.EthereumVault?.KeyHandoverResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverResponseTimeout!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverResponseTimeout.parse(event.args),
          })) as EthereumVaultKeyHandoverResponseTimeout),
    },
    {
      name: 'EthereumVault.KeygenResponseTimeoutUpdated',
      handler:
        map.EthereumVault?.KeygenResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeygenResponseTimeoutUpdated!({
            ...rest,
            event,
            args: ethereumVaultKeygenResponseTimeoutUpdated.parse(event.args),
          })) as EthereumVaultKeygenResponseTimeoutUpdated),
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
      name: 'EthereumVault.KeyHandoverFailure',
      handler:
        map.EthereumVault?.KeyHandoverFailure &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.KeyHandoverFailure!({
            ...rest,
            event,
            args: ethereumVaultKeyHandoverFailure.parse(event.args),
          })) as EthereumVaultKeyHandoverFailure),
    },
    {
      name: 'EthereumVault.VaultRotationAborted',
      handler:
        map.EthereumVault?.VaultRotationAborted &&
        ((async ({ event, ...rest }) =>
          map.EthereumVault!.VaultRotationAborted!({
            ...rest,
            event,
            args: ethereumVaultVaultRotationAborted.parse(event.args),
          })) as EthereumVaultVaultRotationAborted),
    },
    {
      name: 'PolkadotVault.KeygenRequest',
      handler:
        map.PolkadotVault?.KeygenRequest &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenRequest!({
            ...rest,
            event,
            args: polkadotVaultKeygenRequest.parse(event.args),
          })) as PolkadotVaultKeygenRequest),
    },
    {
      name: 'PolkadotVault.KeyHandoverRequest',
      handler:
        map.PolkadotVault?.KeyHandoverRequest &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverRequest!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverRequest.parse(event.args),
          })) as PolkadotVaultKeyHandoverRequest),
    },
    {
      name: 'PolkadotVault.VaultRotationCompleted',
      handler:
        map.PolkadotVault?.VaultRotationCompleted &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.VaultRotationCompleted!({
            ...rest,
            event,
            args: polkadotVaultVaultRotationCompleted.parse(event.args),
          })) as PolkadotVaultVaultRotationCompleted),
    },
    {
      name: 'PolkadotVault.VaultRotatedExternally',
      handler:
        map.PolkadotVault?.VaultRotatedExternally &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.VaultRotatedExternally!({
            ...rest,
            event,
            args: polkadotVaultVaultRotatedExternally.parse(event.args),
          })) as PolkadotVaultVaultRotatedExternally),
    },
    {
      name: 'PolkadotVault.KeygenSuccessReported',
      handler:
        map.PolkadotVault?.KeygenSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenSuccessReported!({
            ...rest,
            event,
            args: polkadotVaultKeygenSuccessReported.parse(event.args),
          })) as PolkadotVaultKeygenSuccessReported),
    },
    {
      name: 'PolkadotVault.KeyHandoverSuccessReported',
      handler:
        map.PolkadotVault?.KeyHandoverSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverSuccessReported!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverSuccessReported.parse(event.args),
          })) as PolkadotVaultKeyHandoverSuccessReported),
    },
    {
      name: 'PolkadotVault.KeygenFailureReported',
      handler:
        map.PolkadotVault?.KeygenFailureReported &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenFailureReported!({
            ...rest,
            event,
            args: polkadotVaultKeygenFailureReported.parse(event.args),
          })) as PolkadotVaultKeygenFailureReported),
    },
    {
      name: 'PolkadotVault.KeyHandoverFailureReported',
      handler:
        map.PolkadotVault?.KeyHandoverFailureReported &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverFailureReported!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverFailureReported.parse(event.args),
          })) as PolkadotVaultKeyHandoverFailureReported),
    },
    {
      name: 'PolkadotVault.KeygenSuccess',
      handler:
        map.PolkadotVault?.KeygenSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenSuccess!({
            ...rest,
            event,
            args: polkadotVaultKeygenSuccess.parse(event.args),
          })) as PolkadotVaultKeygenSuccess),
    },
    {
      name: 'PolkadotVault.KeyHandoverSuccess',
      handler:
        map.PolkadotVault?.KeyHandoverSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverSuccess!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverSuccess.parse(event.args),
          })) as PolkadotVaultKeyHandoverSuccess),
    },
    {
      name: 'PolkadotVault.NoKeyHandover',
      handler:
        map.PolkadotVault?.NoKeyHandover &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.NoKeyHandover!({
            ...rest,
            event,
            args: polkadotVaultNoKeyHandover.parse(event.args),
          })) as PolkadotVaultNoKeyHandover),
    },
    {
      name: 'PolkadotVault.KeygenVerificationSuccess',
      handler:
        map.PolkadotVault?.KeygenVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenVerificationSuccess!({
            ...rest,
            event,
            args: polkadotVaultKeygenVerificationSuccess.parse(event.args),
          })) as PolkadotVaultKeygenVerificationSuccess),
    },
    {
      name: 'PolkadotVault.KeyHandoverVerificationSuccess',
      handler:
        map.PolkadotVault?.KeyHandoverVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverVerificationSuccess!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverVerificationSuccess.parse(event.args),
          })) as PolkadotVaultKeyHandoverVerificationSuccess),
    },
    {
      name: 'PolkadotVault.KeygenVerificationFailure',
      handler:
        map.PolkadotVault?.KeygenVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenVerificationFailure!({
            ...rest,
            event,
            args: polkadotVaultKeygenVerificationFailure.parse(event.args),
          })) as PolkadotVaultKeygenVerificationFailure),
    },
    {
      name: 'PolkadotVault.KeyHandoverVerificationFailure',
      handler:
        map.PolkadotVault?.KeyHandoverVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverVerificationFailure!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverVerificationFailure.parse(event.args),
          })) as PolkadotVaultKeyHandoverVerificationFailure),
    },
    {
      name: 'PolkadotVault.KeygenFailure',
      handler:
        map.PolkadotVault?.KeygenFailure &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenFailure!({
            ...rest,
            event,
            args: polkadotVaultKeygenFailure.parse(event.args),
          })) as PolkadotVaultKeygenFailure),
    },
    {
      name: 'PolkadotVault.KeygenResponseTimeout',
      handler:
        map.PolkadotVault?.KeygenResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenResponseTimeout!({
            ...rest,
            event,
            args: polkadotVaultKeygenResponseTimeout.parse(event.args),
          })) as PolkadotVaultKeygenResponseTimeout),
    },
    {
      name: 'PolkadotVault.KeyHandoverResponseTimeout',
      handler:
        map.PolkadotVault?.KeyHandoverResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverResponseTimeout!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverResponseTimeout.parse(event.args),
          })) as PolkadotVaultKeyHandoverResponseTimeout),
    },
    {
      name: 'PolkadotVault.KeygenResponseTimeoutUpdated',
      handler:
        map.PolkadotVault?.KeygenResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeygenResponseTimeoutUpdated!({
            ...rest,
            event,
            args: polkadotVaultKeygenResponseTimeoutUpdated.parse(event.args),
          })) as PolkadotVaultKeygenResponseTimeoutUpdated),
    },
    {
      name: 'PolkadotVault.AwaitingGovernanceActivation',
      handler:
        map.PolkadotVault?.AwaitingGovernanceActivation &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.AwaitingGovernanceActivation!({
            ...rest,
            event,
            args: polkadotVaultAwaitingGovernanceActivation.parse(event.args),
          })) as PolkadotVaultAwaitingGovernanceActivation),
    },
    {
      name: 'PolkadotVault.KeyHandoverFailure',
      handler:
        map.PolkadotVault?.KeyHandoverFailure &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.KeyHandoverFailure!({
            ...rest,
            event,
            args: polkadotVaultKeyHandoverFailure.parse(event.args),
          })) as PolkadotVaultKeyHandoverFailure),
    },
    {
      name: 'PolkadotVault.VaultRotationAborted',
      handler:
        map.PolkadotVault?.VaultRotationAborted &&
        ((async ({ event, ...rest }) =>
          map.PolkadotVault!.VaultRotationAborted!({
            ...rest,
            event,
            args: polkadotVaultVaultRotationAborted.parse(event.args),
          })) as PolkadotVaultVaultRotationAborted),
    },
    {
      name: 'BitcoinVault.KeygenRequest',
      handler:
        map.BitcoinVault?.KeygenRequest &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenRequest!({
            ...rest,
            event,
            args: bitcoinVaultKeygenRequest.parse(event.args),
          })) as BitcoinVaultKeygenRequest),
    },
    {
      name: 'BitcoinVault.KeyHandoverRequest',
      handler:
        map.BitcoinVault?.KeyHandoverRequest &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverRequest!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverRequest.parse(event.args),
          })) as BitcoinVaultKeyHandoverRequest),
    },
    {
      name: 'BitcoinVault.VaultRotationCompleted',
      handler:
        map.BitcoinVault?.VaultRotationCompleted &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.VaultRotationCompleted!({
            ...rest,
            event,
            args: bitcoinVaultVaultRotationCompleted.parse(event.args),
          })) as BitcoinVaultVaultRotationCompleted),
    },
    {
      name: 'BitcoinVault.VaultRotatedExternally',
      handler:
        map.BitcoinVault?.VaultRotatedExternally &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.VaultRotatedExternally!({
            ...rest,
            event,
            args: bitcoinVaultVaultRotatedExternally.parse(event.args),
          })) as BitcoinVaultVaultRotatedExternally),
    },
    {
      name: 'BitcoinVault.KeygenSuccessReported',
      handler:
        map.BitcoinVault?.KeygenSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenSuccessReported!({
            ...rest,
            event,
            args: bitcoinVaultKeygenSuccessReported.parse(event.args),
          })) as BitcoinVaultKeygenSuccessReported),
    },
    {
      name: 'BitcoinVault.KeyHandoverSuccessReported',
      handler:
        map.BitcoinVault?.KeyHandoverSuccessReported &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverSuccessReported!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverSuccessReported.parse(event.args),
          })) as BitcoinVaultKeyHandoverSuccessReported),
    },
    {
      name: 'BitcoinVault.KeygenFailureReported',
      handler:
        map.BitcoinVault?.KeygenFailureReported &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenFailureReported!({
            ...rest,
            event,
            args: bitcoinVaultKeygenFailureReported.parse(event.args),
          })) as BitcoinVaultKeygenFailureReported),
    },
    {
      name: 'BitcoinVault.KeyHandoverFailureReported',
      handler:
        map.BitcoinVault?.KeyHandoverFailureReported &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverFailureReported!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverFailureReported.parse(event.args),
          })) as BitcoinVaultKeyHandoverFailureReported),
    },
    {
      name: 'BitcoinVault.KeygenSuccess',
      handler:
        map.BitcoinVault?.KeygenSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenSuccess!({
            ...rest,
            event,
            args: bitcoinVaultKeygenSuccess.parse(event.args),
          })) as BitcoinVaultKeygenSuccess),
    },
    {
      name: 'BitcoinVault.KeyHandoverSuccess',
      handler:
        map.BitcoinVault?.KeyHandoverSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverSuccess!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverSuccess.parse(event.args),
          })) as BitcoinVaultKeyHandoverSuccess),
    },
    {
      name: 'BitcoinVault.NoKeyHandover',
      handler:
        map.BitcoinVault?.NoKeyHandover &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.NoKeyHandover!({
            ...rest,
            event,
            args: bitcoinVaultNoKeyHandover.parse(event.args),
          })) as BitcoinVaultNoKeyHandover),
    },
    {
      name: 'BitcoinVault.KeygenVerificationSuccess',
      handler:
        map.BitcoinVault?.KeygenVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenVerificationSuccess!({
            ...rest,
            event,
            args: bitcoinVaultKeygenVerificationSuccess.parse(event.args),
          })) as BitcoinVaultKeygenVerificationSuccess),
    },
    {
      name: 'BitcoinVault.KeyHandoverVerificationSuccess',
      handler:
        map.BitcoinVault?.KeyHandoverVerificationSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverVerificationSuccess!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverVerificationSuccess.parse(event.args),
          })) as BitcoinVaultKeyHandoverVerificationSuccess),
    },
    {
      name: 'BitcoinVault.KeygenVerificationFailure',
      handler:
        map.BitcoinVault?.KeygenVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenVerificationFailure!({
            ...rest,
            event,
            args: bitcoinVaultKeygenVerificationFailure.parse(event.args),
          })) as BitcoinVaultKeygenVerificationFailure),
    },
    {
      name: 'BitcoinVault.KeyHandoverVerificationFailure',
      handler:
        map.BitcoinVault?.KeyHandoverVerificationFailure &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverVerificationFailure!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverVerificationFailure.parse(event.args),
          })) as BitcoinVaultKeyHandoverVerificationFailure),
    },
    {
      name: 'BitcoinVault.KeygenFailure',
      handler:
        map.BitcoinVault?.KeygenFailure &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenFailure!({
            ...rest,
            event,
            args: bitcoinVaultKeygenFailure.parse(event.args),
          })) as BitcoinVaultKeygenFailure),
    },
    {
      name: 'BitcoinVault.KeygenResponseTimeout',
      handler:
        map.BitcoinVault?.KeygenResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenResponseTimeout!({
            ...rest,
            event,
            args: bitcoinVaultKeygenResponseTimeout.parse(event.args),
          })) as BitcoinVaultKeygenResponseTimeout),
    },
    {
      name: 'BitcoinVault.KeyHandoverResponseTimeout',
      handler:
        map.BitcoinVault?.KeyHandoverResponseTimeout &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverResponseTimeout!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverResponseTimeout.parse(event.args),
          })) as BitcoinVaultKeyHandoverResponseTimeout),
    },
    {
      name: 'BitcoinVault.KeygenResponseTimeoutUpdated',
      handler:
        map.BitcoinVault?.KeygenResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeygenResponseTimeoutUpdated!({
            ...rest,
            event,
            args: bitcoinVaultKeygenResponseTimeoutUpdated.parse(event.args),
          })) as BitcoinVaultKeygenResponseTimeoutUpdated),
    },
    {
      name: 'BitcoinVault.AwaitingGovernanceActivation',
      handler:
        map.BitcoinVault?.AwaitingGovernanceActivation &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.AwaitingGovernanceActivation!({
            ...rest,
            event,
            args: bitcoinVaultAwaitingGovernanceActivation.parse(event.args),
          })) as BitcoinVaultAwaitingGovernanceActivation),
    },
    {
      name: 'BitcoinVault.KeyHandoverFailure',
      handler:
        map.BitcoinVault?.KeyHandoverFailure &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.KeyHandoverFailure!({
            ...rest,
            event,
            args: bitcoinVaultKeyHandoverFailure.parse(event.args),
          })) as BitcoinVaultKeyHandoverFailure),
    },
    {
      name: 'BitcoinVault.VaultRotationAborted',
      handler:
        map.BitcoinVault?.VaultRotationAborted &&
        ((async ({ event, ...rest }) =>
          map.BitcoinVault!.VaultRotationAborted!({
            ...rest,
            event,
            args: bitcoinVaultVaultRotationAborted.parse(event.args),
          })) as BitcoinVaultVaultRotationAborted),
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
      name: 'EthereumThresholdSigner.ThresholdSignatureFailed',
      handler:
        map.EthereumThresholdSigner?.ThresholdSignatureFailed &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.ThresholdSignatureFailed!({
            ...rest,
            event,
            args: ethereumThresholdSignerThresholdSignatureFailed.parse(event.args),
          })) as EthereumThresholdSignerThresholdSignatureFailed),
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureSuccess',
      handler:
        map.EthereumThresholdSigner?.ThresholdSignatureSuccess &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.ThresholdSignatureSuccess!({
            ...rest,
            event,
            args: ethereumThresholdSignerThresholdSignatureSuccess.parse(event.args),
          })) as EthereumThresholdSignerThresholdSignatureSuccess),
    },
    {
      name: 'EthereumThresholdSigner.ThresholdDispatchComplete',
      handler:
        map.EthereumThresholdSigner?.ThresholdDispatchComplete &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.ThresholdDispatchComplete!({
            ...rest,
            event,
            args: ethereumThresholdSignerThresholdDispatchComplete.parse(event.args),
          })) as EthereumThresholdSignerThresholdDispatchComplete),
    },
    {
      name: 'EthereumThresholdSigner.RetryRequested',
      handler:
        map.EthereumThresholdSigner?.RetryRequested &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.RetryRequested!({
            ...rest,
            event,
            args: ethereumThresholdSignerRetryRequested.parse(event.args),
          })) as EthereumThresholdSignerRetryRequested),
    },
    {
      name: 'EthereumThresholdSigner.FailureReportProcessed',
      handler:
        map.EthereumThresholdSigner?.FailureReportProcessed &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.FailureReportProcessed!({
            ...rest,
            event,
            args: ethereumThresholdSignerFailureReportProcessed.parse(event.args),
          })) as EthereumThresholdSignerFailureReportProcessed),
    },
    {
      name: 'EthereumThresholdSigner.SignersUnavailable',
      handler:
        map.EthereumThresholdSigner?.SignersUnavailable &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.SignersUnavailable!({
            ...rest,
            event,
            args: ethereumThresholdSignerSignersUnavailable.parse(event.args),
          })) as EthereumThresholdSignerSignersUnavailable),
    },
    {
      name: 'EthereumThresholdSigner.CurrentKeyUnavailable',
      handler:
        map.EthereumThresholdSigner?.CurrentKeyUnavailable &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.CurrentKeyUnavailable!({
            ...rest,
            event,
            args: ethereumThresholdSignerCurrentKeyUnavailable.parse(event.args),
          })) as EthereumThresholdSignerCurrentKeyUnavailable),
    },
    {
      name: 'EthereumThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler:
        map.EthereumThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.EthereumThresholdSigner!.ThresholdSignatureResponseTimeoutUpdated!({
            ...rest,
            event,
            args: ethereumThresholdSignerThresholdSignatureResponseTimeoutUpdated.parse(event.args),
          })) as EthereumThresholdSignerThresholdSignatureResponseTimeoutUpdated),
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureRequest',
      handler:
        map.PolkadotThresholdSigner?.ThresholdSignatureRequest &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.ThresholdSignatureRequest!({
            ...rest,
            event,
            args: polkadotThresholdSignerThresholdSignatureRequest.parse(event.args),
          })) as PolkadotThresholdSignerThresholdSignatureRequest),
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureFailed',
      handler:
        map.PolkadotThresholdSigner?.ThresholdSignatureFailed &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.ThresholdSignatureFailed!({
            ...rest,
            event,
            args: polkadotThresholdSignerThresholdSignatureFailed.parse(event.args),
          })) as PolkadotThresholdSignerThresholdSignatureFailed),
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureSuccess',
      handler:
        map.PolkadotThresholdSigner?.ThresholdSignatureSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.ThresholdSignatureSuccess!({
            ...rest,
            event,
            args: polkadotThresholdSignerThresholdSignatureSuccess.parse(event.args),
          })) as PolkadotThresholdSignerThresholdSignatureSuccess),
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdDispatchComplete',
      handler:
        map.PolkadotThresholdSigner?.ThresholdDispatchComplete &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.ThresholdDispatchComplete!({
            ...rest,
            event,
            args: polkadotThresholdSignerThresholdDispatchComplete.parse(event.args),
          })) as PolkadotThresholdSignerThresholdDispatchComplete),
    },
    {
      name: 'PolkadotThresholdSigner.RetryRequested',
      handler:
        map.PolkadotThresholdSigner?.RetryRequested &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.RetryRequested!({
            ...rest,
            event,
            args: polkadotThresholdSignerRetryRequested.parse(event.args),
          })) as PolkadotThresholdSignerRetryRequested),
    },
    {
      name: 'PolkadotThresholdSigner.FailureReportProcessed',
      handler:
        map.PolkadotThresholdSigner?.FailureReportProcessed &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.FailureReportProcessed!({
            ...rest,
            event,
            args: polkadotThresholdSignerFailureReportProcessed.parse(event.args),
          })) as PolkadotThresholdSignerFailureReportProcessed),
    },
    {
      name: 'PolkadotThresholdSigner.SignersUnavailable',
      handler:
        map.PolkadotThresholdSigner?.SignersUnavailable &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.SignersUnavailable!({
            ...rest,
            event,
            args: polkadotThresholdSignerSignersUnavailable.parse(event.args),
          })) as PolkadotThresholdSignerSignersUnavailable),
    },
    {
      name: 'PolkadotThresholdSigner.CurrentKeyUnavailable',
      handler:
        map.PolkadotThresholdSigner?.CurrentKeyUnavailable &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.CurrentKeyUnavailable!({
            ...rest,
            event,
            args: polkadotThresholdSignerCurrentKeyUnavailable.parse(event.args),
          })) as PolkadotThresholdSignerCurrentKeyUnavailable),
    },
    {
      name: 'PolkadotThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler:
        map.PolkadotThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.PolkadotThresholdSigner!.ThresholdSignatureResponseTimeoutUpdated!({
            ...rest,
            event,
            args: polkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated.parse(event.args),
          })) as PolkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated),
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureRequest',
      handler:
        map.BitcoinThresholdSigner?.ThresholdSignatureRequest &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.ThresholdSignatureRequest!({
            ...rest,
            event,
            args: bitcoinThresholdSignerThresholdSignatureRequest.parse(event.args),
          })) as BitcoinThresholdSignerThresholdSignatureRequest),
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureFailed',
      handler:
        map.BitcoinThresholdSigner?.ThresholdSignatureFailed &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.ThresholdSignatureFailed!({
            ...rest,
            event,
            args: bitcoinThresholdSignerThresholdSignatureFailed.parse(event.args),
          })) as BitcoinThresholdSignerThresholdSignatureFailed),
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureSuccess',
      handler:
        map.BitcoinThresholdSigner?.ThresholdSignatureSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.ThresholdSignatureSuccess!({
            ...rest,
            event,
            args: bitcoinThresholdSignerThresholdSignatureSuccess.parse(event.args),
          })) as BitcoinThresholdSignerThresholdSignatureSuccess),
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdDispatchComplete',
      handler:
        map.BitcoinThresholdSigner?.ThresholdDispatchComplete &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.ThresholdDispatchComplete!({
            ...rest,
            event,
            args: bitcoinThresholdSignerThresholdDispatchComplete.parse(event.args),
          })) as BitcoinThresholdSignerThresholdDispatchComplete),
    },
    {
      name: 'BitcoinThresholdSigner.RetryRequested',
      handler:
        map.BitcoinThresholdSigner?.RetryRequested &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.RetryRequested!({
            ...rest,
            event,
            args: bitcoinThresholdSignerRetryRequested.parse(event.args),
          })) as BitcoinThresholdSignerRetryRequested),
    },
    {
      name: 'BitcoinThresholdSigner.FailureReportProcessed',
      handler:
        map.BitcoinThresholdSigner?.FailureReportProcessed &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.FailureReportProcessed!({
            ...rest,
            event,
            args: bitcoinThresholdSignerFailureReportProcessed.parse(event.args),
          })) as BitcoinThresholdSignerFailureReportProcessed),
    },
    {
      name: 'BitcoinThresholdSigner.SignersUnavailable',
      handler:
        map.BitcoinThresholdSigner?.SignersUnavailable &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.SignersUnavailable!({
            ...rest,
            event,
            args: bitcoinThresholdSignerSignersUnavailable.parse(event.args),
          })) as BitcoinThresholdSignerSignersUnavailable),
    },
    {
      name: 'BitcoinThresholdSigner.CurrentKeyUnavailable',
      handler:
        map.BitcoinThresholdSigner?.CurrentKeyUnavailable &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.CurrentKeyUnavailable!({
            ...rest,
            event,
            args: bitcoinThresholdSignerCurrentKeyUnavailable.parse(event.args),
          })) as BitcoinThresholdSignerCurrentKeyUnavailable),
    },
    {
      name: 'BitcoinThresholdSigner.ThresholdSignatureResponseTimeoutUpdated',
      handler:
        map.BitcoinThresholdSigner?.ThresholdSignatureResponseTimeoutUpdated &&
        ((async ({ event, ...rest }) =>
          map.BitcoinThresholdSigner!.ThresholdSignatureResponseTimeoutUpdated!({
            ...rest,
            event,
            args: bitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated.parse(event.args),
          })) as BitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated),
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
      name: 'EthereumBroadcaster.BroadcastAttemptTimeout',
      handler:
        map.EthereumBroadcaster?.BroadcastAttemptTimeout &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastAttemptTimeout!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastAttemptTimeout.parse(event.args),
          })) as EthereumBroadcasterBroadcastAttemptTimeout),
    },
    {
      name: 'EthereumBroadcaster.BroadcastAborted',
      handler:
        map.EthereumBroadcaster?.BroadcastAborted &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastAborted!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastAborted.parse(event.args),
          })) as EthereumBroadcasterBroadcastAborted),
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
      name: 'EthereumBroadcaster.BroadcastCallbackExecuted',
      handler:
        map.EthereumBroadcaster?.BroadcastCallbackExecuted &&
        ((async ({ event, ...rest }) =>
          map.EthereumBroadcaster!.BroadcastCallbackExecuted!({
            ...rest,
            event,
            args: ethereumBroadcasterBroadcastCallbackExecuted.parse(event.args),
          })) as EthereumBroadcasterBroadcastCallbackExecuted),
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
      name: 'PolkadotBroadcaster.BroadcastAttemptTimeout',
      handler:
        map.PolkadotBroadcaster?.BroadcastAttemptTimeout &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastAttemptTimeout!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastAttemptTimeout.parse(event.args),
          })) as PolkadotBroadcasterBroadcastAttemptTimeout),
    },
    {
      name: 'PolkadotBroadcaster.BroadcastAborted',
      handler:
        map.PolkadotBroadcaster?.BroadcastAborted &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastAborted!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastAborted.parse(event.args),
          })) as PolkadotBroadcasterBroadcastAborted),
    },
    {
      name: 'PolkadotBroadcaster.BroadcastSuccess',
      handler:
        map.PolkadotBroadcaster?.BroadcastSuccess &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastSuccess!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastSuccess.parse(event.args),
          })) as PolkadotBroadcasterBroadcastSuccess),
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
      name: 'PolkadotBroadcaster.BroadcastCallbackExecuted',
      handler:
        map.PolkadotBroadcaster?.BroadcastCallbackExecuted &&
        ((async ({ event, ...rest }) =>
          map.PolkadotBroadcaster!.BroadcastCallbackExecuted!({
            ...rest,
            event,
            args: polkadotBroadcasterBroadcastCallbackExecuted.parse(event.args),
          })) as PolkadotBroadcasterBroadcastCallbackExecuted),
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
      name: 'BitcoinBroadcaster.BroadcastAttemptTimeout',
      handler:
        map.BitcoinBroadcaster?.BroadcastAttemptTimeout &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastAttemptTimeout!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastAttemptTimeout.parse(event.args),
          })) as BitcoinBroadcasterBroadcastAttemptTimeout),
    },
    {
      name: 'BitcoinBroadcaster.BroadcastAborted',
      handler:
        map.BitcoinBroadcaster?.BroadcastAborted &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastAborted!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastAborted.parse(event.args),
          })) as BitcoinBroadcasterBroadcastAborted),
    },
    {
      name: 'BitcoinBroadcaster.BroadcastSuccess',
      handler:
        map.BitcoinBroadcaster?.BroadcastSuccess &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastSuccess!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastSuccess.parse(event.args),
          })) as BitcoinBroadcasterBroadcastSuccess),
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
      name: 'BitcoinBroadcaster.BroadcastCallbackExecuted',
      handler:
        map.BitcoinBroadcaster?.BroadcastCallbackExecuted &&
        ((async ({ event, ...rest }) =>
          map.BitcoinBroadcaster!.BroadcastCallbackExecuted!({
            ...rest,
            event,
            args: bitcoinBroadcasterBroadcastCallbackExecuted.parse(event.args),
          })) as BitcoinBroadcasterBroadcastCallbackExecuted),
    },
    {
      name: 'Swapping.SwapDepositAddressReady',
      handler:
        map.Swapping?.SwapDepositAddressReady &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapDepositAddressReady!({
            ...rest,
            event,
            args: swappingSwapDepositAddressReady.parse(event.args),
          })) as SwappingSwapDepositAddressReady),
    },
    {
      name: 'Swapping.SwapScheduled',
      handler:
        map.Swapping?.SwapScheduled &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapScheduled!({
            ...rest,
            event,
            args: swappingSwapScheduled.parse(event.args),
          })) as SwappingSwapScheduled),
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
      name: 'Swapping.BatchSwapFailed',
      handler:
        map.Swapping?.BatchSwapFailed &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.BatchSwapFailed!({
            ...rest,
            event,
            args: swappingBatchSwapFailed.parse(event.args),
          })) as SwappingBatchSwapFailed),
    },
    {
      name: 'Swapping.CcmEgressScheduled',
      handler:
        map.Swapping?.CcmEgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.CcmEgressScheduled!({
            ...rest,
            event,
            args: swappingCcmEgressScheduled.parse(event.args),
          })) as SwappingCcmEgressScheduled),
    },
    {
      name: 'Swapping.SwapDepositAddressExpired',
      handler:
        map.Swapping?.SwapDepositAddressExpired &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapDepositAddressExpired!({
            ...rest,
            event,
            args: swappingSwapDepositAddressExpired.parse(event.args),
          })) as SwappingSwapDepositAddressExpired),
    },
    {
      name: 'Swapping.SwapTtlSet',
      handler:
        map.Swapping?.SwapTtlSet &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapTtlSet!({
            ...rest,
            event,
            args: swappingSwapTtlSet.parse(event.args),
          })) as SwappingSwapTtlSet),
    },
    {
      name: 'Swapping.CcmDepositReceived',
      handler:
        map.Swapping?.CcmDepositReceived &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.CcmDepositReceived!({
            ...rest,
            event,
            args: swappingCcmDepositReceived.parse(event.args),
          })) as SwappingCcmDepositReceived),
    },
    {
      name: 'Swapping.MinimumSwapAmountSet',
      handler:
        map.Swapping?.MinimumSwapAmountSet &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.MinimumSwapAmountSet!({
            ...rest,
            event,
            args: swappingMinimumSwapAmountSet.parse(event.args),
          })) as SwappingMinimumSwapAmountSet),
    },
    {
      name: 'Swapping.SwapAmountTooLow',
      handler:
        map.Swapping?.SwapAmountTooLow &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapAmountTooLow!({
            ...rest,
            event,
            args: swappingSwapAmountTooLow.parse(event.args),
          })) as SwappingSwapAmountTooLow),
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
      name: 'LiquidityProvider.AccountDebited',
      handler:
        map.LiquidityProvider?.AccountDebited &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.AccountDebited!({
            ...rest,
            event,
            args: liquidityProviderAccountDebited.parse(event.args),
          })) as LiquidityProviderAccountDebited),
    },
    {
      name: 'LiquidityProvider.AccountCredited',
      handler:
        map.LiquidityProvider?.AccountCredited &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.AccountCredited!({
            ...rest,
            event,
            args: liquidityProviderAccountCredited.parse(event.args),
          })) as LiquidityProviderAccountCredited),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler:
        map.LiquidityProvider?.LiquidityDepositAddressReady &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityDepositAddressReady!({
            ...rest,
            event,
            args: liquidityProviderLiquidityDepositAddressReady.parse(event.args),
          })) as LiquidityProviderLiquidityDepositAddressReady),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressExpired',
      handler:
        map.LiquidityProvider?.LiquidityDepositAddressExpired &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityDepositAddressExpired!({
            ...rest,
            event,
            args: liquidityProviderLiquidityDepositAddressExpired.parse(event.args),
          })) as LiquidityProviderLiquidityDepositAddressExpired),
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
      name: 'LiquidityProvider.LpTtlSet',
      handler:
        map.LiquidityProvider?.LpTtlSet &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LpTtlSet!({
            ...rest,
            event,
            args: liquidityProviderLpTtlSet.parse(event.args),
          })) as LiquidityProviderLpTtlSet),
    },
    {
      name: 'LiquidityProvider.EmergencyWithdrawalAddressRegistered',
      handler:
        map.LiquidityProvider?.EmergencyWithdrawalAddressRegistered &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.EmergencyWithdrawalAddressRegistered!({
            ...rest,
            event,
            args: liquidityProviderEmergencyWithdrawalAddressRegistered.parse(event.args),
          })) as LiquidityProviderEmergencyWithdrawalAddressRegistered),
    },
    {
      name: 'EthereumIngressEgress.StartWitnessing',
      handler:
        map.EthereumIngressEgress?.StartWitnessing &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.StartWitnessing!({
            ...rest,
            event,
            args: ethereumIngressEgressStartWitnessing.parse(event.args),
          })) as EthereumIngressEgressStartWitnessing),
    },
    {
      name: 'EthereumIngressEgress.StopWitnessing',
      handler:
        map.EthereumIngressEgress?.StopWitnessing &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.StopWitnessing!({
            ...rest,
            event,
            args: ethereumIngressEgressStopWitnessing.parse(event.args),
          })) as EthereumIngressEgressStopWitnessing),
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
      name: 'EthereumIngressEgress.AssetEgressStatusChanged',
      handler:
        map.EthereumIngressEgress?.AssetEgressStatusChanged &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.AssetEgressStatusChanged!({
            ...rest,
            event,
            args: ethereumIngressEgressAssetEgressStatusChanged.parse(event.args),
          })) as EthereumIngressEgressAssetEgressStatusChanged),
    },
    {
      name: 'EthereumIngressEgress.EgressScheduled',
      handler:
        map.EthereumIngressEgress?.EgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.EgressScheduled!({
            ...rest,
            event,
            args: ethereumIngressEgressEgressScheduled.parse(event.args),
          })) as EthereumIngressEgressEgressScheduled),
    },
    {
      name: 'EthereumIngressEgress.CcmBroadcastRequested',
      handler:
        map.EthereumIngressEgress?.CcmBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.CcmBroadcastRequested!({
            ...rest,
            event,
            args: ethereumIngressEgressCcmBroadcastRequested.parse(event.args),
          })) as EthereumIngressEgressCcmBroadcastRequested),
    },
    {
      name: 'EthereumIngressEgress.CcmEgressInvalid',
      handler:
        map.EthereumIngressEgress?.CcmEgressInvalid &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.CcmEgressInvalid!({
            ...rest,
            event,
            args: ethereumIngressEgressCcmEgressInvalid.parse(event.args),
          })) as EthereumIngressEgressCcmEgressInvalid),
    },
    {
      name: 'EthereumIngressEgress.DepositFetchesScheduled',
      handler:
        map.EthereumIngressEgress?.DepositFetchesScheduled &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.DepositFetchesScheduled!({
            ...rest,
            event,
            args: ethereumIngressEgressDepositFetchesScheduled.parse(event.args),
          })) as EthereumIngressEgressDepositFetchesScheduled),
    },
    {
      name: 'EthereumIngressEgress.BatchBroadcastRequested',
      handler:
        map.EthereumIngressEgress?.BatchBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.BatchBroadcastRequested!({
            ...rest,
            event,
            args: ethereumIngressEgressBatchBroadcastRequested.parse(event.args),
          })) as EthereumIngressEgressBatchBroadcastRequested),
    },
    {
      name: 'EthereumIngressEgress.MinimumDepositSet',
      handler:
        map.EthereumIngressEgress?.MinimumDepositSet &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.MinimumDepositSet!({
            ...rest,
            event,
            args: ethereumIngressEgressMinimumDepositSet.parse(event.args),
          })) as EthereumIngressEgressMinimumDepositSet),
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
      name: 'EthereumIngressEgress.VaultTransferFailed',
      handler:
        map.EthereumIngressEgress?.VaultTransferFailed &&
        ((async ({ event, ...rest }) =>
          map.EthereumIngressEgress!.VaultTransferFailed!({
            ...rest,
            event,
            args: ethereumIngressEgressVaultTransferFailed.parse(event.args),
          })) as EthereumIngressEgressVaultTransferFailed),
    },
    {
      name: 'PolkadotIngressEgress.StartWitnessing',
      handler:
        map.PolkadotIngressEgress?.StartWitnessing &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.StartWitnessing!({
            ...rest,
            event,
            args: polkadotIngressEgressStartWitnessing.parse(event.args),
          })) as PolkadotIngressEgressStartWitnessing),
    },
    {
      name: 'PolkadotIngressEgress.StopWitnessing',
      handler:
        map.PolkadotIngressEgress?.StopWitnessing &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.StopWitnessing!({
            ...rest,
            event,
            args: polkadotIngressEgressStopWitnessing.parse(event.args),
          })) as PolkadotIngressEgressStopWitnessing),
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
      name: 'PolkadotIngressEgress.AssetEgressStatusChanged',
      handler:
        map.PolkadotIngressEgress?.AssetEgressStatusChanged &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.AssetEgressStatusChanged!({
            ...rest,
            event,
            args: polkadotIngressEgressAssetEgressStatusChanged.parse(event.args),
          })) as PolkadotIngressEgressAssetEgressStatusChanged),
    },
    {
      name: 'PolkadotIngressEgress.EgressScheduled',
      handler:
        map.PolkadotIngressEgress?.EgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.EgressScheduled!({
            ...rest,
            event,
            args: polkadotIngressEgressEgressScheduled.parse(event.args),
          })) as PolkadotIngressEgressEgressScheduled),
    },
    {
      name: 'PolkadotIngressEgress.CcmBroadcastRequested',
      handler:
        map.PolkadotIngressEgress?.CcmBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.CcmBroadcastRequested!({
            ...rest,
            event,
            args: polkadotIngressEgressCcmBroadcastRequested.parse(event.args),
          })) as PolkadotIngressEgressCcmBroadcastRequested),
    },
    {
      name: 'PolkadotIngressEgress.CcmEgressInvalid',
      handler:
        map.PolkadotIngressEgress?.CcmEgressInvalid &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.CcmEgressInvalid!({
            ...rest,
            event,
            args: polkadotIngressEgressCcmEgressInvalid.parse(event.args),
          })) as PolkadotIngressEgressCcmEgressInvalid),
    },
    {
      name: 'PolkadotIngressEgress.DepositFetchesScheduled',
      handler:
        map.PolkadotIngressEgress?.DepositFetchesScheduled &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.DepositFetchesScheduled!({
            ...rest,
            event,
            args: polkadotIngressEgressDepositFetchesScheduled.parse(event.args),
          })) as PolkadotIngressEgressDepositFetchesScheduled),
    },
    {
      name: 'PolkadotIngressEgress.BatchBroadcastRequested',
      handler:
        map.PolkadotIngressEgress?.BatchBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.BatchBroadcastRequested!({
            ...rest,
            event,
            args: polkadotIngressEgressBatchBroadcastRequested.parse(event.args),
          })) as PolkadotIngressEgressBatchBroadcastRequested),
    },
    {
      name: 'PolkadotIngressEgress.MinimumDepositSet',
      handler:
        map.PolkadotIngressEgress?.MinimumDepositSet &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.MinimumDepositSet!({
            ...rest,
            event,
            args: polkadotIngressEgressMinimumDepositSet.parse(event.args),
          })) as PolkadotIngressEgressMinimumDepositSet),
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
      name: 'PolkadotIngressEgress.VaultTransferFailed',
      handler:
        map.PolkadotIngressEgress?.VaultTransferFailed &&
        ((async ({ event, ...rest }) =>
          map.PolkadotIngressEgress!.VaultTransferFailed!({
            ...rest,
            event,
            args: polkadotIngressEgressVaultTransferFailed.parse(event.args),
          })) as PolkadotIngressEgressVaultTransferFailed),
    },
    {
      name: 'BitcoinIngressEgress.StartWitnessing',
      handler:
        map.BitcoinIngressEgress?.StartWitnessing &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.StartWitnessing!({
            ...rest,
            event,
            args: bitcoinIngressEgressStartWitnessing.parse(event.args),
          })) as BitcoinIngressEgressStartWitnessing),
    },
    {
      name: 'BitcoinIngressEgress.StopWitnessing',
      handler:
        map.BitcoinIngressEgress?.StopWitnessing &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.StopWitnessing!({
            ...rest,
            event,
            args: bitcoinIngressEgressStopWitnessing.parse(event.args),
          })) as BitcoinIngressEgressStopWitnessing),
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
      name: 'BitcoinIngressEgress.AssetEgressStatusChanged',
      handler:
        map.BitcoinIngressEgress?.AssetEgressStatusChanged &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.AssetEgressStatusChanged!({
            ...rest,
            event,
            args: bitcoinIngressEgressAssetEgressStatusChanged.parse(event.args),
          })) as BitcoinIngressEgressAssetEgressStatusChanged),
    },
    {
      name: 'BitcoinIngressEgress.EgressScheduled',
      handler:
        map.BitcoinIngressEgress?.EgressScheduled &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.EgressScheduled!({
            ...rest,
            event,
            args: bitcoinIngressEgressEgressScheduled.parse(event.args),
          })) as BitcoinIngressEgressEgressScheduled),
    },
    {
      name: 'BitcoinIngressEgress.CcmBroadcastRequested',
      handler:
        map.BitcoinIngressEgress?.CcmBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.CcmBroadcastRequested!({
            ...rest,
            event,
            args: bitcoinIngressEgressCcmBroadcastRequested.parse(event.args),
          })) as BitcoinIngressEgressCcmBroadcastRequested),
    },
    {
      name: 'BitcoinIngressEgress.CcmEgressInvalid',
      handler:
        map.BitcoinIngressEgress?.CcmEgressInvalid &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.CcmEgressInvalid!({
            ...rest,
            event,
            args: bitcoinIngressEgressCcmEgressInvalid.parse(event.args),
          })) as BitcoinIngressEgressCcmEgressInvalid),
    },
    {
      name: 'BitcoinIngressEgress.DepositFetchesScheduled',
      handler:
        map.BitcoinIngressEgress?.DepositFetchesScheduled &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.DepositFetchesScheduled!({
            ...rest,
            event,
            args: bitcoinIngressEgressDepositFetchesScheduled.parse(event.args),
          })) as BitcoinIngressEgressDepositFetchesScheduled),
    },
    {
      name: 'BitcoinIngressEgress.BatchBroadcastRequested',
      handler:
        map.BitcoinIngressEgress?.BatchBroadcastRequested &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.BatchBroadcastRequested!({
            ...rest,
            event,
            args: bitcoinIngressEgressBatchBroadcastRequested.parse(event.args),
          })) as BitcoinIngressEgressBatchBroadcastRequested),
    },
    {
      name: 'BitcoinIngressEgress.MinimumDepositSet',
      handler:
        map.BitcoinIngressEgress?.MinimumDepositSet &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.MinimumDepositSet!({
            ...rest,
            event,
            args: bitcoinIngressEgressMinimumDepositSet.parse(event.args),
          })) as BitcoinIngressEgressMinimumDepositSet),
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
      name: 'BitcoinIngressEgress.VaultTransferFailed',
      handler:
        map.BitcoinIngressEgress?.VaultTransferFailed &&
        ((async ({ event, ...rest }) =>
          map.BitcoinIngressEgress!.VaultTransferFailed!({
            ...rest,
            event,
            args: bitcoinIngressEgressVaultTransferFailed.parse(event.args),
          })) as BitcoinIngressEgressVaultTransferFailed),
    },
    {
      name: 'LiquidityPools.UpdatedBuyInterval',
      handler:
        map.LiquidityPools?.UpdatedBuyInterval &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.UpdatedBuyInterval!({
            ...rest,
            event,
            args: liquidityPoolsUpdatedBuyInterval.parse(event.args),
          })) as LiquidityPoolsUpdatedBuyInterval),
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
      name: 'LiquidityPools.RangeOrderMinted',
      handler:
        map.LiquidityPools?.RangeOrderMinted &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.RangeOrderMinted!({
            ...rest,
            event,
            args: liquidityPoolsRangeOrderMinted.parse(event.args),
          })) as LiquidityPoolsRangeOrderMinted),
    },
    {
      name: 'LiquidityPools.RangeOrderBurned',
      handler:
        map.LiquidityPools?.RangeOrderBurned &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.RangeOrderBurned!({
            ...rest,
            event,
            args: liquidityPoolsRangeOrderBurned.parse(event.args),
          })) as LiquidityPoolsRangeOrderBurned),
    },
    {
      name: 'LiquidityPools.LimitOrderMinted',
      handler:
        map.LiquidityPools?.LimitOrderMinted &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.LimitOrderMinted!({
            ...rest,
            event,
            args: liquidityPoolsLimitOrderMinted.parse(event.args),
          })) as LiquidityPoolsLimitOrderMinted),
    },
    {
      name: 'LiquidityPools.LimitOrderBurned',
      handler:
        map.LiquidityPools?.LimitOrderBurned &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.LimitOrderBurned!({
            ...rest,
            event,
            args: liquidityPoolsLimitOrderBurned.parse(event.args),
          })) as LiquidityPoolsLimitOrderBurned),
    },
    {
      name: 'LiquidityPools.NetworkFeeTaken',
      handler:
        map.LiquidityPools?.NetworkFeeTaken &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.NetworkFeeTaken!({
            ...rest,
            event,
            args: liquidityPoolsNetworkFeeTaken.parse(event.args),
          })) as LiquidityPoolsNetworkFeeTaken),
    },
    {
      name: 'LiquidityPools.AssetSwapped',
      handler:
        map.LiquidityPools?.AssetSwapped &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.AssetSwapped!({
            ...rest,
            event,
            args: liquidityPoolsAssetSwapped.parse(event.args),
          })) as LiquidityPoolsAssetSwapped),
    },
    {
      name: 'LiquidityPools.LiquidityFeeUpdated',
      handler:
        map.LiquidityPools?.LiquidityFeeUpdated &&
        ((async ({ event, ...rest }) =>
          map.LiquidityPools!.LiquidityFeeUpdated!({
            ...rest,
            event,
            args: liquidityPoolsLiquidityFeeUpdated.parse(event.args),
          })) as LiquidityPoolsLiquidityFeeUpdated),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
