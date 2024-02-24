import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const fundingRedemptionSettled = z.tuple([accountId, numberOrHex]);

export type FundingRedemptionSettledArgs = z.output<typeof fundingRedemptionSettled>;
