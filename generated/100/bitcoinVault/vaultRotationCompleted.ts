import { z } from 'zod';

export const bitcoinVaultVaultRotationCompleted = z.null();

export type BitcoinVaultVaultRotationCompletedArgs = z.output<
  typeof bitcoinVaultVaultRotationCompleted
>;
