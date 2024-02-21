import { z } from 'zod';
import { dispatchResult, numberOrHex } from '../common';

export const ethereumThresholdSignerThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type EthereumThresholdSignerThresholdDispatchCompleteArgs = z.output<
  typeof ethereumThresholdSignerThresholdDispatchComplete
>;
