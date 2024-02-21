import { z } from 'zod';
import {
  accountId,
  cfChainsAddressForeignChainAddress,
  cfPrimitivesChainsForeignChain,
} from '../common';

export const liquidityProviderEmergencyWithdrawalAddressRegistered = z.object({
  accountId,
  chain: cfPrimitivesChainsForeignChain,
  address: cfChainsAddressForeignChainAddress,
});

export type LiquidityProviderEmergencyWithdrawalAddressRegisteredArgs =
  z.output<typeof liquidityProviderEmergencyWithdrawalAddressRegistered>;
