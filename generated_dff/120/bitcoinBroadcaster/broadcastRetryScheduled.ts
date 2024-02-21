import { z } from 'zod';

export const bitcoinBroadcasterBroadcastRetryScheduled = z.object({
  broadcastId: z.number(),
  retryBlock: z.number(),
});

export type BitcoinBroadcasterBroadcastRetryScheduledArgs = z.output<
  typeof bitcoinBroadcasterBroadcastRetryScheduled
>;
