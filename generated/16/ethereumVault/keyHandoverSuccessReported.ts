import { z } from 'zod';
import { accountId } from '../common';

export const ethereumVaultKeyHandoverSuccessReported = accountId;

export type EthereumVaultKeyHandoverSuccessReportedArgs = z.output<
  typeof ethereumVaultKeyHandoverSuccessReported
>;
