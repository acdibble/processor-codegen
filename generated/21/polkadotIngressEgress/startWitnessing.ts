import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset, hexString } from '../common';

export const polkadotIngressEgressStartWitnessing = z.object({
  depositAddress: hexString,
  sourceAsset: cfPrimitivesChainsAssetsDotAsset,
  openedAt: z.number(),
});

export type PolkadotIngressEgressStartWitnessingArgs = z.output<
  typeof polkadotIngressEgressStartWitnessing
>;
