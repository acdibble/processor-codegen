import { z } from 'zod';
import { cfChainsChainStateBitcoin } from '../common';

export const bitcoinChainTrackingChainStateUpdated = z.object({
  newChainState: cfChainsChainStateBitcoin,
});

export type BitcoinChainTrackingChainStateUpdatedArgs = z.output<
  typeof bitcoinChainTrackingChainStateUpdated
>;
