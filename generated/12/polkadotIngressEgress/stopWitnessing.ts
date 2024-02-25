import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset, hexString } from '../common';

export const polkadotIngressEgressStopWitnessing = z.object({
  depositAddress: hexString,
  sourceAsset: cfPrimitivesChainsAssetsDotAsset,
});
