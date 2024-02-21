import { z } from 'zod';

export const bitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated =
  z.object({ newTimeout: z.number() });

export type BitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdatedArgs =
  z.output<
    typeof bitcoinThresholdSignerThresholdSignatureResponseTimeoutUpdated
  >;
