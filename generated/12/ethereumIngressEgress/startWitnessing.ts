import { z } from 'zod';
import { cfPrimitivesChainsAssetsEthAsset, hexString, numberOrHex } from '../common';

export const ethereumIngressEgressStartWitnessing = z.object({
  depositAddress: hexString,
  sourceAsset: cfPrimitivesChainsAssetsEthAsset,
  openedAt: numberOrHex,
});
