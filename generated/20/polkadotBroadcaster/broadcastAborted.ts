import { z } from 'zod';

export const polkadotBroadcasterBroadcastAborted = z.object({
  broadcastId: z.number(),
});

export type PolkadotBroadcasterBroadcastAbortedArgs = z.output<
  typeof polkadotBroadcasterBroadcastAborted
>;
