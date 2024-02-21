import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeygenFailure = numberOrHex;

export type BitcoinVaultKeygenFailureArgs = z.output<
  typeof bitcoinVaultKeygenFailure
>;
