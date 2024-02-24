import { z } from 'zod';
import { accountId, hexString, numberOrHex } from '../common';

export const fundingFailedFundingAttempt = z.object({
  accountId,
  withdrawalAddress: hexString,
  amount: numberOrHex,
});

export type FundingFailedFundingAttemptArgs = z.output<typeof fundingFailedFundingAttempt>;
