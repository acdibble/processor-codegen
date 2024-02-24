import { z } from 'zod';

export const polkadotVaultNoKeyHandover = z.null();

export type PolkadotVaultNoKeyHandoverArgs = z.output<typeof polkadotVaultNoKeyHandover>;
