import { z } from 'zod';

export const emissionsSupplyUpdateIntervalUpdated = z.number();

export type EmissionsSupplyUpdateIntervalUpdatedArgs = z.output<
  typeof emissionsSupplyUpdateIntervalUpdated
>;
