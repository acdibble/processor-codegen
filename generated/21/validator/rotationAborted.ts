import { z } from 'zod';

export const validatorRotationAborted = z.null();

export type ValidatorRotationAbortedArgs = z.output<
  typeof validatorRotationAborted
>;
