import { z } from 'zod';

export const bitcoinVaultKeygenResponseTimeoutUpdated = z.object({ newTimeout: z.number() });

export type BitcoinVaultKeygenResponseTimeoutUpdatedArgs = z.output<
  typeof bitcoinVaultKeygenResponseTimeoutUpdated
>;
