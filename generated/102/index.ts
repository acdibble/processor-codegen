export type EventHandler = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
}) => Promise<void>;

type HandlerMap = {
  AccountRoles?: {
    AccountRoleRegistered?: EventHandler;
  };
  Validator?: {
    PalletConfigUpdated?: EventHandler;
  };
  Swapping?: {
    MaximumSwapAmountSet?: EventHandler;
    SwapAmountConfiscated?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 102,
  handlers: [
    {
      name: 'AccountRoles.AccountRoleRegistered',
      handler: map.AccountRoles?.AccountRoleRegistered,
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler: map.Validator?.PalletConfigUpdated,
    },
    {
      name: 'Swapping.MaximumSwapAmountSet',
      handler: map.Swapping?.MaximumSwapAmountSet,
    },
    {
      name: 'Swapping.SwapAmountConfiscated',
      handler: map.Swapping?.SwapAmountConfiscated,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
