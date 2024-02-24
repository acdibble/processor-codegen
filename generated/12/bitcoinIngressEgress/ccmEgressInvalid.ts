import { z } from 'zod';
import { cfPrimitivesChainsForeignChain, numberOrHex, spRuntimeDispatchError } from '../common';

export const bitcoinIngressEgressCcmEgressInvalid = z.object({
  egressId: z.tuple([cfPrimitivesChainsForeignChain, numberOrHex]),
  error: spRuntimeDispatchError,
});

export type BitcoinIngressEgressCcmEgressInvalidArgs = z.output<
  typeof bitcoinIngressEgressCcmEgressInvalid
>;
