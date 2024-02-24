import { z } from 'zod';
import { accountId, hexString } from '../common';

export const fundingBoundRedeemAddress = z.object({ accountId, address: hexString });

export type FundingBoundRedeemAddressArgs = z.output<typeof fundingBoundRedeemAddress>;
