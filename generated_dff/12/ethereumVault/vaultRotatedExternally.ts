import { z } from 'zod';
import { cfChainsEthAggKey } from '../common';

export const ethereumVaultVaultRotatedExternally = cfChainsEthAggKey;

export type EthereumVaultVaultRotatedExternallyArgs = z.output<
  typeof ethereumVaultVaultRotatedExternally
>;
