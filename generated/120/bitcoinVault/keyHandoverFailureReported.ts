import { z } from 'zod';
import { accountId } from '../common';

export const bitcoinVaultKeyHandoverFailureReported = accountId;

export type BitcoinVaultKeyHandoverFailureReportedArgs = z.output<
  typeof bitcoinVaultKeyHandoverFailureReported
>;
