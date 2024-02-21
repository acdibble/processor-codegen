import { z } from 'zod';
import {
  cfChainsAddressEncodedAddress,
  cfChainsCcmChannelMetadata,
  cfPrimitivesChainsAssetsAnyAsset,
  numberOrHex,
} from '../common';

export const swappingSwapDepositAddressReady = z.object({
  depositAddress: cfChainsAddressEncodedAddress,
  destinationAddress: cfChainsAddressEncodedAddress,
  expiryBlock: z.number(),
  sourceAsset: cfPrimitivesChainsAssetsAnyAsset,
  destinationAsset: cfPrimitivesChainsAssetsAnyAsset,
  channelId: numberOrHex,
  brokerCommissionRate: z.number(),
  channelMetadata: cfChainsCcmChannelMetadata.nullish(),
});

export type SwappingSwapDepositAddressReadyArgs = z.output<
  typeof swappingSwapDepositAddressReady
>;
