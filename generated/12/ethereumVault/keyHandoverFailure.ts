import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeyHandoverFailure = z.object({ ceremonyId: numberOrHex });

export type EthereumVaultKeyHandoverFailureArgs = z.output<typeof ethereumVaultKeyHandoverFailure>;
