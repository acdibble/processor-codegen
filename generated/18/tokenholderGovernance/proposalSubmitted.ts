import { z } from 'zod';
import { palletCfTokenholderGovernanceProposal } from '../common';

export const tokenholderGovernanceProposalSubmitted = z.object({
  proposal: palletCfTokenholderGovernanceProposal,
});

export type TokenholderGovernanceProposalSubmittedArgs = z.output<
  typeof tokenholderGovernanceProposalSubmitted
>;
