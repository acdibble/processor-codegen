import { z } from 'zod';
import { dispatchResult } from '../common';

export const polkadotBroadcasterBroadcastCallbackExecuted = z.object({
  broadcastId: z.number(),
  result: dispatchResult,
});

export type PolkadotBroadcasterBroadcastCallbackExecutedArgs = z.output<
  typeof polkadotBroadcasterBroadcastCallbackExecuted
>;
