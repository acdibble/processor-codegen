import { z } from 'zod';
import { accountId, hexString } from '../common';

export const validatorVanityNameSet = z.tuple([accountId, hexString]);

export type ValidatorVanityNameSetArgs = z.output<
  typeof validatorVanityNameSet
>;
