import { z } from 'zod';

const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

const spRuntimeModuleError = z.object({ index: z.number(), error: hexString });

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

const dispatchResult = z.union([
  z.object({ __kind: z.literal('Ok') }),
  z.object({ __kind: z.literal('Err'), value: spRuntimeDispatchError }),
]);

export const bitcoinThresholdSignerThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});
