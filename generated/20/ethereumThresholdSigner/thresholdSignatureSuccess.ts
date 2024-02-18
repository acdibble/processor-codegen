import { z } from 'zod';
import { numberOrHex } from '../common';

export const ethereumThresholdSignerThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type EthereumThresholdSignerThresholdSignatureSuccessArgs = z.output<
  typeof ethereumThresholdSignerThresholdSignatureSuccess
>;
