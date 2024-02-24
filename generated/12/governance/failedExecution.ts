import { z } from 'zod';
import { spRuntimeDispatchError } from '../common';

export const governanceFailedExecution = spRuntimeDispatchError;

export type GovernanceFailedExecutionArgs = z.output<typeof governanceFailedExecution>;
