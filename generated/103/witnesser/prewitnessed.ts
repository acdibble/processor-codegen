import { z } from 'zod';

export const witnesserPrewitnessed = z.object({ call: z.unknown() });

export type WitnesserPrewitnessedArgs = z.output<typeof witnesserPrewitnessed>;
