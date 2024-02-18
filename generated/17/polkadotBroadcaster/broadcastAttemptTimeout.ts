import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const polkadotBroadcasterBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type PolkadotBroadcasterBroadcastAttemptTimeoutArgs = z.output<
  typeof polkadotBroadcasterBroadcastAttemptTimeout
>;
