import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset, cfPrimitivesSwapLeg, numberOrHex } from '../common';

export const swappingBatchSwapFailed = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  direction: cfPrimitivesSwapLeg,
  amount: numberOrHex,
});

export type SwappingBatchSwapFailedArgs = z.output<typeof swappingBatchSwapFailed>;
