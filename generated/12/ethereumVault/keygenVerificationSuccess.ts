import { z } from 'zod';
import { cfChainsEthAggKey } from '../common';

export const ethereumVaultKeygenVerificationSuccess = z.object({
  aggKey: cfChainsEthAggKey,
});

export type EthereumVaultKeygenVerificationSuccessArgs = z.output<
  typeof ethereumVaultKeygenVerificationSuccess
>;
