import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeyHandoverVerificationFailure = z.object({
  handoverCeremonyId: numberOrHex,
});

export type PolkadotVaultKeyHandoverVerificationFailureArgs = z.output<
  typeof polkadotVaultKeyHandoverVerificationFailure
>;
