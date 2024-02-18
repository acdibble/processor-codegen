import { z } from 'zod';
import { cfChainsEvmAggKey } from '../common';

export const ethereumVaultVaultRotatedExternally = cfChainsEvmAggKey;

export type EthereumVaultVaultRotatedExternallyArgs = z.output<
  typeof ethereumVaultVaultRotatedExternally
>;
