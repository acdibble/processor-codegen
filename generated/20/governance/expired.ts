import { z } from 'zod';

export const governanceExpired = z.number();

export type GovernanceExpiredArgs = z.output<typeof governanceExpired>;
