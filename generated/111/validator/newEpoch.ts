import { z } from 'zod';

export const validatorNewEpoch = z.number();

export type ValidatorNewEpochArgs = z.output<typeof validatorNewEpoch>;
