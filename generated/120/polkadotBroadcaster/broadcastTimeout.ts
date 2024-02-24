import { z } from 'zod';

export const polkadotBroadcasterBroadcastTimeout = z.object({ broadcastId: z.number() });

export type PolkadotBroadcasterBroadcastTimeoutArgs = z.output<
  typeof polkadotBroadcasterBroadcastTimeout
>;
