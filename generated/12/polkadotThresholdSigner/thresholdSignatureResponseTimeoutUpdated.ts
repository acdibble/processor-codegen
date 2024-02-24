import { z } from 'zod';

export const polkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated = z.object({
  newTimeout: z.number(),
});

export type PolkadotThresholdSignerThresholdSignatureResponseTimeoutUpdatedArgs = z.output<
  typeof polkadotThresholdSignerThresholdSignatureResponseTimeoutUpdated
>;
