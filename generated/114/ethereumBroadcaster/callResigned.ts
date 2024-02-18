import { z } from 'zod';

export const ethereumBroadcasterCallResigned = z.object({
  broadcastId: z.number(),
});

export type EthereumBroadcasterCallResignedArgs = z.output<
  typeof ethereumBroadcasterCallResigned
>;
