import { z } from 'zod';

export const ethereumBroadcasterBroadcastRetryScheduled = z.object({
  broadcastId: z.number(),
  retryBlock: z.number(),
});

export type EthereumBroadcasterBroadcastRetryScheduledArgs = z.output<
  typeof ethereumBroadcasterBroadcastRetryScheduled
>;
