import { z } from 'zod';

export const ethereumVaultVaultRotationAborted = z.null();

export type EthereumVaultVaultRotationAbortedArgs = z.output<
  typeof ethereumVaultVaultRotationAborted
>;
