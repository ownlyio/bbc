import axios from 'axios'

// PRODUCTION
import { stakingTokenAbi, stakingTokenAddress } from './contracts/stakingToken'
// import { stakingAbi, stakingAddress } from './contracts/staking'

// DEVELOPMENT
import { stakingAbi, stakingAddress } from './contracts/stakingDev'

const getOwnPrice = () => {
    return axios.get("https://api.pancakeswap.info/api/v2/tokens/0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA")
}

const getBusdPrice = () => {
    return axios.get("https://api.pancakeswap.info/api/v2/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56")
}

export const getApr = async (web3) => {
    // initialization
    const stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)
    const cakeLPContract = new web3.eth.Contract(stakingTokenAbi, stakingTokenAddress)

    // EPOCH CONSTANT
    const EPOCH_PER_YEAR = 31556926 // Epoch per year

    // Contract calls
    // const rewardForDuration = await stakingContract.methods.getRewardForDuration().call()
    // const duration = await stakingContract.methods.rewardsDuration().call()
    // const tokenTotalInPool = await cakeLPContract.methods.getReserves().call()
    // const totalLPSupply = await cakeLPContract.methods.totalSupply().call()
    // const totalStaked = await stakingContract.methods.totalSupply().call()

    // Sample only
    let rewardForDuration = 1323030.999999999998592000;
    let duration = 10368000;
    let tokenTotalInPool = [226858584.839718510712195247, 14138.660619163811689051];
    let totalLPSupply = 1696962.909123223061708783;
    let totalStaked = 10115.570471107175258332;


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