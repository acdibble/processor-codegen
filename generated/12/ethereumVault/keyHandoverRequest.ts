import { z } from 'zod';
import { accountId, cfChainsEthAggKey, numberOrHex } from '../common';

export const ethereumVaultKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: cfChainsEthAggKey,
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: cfChainsEthAggKey,
  toEpoch: z.number(),
});
