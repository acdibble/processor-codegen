import { z } from 'zod';

export const liquidityPoolsUpdatedBuyInterval = z.object({
  buyInterval: z.number(),
});

export type LiquidityPoolsUpdatedBuyIntervalArgs = z.output<
  typeof liquidityPoolsUpdatedBuyInterval
>;
