import { z } from 'zod';
import { accountId } from '../common';

export const bitcoinVaultKeygenSuccessReported = accountId;

export type BitcoinVaultKeygenSuccessReportedArgs = z.output<
  typeof bitcoinVaultKeygenSuccessReported
>;
