import { z } from 'zod';
import { cfPrimitivesChainsAssetsEthAsset, numberOrHex } from '../common';

export const ethereumIngressEgressMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsEthAsset,
  minimumDeposit: numberOrHex,
});

export type EthereumIngressEgressMinimumDepositSetArgs = z.output<
  typeof ethereumIngressEgressMinimumDepositSet
>;
