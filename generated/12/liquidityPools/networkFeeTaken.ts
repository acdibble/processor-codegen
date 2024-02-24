import { z } from 'zod';
import { numberOrHex } from '../common';

export const liquidityPoolsNetworkFeeTaken = z.object({ feeAmount: numberOrHex });

export type LiquidityPoolsNetworkFeeTakenArgs = z.output<typeof liquidityPoolsNetworkFeeTaken>;
