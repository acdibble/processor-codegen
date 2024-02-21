import { z } from 'zod';
import { accountId, hexString } from '../common';

export const fundingBoundExecutorAddress = z.object({
  accountId,
  address: hexString,
});

export type FundingBoundExecutorAddressArgs = z.output<
  typeof fundingBoundExecutorAddress
>;
