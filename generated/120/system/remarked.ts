import { z } from 'zod';
import { accountId, hexString } from '../common';

export const systemRemarked = z.object({ sender: accountId, hash_: hexString });

export type SystemRemarkedArgs = z.output<typeof systemRemarked>;
