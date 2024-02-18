import { z } from 'zod';
import { hexString } from '../common';

export const fundingRemovedRestrictedAddress = z.object({ address: hexString });

export type FundingRemovedRestrictedAddressArgs = z.output<
  typeof fundingRemovedRestrictedAddress
>;
