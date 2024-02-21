import { z } from 'zod';
import { accountId } from '../common';

export const polkadotVaultKeygenFailureReported = accountId;

export type PolkadotVaultKeygenFailureReportedArgs = z.output<
  typeof polkadotVaultKeygenFailureReported
>;
