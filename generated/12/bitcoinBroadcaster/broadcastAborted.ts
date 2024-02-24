import { z } from 'zod';

export const bitcoinBroadcasterBroadcastAborted = z.object({ broadcastId: z.number() });

export type BitcoinBroadcasterBroadcastAbortedArgs = z.output<
  typeof bitcoinBroadcasterBroadcastAborted
>;
