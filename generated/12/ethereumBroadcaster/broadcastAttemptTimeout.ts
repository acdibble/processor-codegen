import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const ethereumBroadcasterBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type EthereumBroadcasterBroadcastAttemptTimeoutArgs = z.output<
  typeof ethereumBroadcasterBroadcastAttemptTimeout
>;
