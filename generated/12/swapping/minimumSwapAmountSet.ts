import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset, numberOrHex } from '../common';

export const swappingMinimumSwapAmountSet = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
});

export type SwappingMinimumSwapAmountSetArgs = z.output<typeof swappingMinimumSwapAmountSet>;
