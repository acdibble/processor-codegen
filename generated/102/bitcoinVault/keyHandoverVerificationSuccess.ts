import { z } from 'zod';
import { cfChainsBtcAggKey } from '../common';

export const bitcoinVaultKeyHandoverVerificationSuccess = z.object({
  aggKey: cfChainsBtcAggKey,
});

export type BitcoinVaultKeyHandoverVerificationSuccessArgs = z.output<
  typeof bitcoinVaultKeyHandoverVerificationSuccess
>;
