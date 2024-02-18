import { z } from 'zod';

export const emissionsCurrentAuthorityInflationEmissionsUpdated = z.number();

export type EmissionsCurrentAuthorityInflationEmissionsUpdatedArgs = z.output<
  typeof emissionsCurrentAuthorityInflationEmissionsUpdated
>;
