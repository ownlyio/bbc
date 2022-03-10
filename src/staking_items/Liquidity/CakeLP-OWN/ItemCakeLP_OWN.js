import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ownBusd from '../../../img/staking/own-busd.png'

// PRODUCTION
import { stakingTokenAbi, stakingTokenAddress } from '../../../utils/contracts/liquidity/cakelp-own/stakingToken'
import { stakingAbi, stakingAddress } from '../../../utils/contracts/liquidity/cakelp-own/staking'

// DEVELOPMENT
// import { stakingTokenAbi, stakingTokenAddress } from '../../../utils/contracts/liquidity/cakelp-own/stakingTokenDev'
// import { stakingAbi, stakingAddress } from '../../../utils/contracts/liquidity/cakelp-own/stakingDev'

// Utils
import { configureWeb3 } from '../../../utils/web3Init'
import { getApr } from '../../../utils/apr'

function ItemCakeLPOWN(props) {
    const acct = props.account
    const isConnected = props.isConnected

    let web3, stakingContract
    const [_web3, setWeb3] = useState()
    const [_stakingContract, setStakingContract] = useState()
    const [_stakingTokenContract, setStakingTokenContract] = useState()
    const [state, setState] = useState({
        isLoaded: false,
        hasMetamask: false,
        totalLPTokensStaked: 0,
        userCurrentLPStaked: 0,
        userRate: 0,
        apr: "--",
        userRewardsEarned: 0,
        lpStakingDuration: 0,
    })

    // function that will get the details of the user's account (balances, staked tokens etc)
    const getDetailsOfUserAcct = async () => {
        // compute user rate
        function computeUserRate(totalLp, lpStaked) {
            const ownRewardPerWeek = 7000000
            let rate = (ownRewardPerWeek * _web3.utils.fromWei(lpStaked)) / _web3.utils.fromWei(totalLp)
            _setState("userRate", rate)
        }

        const lpTokenBal = await _stakingTokenContract.methods.balanceOf(acct).call()
        _setState("currentLPBalance", _web3.utils.fromWei(lpTokenBal))
        const lpTokenStaked = await _stakingContract.methods.balanceOf(acct).call()
        _setState("userCurrentLPStaked", _web3.utils.fromWei(lpTokenStaked))
        const rewardsEarned = await _stakingContract.methods.earned(acct).call()
        _setState("userRewardsEarned", _web3.utils.fromWei(rewardsEarned))
        computeUserRate(_web3.utils.toWei(state.totalLPTokensStaked), lpTokenStaked)

        _setState("isLoaded", true)
        
        // refresh data every 10 seconds
        // setInterval(() => {
        //     async function _getDetails() {
        //         // get total deposits
        //         const totalLP = await _stakingContract.methods.totalSupply().call()
        //         _setState("totalLPTokensStaked", _web3.utils.fromWei(totalLP))

        //         // APR
        //         const apr = await getApr()
        //         _setState("apr", roundOff(apr))

        //         const lpTokenBal = await _stakingTokenContract.methods.balanceOf(acct).call()
        //         _setState("currentLPBalance", _web3.utils.fromWei(lpTokenBal))
        //         const lpTokenStaked = await _stakingContract.methods.balanceOf(acct).call()
        //         _setState("userCurrentLPStaked", _web3.utils.fromWei(lpTokenStaked))
        //         const rewardsEarned = await _stakingContract.methods.earned(acct).call()
        //         _setState("userRewardsEarned", _web3.utils.fromWei(rewardsEarned))

        //         // compute user rate
        //         computeUserRate(totalLP, lpTokenStaked)
        //     }
            
        //     _getDetails()
        // }, 10000)
    }

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    // convert a timestamp to days
    const convertTimestamp = async unixTime => {
        const req = await axios.get(`https://ownly.tk/api/get-remaining-time-from-timestamp/${unixTime}`)
        return Math.floor(req.data / (3600*24))
    }

    // round to the nearest hundredths
    const roundOff = num => {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    // add thousands separator
    const addCommasToNumber = (x, decimal = 5) => {
        if (!Number.isInteger(Number(x))) {
            x = Number(x).toFixed(decimal)
        }

        return x.toString().replace(/^[+-]?\d+/, function(int) {
            return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        });
    }
    
    useEffect(() => {
        async function _init() {
            // WEB3 RPC - BSC MAINNET
            web3 = configureWeb3("https://bsc-dataseed.binance.org/")
            // WEB3 RPC - BSC TESTNET (COMMENT WHEN PRODUCTION)
            // web3 = configureWeb3("https://data-seed-prebsc-1-s1.binance.org:8545/")

            // RPC Initialize
            stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)

            // get staking duration
            const duration = await stakingContract.methods.periodFinish().call()
            const calculatedDuration = await convertTimestamp(duration)
            _setState("lpStakingDuration", calculatedDuration)
    
            // get total deposits
            const totalLP = await stakingContract.methods.totalSupply().call()
            _setState("totalLPTokensStaked", web3.utils.fromWei(totalLP))

            // APR
            const apr = await getApr()
            _setState("apr", roundOff(apr))

            // Metamask account init
            const web3Metamask = configureWeb3()

            if (web3Metamask !== 1) { 
                const stakingContractMetamask = new web3Metamask.eth.Contract(stakingAbi, stakingAddress)
                const stakingTokenContractMetamask = new web3Metamask.eth.Contract(stakingTokenAbi, stakingTokenAddress)
                setWeb3(web3Metamask)
                setStakingContract(stakingContractMetamask)
                setStakingTokenContract(stakingTokenContractMetamask)
                _setState("hasMetamask", true)
            } else {
                _setState("hasMetamask", false)
            }
        }
        
        _init()
    }, [])

    useEffect(() => {
        if (isConnected && acct !== "") getDetailsOfUserAcct()
    }, [isConnected, acct])

    return (
        <div className="col-12 col-md-6 col-lg-4 s-item liquidity">
            <div className="splatform-item">
                <div className="splatform-item-img">
                    <img className="w-100" src={ownBusd} alt="Stake OWN/BUSD, Earn OWN" />
                </div>
                <p className="splatform-item-title text-center neo-bold text-color-6 font-size-170">Stake OWN/BUSD, Earn OWN</p>
                <div className="splatform-item-divider my-3"></div>
                <div className="splatform-item-content">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Total Deposits</div>
                        {isConnected ? (
                            <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.totalLPTokensStaked, 5)} OWN/BUSD</div>
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Your Total Deposits</div>
                        {isConnected ? (
                            <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.userCurrentLPStaked, 5)} OWN</div>
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Your Rate</div>
                        {isConnected ? (
                            <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.userRate, 5)} OWN</div>
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">APR</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">{state.apr} %</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Total Rewards</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">120,000,000 OWN</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Duration</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">120 Days ({state.lpStakingDuration} remaining)</div>
                    </div>
                </div>
                <div className="splatform-item-btn">
                    <Link to="/cakelp-own" className="btn btn-custom-3 w-100 font-size-120">Stake Now!</Link>
                </div>
            </div>  
        </div>
    )
}

export default ItemCakeLPOWN