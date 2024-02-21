import { z } from 'zod';
import {
  accountId,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
  palletCfPoolsPalletOrder,
} from '../common';

export const liquidityPoolsLimitOrderMinted = z.object({
  lp: accountId,
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  order: palletCfPoolsPalletOrder,
  priceAsTick: z.number(),
  assetsDebited: numberOrHex,
  collectedFees: numberOrHex,
  swappedLiquidity: numberOrHex,
});

export type LiquidityPoolsLimitOrderMintedArgs = z.output<
  typeof liquidityPoolsLimitOrderMinted
>;
