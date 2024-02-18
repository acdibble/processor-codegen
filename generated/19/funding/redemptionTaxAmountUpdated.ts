import { z } from 'zod';
import { numberOrHex } from '../common';

export const fundingRedemptionTaxAmountUpdated = z.object({
  amount: numberOrHex,
});

export type FundingRedemptionTaxAmountUpdatedArgs = z.output<
  typeof fundingRedemptionTaxAmountUpdated
>;
