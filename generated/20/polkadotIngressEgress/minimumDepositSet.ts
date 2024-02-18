import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset, numberOrHex } from '../common';

export const polkadotIngressEgressMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsDotAsset,
  minimumDeposit: numberOrHex,
});

export type PolkadotIngressEgressMinimumDepositSetArgs = z.output<
  typeof polkadotIngressEgressMinimumDepositSet
>;
