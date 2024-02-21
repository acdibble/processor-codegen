import { z } from 'zod';
import { accountId } from '../common';

export const polkadotVaultKeyHandoverFailureReported = accountId;

export type PolkadotVaultKeyHandoverFailureReportedArgs = z.output<
  typeof polkadotVaultKeyHandoverFailureReported
>;
