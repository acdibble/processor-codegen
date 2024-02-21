import { z } from 'zod';
import { accountId } from '../common';

export const ethereumVaultKeygenFailureReported = accountId;

export type EthereumVaultKeygenFailureReportedArgs = z.output<
  typeof ethereumVaultKeygenFailureReported
>;
