import { z } from 'zod';
import { accountId, cfChainsEvmAggKey, numberOrHex } from '../common';

export const ethereumVaultKeyHandoverRequest = z.object({
  ceremonyId: numberOrHex,
  fromEpoch: z.number(),
  keyToShare: cfChainsEvmAggKey,
  sharingParticipants: z.array(accountId),
  receivingParticipants: z.array(accountId),
  newKey: cfChainsEvmAggKey,
  toEpoch: z.number(),
});

export type EthereumVaultKeyHandoverRequestArgs = z.output<
  typeof ethereumVaultKeyHandoverRequest
>;