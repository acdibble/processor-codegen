import { z } from 'zod';
import { cfPrimitivesChainsAssetsDotAsset, numberOrHex } from '../common';

export const polkadotIngressEgressDepositFetchesScheduled = z.object({
  channelId: numberOrHex,
  asset: cfPrimitivesChainsAssetsDotAsset,
});

export type PolkadotIngressEgressDepositFetchesScheduledArgs = z.output<
  typeof polkadotIngressEgressDepositFetchesScheduled
>;
