import { z } from 'zod';
import { cfChainsBtcScriptPubkey } from '../common';

export const bitcoinBroadcasterTransactionFeeDeficitRefused = z.object({
  beneficiary: cfChainsBtcScriptPubkey,
});

export type BitcoinBroadcasterTransactionFeeDeficitRefusedArgs = z.output<
  typeof bitcoinBroadcasterTransactionFeeDeficitRefused
>;
