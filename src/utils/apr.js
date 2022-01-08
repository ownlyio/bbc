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
    let ownPrice, busdPrice = 0
    
    // Contract calls
    const rewardForDuration = await stakingContract.methods.getRewardForDuration().call()
    const duration = await stakingContract.methods.rewardsDuration().call()
    const tokenTotalInPool = await cakeLPContract.methods.getReserves().call()
    const totalLPSupply = await cakeLPContract.methods.totalSupply().call()
    const totalStaked = await stakingContract.methods.totalSupply().call()

    getOwnPrice().then(res => {
        ownPrice = res.data.data.price
        getBusdPrice().then(resp => {
            busdPrice = resp.data.data.price
            
            const totalRewardsPerYear = rewardForDuration * (EPOCH_PER_YEAR / duration)

            const totalRewardPricePerYear = ownPrice * totalRewardsPerYear
            const totalLiquidity = (tokenTotalInPool[0] * ownPrice) + (tokenTotalInPool[1] * busdPrice)
            const totalStakingTokensInPool = (totalLiquidity / totalLPSupply) * totalStaked

            const apr = (totalRewardPricePerYear / totalStakingTokensInPool) * 100

            return apr
        })
    })
}