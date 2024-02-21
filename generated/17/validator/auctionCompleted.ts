import { z } from 'zod';
import { accountId, numberOrHex } from '../common';

export const validatorAuctionCompleted = z.tuple([
  z.array(accountId),
  numberOrHex,
]);

export type ValidatorAuctionCompletedArgs = z.output<
  typeof validatorAuctionCompleted
>;
