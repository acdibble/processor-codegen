import { z } from 'zod';

export const governanceUpgradeConditionsSatisfied = z.null();

export type GovernanceUpgradeConditionsSatisfiedArgs = z.output<
  typeof governanceUpgradeConditionsSatisfied
>;
