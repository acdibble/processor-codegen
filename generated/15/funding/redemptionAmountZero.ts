import { z } from 'zod';
import { accountId } from '../common';

export const fundingRedemptionAmountZero = z.object({ accountId });

export type FundingRedemptionAmountZeroArgs = z.output<
  typeof fundingRedemptionAmountZero
>;
