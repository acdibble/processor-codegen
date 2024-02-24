import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeyHandoverFailure = z.object({ ceremonyId: numberOrHex });

export type PolkadotVaultKeyHandoverFailureArgs = z.output<typeof polkadotVaultKeyHandoverFailure>;
