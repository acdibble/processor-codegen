import { z } from 'zod';

export const swappingSwapTtlSet = z.object({ ttl: z.number() });

export type SwappingSwapTtlSetArgs = z.output<typeof swappingSwapTtlSet>;
