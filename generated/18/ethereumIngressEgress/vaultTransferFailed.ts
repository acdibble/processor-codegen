import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsEthAsset,
  hexString,
  numberOrHex,
} from '../common';

export const ethereumIngressEgressVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
  destinationAddress: hexString,
});

export type EthereumIngressEgressVaultTransferFailedArgs = z.output<
  typeof ethereumIngressEgressVaultTransferFailed
>;
