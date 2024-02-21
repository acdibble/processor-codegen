import { z } from 'zod';
import { encodeAddress } from '@polkadot/util-crypto';

export const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

export const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

export const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

export const spWeightsWeightV2Weight = z.object({
  refTime: numberOrHex,
  proofSize: numberOrHex,
});

export const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

export const frameSupportDispatchDispatchClass = simpleEnum([
  'Normal',
  'Operational',
  'Mandatory',
]);

export const frameSupportDispatchPays = simpleEnum(['Yes', 'No']);

export const frameSupportDispatchDispatchInfo = z.object({
  weight: spWeightsWeightV2Weight,
  class: frameSupportDispatchDispatchClass,
  paysFee: frameSupportDispatchPays,
});

export const spRuntimeModuleError = z.object({
  index: z.number(),
  error: hexString,
});

export const spRuntimeTokenError = simpleEnum([
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

export const spArithmeticArithmeticError = simpleEnum([
  'Underflow',
  'Overflow',
  'DivisionByZero',
]);

export const spRuntimeTransactionalError = simpleEnum([
  'LimitReached',
  'NoLayer',
]);

export const spRuntimeDispatchError = z.union([
  z.object({ __kind: z.literal('Other') }),
  z.object({ __kind: z.literal('CannotLookup') }),
  z.object({ __kind: z.literal('BadOrigin') }),
  z.object({ __kind: z.literal('Module'), value: spRuntimeModuleError }),
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

export const accountId = z
  .union([
    hexString,
    z
      .string()
      .regex(/^[0-9a-f]+$/)
      .transform((v) => `0x${v}`),
  ])
  .transform((value) => encodeAddress(value, 2112));

export const cfPrimitivesChainsAssetsEthAsset = simpleEnum([
  'Eth',
  'Flip',
  'Usdc',
]);

export const palletCfEmissionsPalletSafeMode = z.object({
  emissionsSyncEnabled: z.boolean(),
});

export const palletCfFundingPalletSafeMode = z.object({
  redeemEnabled: z.boolean(),
  startBiddingEnabled: z.boolean(),
  stopBiddingEnabled: z.boolean(),
});

export const palletCfSwappingPalletSafeMode = z.object({
  swapsEnabled: z.boolean(),
  withdrawalsEnabled: z.boolean(),
  depositsEnabled: z.boolean(),
  brokerRegistrationEnabled: z.boolean(),
});

export const palletCfLpPalletSafeMode = z.object({
  depositEnabled: z.boolean(),
  withdrawalEnabled: z.boolean(),
});

export const palletCfValidatorPalletSafeMode = z.object({
  authorityRotationEnabled: z.boolean(),
});

export const palletCfPoolsPalletSafeMode = z.object({
  mintingRangeOrderEnabled: z.boolean(),
  mintingLimitOrderEnabled: z.boolean(),
  burningRangeOrderEnabled: z.boolean(),
  burningLimitOrderEnabled: z.boolean(),
});

export const palletCfReputationPalletSafeMode = z.object({
  reportingEnabled: z.boolean(),
});

export const palletCfVaultsPalletSafeMode = z.object({
  slashingEnabled: z.boolean(),
});

export const palletCfWitnesserPalletSafeMode = z.object({
  witnessCallsEnabled: z.boolean(),
});

export const stateChainRuntimeChainflipInnerRuntimeSafeMode = z.object({
  emissions: palletCfEmissionsPalletSafeMode,
  funding: palletCfFundingPalletSafeMode,
  swapping: palletCfSwappingPalletSafeMode,
  liquidityProvider: palletCfLpPalletSafeMode,
  validator: palletCfValidatorPalletSafeMode,
  pools: palletCfPoolsPalletSafeMode,
  reputation: palletCfReputationPalletSafeMode,
  vault: palletCfVaultsPalletSafeMode,
  witnesser: palletCfWitnesserPalletSafeMode,
});

export const palletCfEnvironmentSafeModeUpdate = z.union([
  z.object({ __kind: z.literal('CodeRed') }),
  z.object({ __kind: z.literal('CodeGreen') }),
  z.object({
    __kind: z.literal('CodeAmber'),
    value: stateChainRuntimeChainflipInnerRuntimeSafeMode,
  }),
]);

export const cfPrimitivesSemVer = z.object({
  major: z.number(),
  minor: z.number(),
  patch: z.number(),
});

export const palletCfFlipImbalancesInternalSource = z.union([
  z.object({ __kind: z.literal('Account'), value: accountId }),
  z.object({ __kind: z.literal('Reserve'), value: hexString }),
  z.object({ __kind: z.literal('PendingRedemption'), value: accountId }),
]);

export const palletCfFlipImbalancesImbalanceSource = z.union([
  z.object({ __kind: z.literal('External') }),
  z.object({
    __kind: z.literal('Internal'),
    value: palletCfFlipImbalancesInternalSource,
  }),
  z.object({ __kind: z.literal('Emissions') }),
]);

export const cfPrimitivesAccountRole = simpleEnum([
  'None',
  'Validator',
  'LiquidityProvider',
  'Broker',
]);

export const palletCfValidatorRotationState = z.object({
  primaryCandidates: z.array(accountId),
  secondaryCandidates: z.array(accountId),
  banned: z.array(accountId),
  bond: numberOrHex,
  newEpochIndex: z.number(),
});

export const palletCfValidatorRotationPhase = z.union([
  z.object({ __kind: z.literal('Idle') }),
  z.object({
    __kind: z.literal('KeygensInProgress'),
    value: palletCfValidatorRotationState,
  }),
  z.object({
    __kind: z.literal('KeyHandoversInProgress'),
    value: palletCfValidatorRotationState,
  }),
  z.object({
    __kind: z.literal('ActivatingKeys'),
    value: palletCfValidatorRotationState,
  }),
  z.object({
    __kind: z.literal('NewKeysActivated'),
    value: palletCfValidatorRotationState,
  }),
  z.object({
    __kind: z.literal('SessionRotating'),
    value: palletCfValidatorRotationState,
  }),
]);

export const palletCfValidatorAuctionResolverSetSizeParameters = z.object({
  minSize: z.number(),
  maxSize: z.number(),
  maxExpansion: z.number(),
});

export const palletCfValidatorPalletConfigUpdate = z.union([
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
      parameters: palletCfValidatorAuctionResolverSetSizeParameters,
    }),
  }),
]);

