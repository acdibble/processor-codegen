import { z } from 'zod';

export const swappingSwapTtlSet = z.object({ ttl: z.number() });
