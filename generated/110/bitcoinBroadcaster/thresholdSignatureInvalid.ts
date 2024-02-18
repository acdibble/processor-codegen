import { z } from 'zod';
import { palletCfBroadcastBroadcastAttemptId } from '../common';

export const bitcoinBroadcasterThresholdSignatureInvalid = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
});

export type BitcoinBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof bitcoinBroadcasterThresholdSignatureInvalid
>;
