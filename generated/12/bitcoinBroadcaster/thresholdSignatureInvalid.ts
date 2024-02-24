import { z } from 'zod';

export const bitcoinBroadcasterThresholdSignatureInvalid = z.object({ broadcastId: z.number() });

export type BitcoinBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof bitcoinBroadcasterThresholdSignatureInvalid
>;
