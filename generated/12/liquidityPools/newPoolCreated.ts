import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset, numberOrHex } from '../common';

export const liquidityPoolsNewPoolCreated = z.object({
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  feeHundredthPips: z.number(),
  initialSqrtPrice: numberOrHex,
});

export type LiquidityPoolsNewPoolCreatedArgs = z.output<typeof liquidityPoolsNewPoolCreated>;
