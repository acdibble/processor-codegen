import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset, hexString, numberOrHex } from '../common';

export const polkadotIngressEgressVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type PolkadotIngressEgressVaultTransferFailedArgs = z.output<
  typeof polkadotIngressEgressVaultTransferFailed
>;
