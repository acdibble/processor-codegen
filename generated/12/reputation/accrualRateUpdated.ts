import { z } from 'zod';

export const reputationAccrualRateUpdated = z.object({
  reputationPoints: z.number(),
  onlineCredits: z.number(),
});
