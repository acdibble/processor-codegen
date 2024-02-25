import { z } from 'zod';
import {
  accountId,
  cfChainsEthSchnorrVerificationComponents,
  cfChainsEthTransaction,
  palletCfBroadcastBroadcastAttemptId,
} from '../common';

export const ethereumBroadcasterTransactionBroadcastRequest = z.object({
  broadcastAttemptId: palletCfBroadcastBroadcastAttemptId,
  nominee: accountId,
  transactionPayload: cfChainsEthTransaction,
  transactionOutId: cfChainsEthSchnorrVerificationComponents,
});
