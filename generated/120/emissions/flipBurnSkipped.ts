import { z } from 'zod';
import { spRuntimeDispatchError } from '../common';

export const emissionsFlipBurnSkipped = z.object({ reason: spRuntimeDispatchError });

export type EmissionsFlipBurnSkippedArgs = z.output<typeof emissionsFlipBurnSkipped>;
