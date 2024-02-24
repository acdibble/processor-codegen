import { z } from 'zod';
import { palletCfIngressEgressDepositWitnessBitcoin, spRuntimeDispatchError } from '../common';

export const bitcoinIngressEgressDepositWitnessRejected = z.object({
  reason: spRuntimeDispatchError,
  depositWitness: palletCfIngressEgressDepositWitnessBitcoin,
});

export type BitcoinIngressEgressDepositWitnessRejectedArgs = z.output<
  typeof bitcoinIngressEgressDepositWitnessRejected
>;
