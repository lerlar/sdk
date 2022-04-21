export {
    SynapseBridgeContractInstance,
    L1BridgeZapContractInstance,
    L2BridgeZapContractInstance
} from "@entities";

export {Bridge}    from "@bridge/bridge";
export {Slippages} from "@bridge/slippages";

export {
    ChainId,
    supportedChainIds
} from "@common/chainid";

export {
    Networks,
    supportedNetworks
} from "@common/networks";

export {
    type Token,
    BaseToken,
    WrapperToken
} from "@token";

export {Tokens} from "@tokens";

export {
    SwapPools,
    networkSwapTokensMap,
    allNetworksSwapTokensMap,
    type NetworkSwappableTokensMap
} from "@swappools";

import {TokenSwap, UnsupportedSwapErrors} from "@tokenswap";

import detailedTokenSwapMap = TokenSwap.detailedTokenSwapMap;

export {TokenSwap, UnsupportedSwapErrors, detailedTokenSwapMap};

export {
    type RPCEndpointsConfig,
    configureRPCEndpoints
} from "@internal/rpcproviders";

export type {
    SynapseBridgeContract,
    GenericZapBridgeContract,
    L1BridgeZapContract,
    L2BridgeZapContract,
    SynapseERC20Contract,
    BridgeConfigV3Contract
} from "@contracts";

import {
    useApproveBridgeSwap,
    useExecuteBridgeSwap,
    useCalculateBridgeSwapOutput,
    useChainStableswapLPToken,
    useChainETHSwapLPToken,
    useHarmonyJewelLPToken,
    useHarmonyAVAXLPToken,
    useCalculateAddLiquidity,
    useCalculateRemoveLiquidity,
    useCalculateRemoveLiquidityOneToken,
    useAddLiquidity,
    useRemoveLiquidity,
    useRemoveLiquidityOneToken,
    useCalculateSwapRate,
    useSwapTokens,
    useApproveLPToken,
    useApproveTokenForLP,
    useApproveStatus,
    useApproveTokenSpend,
    AllowanceError,
    TransactionError
} from "./hooks/index";

export {
    useApproveBridgeSwap,
    useExecuteBridgeSwap,
    useCalculateBridgeSwapOutput,
    useChainStableswapLPToken,
    useChainETHSwapLPToken,
    useHarmonyJewelLPToken,
    useHarmonyAVAXLPToken,
    useCalculateAddLiquidity,
    useCalculateRemoveLiquidity,
    useCalculateRemoveLiquidityOneToken,
    useAddLiquidity,
    useRemoveLiquidity,
    useRemoveLiquidityOneToken,
    useCalculateSwapRate,
    useSwapTokens,
    useApproveLPToken,
    useApproveTokenForLP,
    useApproveStatus,
    useApproveTokenSpend,
    AllowanceError,
    TransactionError
};

export type {
    ApproveTokenState,
    AsyncContractFunction,
    TransactionHook,
    ContractCallHook,
    TokenApproveHook,
    ApproveTokenSpendArgs,
    ApproveTokenSpendHook,
    ApproveStatusArgs,
    ApproveStatusHook,
    CalculateBridgeSwapOutputArgs,
    CalculateBridgeSwapOutputHook,
    ExecuteBridgeSwapArgs,
    ExecuteBridgeSwapHook,
    ApproveBridgeSwapArgs,
    ApproveBridgeSwapHook,
    LPTokenHook,
    CalculateAddLiquidityArgs,
    CalculateAddLiquidityHook,
    CalculateRemoveLiquidityArgs,
    CalculateRemoveLiquidityHook,
    CalculateRemoveLiquidityOneTokenArgs,
    CalculateRemoveLiquidityOneTokenHook,
    AddLiquidityArgs,
    AddLiquidityHook,
    RemoveLiquidityArgs,
    RemoveLiquidityHook,
    RemoveLiquidityOneTokenArgs,
    RemoveLiquidityOneTokenHook,
    CalculateSwapRateArgs,
    CalculateSwapRateHook,
    SwapTokensArgs,
    SwapTokensHook,
    ApproveLPTokenArgs,
    ApproveLPTokenHook,
    ApproveTokenForLPHook
} from "./hooks/index";