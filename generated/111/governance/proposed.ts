import { z } from 'zod';

export const governanceProposed = z.number();

export type GovernanceProposedArgs = z.output<typeof governanceProposed>;
