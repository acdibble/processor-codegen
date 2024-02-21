import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const ethereumBroadcasterThresholdSignatureInvalid = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type EthereumBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof ethereumBroadcasterThresholdSignatureInvalid
>;
