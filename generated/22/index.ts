export type EventHandler = (args: {
  // todo: fix `any`s
  prisma: any;
  event: any;
  block: any;
  eventId: bigint;
  submitterId?: number;
}) => Promise<void>;

type HandlerMap = {
  Environment?: {
    RuntimeSafeModeUpdated?: EventHandler;
  };
  Funding?: {
    BoundExecutorAddress?: EventHandler;
  };
  Validator?: {
    PalletConfigUpdated?: EventHandler;
  };
  LiquidityProvider?: {
    LiquidityDepositAddressReady?: EventHandler;
    LiquidityRefundAddressRegistered?: EventHandler;
  };
};

export const handleEvents = (map: HandlerMap) => ({
  spec: 22,
  handlers: [
    {
      name: 'Environment.RuntimeSafeModeUpdated',
      handler: map.Environment?.RuntimeSafeModeUpdated,
    },
    {
      name: 'Funding.BoundExecutorAddress',
      handler: map.Funding?.BoundExecutorAddress,
    },
    {
      name: 'Validator.PalletConfigUpdated',
      handler: map.Validator?.PalletConfigUpdated,
    },
    {
      name: 'LiquidityProvider.LiquidityDepositAddressReady',
      handler: map.LiquidityProvider?.LiquidityDepositAddressReady,
    },
    {
      name: 'LiquidityProvider.LiquidityRefundAddressRegistered',
      handler: map.LiquidityProvider?.LiquidityRefundAddressRegistered,
    },
  ].filter((h): h is { name: string; handler: EventHandler } => h.handler !== undefined),
});
