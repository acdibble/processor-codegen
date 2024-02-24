import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeygenVerificationFailure = z.object({ keygenCeremonyId: numberOrHex });

export type PolkadotVaultKeygenVerificationFailureArgs = z.output<
  typeof polkadotVaultKeygenVerificationFailure
>;
