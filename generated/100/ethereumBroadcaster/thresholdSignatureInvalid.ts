import { z } from 'zod';

export const ethereumBroadcasterThresholdSignatureInvalid = z.object({
  broadcastId: z.number(),
  retryBroadcastId: z.number(),
});

export type EthereumBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof ethereumBroadcasterThresholdSignatureInvalid
>;
