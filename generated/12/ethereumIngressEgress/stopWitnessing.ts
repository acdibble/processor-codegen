import { z } from 'zod';
import { cfPrimitivesChainsAssetsEthAsset, hexString } from '../common';

export const ethereumIngressEgressStopWitnessing = z.object({
  depositAddress: hexString,
  sourceAsset: cfPrimitivesChainsAssetsEthAsset,
});

export type EthereumIngressEgressStopWitnessingArgs = z.output<
  typeof ethereumIngressEgressStopWitnessing
>;
