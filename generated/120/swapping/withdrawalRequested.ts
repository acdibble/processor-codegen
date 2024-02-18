import { z } from 'zod';
import {
  cfChainsAddressEncodedAddress,
  cfPrimitivesChainsForeignChain,
  numberOrHex,
} from '../common';

export const swappingWithdrawalRequested = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  egressAmount: numberOrHex,
  egressFee: numberOrHex,
  destinationAddress: cfChainsAddressEncodedAddress,
});

export type SwappingWithdrawalRequestedArgs = z.output<
  typeof swappingWithdrawalRequested
>;
