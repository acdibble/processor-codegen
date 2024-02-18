import { z } from 'zod';
import { cfChainsEvmAggKey } from '../common';

export const ethereumVaultKeyHandoverVerificationSuccess = z.object({
  aggKey: cfChainsEvmAggKey,
});

export type EthereumVaultKeyHandoverVerificationSuccessArgs = z.output<
  typeof ethereumVaultKeyHandoverVerificationSuccess
>;
