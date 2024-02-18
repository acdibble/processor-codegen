import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset } from '../common';

export const polkadotIngressEgressAssetEgressStatusChanged = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  disabled: z.boolean(),
});

export type PolkadotIngressEgressAssetEgressStatusChangedArgs = z.output<
  typeof polkadotIngressEgressAssetEgressStatusChanged
>;
