import { z } from 'zod';
import { numberOrHex } from '../common';

export const bitcoinThresholdSignerThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type BitcoinThresholdSignerThresholdSignatureSuccessArgs = z.output<
  typeof bitcoinThresholdSignerThresholdSignatureSuccess
>;
