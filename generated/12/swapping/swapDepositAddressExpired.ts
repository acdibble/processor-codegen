import { z } from 'zod';
import { cfChainsAddressEncodedAddress, numberOrHex } from '../common';

export const swappingSwapDepositAddressExpired = z.object({
  depositAddress: cfChainsAddressEncodedAddress,
  channelId: numberOrHex,
});
