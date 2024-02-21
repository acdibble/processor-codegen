import { z } from 'zod';

export const emissionsBackupNodeInflationEmissionsUpdated = z.number();

export type EmissionsBackupNodeInflationEmissionsUpdatedArgs = z.output<
  typeof emissionsBackupNodeInflationEmissionsUpdated
>;
