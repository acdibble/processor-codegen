import { z } from 'zod';

export const bitcoinVaultNoKeyHandover = z.null();

export type BitcoinVaultNoKeyHandoverArgs = z.output<
  typeof bitcoinVaultNoKeyHandover
>;
