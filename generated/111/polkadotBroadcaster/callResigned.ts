import { z } from 'zod';

export const polkadotBroadcasterCallResigned = z.object({
  broadcastId: z.number(),
});

export type PolkadotBroadcasterCallResignedArgs = z.output<
  typeof polkadotBroadcasterCallResigned
>;
