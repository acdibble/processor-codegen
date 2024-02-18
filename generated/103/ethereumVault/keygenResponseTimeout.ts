import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeygenResponseTimeout = numberOrHex;

export type EthereumVaultKeygenResponseTimeoutArgs = z.output<
  typeof ethereumVaultKeygenResponseTimeout
>;
