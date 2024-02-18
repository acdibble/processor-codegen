import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const liquidityPoolsLimitOrderSetOrUpdateScheduled = z.object({
  lp: accountId,
  orderId: numberOrHex,
  dispatchAt: z.number(),
});

export type LiquidityPoolsLimitOrderSetOrUpdateScheduledArgs = z.output<
  typeof liquidityPoolsLimitOrderSetOrUpdateScheduled
>;
