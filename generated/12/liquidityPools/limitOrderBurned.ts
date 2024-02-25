import { z } from 'zod';
import {
  accountId,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
  palletCfPoolsPalletOrder,
} from '../common';

export const liquidityPoolsLimitOrderBurned = z.object({
  lp: accountId,
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  order: palletCfPoolsPalletOrder,
  priceAsTick: z.number(),
  assetsCredited: numberOrHex,
  collectedFees: numberOrHex,
  swappedLiquidity: numberOrHex,
});
