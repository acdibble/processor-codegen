import { z } from 'zod';
import { InternalEventHandler, EventHandler, wrapHandler } from '../utils';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { fundingBoundExecutorAddress } from './funding/boundExecutorAddress';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { liquidityProviderLiquidityDepositAddressReady } from './liquidityProvider/liquidityDepositAddressReady';
import { liquidityProviderLiquidityRefundAddressRegistered } from './liquidityProvider/liquidityRefundAddressRegistered';

export type EnvironmentRuntimeSafeModeUpdated = EventHandler<
  z.output<typeof environmentRuntimeSafeModeUpdated>
>;
export type FundingBoundExecutorAddress = EventHandler<
  z.output<typeof fundingBoundExecutorAddress>
>;
export type ValidatorPalletConfigUpdated = EventHandler<
  z.output<typeof validatorPalletConfigUpdated>
>;
export type LiquidityProviderLiquidityDepositAddressReady = EventHandler<
  z.output<typeof liquidityProviderLiquidityDepositAddressReady>
>;
export type LiquidityProviderLiquidityRefundAddressRegistered = EventHandler<
  z.output<typeof liquidityProviderLiquidityRefundAddressRegistered>
>;

type HandlerMap = {
  Environment?: {
    RuntimeSafeModeUpdated?: EnvironmentRuntimeSafeModeUpdated;
  };
  Funding?: {
    BoundExecutorAddress?: FundingBoundExecutorAddress;
  };
  Validator?: {
    PalletConfigUpdated?: ValidatorPalletConfigUpdated;
  };
  LiquidityProvider?: {
    LiquidityDepositAddressReady?: LiquidityProviderLiquidityDepositAddressReady;
    LiquidityRefundAddressRegistered?: LiquidityProviderLiquidityRefundAddressRegistered;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 22,
  handlers: [
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: wrapHandler(
        map.Environment?.RuntimeSafeModeUpdated,
        environmentRuntimeSafeModeUpdated,
      ),
    },
    {
      name: 'Funding.BoundExecutorAddress',
      handler: wrapHandler(map.Funding?.BoundExecutorAddress, fundingBoundExecutorAddress),
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler: wrapHandler(map.Validator?.PalletConfigUpdated, validatorPalletConfigUpdated),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler: wrapHandler(
        map.LiquidityProvider?.LiquidityDepositAddressReady,
        liquidityProviderLiquidityDepositAddressReady,
      ),
    },
    {
      name: 'LiquidityProvider.LiquidityRefundAddressRegistered',
      handler: wrapHandler(
        map.LiquidityProvider?.LiquidityRefundAddressRegistered,
        liquidityProviderLiquidityRefundAddressRegistered,
      ),
    },
  ].filter((h): h is { name: string; handler: InternalEventHandler } => h.handler !== undefined),
});
