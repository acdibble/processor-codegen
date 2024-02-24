import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const fundingRedemptionRequested = z.object({
  accountId,
  amount: numberOrHex,
  broadcastId: z.number(),
  expiryTime: numberOrHex,
});

export type FundingRedemptionRequestedArgs = z.output<typeof fundingRedemptionRequested>;
