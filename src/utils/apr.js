import axios from 'axios'
import { configureWeb3 } from './web3Init'

// PRODUCTION
import { stakingTokenAbi, stakingTokenAddress } from './contracts/liquidity/cakelp-own/stakingToken'
import { stakingAbi, stakingAddress } from './contracts/liquidity/cakelp-own/staking'

// DEVELOPMENT
// import { stakingAbi, stakingAddress } from './contracts/liquidity/cakelp-own/stakingDev'

const getOwnPrice = () => {
    return axios.get("https://api.pancakeswap.info/api/v2/tokens/0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA")
}

const getBusdPrice = () => {
    return axios.get("https://api.pancakeswap.info/api/v2/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56")
}

export const getApr = async () => {
    // initialization
    // WEB3 RPC - BSC MAINNET
    const web3 = configureWeb3("https://bsc-dataseed.binance.org/")
    // WEB3 RPC - BSC TESTNET (COMMENT WHEN PRODUCTION)
    // const web3 = configureWeb3("https://data-seed-prebsc-1-s1.binance.org:8545/")

    // Contracts
    const stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)
    const cakeLPContract = new web3.eth.Contract(stakingTokenAbi, stakingTokenAddress)

    // EPOCH CONSTANT
    const EPOCH_PER_YEAR = 31556926 // Epoch per year

    // Contract calls
    const rewardForDurationRes = await stakingContract.methods.getRewardForDuration().call()
    const duration = await stakingContract.methods.rewardsDuration().call()
    const tokenTotalInPoolRes = await cakeLPContract.methods.getReserves().call()
    const totalLPSupplyRes = await cakeLPContract.methods.totalSupply().call()
    const totalStakedRes = await stakingContract.methods.totalSupply().call()

    // conversions
    const rewardForDuration = web3.utils.fromWei(rewardForDurationRes)
    const tokenTotalInPool = [
        web3.utils.fromWei(tokenTotalInPoolRes[0]),
        web3.utils.fromWei(tokenTotalInPoolRes[1])
    ]
    const totalLPSupply = web3.utils.fromWei(totalLPSupplyRes)
    const totalStaked = web3.utils.fromWei(totalStakedRes)

    const ownPriceResult = await getOwnPrice()
    const busdPriceResult = await getBusdPrice()
    const ownPrice = ownPriceResult.data.data.price
    const busdPrice = busdPriceResult.data.data.price

    const totalRewardsPerYear = rewardForDuration * (EPOCH_PER_YEAR / duration)

    const totalRewardPricePerYear = ownPrice * totalRewardsPerYear
    const totalLiquidity = (tokenTotalInPool[0] * ownPrice) + (tokenTotalInPool[1] * busdPrice)
    const totalStakingTokensInPool = (totalLiquidity / totalLPSupply) * totalStaked

    const apr = (totalRewardPricePerYear / totalStakingTokensInPool) * 100

    return apr
}