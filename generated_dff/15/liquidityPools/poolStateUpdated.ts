import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset } from '../common';

export const liquidityPoolsPoolStateUpdated = z.object({
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  enabled: z.boolean(),
});

export type LiquidityPoolsPoolStateUpdatedArgs = z.output<
  typeof liquidityPoolsPoolStateUpdated
>;
