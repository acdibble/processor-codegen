import { z } from 'zod';
import { hexString } from '../common';

export const polkadotBroadcasterTransactionFeeDeficitRefused = z.object({ beneficiary: hexString });

export type PolkadotBroadcasterTransactionFeeDeficitRefusedArgs = z.output<
  typeof polkadotBroadcasterTransactionFeeDeficitRefused
>;
