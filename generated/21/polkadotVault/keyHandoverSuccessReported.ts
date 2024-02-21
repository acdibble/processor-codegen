import { z } from 'zod';
import { accountId } from '../common';

export const polkadotVaultKeyHandoverSuccessReported = accountId;

export type PolkadotVaultKeyHandoverSuccessReportedArgs = z.output<
  typeof polkadotVaultKeyHandoverSuccessReported
>;
