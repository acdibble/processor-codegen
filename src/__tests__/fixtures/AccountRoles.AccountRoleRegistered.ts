import { z } from 'zod';
import { encodeAddress } from '@polkadot/util-crypto';

const hexString = z
  .string()
  .refine((v) => /^0x[\da-f]*$/i.test(v), { message: 'Invalid hex string' });

const accountId = z
  .union([
    hexString,
    z
      .string()
      .regex(/^[0-9a-f]+$/)
      .transform((v) => `0x${v}`),
  ])
  .transform((value) => encodeAddress(value, 2112));

const simpleEnum = <U extends string, T extends readonly [U, ...U[]]>(
  values: T,
) => z.object({ __kind: z.enum(values) }).transform(({ __kind }) => __kind!);

const cfPrimitivesAccountRole = simpleEnum([
  'Unregistered',
  'Validator',
  'LiquidityProvider',
  'Broker',
]);

export const accountRolesEventAccountRoleRegistered = z.object({
  accountId,
  role: cfPrimitivesAccountRole,
});

export type AccountRolesEventAccountRoleRegistered = z.output<
  typeof accountRolesEventAccountRoleRegistered
>;
