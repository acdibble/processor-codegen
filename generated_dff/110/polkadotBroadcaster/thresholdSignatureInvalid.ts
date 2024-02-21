import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const polkadotBroadcasterThresholdSignatureInvalid = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type PolkadotBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof polkadotBroadcasterThresholdSignatureInvalid
>;
