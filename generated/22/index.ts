import { z } from 'zod';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { fundingBoundExecutorAddress } from './funding/boundExecutorAddress';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { liquidityProviderLiquidityDepositAddressReady } from './liquidityProvider/liquidityDepositAddressReady';
import { liquidityProviderLiquidityRefundAddressRegistered } from './liquidityProvider/liquidityRefundAddressRegistered';

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

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
      handler:
        map.Environment?.RuntimeSafeModeUpdated &&
        ((async ({ event, ...rest }) =>
          map.Environment!.RuntimeSafeModeUpdated!({
            ...rest,
            event,
            args: environmentRuntimeSafeModeUpdated.parse(event.args),
          })) as EnvironmentRuntimeSafeModeUpdated),
    },
    {
      name: 'Funding.BoundExecutorAddress',
      handler:
        map.Funding?.BoundExecutorAddress &&
        ((async ({ event, ...rest }) =>
          map.Funding!.BoundExecutorAddress!({
            ...rest,
            event,
            args: fundingBoundExecutorAddress.parse(event.args),
          })) as FundingBoundExecutorAddress),
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler:
        map.Validator?.PalletConfigUpdated &&
        ((async ({ event, ...rest }) =>
          map.Validator!.PalletConfigUpdated!({
            ...rest,
            event,
            args: validatorPalletConfigUpdated.parse(event.args),
          })) as ValidatorPalletConfigUpdated),
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler:
        map.LiquidityProvider?.LiquidityDepositAddressReady &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityDepositAddressReady!({
            ...rest,
            event,
            args: liquidityProviderLiquidityDepositAddressReady.parse(event.args),
          })) as LiquidityProviderLiquidityDepositAddressReady),
    },
    {
      name: 'LiquidityProvider.LiquidityRefundAddressRegistered',
      handler:
        map.LiquidityProvider?.LiquidityRefundAddressRegistered &&
        ((async ({ event, ...rest }) =>
          map.LiquidityProvider!.LiquidityRefundAddressRegistered!({
            ...rest,
            event,
            args: liquidityProviderLiquidityRefundAddressRegistered.parse(event.args),
          })) as LiquidityProviderLiquidityRefundAddressRegistered),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
