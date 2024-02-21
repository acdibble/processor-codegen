import { z } from 'zod';
import { cfPrimitivesChainsAssetsBtcAsset, numberOrHex } from '../common';

export const bitcoinIngressEgressMinimumDepositSet = z.object({
  asset: cfPrimitivesChainsAssetsBtcAsset,
  minimumDeposit: numberOrHex,
});

export type BitcoinIngressEgressMinimumDepositSetArgs = z.output<
  typeof bitcoinIngressEgressMinimumDepositSet
>;
