import { z } from 'zod';
import { accountId, cfPrimitivesChainsAssetsAnyAsset, numberOrHex } from '../common';

export const liquidityProviderLiquidityDepositCredited = z.object({
  accountId,
  asset: cfPrimitivesChainsAssetsAnyAsset,
  amountCredited: numberOrHex,
});

export type LiquidityProviderLiquidityDepositCreditedArgs = z.output<
  typeof liquidityProviderLiquidityDepositCredited
>;
