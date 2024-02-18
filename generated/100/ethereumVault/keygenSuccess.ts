import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeygenSuccess = numberOrHex;

export type EthereumVaultKeygenSuccessArgs = z.output<
  typeof ethereumVaultKeygenSuccess
>;
