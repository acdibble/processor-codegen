import { z } from 'zod';
import { accountId } from '../common';

export const fundingStoppedBidding = z.object({ accountId });

export type FundingStoppedBiddingArgs = z.output<typeof fundingStoppedBidding>;
