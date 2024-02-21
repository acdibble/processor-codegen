import { z } from 'zod';

export const polkadotIngressEgressFailedForeignChainCallResigned = z.object({
  broadcastId: z.number(),
  thresholdSignatureId: z.number(),
});

export type PolkadotIngressEgressFailedForeignChainCallResignedArgs = z.output<
  typeof polkadotIngressEgressFailedForeignChainCallResigned
>;
