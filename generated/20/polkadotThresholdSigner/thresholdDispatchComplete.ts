import { z } from 'zod';
import { dispatchResult, numberOrHex } from '../common';

export const polkadotThresholdSignerThresholdDispatchComplete = z.object({
  requestId: z.number(),
  ceremonyId: numberOrHex,
  result: dispatchResult,
});

export type PolkadotThresholdSignerThresholdDispatchCompleteArgs = z.output<
  typeof polkadotThresholdSignerThresholdDispatchComplete
>;
