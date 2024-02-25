import { z } from 'zod';
import { accountRolesAccountRoleRegistered } from './accountRoles/accountRoleRegistered';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { swappingMaximumSwapAmountSet } from './swapping/maximumSwapAmountSet';
import { swappingSwapAmountConfiscated } from './swapping/swapAmountConfiscated';

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

export type AccountRolesAccountRoleRegistered = EventHandler<
  z.output<typeof accountRolesAccountRoleRegistered>
>;
export type ValidatorPalletConfigUpdated = EventHandler<
  z.output<typeof validatorPalletConfigUpdated>
>;
export type SwappingMaximumSwapAmountSet = EventHandler<
  z.output<typeof swappingMaximumSwapAmountSet>
>;
export type SwappingSwapAmountConfiscated = EventHandler<
  z.output<typeof swappingSwapAmountConfiscated>
>;

type HandlerMap = {
  AccountRoles?: {
    AccountRoleRegistered?: AccountRolesAccountRoleRegistered;
  };
  Validator?: {
    PalletConfigUpdated?: ValidatorPalletConfigUpdated;
  };
  Swapping?: {
    MaximumSwapAmountSet?: SwappingMaximumSwapAmountSet;
    SwapAmountConfiscated?: SwappingSwapAmountConfiscated;
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
  spec: 102,
  handlers: [
    {
      name: 'AccountRoles.AccountRoleRegistered',
      handler: wrapHandler(
        map.AccountRoles?.AccountRoleRegistered,
        accountRolesAccountRoleRegistered,
      ),
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler: wrapHandler(map.Validator?.PalletConfigUpdated, validatorPalletConfigUpdated),
    },
    {
      name: 'Swapping.MaximumSwapAmountSet',
      handler: wrapHandler(map.Swapping?.MaximumSwapAmountSet, swappingMaximumSwapAmountSet),
    },
    {
      name: 'Swapping.SwapAmountConfiscated',
      handler: wrapHandler(map.Swapping?.SwapAmountConfiscated, swappingSwapAmountConfiscated),
    },
  ].filter((h): h is { name: string; handler: InternalEventHandler } => h.handler !== undefined),
});
