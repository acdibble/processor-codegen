import { z } from 'zod';
import { numberOrHex } from '../common';

export const fundingMinimumFundingUpdated = z.object({ newMinimum: numberOrHex });

export type FundingMinimumFundingUpdatedArgs = z.output<typeof fundingMinimumFundingUpdated>;
