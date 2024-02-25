import { z } from 'zod';
import { accountId, cfChainsEthAggKey, hexString, numberOrHex } from '../common';

export const ethereumThresholdSignerThresholdSignatureRequest = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  epoch: z.number(),
  key: cfChainsEthAggKey,
  signatories: z.array(accountId),
  payload: hexString,
});
