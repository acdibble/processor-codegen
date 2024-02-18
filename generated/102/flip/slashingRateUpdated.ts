import { z } from 'zod';

export const flipSlashingRateUpdated = z.object({ slashingRate: z.number() });

export type FlipSlashingRateUpdatedArgs = z.output<
  typeof flipSlashingRateUpdated
>;
