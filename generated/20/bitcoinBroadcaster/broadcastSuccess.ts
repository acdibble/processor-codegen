import { z } from 'zod';
import { hexString } from '../common';

export const bitcoinBroadcasterBroadcastSuccess = z.object({
  broadcastId: z.number(),
  transactionOutId: hexString,
});

export type BitcoinBroadcasterBroadcastSuccessArgs = z.output<
  typeof bitcoinBroadcasterBroadcastSuccess
>;
