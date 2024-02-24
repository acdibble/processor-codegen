import { z } from 'zod';
import { cfChainsBtcScriptPubkey, cfPrimitivesChainsAssetsBtcAsset, numberOrHex } from '../common';

export const bitcoinIngressEgressStartWitnessing = z.object({
  depositAddress: cfChainsBtcScriptPubkey,
  sourceAsset: cfPrimitivesChainsAssetsBtcAsset,
  openedAt: numberOrHex,
});

export type BitcoinIngressEgressStartWitnessingArgs = z.output<
  typeof bitcoinIngressEgressStartWitnessing
>;
