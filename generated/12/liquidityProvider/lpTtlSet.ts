import { z } from 'zod';

export const liquidityProviderLpTtlSet = z.object({ ttl: z.number() });

export type LiquidityProviderLpTtlSetArgs = z.output<typeof liquidityProviderLpTtlSet>;
