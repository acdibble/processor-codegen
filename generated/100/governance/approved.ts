import { z } from 'zod';

export const governanceApproved = z.number();

export type GovernanceApprovedArgs = z.output<typeof governanceApproved>;
