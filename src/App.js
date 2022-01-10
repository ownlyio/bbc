import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle, faExternalLinkAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import ownlyLogo from './img/ownly/own-token.webp'
import busdLogo from './img/busd/busd.webp'
import metamask from './img/metamask.png'

// PRODUCTION
// import { stakingTokenAbi, stakingTokenAddress } from './utils/contracts/stakingToken'
// import { stakingAbi, stakingAddress } from './utils/contracts/staking'

// DEVELOPMENT
import { stakingTokenAbi, stakingTokenAddress } from './utils/contracts/stakingTokenDev'
import { stakingAbi, stakingAddress } from './utils/contracts/stakingDev'

// Utils
import { configureWeb3 } from './utils/web3Init'
import { getApr } from './utils/apr'
import networks from './utils/networks'

function App() {
    let web3, stakingContract
    const [_web3, setWeb3] = useState()
    const [_stakingContract, setStakingContract] = useState()
    const [_stakingTokenContract, setStakingTokenContract] = useState()
    const [state, setState] = useState({
        isConnected: false,
        account: "",
        helpText: "Please enter an amount greater than 0.",
        currentLPBalance: 0,
        isApproved: false,
        detectedChangeMessage: "",
        hasMetamask: false,
        isLoaded: false,
        stakedAmount: 0,
        apr: "--",
        totalLPTokensStaked: 0,
        lpStakingDuration: 0,
        userCurrentLPStaked: 0,
        userRewardsEarned: 0,
        txError: "",
        txHash: "",
    })

    // Other Variables
    // PRODUCTION
    // const explorerUrl = "https://bscscan.com//tx/"
    // DEVELOPMENT
    const explorerUrl = "https://testnet.bscscan.com/tx/"

    // Modals
    const [showNotConnected, setShowNotConnected] = useState(false)
    const handleCloseNotConnected = () => setShowNotConnected(false)
    const handleShowNotConnected = () => setShowNotConnected(true)
    const [showPleaseWait, setShowPleaseWait] = useState(false)
    const handleClosePleaseWait = () => setShowPleaseWait(false)
    const handleShowPleaseWait = () => setShowPleaseWait(true)
    const [showOnApprove, setShowOnApprove] = useState(false)
    const handleCloseOnApprove = () => setShowOnApprove(false)
    const handleShowOnApprove = () => setShowOnApprove(true)
    const [showOnError, setShowOnError] = useState(false)
    const handleCloseOnError = () => setShowOnError(false)
    const handleShowOnError = () => setShowOnError(true)
    const [showStaked, setShowStaked] = useState(false)
    const handleCloseStaked = () => setShowStaked(false)
    const handleShowStaked = () => setShowStaked(true)
    const [showClaim, setShowClaim] = useState(false)
    const handleCloseClaim = () => setShowClaim(false)
    const handleShowClaim = () => setShowClaim(true)
    const [showExit, setShowExit] = useState(false)
    const handleCloseExit = () => setShowExit(false)
    const handleShowExit = () => setShowExit(true)
    const [showMetamaskInstall, setShowMetamaskInstall] = useState(false)
    const handleCloseMetamaskInstall = () => setShowMetamaskInstall(false)
    const handleShowMetamaskInstall = () => setShowMetamaskInstall(true)
    const [showWrongNetwork, setShowWrongNetwork] = useState(false)
    const handleCloseWrongNetwork = () => setShowWrongNetwork(false)
    const handleShowWrongNetwork = () => setShowWrongNetwork(true)
    const [showDetected, setShowDetected] = useState(false)
    const handleCloseDetected = () => setShowDetected(false)
    const handleShowDetected = () => setShowDetected(true)

    useEffect(() => {
        async function _init() {
            // WEB3 RPC - BSC MAINNET
            // web3 = configureWeb3("https://bsc-dataseed.binance.org/")
            // WEB3 RPC - BSC TESTNET (COMMENT WHEN PRODUCTION)
            web3 = configureWeb3("https://data-seed-prebsc-1-s1.binance.org:8545/")

            // RPC Initialize
            stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)

            // Metamask
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

            // get staking duration
            const duration = await stakingContract.methods.periodFinish().call()
            _setState("lpStakingDuration", convertTimestamp(duration))
    
            // get total deposits
            const totalLP = await stakingContract.methods.totalSupply().call()
            _setState("totalLPTokensStaked", web3.utils.fromWei(totalLP))

            // APR
            const apr = await getApr()
            _setState("apr", roundOff(apr))
        }
        
        _init()
        accountChangedListener()
        networkChangedListener()
    }, [])

    // web3, metamask and contract functions
    // account change listener (metamask only)
    const accountChangedListener = () => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                _setState("detectedChangeMessage", "Account change detected!")
                handleShowDetected()
            })
        }
    }

    // network change listener (metamask only)
    const networkChangedListener = () => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', (chainId) => {
                // PRODUCTION
                // if (chainId !== "0x38") {
                // DEVELOPMENT
                if (chainId !== "0x61") { 
                    _setState("detectedChangeMessage", "Network change detected!")
                    handleShowDetected()
                }
            })
        }
    }

    // function that will automatically update the details after approve, stake, claim and exit
    const updateDetails = async () => {
        // get total deposits
        const totalLP = await _stakingContract.methods.totalSupply().call()
        _setState("totalLPTokensStaked", _web3.utils.fromWei(totalLP))
        getDetailsOfUserAcct(state.account)
    }

    // function that will get the details of the user's account (balances, staked tokens etc)
    const getDetailsOfUserAcct = async acct  => {
        const lpTokenBal = await _stakingTokenContract.methods.balanceOf(acct).call()
        _setState("currentLPBalance", _web3.utils.fromWei(lpTokenBal))
        const lpTokenStaked = await _stakingContract.methods.balanceOf(acct).call()
        _setState("userCurrentLPStaked", _web3.utils.fromWei(lpTokenStaked))
        const rewardsEarned = await _stakingContract.methods.earned(acct).call()
        _setState("userRewardsEarned", _web3.utils.fromWei(rewardsEarned))

        _setState("isLoaded", true)
    }

    // switch network      
    const switchNetwork = async (networkName) => {
        try {
            await _web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                // PRODUCTION
                // params: [{ chainId: "0x38" }],
                // DEVELOPMENT
                params: [{ chainId: "0x61" }],
            })

            handleCloseWrongNetwork()
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await web3.currentProvider.request({
                        method: "wallet_addEthereumChain",
                        params: [networks[networkName]],
                    })
                } catch (error) {
                    _setState("txError", error.message)
                    handleShowOnError()
                }
            }
        }
    }

    // connect wallet
    const connect = async () => {
        if (state.hasMetamask) {
            const netId = await _web3.eth.net.getId() // 97 - BSC testnet, 56 - BSC Mainnet
            
            // PRODUCTION
            // if (netId === 56) {
            // DEVELOPMENT
            if (netId === 97) {
                const acct = await window.ethereum.request({ method: "eth_requestAccounts"})
                if (acct.length > 0) {
                    _setState("isConnected", true)
                    _setState("account", acct[0])
                }

                getDetailsOfUserAcct(acct[0])
            } else {
                handleShowWrongNetwork()
            }
        } else {
            handleShowMetamaskInstall()
        }
    }

    // approve
    const approveStaking = async () => {
        const approveAmountEth = getStakeAmount()

        if (approveAmountEth === "0" || approveAmountEth === 0 || approveAmountEth === "") {
            handleShowOnError()
            _setState("txError", "Please provide a valid amount!")
        } else {
            const approveAmount = _web3.utils.toWei(approveAmountEth)
        
            await _stakingTokenContract.methods.approve(stakingAddress, approveAmount).send({
                from: state.account
            })
            .on('transactionHash', function(hash){
                handleShowPleaseWait()
            })
            .on('error', function(error) {
                handleClosePleaseWait()
                handleShowOnError()
                _setState("isApproved", false)
                _setState("txError", error.message)
            })
            .then(async function(receipt) {
                handleClosePleaseWait()
                handleShowOnApprove()
                _setState("isApproved", true)
                _setState("txHash", receipt.transactionHash)
                _setState("stakedAmount", approveAmountEth)
                _setState("helpText", `${approveAmountEth} OWN/BUSD ready for staking.`)
            })
        }
    }

    // stake
    const enterStaking = async () => {
        const stakeAmountEth = state.stakedAmount

        if (stakeAmountEth === "0" || stakeAmountEth === 0) {
            handleShowOnError()
            _setState("txError", "Please provide a valid amount!")
        } else {
            const stakeAmount = _web3.utils.toWei(stakeAmountEth)
            
            await _stakingContract.methods.stake(stakeAmount).send({
                from: state.account
            })
            .on('transactionHash', function(hash){
                handleShowPleaseWait()
            })
            .on('error', function(error) {
                handleClosePleaseWait()
                handleShowOnError()
                _setState("txError", error.message)
            })
            .then(async function(receipt) {
                handleClosePleaseWait()
                handleShowStaked()
                _setState("txHash", receipt.transactionHash)
                _setState("helpText", `${3} OWN/BUSD successfully staked.`)
                updateDetails()

                // reset values
                document.getElementById("stake-input-num").value = 0
                _setState("stakedAmount", 0)
            })
        }
    }

    // claim
    const claimRewards = async () => {
        const rewards = state.userRewardsEarned

        if (rewards === "0" || rewards === 0) {
            handleShowOnError()
            _setState("txError", "You do not have any reward tokens to claim.")
        } else {
            await _stakingContract.methods.getReward().send({
                from: state.account
            })
            .on('transactionHash', function(hash){
                handleShowPleaseWait()
            })
            .on('error', function(error) {
                handleClosePleaseWait()
                handleShowOnError()
                _setState("txError", error.message)
            })
            .then(async function(receipt) {
                handleClosePleaseWait()
                handleShowClaim()
                _setState("txHash", receipt.transactionHash)
                _setState("helpText", 'Please enter an amount greater than 0.')
                updateDetails()
            })
        }
    }

    // exit
    const claimAndWithdraw = async () => {
        const withdrawAmt = state.userCurrentLPStaked

        if (withdrawAmt === "0" || withdrawAmt === 0 ) {
            handleShowOnError()
            _setState("txError", "You do not have any LP Tokens staked.")
        } else {
            await _stakingContract.methods.exit().send({
                from: state.account
            })
            .on('transactionHash', function(hash){
                handleShowPleaseWait()
            })
            .on('error', function(error) {
                handleClosePleaseWait()
                handleShowOnError()
                _setState("txError", error.message)
            })
            .then(async function(receipt) {
                handleClosePleaseWait()
                handleShowExit()
                _setState("txHash", receipt.transactionHash)
                _setState("helpText", 'Please enter an amount greater than 0.')
                updateDetails()
            })
        }
    }

    // Utility functions
    // convert a timestamp to days
    const convertTimestamp = unixTime => {
        const convDate = new Date(unixTime*1000);
        const date1 = new Date(convDate.toLocaleDateString("en-US"))
        const date2 = new Date()
        const diffTime = Math.abs(date1 - date2)
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays
    }

    // make an address short
    const shortenAddress = (address, prefixCount, postfixCount) => {
        let prefix = address.substr(0, prefixCount);
        let postfix = address.substr(address.length - postfixCount, address.length);
    
        return prefix + "..." + postfix;
    }

    // get stake amount from text field
    const getStakeAmount = () => {
        return document.getElementById("stake-input-num").value
    }

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    // MAX function
    const triggerMaxAmount = () => {
        document.getElementById("stake-input-num").value = state.currentLPBalance
    }

    // round to the nearest hundredths
    const roundOff = num => {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    // add thousands separator
    function addCommasToNumber(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app" style={{"backgroundColor": "rgb(244, 246, 248)"}}>
                <Navbar connect={connect} isConnected={state.isConnected} account={state.account} shortenAddress={shortenAddress} />

                <div className="container">
                    <section id="app-staking" className="mb-4">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-lg-5">
                                <p className="text-center font-size-170 text-color-3 neo-bold mb-1">Get OWN/BUSD LP Tokens</p>
                                <p className="text-center font-size-90 text-color-6 neo-light mb-4">Add liquidity to OWN/BUSD on <b>PancakeSwap</b></p>
                                <p className="total-dep bg-color-5 text-white text-center font-size-90 neo-light mb-4"><b>YOUR BALANCE:</b> {addCommasToNumber(state.currentLPBalance)} OWN/BUSD</p>
                                <div className="d-flex justify-content-center mb-3">
                                    <div style={{"width": "50px"}}>
                                        <img src={ownlyLogo} className="w-100" alt="Ownly Logo" />
                                    </div>
                                    <div style={{"width": "50px"}}>
                                        <img src={busdLogo} className="w-100" alt="BUSD Logo" />
                                    </div>
                                </div>
                                <div className="add-liquidity mx-auto" style={{"width": "60%"}}>
                                    <a href="https://pancakeswap.finance/add/0x7665CB7b0d01Df1c9f9B9cC66019F00aBD6959bA/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" target="_blank" rel="noreferrer" className="w-100 btn btn-custom-7 rounded-lg">ADD LIQUIDITY FOR OWN/BUSD</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7">
                                <hr className="my-5 d-block d-lg-none" />

                                <p className="text-center font-size-170 text-color-2 neo-bold mb-1">Stake OWN/BUSD LP Tokens</p>
                                <p className="text-center font-size-90 text-color-6 neo-light mb-4">Stake your <b>CAKE LP Tokens</b> and receive <b>OWN</b></p>
                                <p className="total-dep bg-color-4 text-white text-center font-size-110 neo-light mb-2"><b>TOTAL DEPOSITS:</b> {addCommasToNumber(state.totalLPTokensStaked)} OWN/BUSD</p>

                                <div className="staking-card mx-auto" style={{"width": "85%"}}>
                                    <div className="app-card">
                                        {/* STAKING FORM */}
                                        <form>
                                            <p className="font-size-110 neo-light mb-1">Stake</p>
                                            <div className="form-group stake-form mb-3">
                                                <input type="number" id="stake-input-num" className="form-control form-control-lg stake-input" placeholder="Amount" readOnly={state.isApproved} />
                                                <small id="stake-help" className="form-text text-muted">{state.helpText}</small>

                                                <button type="button" onClick={triggerMaxAmount} className="font-size-80 btn stake-btn neo-bold" disabled={!state.isConnected || state.isApproved}>MAX</button>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                { state.isConnected ? (
                                                    <button onClick={approveStaking} type="button" className="btn stake-btn-func btn-custom-2" disabled={state.isApproved}>APPROVE</button>
                                                ) : (
                                                    <button type="button" onClick={handleShowNotConnected} className="btn stake-btn-func btn-custom-2" disabled={state.isApproved}>APPROVE</button>
                                                )}
                                                <button onClick={enterStaking} type="button" className="btn stake-btn-func btn-custom-2" disabled={!state.isApproved}>STAKE</button>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <button onClick={claimRewards} type="button" className="btn stake-btn-func btn-custom-2" disabled={!state.isLoaded}>CLAIM</button>
                                                <button onClick={claimAndWithdraw} type="button" className="btn stake-btn-func btn-custom-2" disabled={!state.isLoaded}>CLAIM & WITHDRAW</button>
                                            </div>
                                        </form>
                                        {/* END STAKING FORM */}

                                        <hr className="my-4" />

                                        {/* DETAILS */}
                                        <div className="d-none d-sm-block">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Your Total LP Tokens Staked</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">{addCommasToNumber(state.userCurrentLPStaked)} OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">{addCommasToNumber(state.userRewardsEarned)} OWN</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">APR</p>
                                                <p className="mb-3 neo-regular font-size-90">{state.apr} %</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Rate</p>
                                                <p className="mb-3 neo-regular font-size-90">7,000,000 OWN / week</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Duration</p>
                                                <p className="mb-3 neo-regular font-size-90">{state.lpStakingDuration} Days</p>
                                            </div>
                                        </div>
                                        <div className="d-block d-sm-none">
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Your Total LP Tokens Staked</p>
                                                { state.isConnected ? (
                                                    <p className="mb-1 neo-regular font-size-90">{addCommasToNumber(state.userCurrentLPStaked)} OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-1 neo-regular font-size-90">{addCommasToNumber(state.userRewardsEarned)} OWN</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">APR</p>
                                                <p className="mb-1 neo-regular font-size-90">{state.apr} %</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Rate</p>
                                                <p className="mb-1 neo-regular font-size-90">7,000,000 OWN / week</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Duration</p>
                                                <p className="mb-1 neo-regular font-size-90">{state.lpStakingDuration} Days</p>
                                            </div>
                                        </div>
                                        {/* END DETAILS */}

                                        <hr className="my-4" />


                                        {/* PRODUCTION */}
                                        <p className="font-size-90 text-color-6 neo-light mb-1">
                                            <a href="https://testnet.bscscan.com/address/0x73B08F1d787Be5bb0a6572C0444A50A48d55902E" target="_blank" rel="noreferrer" className="stake-link">
                                                <b>View Smart Contract</b>
                                                &nbsp;<FontAwesomeIcon color="black" size="sm" icon={faExternalLinkAlt} />
                                            </a>
                                        </p>
                                        <p className="font-size-90 text-color-6 neo-light mb-4">
                                            <a href="https://pancakeswap.finance/info/pool/0x5b14378d1bab6bf323ebd6cfd4a26ec2c49598da" target="_blank" rel="noreferrer" className="stake-link">
                                                <b>See Pair Info</b>
                                                &nbsp;<FontAwesomeIcon color="black" size="sm" icon={faExternalLinkAlt} />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />

                {/* Modals */}
                
                {/* Modal for not connected */}
                <Modal show={showNotConnected} onHide={handleCloseNotConnected} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Please connect to your Metamask Wallet.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseNotConnected}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for error transaction */}
                <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Error: {state.txError}</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnError}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for waiting */}
                <Modal show={showPleaseWait} onHide={handleClosePleaseWait} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="grey" size="6x" icon={faSpinner} spin />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Please wait...</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleClosePleaseWait}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for successful approve */}
                <Modal show={showOnApprove} onHide={handleCloseOnApprove} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">Your transaction was approved. You can now proceed.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnApprove}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + state.txHash, '_blank').focus()}>
                            View on BscScan
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for successful staking */}
                <Modal show={showStaked} onHide={handleCloseStaked} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">Your LP tokens are staked successfully.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseStaked}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + state.txHash, '_blank').focus()}>
                            View on BscScan
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for successful claim */}
                <Modal show={showClaim} onHide={handleCloseClaim} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">Your reward tokens are claimed successfully.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseClaim}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + state.txHash, '_blank').focus()}>
                            View on BscScan
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for successful exit */}
                <Modal show={showExit} onHide={handleCloseExit} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">You have successfully withdrawn your staked LP Tokens and reward tokens.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseExit}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + state.txHash, '_blank').focus()}>
                            View on BscScan
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for No Metamask */}
                <Modal show={showMetamaskInstall} onHide={handleCloseMetamaskInstall} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div style={{"textAlign": "center"}}>
                            <img src={metamask} alt="Metamask logo" />
                        </div>
                        <p className="app-metamask-modal-content text-center font-andes text-lg">Metamask is currently not installed</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseMetamaskInstall}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
                            Install Metamask
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for incorrect network */}
                <Modal show={showWrongNetwork} onHide={handleCloseWrongNetwork} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faExclamationCircle} />
                        </div>
                        {/* PRODUCTION */}
                        {/* <p className="app-network-modal-content text-center font-andes text-lg">Please connect to BSC Mainnet</p> */}
                        {/* DEVELOPMENT */}
                        <p className="app-network-modal-content text-center font-andes text-lg">Please connect to BSC Testnet</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseWrongNetwork}>
                            Close
                        </Button>
                        {/* PRODUCTION */}
                        {/* <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => switchNetwork("bscmainnet")}>
                            Switch Network
                        </Button> */}
                        {/* DEVELOPMENT */}
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => switchNetwork("bsctestnet")}>
                            Switch Network
                        </Button>
                    </Modal.Footer>
                </Modal>     

                {/* Modal for change detection */}
                <Modal show={showDetected} onHide={handleCloseDetected} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-network-modal-content text-center font-andes text-lg">{state.detectedChangeMessage}</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.location.reload()}>
                            Reload
                        </Button>
                    </Modal.Footer>
                </Modal>     

                {/* End Modals */}
            </div>
        </Router>
    );
}

export default App
