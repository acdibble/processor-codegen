import { z } from 'zod';

export const ethereumBroadcasterBroadcastTimeout = z.object({ broadcastId: z.number() });

export type EthereumBroadcasterBroadcastTimeoutArgs = z.output<
  typeof ethereumBroadcasterBroadcastTimeout
>;
