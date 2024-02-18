import { z } from 'zod';
import { accountId } from '../common';

export const bitcoinVaultKeygenFailureReported = accountId;

export type BitcoinVaultKeygenFailureReportedArgs = z.output<
  typeof bitcoinVaultKeygenFailureReported
>;
