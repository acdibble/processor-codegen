import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeyHandoverFailure = z.object({
  ceremonyId: numberOrHex,
});

export type BitcoinVaultKeyHandoverFailureArgs = z.output<
  typeof bitcoinVaultKeyHandoverFailure
>;
