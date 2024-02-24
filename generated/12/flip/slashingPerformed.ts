import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const flipSlashingPerformed = z.object({ who: accountId, amount: numberOrHex });

export type FlipSlashingPerformedArgs = z.output<typeof flipSlashingPerformed>;
