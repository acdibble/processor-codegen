import { z } from 'zod';

export const governanceExecuted = z.number();

export type GovernanceExecutedArgs = z.output<typeof governanceExecuted>;
