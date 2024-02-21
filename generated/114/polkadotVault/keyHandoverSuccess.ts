import { z } from 'zod';
import { numberOrHex } from '../common';

export const polkadotVaultKeyHandoverSuccess = z.object({
  ceremonyId: numberOrHex,
});

export type PolkadotVaultKeyHandoverSuccessArgs = z.output<
  typeof polkadotVaultKeyHandoverSuccess
>;
