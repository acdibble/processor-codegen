import { z } from 'zod';

export const polkadotIngressEgressUtxoConsolidation = z.object({ broadcastId: z.number() });

export type PolkadotIngressEgressUtxoConsolidationArgs = z.output<
  typeof polkadotIngressEgressUtxoConsolidation
>;
