import { z } from 'zod';
import { environmentRuntimeSafeModeUpdated } from './environment/runtimeSafeModeUpdated';
import { fundingBoundExecutorAddress } from './funding/boundExecutorAddress';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { liquidityProviderLiquidityDepositAddressReady } from './liquidityProvider/liquidityDepositAddressReady';
import { liquidityProviderLiquidityRefundAddressRegistered } from './liquidityProvider/liquidityRefundAddressRegistered';

type EventHandlerArgs = {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
};

type ParsedEventHandlerArgs<T> = EventHandlerArgs & { args: T };

type InternalEventHandler = (args: EventHandlerArgs) => Promise<void>;

export type EventHandler<T> = (args: ParsedEventHandlerArgs<T>) => Promise<void>;

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

const wrapHandler = <T extends z.ZodTypeAny>(
  handler: EventHandler<z.output<T>> | undefined,
  schema: T,
): InternalEventHandler | undefined => {
  if (!handler) return undefined;

  return async ({ event, ...rest }) => handler({ ...rest, event, args: schema.parse(event.args) });
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
