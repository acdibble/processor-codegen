import { z } from 'zod';
import { cfChainsBtcAggKey } from '../common';

export const bitcoinVaultKeygenVerificationSuccess = z.object({
  aggKey: cfChainsBtcAggKey,
});

export type BitcoinVaultKeygenVerificationSuccessArgs = z.output<
  typeof bitcoinVaultKeygenVerificationSuccess
>;
