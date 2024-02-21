import { z } from 'zod';

export const ethereumIngressEgressUtxoConsolidation = z.object({
  broadcastId: z.number(),
});

export type EthereumIngressEgressUtxoConsolidationArgs = z.output<
  typeof ethereumIngressEgressUtxoConsolidation
>;
