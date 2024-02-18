import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeygenSuccess = numberOrHex;

export type PolkadotVaultKeygenSuccessArgs = z.output<
  typeof polkadotVaultKeygenSuccess
>;
