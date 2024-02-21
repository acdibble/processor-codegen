import { z } from 'zod';
import { cfChainsEvmAggKey } from '../common';

export const ethereumVaultAwaitingGovernanceActivation = z.object({
  newPublicKey: cfChainsEvmAggKey,
});

export type EthereumVaultAwaitingGovernanceActivationArgs = z.output<
  typeof ethereumVaultAwaitingGovernanceActivation
>;
