import { z } from 'zod';

export const systemCodeUpdated = z.null();

export type SystemCodeUpdatedArgs = z.output<typeof systemCodeUpdated>;
