import { z } from 'zod';
import { cfChainsEthAggKey } from '../common';

export const ethereumVaultAwaitingGovernanceActivation = z.object({
  newPublicKey: cfChainsEthAggKey,
});
