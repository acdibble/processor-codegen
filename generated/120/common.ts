import { z } from 'zod';
import { encodeAddress } from '@polkadot/util-crypto';

export const cfChainsBtcConsolidationParameters = z.object({
  consolidationThreshold: z.number(),
  consolidationSize: z.number(),
});

export const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

export const accountId = z
  .union([
    hexString,
    z
      .string()
      .regex(/^[0-9a-f]+$/)
      .transform((v) => `0x${v}`),
  ])
  .transform((value) => encodeAddress(value, 2112));

export const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

export const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

export const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(values: T) =>
  z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

export const cfPrimitivesChainsForeignChain = simpleEnum(['Ethereum', 'Polkadot', 'Bitcoin']);

export const spRuntimeModuleError = z.object({ index: z.number(), error: hexString });

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

export const spArithmeticArithmeticError = simpleEnum(['Underflow', 'Overflow', 'DivisionByZero']);

export const spRuntimeTransactionalError = simpleEnum(['LimitReached', 'NoLayer']);

export const spRuntimeDispatchError = z.union([
  z.object({ __kind: z.literal('Other') }),
  z.object({ __kind: z.literal('CannotLookup') }),
  z.object({ __kind: z.literal('BadOrigin') }),
  z.object({ __kind: z.literal('Module'), value: spRuntimeModuleError }),
  z.object({ __kind: z.literal('ConsumerRemaining') }),
  z.object({ __kind: z.literal('NoProviders') }),
  z.object({ __kind: z.literal('TooManyConsumers') }),
  z.object({ __kind: z.literal('Token'), value: spRuntimeTokenError }),
  z.object({ __kind: z.literal('Arithmetic'), value: spArithmeticArithmeticError }),
  z.object({ __kind: z.literal('Transactional'), value: spRuntimeTransactionalError }),
  z.object({ __kind: z.literal('Exhausted') }),
  z.object({ __kind: z.literal('Corruption') }),
  z.object({ __kind: z.literal('Unavailable') }),
  z.object({ __kind: z.literal('RootNotAllowed') }),
]);

export const cfChainsBtcBitcoinFeeInfo = z.object({ satsPerKilobyte: numberOrHex });

export const cfChainsBtcBitcoinTrackedData = z.object({ btcFeeInfo: cfChainsBtcBitcoinFeeInfo });

export const cfChainsChainStateBitcoin = z.object({
  blockHeight: numberOrHex,
  trackedData: cfChainsBtcBitcoinTrackedData,
});

export const cfChainsEvmTransaction = z.object({
  chainId: numberOrHex,
  maxPriorityFeePerGas: numberOrHex.nullish(),
  maxFeePerGas: numberOrHex.nullish(),
  gasLimit: numberOrHex.nullish(),
  contract: hexString,
  value: numberOrHex,
  data: hexString,
});

export const cfChainsEvmSchnorrVerificationComponents = z.object({
  s: hexString,
  kTimesGAddress: hexString,
});

export const cfChainsDotPolkadotTransactionData = z.object({ encodedExtrinsic: hexString });

export const cfChainsBtcBitcoinTransactionData = z.object({ encodedTransaction: hexString });

export const cfPrimitivesChainsAssetsAnyAsset = simpleEnum(['Eth', 'Flip', 'Usdc', 'Dot', 'Btc']);

export const cfChainsAddressEncodedAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: hexString }),
]);

export const palletCfSwappingCcmFailReason = simpleEnum([
  'UnsupportedForTargetChain',
  'InsufficientDepositAmount',
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

export const cfChainsCcmChannelMetadata = z.object({
  message: hexString,
  gasBudget: numberOrHex,
  cfParameters: hexString,
});

export const cfChainsCcmDepositMetadata = z.object({
  sourceChain: cfPrimitivesChainsForeignChain,
  sourceAddress: cfChainsAddressForeignChainAddress.nullish(),
  channelMetadata: cfChainsCcmChannelMetadata,
});

export const cfPrimitivesChainsAssetsEthAsset = simpleEnum(['Eth', 'Flip', 'Usdc']);

export const palletCfEthereumIngressEgressPalletDepositAction = z.union([
  z.object({ __kind: z.literal('Swap'), value: z.object({ swapId: numberOrHex }) }),
  z.object({ __kind: z.literal('LiquidityProvision'), value: z.object({ lpAccount: accountId }) }),
  z.object({
    __kind: z.literal('CcmTransfer'),
    value: z.object({ principalSwapId: numberOrHex.nullish(), gasSwapId: numberOrHex.nullish() }),
  }),
  z.object({ __kind: z.literal('NoAction') }),
]);

export const palletCfEthereumIngressEgressDepositIgnoredReason = simpleEnum([
  'BelowMinimumDeposit',
  'NotEnoughToPayFees',
]);

export const cfPrimitivesChainsAssetsDotAsset = simpleEnum(['Dot']);

export const palletCfPolkadotIngressEgressPalletDepositAction = z.union([
  z.object({ __kind: z.literal('Swap'), value: z.object({ swapId: numberOrHex }) }),
  z.object({ __kind: z.literal('LiquidityProvision'), value: z.object({ lpAccount: accountId }) }),
  z.object({
    __kind: z.literal('CcmTransfer'),
    value: z.object({ principalSwapId: numberOrHex.nullish(), gasSwapId: numberOrHex.nullish() }),
  }),
  z.object({ __kind: z.literal('NoAction') }),
]);

export const palletCfPolkadotIngressEgressDepositIgnoredReason = simpleEnum([
  'BelowMinimumDeposit',
  'NotEnoughToPayFees',
]);

export const cfPrimitivesChainsAssetsBtcAsset = simpleEnum(['Btc']);

export const cfChainsBtcUtxoId = z.object({ txId: hexString, vout: z.number() });

export const palletCfBitcoinIngressEgressPalletDepositAction = z.union([
  z.object({ __kind: z.literal('Swap'), value: z.object({ swapId: numberOrHex }) }),
  z.object({ __kind: z.literal('LiquidityProvision'), value: z.object({ lpAccount: accountId }) }),
  z.object({
    __kind: z.literal('CcmTransfer'),
    value: z.object({ principalSwapId: numberOrHex.nullish(), gasSwapId: numberOrHex.nullish() }),
  }),
  z.object({ __kind: z.literal('NoAction') }),
]);

export const palletCfBitcoinIngressEgressDepositIgnoredReason = simpleEnum([
  'BelowMinimumDeposit',
  'NotEnoughToPayFees',
]);
