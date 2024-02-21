import { z } from 'zod';

export const ethereumVaultNoKeyHandover = z.null();

export type EthereumVaultNoKeyHandoverArgs = z.output<
  typeof ethereumVaultNoKeyHandover
>;
