import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsDotAsset,
  hexString,
  numberOrHex,
  palletCfPolkadotIngressEgressDepositIgnoredReason,
} from '../common';

export const polkadotIngressEgressDepositIgnored = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
  reason: palletCfPolkadotIngressEgressDepositIgnoredReason,
});

export type PolkadotIngressEgressDepositIgnoredArgs = z.output<
  typeof polkadotIngressEgressDepositIgnored
>;