export const cfPrimitivesChainsForeignChain = simpleEnum([
  'Ethereum',
  'Polkadot',
  'Bitcoin',
]);

export const palletCfTokenholderGovernanceProposal = z.union([
  z.object({
    __kind: z.literal('SetGovernanceKey'),
    value: z.tuple([cfPrimitivesChainsForeignChain, hexString]),
  }),
  z.object({ __kind: z.literal('SetCommunityKey'), value: hexString }),
]);

export const stateChainRuntimeChainflipOffencesOffence = simpleEnum([
  'ParticipateSigningFailed',
  'ParticipateKeygenFailed',
  'FailedToBroadcastTransaction',
  'MissedAuthorshipSlot',
  'MissedHeartbeat',
  'GrandpaEquivocation',
  'ParticipateKeyHandoverFailed',
]);

export const palletCfReputationPenalty = z.object({
  reputation: z.number(),
  suspension: z.number(),
});

export const cfChainsEthEthereumTrackedData = z.object({
  baseFee: numberOrHex,
  priorityFee: numberOrHex,
});

export const cfChainsChainStateEthereum = z.object({
  blockHeight: numberOrHex,
  trackedData: cfChainsEthEthereumTrackedData,
});

export const cfChainsDotRuntimeVersion = z.object({
  specVersion: z.number(),
  transactionVersion: z.number(),
});

export const cfChainsDotPolkadotTrackedData = z.object({
  medianTip: numberOrHex,
  runtimeVersion: cfChainsDotRuntimeVersion,
});

export const cfChainsChainStatePolkadot = z.object({
  blockHeight: z.number(),
  trackedData: cfChainsDotPolkadotTrackedData,
});

