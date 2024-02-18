import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinThresholdSignerRetryRequested = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type BitcoinThresholdSignerRetryRequestedArgs = z.output<
  typeof bitcoinThresholdSignerRetryRequested
>;
