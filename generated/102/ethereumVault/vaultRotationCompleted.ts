import { z } from 'zod';

export const ethereumVaultVaultRotationCompleted = z.null();

export type EthereumVaultVaultRotationCompletedArgs = z.output<
  typeof ethereumVaultVaultRotationCompleted
>;
