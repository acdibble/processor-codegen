import { z } from 'zod';

export const bitcoinBroadcasterCallResigned = z.object({
  broadcastId: z.number(),
});

export type BitcoinBroadcasterCallResignedArgs = z.output<
  typeof bitcoinBroadcasterCallResigned
>;
