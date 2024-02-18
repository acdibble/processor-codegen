import { z } from 'zod';
import { accountId } from '../common';

export const fundingStartedBidding = z.object({ accountId });

export type FundingStartedBiddingArgs = z.output<typeof fundingStartedBidding>;
