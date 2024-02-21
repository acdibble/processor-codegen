import { z } from 'zod';
import { cfChainsEvmAggKey } from '../common';

export const ethereumVaultKeygenVerificationSuccess = z.object({
  aggKey: cfChainsEvmAggKey,
});

export type EthereumVaultKeygenVerificationSuccessArgs = z.output<
  typeof ethereumVaultKeygenVerificationSuccess
>;
