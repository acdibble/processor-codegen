import { z } from 'zod';

export const polkadotIngressEgressFailedForeignChainCallExpired = z.object({
  broadcastId: z.number(),
});

export type PolkadotIngressEgressFailedForeignChainCallExpiredArgs = z.output<
  typeof polkadotIngressEgressFailedForeignChainCallExpired
>;
