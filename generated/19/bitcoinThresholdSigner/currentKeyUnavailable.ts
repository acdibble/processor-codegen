import { z } from 'zod';

export const bitcoinThresholdSignerCurrentKeyUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type BitcoinThresholdSignerCurrentKeyUnavailableArgs = z.output<
  typeof bitcoinThresholdSignerCurrentKeyUnavailable
>;
