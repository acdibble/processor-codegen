import { z } from 'zod';
import { cfChainsEthAggKey } from '../common';

export const ethereumVaultKeyHandoverVerificationSuccess = z.object({
  aggKey: cfChainsEthAggKey,
});

export type EthereumVaultKeyHandoverVerificationSuccessArgs = z.output<
  typeof ethereumVaultKeyHandoverVerificationSuccess
>;
