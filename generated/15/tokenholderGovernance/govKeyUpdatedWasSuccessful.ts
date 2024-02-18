import { z } from 'zod';
import { cfPrimitivesChainsForeignChain, hexString } from '../common';

export const tokenholderGovernanceGovKeyUpdatedWasSuccessful = z.object({
  chain: cfPrimitivesChainsForeignChain,
  key: hexString,
});

export type TokenholderGovernanceGovKeyUpdatedWasSuccessfulArgs = z.output<
  typeof tokenholderGovernanceGovKeyUpdatedWasSuccessful
>;
