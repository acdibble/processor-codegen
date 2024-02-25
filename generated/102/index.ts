import { z } from 'zod';
import { accountRolesAccountRoleRegistered } from './accountRoles/accountRoleRegistered';
import { validatorPalletConfigUpdated } from './validator/palletConfigUpdated';
import { swappingMaximumSwapAmountSet } from './swapping/maximumSwapAmountSet';
import { swappingSwapAmountConfiscated } from './swapping/swapAmountConfiscated';

export type EventHandler<T> = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
  args: T;
}) => Promise<void>;

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

export const handleEvents = (map: HandlerMap) => ({
  spec: 102,
  handlers: [
    {
      name: 'AccountRoles.AccountRoleRegistered',
      handler:
        map.AccountRoles?.AccountRoleRegistered &&
        ((async ({ event, ...rest }) =>
          map.AccountRoles!.AccountRoleRegistered!({
            ...rest,
            event,
            args: accountRolesAccountRoleRegistered.parse(event.args),
          })) as AccountRolesAccountRoleRegistered),
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
      name: 'Swapping.MaximumSwapAmountSet',
      handler:
        map.Swapping?.MaximumSwapAmountSet &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.MaximumSwapAmountSet!({
            ...rest,
            event,
            args: swappingMaximumSwapAmountSet.parse(event.args),
          })) as SwappingMaximumSwapAmountSet),
    },
    {
      name: 'Swapping.SwapAmountConfiscated',
      handler:
        map.Swapping?.SwapAmountConfiscated &&
        ((async ({ event, ...rest }) =>
          map.Swapping!.SwapAmountConfiscated!({
            ...rest,
            event,
            args: swappingSwapAmountConfiscated.parse(event.args),
          })) as SwappingSwapAmountConfiscated),
    },
  ].filter((h): h is { name: string; handler: EventHandler<any> } => h.handler !== undefined),
});
