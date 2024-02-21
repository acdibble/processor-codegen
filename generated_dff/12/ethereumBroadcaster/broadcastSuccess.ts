import { z } from 'zod';
import { cfChainsEthSchnorrVerificationComponents } from '../common';

export const ethereumBroadcasterBroadcastSuccess = z.object({
  broadcastId: z.number(),
  transactionOutId: cfChainsEthSchnorrVerificationComponents,
});

export type EthereumBroadcasterBroadcastSuccessArgs = z.output<
  typeof ethereumBroadcasterBroadcastSuccess
>;
