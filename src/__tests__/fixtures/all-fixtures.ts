import { z } from 'zod';
import { encodeAddress } from '@polkadot/util-crypto';

const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

const accountId = z
  .union([
    hexString,
    z
      .string()
      .regex(/^[0-9a-f]+$/)
      .transform((v) => `0x${v}`),
  ])
  .transform((value) => encodeAddress(value, 2112));

const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

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

const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

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

const dispatchResult = z.union([
  z.object({ __kind: z.literal('Ok') }),
  z.object({ __kind: z.literal('Err'), value: spRuntimeDispatchError }),
]);

export const bitcoinThresholdSignerEventThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type BitcoinThresholdSignerEventThresholdDispatchCompleteArgs = z.output<
  typeof bitcoinThresholdSignerEventThresholdDispatchComplete
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
  boostFee: z.number(),
});

export type SwappingEventSwapDepositAddressReadyArgs = z.output<
  typeof swappingEventSwapDepositAddressReady
>;
