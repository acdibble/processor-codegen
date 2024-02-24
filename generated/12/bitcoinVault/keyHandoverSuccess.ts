import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeyHandoverSuccess = z.object({ ceremonyId: numberOrHex });

export type BitcoinVaultKeyHandoverSuccessArgs = z.output<typeof bitcoinVaultKeyHandoverSuccess>;
