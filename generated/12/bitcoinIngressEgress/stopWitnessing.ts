import { z } from 'zod';
import { cfChainsBtcScriptPubkey, cfPrimitivesChainsAssetsBtcAsset } from '../common';

export const bitcoinIngressEgressStopWitnessing = z.object({
  depositAddress: cfChainsBtcScriptPubkey,
  sourceAsset: cfPrimitivesChainsAssetsBtcAsset,
});

export type BitcoinIngressEgressStopWitnessingArgs = z.output<
  typeof bitcoinIngressEgressStopWitnessing
>;
