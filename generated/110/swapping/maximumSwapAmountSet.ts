import { z } from 'zod';
import { cfPrimitivesChainsAssetsAnyAsset, numberOrHex } from '../common';

export const swappingMaximumSwapAmountSet = z.object({
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex.nullish(),
});

export type SwappingMaximumSwapAmountSetArgs = z.output<
  typeof swappingMaximumSwapAmountSet
>;
