import { z } from 'zod';
import { cfPrimitivesChainsAssetsEthAsset, numberOrHex } from '../common';

export const ethereumIngressEgressDepositFetchesScheduled = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsEthAsset,
});

export type EthereumIngressEgressDepositFetchesScheduledArgs = z.output<
  typeof ethereumIngressEgressDepositFetchesScheduled
>;
