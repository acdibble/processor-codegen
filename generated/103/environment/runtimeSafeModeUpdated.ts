import { z } from 'zod';
import { palletCfEnvironmentSafeModeUpdate } from '../common';

export const environmentRuntimeSafeModeUpdated = z.object({
  safeMode: palletCfEnvironmentSafeModeUpdate,
});

export type EnvironmentRuntimeSafeModeUpdatedArgs = z.output<
  typeof environmentRuntimeSafeModeUpdated
>;
