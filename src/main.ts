import * as fs from 'fs/promises';
import { parseMetadata } from './parser';
import CodeGenerator from './codegen';

const parsed = await parseMetadata();

await fs.mkdir('generated', { recursive: true });
await fs.writeFile('generated/types.json', JSON.stringify(parsed, null, 2));

const generator = new CodeGenerator({
  trackedEvents: [
    'Flip.SlashingPerformed',
    'Funding.Funded',
    'Funding.RedemptionSettled',
    'Funding.BoundRedeemAddress',
    'Funding.RedemptionExpired',
    'Funding.RedemptionRequested',
    'TransactionPayment.TransactionFeePaid',
    'Validator.AuctionCompleted',
    'Validator.NewEpoch',
    'Validator.VanityNameSet',
    'Validator.CFEVersionUpdated',
    'Validator.RotationPhaseUpdated',
    'Reputation.OffencePenalty',
    'Swapping.SwapDepositAddressReady',
    'Swapping.SwapScheduled',
    'Swapping.SwapExecuted',
    'Swapping.SwapEgressScheduled',
    'Swapping.SwapAmountTooLow',
    'Swapping.CcmDepositReceived',
    'BitcoinVault.KeygenRequest',
    'BitcoinVault.KeygenVerificationSuccess',
    'BitcoinVault.KeyHandoverRequest',
    'BitcoinVault.VaultRotationCompleted',
    'EthereumVault.KeygenRequest',
    'EthereumVault.KeygenVerificationSuccess',
    'EthereumVault.KeyHandoverRequest',
    'EthereumVault.VaultRotationCompleted',
    'PolkadotVault.KeygenRequest',
    'PolkadotVault.KeygenVerificationSuccess',
    'PolkadotVault.KeyHandoverRequest',
    'PolkadotVault.VaultRotationCompleted',
    'BitcoinChainTracking.ChainStateUpdated',
    'EthereumChainTracking.ChainStateUpdated',
    'PolkadotChainTracking.ChainStateUpdated',
    'BitcoinIngressEgress.BatchBroadcastRequested',
    'BitcoinIngressEgress.CcmBroadcastRequested',
    'BitcoinIngressEgress.DepositReceived',
    'EthereumIngressEgress.BatchBroadcastRequested',
    'EthereumIngressEgress.CcmBroadcastRequested',
    'EthereumIngressEgress.DepositReceived',
    'PolkadotIngressEgress.BatchBroadcastRequested',
    'PolkadotIngressEgress.CcmBroadcastRequested',
    'PolkadotIngressEgress.DepositReceived',
    'BitcoinBroadcaster.BroadcastSuccess',
    'BitcoinBroadcaster.BroadcastAborted',
    'BitcoinBroadcaster.ThresholdSignatureInvalid',
    'EthereumBroadcaster.BroadcastSuccess',
    'EthereumBroadcaster.BroadcastAborted',
    'EthereumBroadcaster.ThresholdSignatureInvalid',
    'PolkadotBroadcaster.BroadcastSuccess',
    'PolkadotBroadcaster.BroadcastAborted',
    'PolkadotBroadcaster.ThresholdSignatureInvalid',
    'LiquidityPools.NewPoolCreated',
    'LiquidityPools.PoolFeeSet',
    'LiquidityPools.AssetSwapped',
    'LiquidityPools.LimitOrderUpdated',
    'LiquidityPools.RangeOrderUpdated',
    'EthereumThresholdSigner.ThresholdSignatureRequest',
    'EthereumThresholdSigner.ThresholdDispatchComplete',
    'BitcoinVault.KeyHandoverVerificationSuccess',
    'EthereumVault.KeyHandoverVerificationSuccess',
    'PolkadotVault.KeyHandoverVerificationSuccess',
    'BitcoinBroadcaster.TransactionBroadcastRequest',
    'EthereumBroadcaster.TransactionBroadcastRequest',
    'PolkadotBroadcaster.TransactionBroadcastRequest',
    'LiquidityProvider.LiquidityDepositAddressReady',
  ],
});

const result = await generator.generate(parsed);

await fs.writeFile('./generated/out.ts', result, 'utf8');
