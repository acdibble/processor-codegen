import { z } from 'zod';

export const ethereumThresholdSignerThresholdSignatureResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type EthereumThresholdSignerThresholdSignatureResponseTimeoutUpdatedArgs = z.output<
  typeof ethereumThresholdSignerThresholdSignatureResponseTimeoutUpdated
>;
