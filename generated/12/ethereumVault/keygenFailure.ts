import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeygenFailure = numberOrHex;

export type EthereumVaultKeygenFailureArgs = z.output<typeof ethereumVaultKeygenFailure>;
