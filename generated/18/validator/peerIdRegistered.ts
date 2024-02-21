import { z } from 'zod';
import { accountId, hexString, numberOrHex } from '../common';

export const validatorPeerIdRegistered = z.tuple([
  accountId,
  hexString,
  z.number(),
  numberOrHex,
]);

export type ValidatorPeerIdRegisteredArgs = z.output<
  typeof validatorPeerIdRegistered
>;
