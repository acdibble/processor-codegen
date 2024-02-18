import { z } from 'zod';
import { accountId, cfChainsBtcAggKey, numberOrHex } from '../common';

export const bitcoinVaultKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: cfChainsBtcAggKey,
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: cfChainsBtcAggKey,
  toEpoch: z.number(),
});

export type BitcoinVaultKeyHandoverRequestArgs = z.output<
  typeof bitcoinVaultKeyHandoverRequest
>;
