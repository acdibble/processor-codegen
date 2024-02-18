import { z } from 'zod';

export const polkadotIngressEgressCcmBroadcastFailed = z.object({
  broadcastId: z.number(),
});

export type PolkadotIngressEgressCcmBroadcastFailedArgs = z.output<
  typeof polkadotIngressEgressCcmBroadcastFailed
>;
