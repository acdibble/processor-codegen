import { z } from 'zod';
import { cfChainsAddressEncodedAddress, numberOrHex } from '../common';

export const liquidityProviderLiquidityDepositAddressReady = z.object({
  channelId: numberOrHex,
  depositAddress: cfChainsAddressEncodedAddress,
  expiryBlock: z.number(),
});

export type LiquidityProviderLiquidityDepositAddressReadyArgs = z.output<
  typeof liquidityProviderLiquidityDepositAddressReady
>;
