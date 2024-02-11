import { z } from 'zod';

const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

const utf8String = hexString.transform((v) =>
  Buffer.from(v.slice(2), 'hex').toString('utf8'),
);

const cfChainsAddressEncodedAddress = z.union([
  z.object({ __kind: z.literal('Eth'), value: hexString }),
  z.object({ __kind: z.literal('Dot'), value: hexString }),
  z.object({ __kind: z.literal('Btc'), value: utf8String }),
]);

const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

const cfPrimitivesChainsAssetsAnyAsset = simpleEnum([
  'Eth',
  'Flip',
  'Usdc',
  'Dot',
  'Btc',
]);

const numericString = z
  .string()
  .refine((v) => /^\d+$/.test(v), { message: 'Invalid numeric string' });

const numberOrHex = z
  .union([z.number(), hexString, numericString])
  .transform((n) => BigInt(n));

export const swappingEventSwapDepositAddressReady = z.object({
  depositAddress: cfChainsAddressEncodedAddress,
  destinationAddress: cfChainsAddressEncodedAddress,
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  channelId: numberOrHex,
  brokerCommissionRate: z.number(),
  channelMetadata: z
    .object({
      message: utf8String,
      gasBudget: numberOrHex,
      cfParameters: utf8String,
    })
    .nullish(),
  sourceChainExpiryBlock: numberOrHex,
  boostFee: z.number(),
});

export type SwappingEventSwapDepositAddressReady = z.output<
  typeof swappingEventSwapDepositAddressReady
>;
