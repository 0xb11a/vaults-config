export interface Finance {
    devMultisig: string;
    treasuryMultisig: string;
    strategyOwner: string;
    vaultOwner: string;
    tokenManager?: string;
    tokenOwner?: string;
    keeper: string;
    treasurer: string;
    launchpoolOwner: string;
    rewardPool: string;
    treasury: string;
    feeRecipient: string;
    multicall: string;
    bifiMaxiStrategy?: string;
    voter: string;
    feeConfig?: string;
    vaultFactory?: string;
    legacyStrategyFactory?: string;
    zap?: string;
    zapTokenManager?: string;
    treasurySwapper?: string;
  
    /// BIFI Token Contracts
    mooBifiLockbox?: string;
    axelarBridge?: string;
    optimismBridge?: string;
    ccipBridge?: string;
    layerZeroBridge?: string;
    mooBifi4626?: string;
  
    /// CLM Contracts
    clmFactory?: string;
    clmStrategyFactory?: string;
    clmRewardPoolFactory?: string;
    positionMulticall?: string;
  
    /// Swapper Contracts
    swapper?: string;
    oracle?: string;
    oracleChainlink?: string;
    oracleChainlinkEthBase?: string;
    oracleUniswapV3?: string;
    oracleUniswapV2?: string;
    oracleSolidly?: string;
    oracleAlgebra?: string;
  }