import { z } from 'zod';

export const governanceDecodeOfCallFailed = z.number();

export type GovernanceDecodeOfCallFailedArgs = z.output<
  typeof governanceDecodeOfCallFailed
>;
