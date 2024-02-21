import { z } from 'zod';

export const bitcoinIngressEgressUtxoConsolidation = z.object({
  broadcastId: z.number(),
});

export type BitcoinIngressEgressUtxoConsolidationArgs = z.output<
  typeof bitcoinIngressEgressUtxoConsolidation
>;
