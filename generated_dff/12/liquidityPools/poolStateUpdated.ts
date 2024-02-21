import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset } from '../common';

export const liquidityPoolsPoolStateUpdated = z.object({
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  enabled: z.boolean(),
});

export type LiquidityPoolsPoolStateUpdatedArgs = z.output<
  typeof liquidityPoolsPoolStateUpdated
>;
