import { z } from 'zod';

export const bitcoinThresholdSignerSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type BitcoinThresholdSignerSignersUnavailableArgs = z.output<
  typeof bitcoinThresholdSignerSignersUnavailable
>;
