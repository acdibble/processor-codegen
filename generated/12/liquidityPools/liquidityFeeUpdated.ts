import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset } from '../common';

export const liquidityPoolsLiquidityFeeUpdated = z.object({
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  feeHundredthPips: z.number(),
});
