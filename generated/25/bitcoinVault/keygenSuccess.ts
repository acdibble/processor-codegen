import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeygenSuccess = numberOrHex;

export type BitcoinVaultKeygenSuccessArgs = z.output<
  typeof bitcoinVaultKeygenSuccess
>;
