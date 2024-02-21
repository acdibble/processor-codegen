import { z } from 'zod';
import {
  cfPrimitivesChainsAssetsDotAsset,
  hexString,
  numberOrHex,
  palletCfPolkadotIngressEgressPalletDepositAction,
} from '../common';

export const polkadotIngressEgressDepositReceived = z.object({
  depositAddress: hexString,
  asset: cfPrimitivesChainsAssetsDotAsset,
  amount: numberOrHex,
  ingressFee: numberOrHex,
  action: palletCfPolkadotIngressEgressPalletDepositAction,
});

export type PolkadotIngressEgressDepositReceivedArgs = z.output<
  typeof polkadotIngressEgressDepositReceived
>;
