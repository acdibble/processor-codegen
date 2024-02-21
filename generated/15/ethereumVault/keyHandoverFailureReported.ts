import { z } from 'zod';
import { accountId } from '../common';

export const ethereumVaultKeyHandoverFailureReported = accountId;

export type EthereumVaultKeyHandoverFailureReportedArgs = z.output<
  typeof ethereumVaultKeyHandoverFailureReported
>;
