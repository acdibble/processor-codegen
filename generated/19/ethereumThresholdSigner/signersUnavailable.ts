import { z } from 'zod';

export const ethereumThresholdSignerSignersUnavailable = z.object({
  requestId: z.number(),
  attemptCount: z.number(),
});

export type EthereumThresholdSignerSignersUnavailableArgs = z.output<
  typeof ethereumThresholdSignerSignersUnavailable
>;
