import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const polkadotBroadcasterBroadcastRetryScheduled = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type PolkadotBroadcasterBroadcastRetryScheduledArgs = z.output<
  typeof polkadotBroadcasterBroadcastRetryScheduled
>;
