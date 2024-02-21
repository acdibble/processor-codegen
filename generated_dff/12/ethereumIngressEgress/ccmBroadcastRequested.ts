import { z } from 'zod';
import { cfPrimitivesChainsForeignChain, numberOrHex } from '../common';

export const ethereumIngressEgressCcmBroadcastRequested = z.object({
  broadcastId: z.number(),
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
});

export type EthereumIngressEgressCcmBroadcastRequestedArgs = z.output<
  typeof ethereumIngressEgressCcmBroadcastRequested
>;
