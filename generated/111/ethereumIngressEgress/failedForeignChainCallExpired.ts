import { z } from 'zod';

export const ethereumIngressEgressFailedForeignChainCallExpired = z.object({
  broadcastId: z.number(),
});

export type EthereumIngressEgressFailedForeignChainCallExpiredArgs = z.output<
  typeof ethereumIngressEgressFailedForeignChainCallExpired
>;
