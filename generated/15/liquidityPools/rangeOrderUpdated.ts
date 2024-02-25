import { z } from 'zod';
import {
  accountId,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
  palletCfPoolsAssetsMap,
  palletCfPoolsPalletIncreaseOrDecrease,
} from '../common';

export const liquidityPoolsRangeOrderUpdated = z.object({
  lp: accountId,
  baseAsset: cfPrimitivesChainsAssetsAnyAsset,
  pairAsset: cfPrimitivesChainsAssetsAnyAsset,
  id: numberOrHex,
  tickRange: z.object({ start: z.number(), end: z.number() }),
  increaseOrDecrease: palletCfPoolsPalletIncreaseOrDecrease,
  liquidityDelta: numberOrHex,
  liquidityTotal: numberOrHex,
  assetsDelta: palletCfPoolsAssetsMap,
  collectedFees: palletCfPoolsAssetsMap,
});
