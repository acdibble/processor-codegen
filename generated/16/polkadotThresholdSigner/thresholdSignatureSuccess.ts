import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotThresholdSignerThresholdSignatureSuccess = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
});

export type PolkadotThresholdSignerThresholdSignatureSuccessArgs = z.output<
  typeof polkadotThresholdSignerThresholdSignatureSuccess
>;