export const cfChainsBtcBitcoinFeeInfo = z.object({
  feePerInputUtxo: numberOrHex,
  feePerOutputUtxo: numberOrHex,
  minFeeRequiredPerTx: numberOrHex,
});

export const cfChainsBtcBitcoinTrackedData = z.object({
  btcFeeInfo: cfChainsBtcBitcoinFeeInfo,
});

export const cfChainsChainStateBitcoin = z.object({
  blockHeight: numberOrHex,
  trackedData: cfChainsBtcBitcoinTrackedData,
});

export const cfChainsEthParityBit = simpleEnum(['Odd', 'Even']);

export const cfChainsEthAggKey = z.object({
  pubKeyX: hexString,
  pubKeyYParity: cfChainsEthParityBit,
});

export const cfChainsBtcAggKey = z.object({
  previous: hexString.nullish(),
  current: hexString,
});

export const dispatchResult = z.union([
  z.object({ __kind: z.literal('Ok') }),
  z.object({ __kind: z.literal('Err'), value: spRuntimeDispatchError }),
]);

export const cfChainsBtcPreviousOrCurrent = simpleEnum(['Previous', 'Current']);

export const palletCfBroadcastBroadcastAttemptId = z.object({
  broadcastId: z.number(),
  attemptCount: z.number(),
});

export const cfChainsEthTransaction = z.object({
  chainId: numberOrHex,
  maxPriorityFeePerGas: numberOrHex.nullish(),
  maxFeePerGas: numberOrHex.nullish(),
  gasLimit: numberOrHex.nullish(),
  contract: hexString,
  value: numberOrHex,
  data: hexString,
});

export const cfChainsEthSchnorrVerificationComponents = z.object({
  s: hexString,
  kTimesGAddress: hexString,
});

export const cfChainsDotPolkadotTransactionData = z.object({
  encodedExtrinsic: hexString,
});

export const cfChainsBtcBitcoinTransactionData = z.object({
  encodedTransaction: hexString,
});

export const cfChainsAddressEncodedAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: hexString }),
]);

export const cfPrimitivesChainsAssetsAnyAsset = simpleEnum([
  'Eth',
  'Flip',
  'Usdc',
  'Dot',
  'Btc',
]);

export const cfChainsCcmChannelMetadata = z.object({
  message: hexString,
  gasBudget: numberOrHex,
  cfParameters: hexString,
});

export const cfChainsSwapOrigin = z.union([
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

export const cfChainsBtcScriptPubkey = z.union([
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

export const cfChainsAddressForeignChainAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: cfChainsBtcScriptPubkey }),
]);

export const palletCfSwappingSwapType = z.union([
  z.object({
    __kind: z.literal('Swap'),
    value: cfChainsAddressForeignChainAddress,
  }),
  z.object({ __kind: z.literal('CcmPrincipal'), value: numberOrHex }),
  z.object({ __kind: z.literal('CcmGas'), value: numberOrHex }),
]);

export const cfPrimitivesSwapLeg = simpleEnum(['FromStable', 'ToStable']);

export const cfChainsCcmDepositMetadata = z.object({
  sourceChain: cfPrimitivesChainsForeignChain,
  sourceAddress: cfChainsAddressForeignChainAddress.nullish(),
  channelMetadata: cfChainsCcmChannelMetadata,
});

export const palletCfSwappingCcmFailReason = simpleEnum([
  'UnsupportedForTargetChain',
  'InsufficientDepositAmount',
  'PrincipalSwapAmountTooLow',
]);

export const cfPrimitivesChainsAssetsDotAsset = simpleEnum(['Dot']);

export const cfPrimitivesChainsAssetsBtcAsset = simpleEnum(['Btc']);

export const cfChainsBtcUtxoId = z.object({
  txId: hexString,
  vout: z.number(),
});

export const cfAmmCommonSideMap = z.object({
  zero: numberOrHex,
  one: numberOrHex,
});

export const palletCfPoolsPalletOrder = simpleEnum(['Buy', 'Sell']);
