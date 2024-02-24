import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeygenFailure = numberOrHex;

export type PolkadotVaultKeygenFailureArgs = z.output<typeof polkadotVaultKeygenFailure>;
