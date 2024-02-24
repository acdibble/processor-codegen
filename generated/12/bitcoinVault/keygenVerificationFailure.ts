import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinVaultKeygenVerificationFailure = z.object({ keygenCeremonyId: numberOrHex });

export type BitcoinVaultKeygenVerificationFailureArgs = z.output<
  typeof bitcoinVaultKeygenVerificationFailure
>;
