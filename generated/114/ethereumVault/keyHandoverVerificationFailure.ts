import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumVaultKeyHandoverVerificationFailure = z.object({
  handoverCeremonyId: numberOrHex,
});

export type EthereumVaultKeyHandoverVerificationFailureArgs = z.output<
  typeof ethereumVaultKeyHandoverVerificationFailure
>;
