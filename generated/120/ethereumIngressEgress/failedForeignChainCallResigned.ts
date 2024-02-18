import { z } from 'zod';

export const ethereumIngressEgressFailedForeignChainCallResigned = z.object({
  broadcastId: z.number(),
  thresholdSignatureId: z.number(),
});

export type EthereumIngressEgressFailedForeignChainCallResignedArgs = z.output<
  typeof ethereumIngressEgressFailedForeignChainCallResigned
>;
