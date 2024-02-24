import { z } from 'zod';

export const ethereumBroadcasterBroadcastAborted = z.object({ broadcastId: z.number() });

export type EthereumBroadcasterBroadcastAbortedArgs = z.output<
  typeof ethereumBroadcasterBroadcastAborted
>;
