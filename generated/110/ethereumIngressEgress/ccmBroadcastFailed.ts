import { z } from 'zod';

export const ethereumIngressEgressCcmBroadcastFailed = z.object({ broadcastId: z.number() });

export type EthereumIngressEgressCcmBroadcastFailedArgs = z.output<
  typeof ethereumIngressEgressCcmBroadcastFailed
>;
