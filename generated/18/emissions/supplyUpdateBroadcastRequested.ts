import { z } from 'zod';

export const emissionsSupplyUpdateBroadcastRequested = z.number();

export type EmissionsSupplyUpdateBroadcastRequestedArgs = z.output<
  typeof emissionsSupplyUpdateBroadcastRequested
>;
