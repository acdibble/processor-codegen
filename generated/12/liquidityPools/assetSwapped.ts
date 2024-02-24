import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset, numberOrHex } from '../common';

export const liquidityPoolsAssetSwapped = z.object({
  from: cfPrimitivesChainsAssetsAnyAsset,
  to: cfPrimitivesChainsAssetsAnyAsset,
  inputAmount: numberOrHex,
  outputAmount: numberOrHex,
});

export type LiquidityPoolsAssetSwappedArgs = z.output<typeof liquidityPoolsAssetSwapped>;
