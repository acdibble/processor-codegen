import { z } from 'zod';
import { cfChainsEthAggKey } from '../common';

export const ethereumVaultKeyHandoverVerificationSuccess = z.object({ aggKey: cfChainsEthAggKey });
