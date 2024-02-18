import { z } from 'zod';

export const ethereumVaultKeygenResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type EthereumVaultKeygenResponseTimeoutUpdatedArgs = z.output<
  typeof ethereumVaultKeygenResponseTimeoutUpdated
>;
