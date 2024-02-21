import { z } from 'zod';
import { accountId } from '../common';

export const bitcoinVaultKeyHandoverSuccessReported = accountId;

export type BitcoinVaultKeyHandoverSuccessReportedArgs = z.output<
  typeof bitcoinVaultKeyHandoverSuccessReported
>;
