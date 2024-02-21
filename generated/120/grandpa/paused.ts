import { z } from 'zod';

export const grandpaPaused = z.null();

export type GrandpaPausedArgs = z.output<typeof grandpaPaused>;
