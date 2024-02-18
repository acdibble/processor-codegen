import { z } from 'zod';
import { accountId } from '../common';

export const polkadotVaultKeygenSuccessReported = accountId;

export type PolkadotVaultKeygenSuccessReportedArgs = z.output<
  typeof polkadotVaultKeygenSuccessReported
>;
