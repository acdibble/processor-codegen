import { z } from 'zod';
import {
  cfChainsBtcScriptPubkey,
  cfPrimitivesChainsAssetsBtcAsset,
  numberOrHex,
} from '../common';

export const bitcoinIngressEgressVaultTransferFailed = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  destinationAddress: cfChainsBtcScriptPubkey,
});

export type BitcoinIngressEgressVaultTransferFailedArgs = z.output<
  typeof bitcoinIngressEgressVaultTransferFailed
>;
