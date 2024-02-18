import { z } from 'zod';
import { accountId } from '../common';

export const ethereumVaultKeygenSuccessReported = accountId;

export type EthereumVaultKeygenSuccessReportedArgs = z.output<
  typeof ethereumVaultKeygenSuccessReported
>;
