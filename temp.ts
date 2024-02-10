import { z } from 'zod';

const hexString = z
  .string()
  .refine((v): v is `0x${string}` => /0x[\da-f]/i.test(v));
