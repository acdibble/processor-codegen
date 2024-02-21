import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsEthAsset,
  hexString,
  numberOrHex,
  palletCfEthereumIngressEgressDepositIgnoredReason,
} from '../common';

export const ethereumIngressEgressDepositIgnored = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
  reason: palletCfEthereumIngressEgressDepositIgnoredReason,
});

export type EthereumIngressEgressDepositIgnoredArgs = z.output<
  typeof ethereumIngressEgressDepositIgnored
>;
