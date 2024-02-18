import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeygenResponseTimeout = numberOrHex;

export type PolkadotVaultKeygenResponseTimeoutArgs = z.output<
  typeof polkadotVaultKeygenResponseTimeout
>;
