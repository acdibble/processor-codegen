import { z } from 'zod';
import {
  cfChainsBtcScriptPubkey,
  cfChainsBtcUtxoId,
  cfPrimitivesChainsAssetsBtcAsset,
  numberOrHex,
  palletCfBitcoinIngressEgressPalletDepositAction,
} from '../common';

export const bitcoinIngressEgressDepositReceived = z.object({
  depositAddress: cfChainsBtcScriptPubkey,
  asset: cfPrimitivesChainsAssetsBtcAsset,
  amount: numberOrHex,
  depositDetails: cfChainsBtcUtxoId,
  ingressFee: numberOrHex,
  action: palletCfBitcoinIngressEgressPalletDepositAction,
});

export type BitcoinIngressEgressDepositReceivedArgs = z.output<
  typeof bitcoinIngressEgressDepositReceived
>;
