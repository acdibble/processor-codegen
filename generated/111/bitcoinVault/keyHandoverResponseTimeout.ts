import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeyHandoverResponseTimeout = z.object({
  ceremonyId: numberOrHex,
});

export type BitcoinVaultKeyHandoverResponseTimeoutArgs = z.output<
  typeof bitcoinVaultKeyHandoverResponseTimeout
>;
