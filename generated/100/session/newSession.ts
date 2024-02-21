import { z } from 'zod';

export const sessionNewSession = z.object({ sessionIndex: z.number() });

export type SessionNewSessionArgs = z.output<typeof sessionNewSession>;
