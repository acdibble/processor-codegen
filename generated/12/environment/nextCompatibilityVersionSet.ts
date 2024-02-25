import { z } from 'zod';
import { cfPrimitivesSemVer } from '../common';

export const environmentNextCompatibilityVersionSet = z.object({
  version: cfPrimitivesSemVer.nullish(),
});
