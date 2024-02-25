import { z } from 'zod';
import {
  accountId,
  cfAmmCommonSideMap,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
} from '../common';

export const liquidityPoolsRangeOrderMinted = z.object({
  lp: accountId,
  unstableAsset: cfPrimitivesChainsAssetsAnyAsset,
  priceRangeInTicks: z.object({ start: z.number(), end: z.number() }),
  liquidity: numberOrHex,
  assetsDebited: cfAmmCommonSideMap,
  collectedFees: cfAmmCommonSideMap,
});
