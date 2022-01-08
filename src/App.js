import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import ownlyLogo from './img/ownly/own-token.webp'
import busdLogo from './img/busd/busd.webp'

// import { stakingTokenAbi, stakingTokenAddress } from './utils/contracts/stakingToken'
import { stakingTokenAbi, stakingTokenAddress } from './utils/contracts/stakingTokenDev'
import { stakingAbi, stakingAddress } from './utils/contracts/stakingDev'

import { configureWeb3 } from './utils/web3Init'

function App() {
    let web3, stakingContract, stakingTokenContract
    const [_web3, setWeb3] = useState()
    const [_stakingContract, setStakingContract] = useState()
    const [_stakingTokenContract, setStakingTokenContract] = useState()
    const [state, setState] = useState({
        isConnected: false,
        account: "",
        helpText: "Please enter an amount greater than 0.",
        currentLPBalance: 0,
        isApproved: false,
        isLoaded: false,
        stakedAmount: 0,
        totalLPTokensStaked: 0,
        lpStakingDuration: 0,
        userCurrentLPStaked: 0,
        userRewardsEarned: 0,
        txError: "",
        txHash: "",
    })

    // Other Variables
    // const explorerUrl = "https://bscscan.com//tx/"
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

    useEffect(() => {
        async function _init() {
            web3 = configureWeb3()

            // initialize contracts
            stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)
            stakingTokenContract = new web3.eth.Contract(stakingTokenAbi, stakingTokenAddress)

            setWeb3(web3)
            setStakingContract(stakingContract)
            setStakingTokenContract(stakingTokenContract)

            // get staking duration
            const duration = await stakingContract.methods.periodFinish().call()
            _setState("lpStakingDuration", convertTimestamp(duration))
    
            // get total deposits
            const totalLP = await stakingContract.methods.totalSupply().call()
            _setState("totalLPTokensStaked", web3.utils.fromWei(totalLP))
        }
        
        _init()
    }, [])

    // contract functions
    const updateDetails = async () => {
        // get total deposits
        const totalLP = await _stakingContract.methods.totalSupply().call()
        _setState("totalLPTokensStaked", _web3.utils.fromWei(totalLP))
        getDetailsOfUserAcct(state.account)
    }

    const getDetailsOfUserAcct = async acct  => {
        const lpTokenBal = await _stakingTokenContract.methods.balanceOf(acct).call()
        _setState("currentLPBalance", _web3.utils.fromWei(lpTokenBal))
        const lpTokenStaked = await _stakingContract.methods.balanceOf(acct).call()
        _setState("userCurrentLPStaked", _web3.utils.fromWei(lpTokenStaked))
        const rewardsEarned = await _stakingContract.methods.earned(acct).call()
        _setState("userRewardsEarned", _web3.utils.fromWei(rewardsEarned))

        _setState("isLoaded", true)
    }

    const connect = async () => {
        const acct = await window.ethereum.request({ method: "eth_requestAccounts"})
        if (acct.length > 0) {
            _setState("isConnected", true)
            _setState("account", acct[0])
        }

        getDetailsOfUserAcct(acct[0])
    }

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
    const convertTimestamp = unixTime => {
        const convDate = new Date(unixTime*1000);
        const date1 = new Date(convDate.toLocaleDateString("en-US"))
        const date2 = new Date()
        const diffTime = Math.abs(date1 - date2)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays
    }

    const shortenAddress = (address, prefixCount, postfixCount) => {
        let prefix = address.substr(0, prefixCount);
        let postfix = address.substr(address.length - postfixCount, address.length);
    
        return prefix + "..." + postfix;
    }

    const getStakeAmount = () => {
        return document.getElementById("stake-input-num").value
    }

    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    const triggerMaxAmount = () => {
        document.getElementById("stake-input-num").value = state.currentLPBalance
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
                                <p className="total-dep bg-color-5 text-white text-center font-size-90 neo-light mb-4"><b>YOUR BALANCE:</b> {state.currentLPBalance} OWN/BUSD</p>
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
                                <p className="total-dep bg-color-4 text-white text-center font-size-110 neo-light mb-2"><b>TOTAL DEPOSITS:</b> {state.totalLPTokensStaked} OWN/BUSD</p>

                                <p className="d-none d-sm-block text-center font-size-90 text-color-6 neo-light mb-4"><b>Smart Contract:</b> <a href="https://testnet.bscscan.com/address/0xf8ddba8fd0fa088dd8ca61a96458f22ab1857d8d" target="_blank" rel="noreferrer" className="stake-link">0xf8ddba8fd0fa088dd8ca61a96458f22ab1857d8d</a></p>
                                <p className="d-block d-sm-none text-center font-size-90 text-color-6 neo-light mb-4"><b>Smart Contract:</b> <a href="https://testnet.bscscan.com/address/0xf8ddba8fd0fa088dd8ca61a96458f22ab1857d8d" target="_blank" rel="noreferrer" className="stake-link">{shortenAddress("0xf8ddba8fd0fa088dd8ca61a96458f22ab1857d8d", 15, 15)}</a></p>

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
                                                    <p className="mb-3 neo-regular font-size-90">{state.userCurrentLPStaked} OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">{state.userRewardsEarned} OWN</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">APR</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">-- %</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Rate</p>
                                                <p className="mb-3 neo-regular font-size-90">7000000 OWN / week</p>
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
                                                    <p className="mb-1 neo-regular font-size-90">{state.userCurrentLPStaked} OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-1 neo-regular font-size-90">{state.userRewardsEarned} OWN</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">APR</p>
                                                { state.isConnected ? (
                                                    <p className="mb-1 neo-regular font-size-90">-- %</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Rate</p>
                                                <p className="mb-1 neo-regular font-size-90">7000000 OWN / week</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Duration</p>
                                                <p className="mb-1 neo-regular font-size-90">{state.lpStakingDuration} Days</p>
                                            </div>
                                        </div>
                                        {/* END DETAILS */}
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
                            View on EtherScan
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
                            View on EtherScan
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
                            View on EtherScan
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
                            View on EtherScan
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* End Modals */}
            </div>
        </Router>
    );
}

export default App
