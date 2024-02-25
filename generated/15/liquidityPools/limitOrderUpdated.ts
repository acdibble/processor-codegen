import { z } from 'zod';
import {
  accountId,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
  palletCfPoolsPalletIncreaseOrDecrease,
} from '../common';

export const liquidityPoolsLimitOrderUpdated = z.object({
  lp: accountId,
  sellAsset: cfPrimitivesChainsAssetsAnyAsset,
  buyAsset: cfPrimitivesChainsAssetsAnyAsset,
  id: numberOrHex,
  tick: z.number(),
  increaseOrDecrease: palletCfPoolsPalletIncreaseOrDecrease,
  amountDelta: numberOrHex,
  amountTotal: numberOrHex,
  collectedFees: numberOrHex,
  boughtAmount: numberOrHex,
});
