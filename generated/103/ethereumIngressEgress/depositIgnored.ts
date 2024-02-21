import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsEthAsset,
  hexString,
  numberOrHex,
} from '../common';

export const ethereumIngressEgressDepositIgnored = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsEthAsset,
  amount: numberOrHex,
});

export type EthereumIngressEgressDepositIgnoredArgs = z.output<
  typeof ethereumIngressEgressDepositIgnored
>;
