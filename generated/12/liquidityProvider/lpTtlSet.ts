import { z } from 'zod';

export const liquidityProviderLpTtlSet = z.object({ ttl: z.number() });
