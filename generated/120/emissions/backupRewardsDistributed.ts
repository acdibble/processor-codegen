import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const emissionsBackupRewardsDistributed = z.object({
  accountId,
  amount: numberOrHex,
});

export type EmissionsBackupRewardsDistributedArgs = z.output<
  typeof emissionsBackupRewardsDistributed
>;
