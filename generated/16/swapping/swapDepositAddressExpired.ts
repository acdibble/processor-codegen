import { z } from 'zod';
import { cfChainsAddressEncodedAddress, numberOrHex } from '../common';

export const swappingSwapDepositAddressExpired = z.object({
  depositAddress: cfChainsAddressEncodedAddress,
  channelId: numberOrHex,
});

export type SwappingSwapDepositAddressExpiredArgs = z.output<
  typeof swappingSwapDepositAddressExpired
>;
