import { z } from 'zod';
import { cfChainsAddressEncodedAddress } from '../common';

export const liquidityProviderLiquidityDepositAddressExpired = z.object({
  address: cfChainsAddressEncodedAddress,
});
