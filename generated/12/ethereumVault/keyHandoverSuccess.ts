import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeyHandoverSuccess = z.object({ ceremonyId: numberOrHex });

export type EthereumVaultKeyHandoverSuccessArgs = z.output<typeof ethereumVaultKeyHandoverSuccess>;
