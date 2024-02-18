import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsAnyAsset,
  cfPrimitivesChainsForeignChain,
  numberOrHex,
} from '../common';

export const swappingSwapEgressScheduled = z.object({
  swapId: numberOrHex,
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amount: numberOrHex,
});

export type SwappingSwapEgressScheduledArgs = z.output<
  typeof swappingSwapEgressScheduled
>;