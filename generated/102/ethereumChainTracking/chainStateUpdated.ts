import { z } from 'zod';
import { cfChainsChainStateEthereum } from '../common';

export const ethereumChainTrackingChainStateUpdated = z.object({
  newChainState: cfChainsChainStateEthereum,
});

export type EthereumChainTrackingChainStateUpdatedArgs = z.output<
  typeof ethereumChainTrackingChainStateUpdated
>;
