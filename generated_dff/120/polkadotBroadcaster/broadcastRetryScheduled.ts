import { z } from 'zod';

export const polkadotBroadcasterBroadcastRetryScheduled = z.object({
  broadcastId: z.number(),
  retryBlock: z.number(),
});

export type PolkadotBroadcasterBroadcastRetryScheduledArgs = z.output<
  typeof polkadotBroadcasterBroadcastRetryScheduled
>;
