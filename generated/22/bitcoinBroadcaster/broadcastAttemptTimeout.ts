import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const bitcoinBroadcasterBroadcastAttemptTimeout = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type BitcoinBroadcasterBroadcastAttemptTimeoutArgs = z.output<
  typeof bitcoinBroadcasterBroadcastAttemptTimeout
>;
