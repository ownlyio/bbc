import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ownMustachio from '../../../img/staking/own-mustachio-rulers.png'

// PRODUCTION
import { nftStakingAbi, nftStakingAddress } from '../../../utils/contracts/nft/own-mustachio/prod-nftStaking'
import { nftTokenAbi, nftTokenAddress } from '../../../utils/contracts/nft/own-mustachio/prod-nftToken'
import { stakingTokenAbi, stakingTokenAddress } from '../../../utils/contracts/nft/own-mustachio/prod-stakingToken'

// DEVELOPMENT
// import { nftStakingAbi, nftStakingAddress } from '../../../utils/contracts/nft/own-mustachio/nftStakingDev'
// import { nftTokenAbi, nftTokenAddress } from '../../../utils/contracts/nft/own-mustachio/nftTokenDev'
// import { stakingTokenAbi, stakingTokenAddress } from '../../../utils/contracts/nft/own-mustachio/stakingTokenDev'

// Utils
import { configureWeb3 } from '../../../utils/web3Init'

function ItemOWNMustachio(props) {
    const acct = props.account
    const isConnected = props.isConnected

    let web3, nftStakingContract, nftTokenContract
    const [_web3, setWeb3] = useState()
    const [_nftStakingContract, setNftStakingContract] = useState()
    const [_nftTokenContract, setNftTokenContract] = useState()
    const [_stakingTokenContract, setStakingTokenContract] = useState()
    const [state, setState] = useState({
        isLoaded: false,
        hasMetamask: false,
        isStaked: false,
        stakingId: 0,
        totalOwnTokensStaked: 0,
        stakeRequired: 0,
        remainingRewards: 0,
        userOwnDeposits: 0,
        dateStaked: "--",
        nftStakingDuration: 0,
        userRemainingDuration: 0,
    })

    // function that will get the details of the user's account 
    const getDetailsOfUserAcct = async () => {
        const currentItemId = await _nftStakingContract.methods.getCurrentStakingItemId(acct, nftTokenAddress).call()
        _setState("currentStakeItemId", currentItemId)
        if (Number(currentItemId) === 0) { // no staking active
            _setState("isStaked", false)
        } else {
            _setState("isStaked", true)
        }
        
        const currentItem = await _nftStakingContract.methods.getStakingItem(currentItemId).call()
        _setState("currentStakeItemId", currentItemId)
        
        // get OWN balance
        const ownBalance = await _stakingTokenContract.methods.balanceOf(acct).call()
        _setState("currentOwnBalance", _web3.utils.fromWei(ownBalance))

        // get staking duration
        const duration = await _nftTokenContract.methods.getStakeDuration().call()
        const calculatedDuration = convertSecToDays(duration)
        _setState("nftStakingDuration", calculatedDuration)

        if (Number(currentItemId) !== 0) { // staking active
            const options = {year: 'numeric', month: 'long', day: 'numeric'}
            _setState("dateStaked", new Date(currentItem.startTime * 1000).toLocaleDateString("en-US", options))
            
            _setState("userOwnDeposits", _web3.utils.fromWei(currentItem.amount))
            
            const remainingDuration = Number(currentItem.startTime) + Number(duration)
            const calculatedRemaining = await convertTimestamp(remainingDuration)

            if (calculatedRemaining > 0) {
                _setState("userRemainingDuration", calculatedRemaining)
                _setState("isStakingFinished", false)
            } else {
                _setState("userRemainingDuration", 0)
                _setState("isStakingFinished", true)
            }
        } else { // no staking active
            _setState("dateStaked", "--")
            _setState("userOwnDeposits", 0)
            _setState("userRemainingDuration", 0)
            _setState("isStakingFinished", true)
        }

        _setState("isLoaded", true)
    }

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    // convert seconds to days
    const convertSecToDays = secTime => {
        // PRODUCTION
        return Math.floor(secTime / (3600*24))
        // DEVELOPMENT
        // return secTime / (3600*24)
    }

    // convert a timestamp to days
    const convertTimestamp = async unixTime => {
        const req = await axios.get(`https://ownly.tk/api/get-remaining-time-from-timestamp/${unixTime}`)
        // PRODUCTION
        return Math.floor(req.data / (3600*24))
        // DEVELOPMENT
        // return req.data / (3600*24)
    }

    // add thousands separator
    const addCommasToNumber = (x, decimal = 5) => {
        if (!Number.isInteger(Number(x)) || Number(x) === 0) {
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
            nftStakingContract = new web3.eth.Contract(nftStakingAbi, nftStakingAddress)
            nftTokenContract = new web3.eth.Contract(nftTokenAbi, nftTokenAddress)

            // get total deposits
            const totalStaked = await nftStakingContract.methods.totalDeposits(nftTokenAddress).call()
            _setState("totalOwnTokensStaked", web3.utils.fromWei(totalStaked))

            // get remaining rewards
            const remainingRewards = await nftStakingContract.methods.remainingRewards(nftTokenAddress).call()
            _setState("remainingRewards", remainingRewards)

            // get staking required
            const stakeRequired = await nftTokenContract.methods.getStakeRequired().call()
            _setState("stakeRequired", web3.utils.fromWei(stakeRequired))
            
            // // Metamask account init
            const web3Metamask = configureWeb3()

            if (web3Metamask !== 1) { 
                const nftStakingContractMetamask = new web3Metamask.eth.Contract(nftStakingAbi, nftStakingAddress)
                const nftTokenContractMetamask = new web3Metamask.eth.Contract(nftTokenAbi, nftTokenAddress)
                const stakingTokenContractMetamask = new web3Metamask.eth.Contract(stakingTokenAbi, stakingTokenAddress)
                setWeb3(web3Metamask)
                setNftStakingContract(nftStakingContractMetamask)
                setNftTokenContract(nftTokenContractMetamask)
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
        <div className="col-12 col-md-6 col-lg-4 s-item nft">
            <div className="splatform-item">
                <div className="splatform-item-img">
                    <img className="w-100" src={ownMustachio} alt="Stake OWN, Earn Mustachio Ruler" />
                </div>
                <p className="splatform-item-title text-center neo-bold text-color-6 font-size-170">Stake OWN, Earn Mustachio Marauder</p>
                <div className="splatform-item-divider my-3"></div>
                <div className="splatform-item-content">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Total Deposits</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.totalOwnTokensStaked)} OWN</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Stake Required</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.stakeRequired)} OWN</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Remaining Rewards</div>
                        <div className="splatform-desc text-right text-color-7 font-size-100">{state.remainingRewards} MUSTACHIOS</div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Your Deposit</div>
                        {isConnected ? (
                            <div className="splatform-desc text-right text-color-7 font-size-100">{addCommasToNumber(state.userOwnDeposits)} OWN</div>
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Date Staked</div>
                        {isConnected ? (
                            <div className="splatform-desc text-right text-color-7 font-size-100">{state.dateStaked}</div>
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="splatform-desc text-left font-semibold font-size-100">Duration</div>
                        {isConnected ? (
                            state.isStaked ? (
                                <div className="splatform-desc text-right text-color-7 font-size-100">{state.nftStakingDuration} Days ({state.userRemainingDuration} remaining)</div>
                            ) : (
                                <div className="splatform-desc text-right text-color-7 font-size-100">{state.nftStakingDuration} Days</div>
                            )
                        ) : (
                            <div className="splatform-desc text-right text-color-7 font-size-100">Connect Wallet</div>
                        )}
                    </div>
                </div>
                <div className="splatform-item-btn">
                    <Link to="/own-marauders" className="btn btn-custom-3 w-100 font-size-120">Stake Now!</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemOWNMustachio