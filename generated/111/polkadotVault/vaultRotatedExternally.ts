import { z } from 'zod';
import { hexString } from '../common';

export const polkadotVaultVaultRotatedExternally = hexString;

export type PolkadotVaultVaultRotatedExternallyArgs = z.output<
  typeof polkadotVaultVaultRotatedExternally
>;
