import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const ethereumThresholdSignerThresholdSignatureFailed = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  offenders: z.array(accountId),
});

export type EthereumThresholdSignerThresholdSignatureFailedArgs = z.output<
  typeof ethereumThresholdSignerThresholdSignatureFailed
>;
