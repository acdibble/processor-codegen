import { z } from 'zod';

export const polkadotThresholdSignerSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type PolkadotThresholdSignerSignersUnavailableArgs = z.output<
  typeof polkadotThresholdSignerSignersUnavailable
>;
