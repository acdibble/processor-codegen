import { z } from 'zod';

export const polkadotBroadcasterThresholdSignatureInvalid = z.object({ broadcastId: z.number() });

export type PolkadotBroadcasterThresholdSignatureInvalidArgs = z.output<
  typeof polkadotBroadcasterThresholdSignatureInvalid
>;
