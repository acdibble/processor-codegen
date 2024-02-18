import { z } from 'zod';

export const bitcoinIngressEgressCcmBroadcastFailed = z.object({
  broadcastId: z.number(),
});

export type BitcoinIngressEgressCcmBroadcastFailedArgs = z.output<
  typeof bitcoinIngressEgressCcmBroadcastFailed
>;
