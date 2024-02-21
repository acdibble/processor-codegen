import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeygenResponseTimeout = numberOrHex;

export type BitcoinVaultKeygenResponseTimeoutArgs = z.output<
  typeof bitcoinVaultKeygenResponseTimeout
>;
