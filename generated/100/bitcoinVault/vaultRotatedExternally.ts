import { z } from 'zod';
import { cfChainsBtcAggKey } from '../common';

export const bitcoinVaultVaultRotatedExternally = cfChainsBtcAggKey;

export type BitcoinVaultVaultRotatedExternallyArgs = z.output<
  typeof bitcoinVaultVaultRotatedExternally
>;
