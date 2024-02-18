import { z } from 'zod';

export const grandpaResumed = z.null();

export type GrandpaResumedArgs = z.output<typeof grandpaResumed>;
