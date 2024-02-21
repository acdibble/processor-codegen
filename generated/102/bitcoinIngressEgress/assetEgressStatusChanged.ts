import { z } from 'zod';
import { cfPrimitivesChainsAssetsBtcAsset } from '../common';

export const bitcoinIngressEgressAssetEgressStatusChanged = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  disabled: z.boolean(),
});

export type BitcoinIngressEgressAssetEgressStatusChangedArgs = z.output<
  typeof bitcoinIngressEgressAssetEgressStatusChanged
>;
