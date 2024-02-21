import { z } from 'zod';

export const bitcoinVaultVaultRotationAborted = z.null();

export type BitcoinVaultVaultRotationAbortedArgs = z.output<
  typeof bitcoinVaultVaultRotationAborted
>;
