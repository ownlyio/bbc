import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import ownlyLogo from './img/ownly/own-token.webp'
import busdLogo from './img/busd/busd.webp'

// import { stakingTokenLpABI, stakingTokenLp } from './utils/contracts/stakingToken'
import { stakingTokenAbi, stakingTokenAddress } from './utils/contracts/stakingTokenDev'
import { stakingAbi, stakingAddress } from './utils/contracts/stakingDev'

import { configureWeb3 } from './utils/web3Init'

function App() {
    let web3, stakingContract, stakingTokenContract
    const [state, setState] = useState({
        isConnected: false,
        account: "",
        currentLPBalance: 0,
        isApproved: false,
        totalLPTokensStaked: 0,
        lpStakingDuration: 0,
    })

    useEffect(() => {
        async function _init() {
            web3 = configureWeb3()

            // initialize contracts
            stakingContract = new web3.eth.Contract(stakingAbi, stakingAddress)
            stakingTokenContract = new web3.eth.Contract(stakingTokenAbi, stakingTokenAddress)
    
            // get total deposits
            const totalLP = await stakingContract.methods.totalSupply().call()
            _setState("totalLPTokensStaked", web3.utils.fromWei(totalLP))

            // get staking duration
            const duration = await stakingContract.methods.periodFinish().call()
            _setState("lpStakingDuration", convertTimestamp(duration))
        }
        
        _init()
    }, [])

    const connect = async () => {
        await window.ethereum.enable()
        const acct = await web3.eth.getAccounts()
        if (acct.length > 0) {
            _setState("isConnected", true)
            _setState("account", acct[0])
        }

        const lpTokenBal = await stakingTokenContract.methods.balanceOf(acct[0]).call()
        _setState("currentLPBalance", web3.utils.fromWei(lpTokenBal))
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

    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
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
                                            <div className="form-group stake-form">
                                                <input type="number" className="form-control form-control-lg stake-input" placeholder="Amount" />
                                                {/* <small id="stake-help" className="form-text text-muted">We'll never share your email with anyone else.</small> */}

                                                <button className="font-size-80 btn stake-btn neo-bold">MAX</button>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <button className="btn stake-btn-func btn-custom-2" disabled={state.isApproved}>APPROVE</button>
                                                <button className="btn stake-btn-func btn-custom-2" disabled={!state.isApproved}>STAKE</button>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <button className="btn stake-btn-func btn-custom-2" disabled={!state.isApproved}>UNSTAKE</button>
                                                <button className="btn stake-btn-func btn-custom-2" disabled={!state.isApproved}>WITHDRAW</button>
                                            </div>
                                        </form>
                                        {/* END STAKING FORM */}

                                        <hr className="my-4" />

                                        {/* DETAILS */}
                                        <div className="d-none d-sm-block">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Your Total LP Tokens Staked</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">0.000000000000 OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-3 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-3 neo-bold font-size-90">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-3 neo-regular font-size-90">0.000000000000 OWN/BUSD</p>
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
                                                <p className="mb-3 neo-regular font-size-90">1000000 OWN / week</p>
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
                                                    <p className="mb-1 neo-regular font-size-90">0.000000000000 OWN/BUSD</p>
                                                ) : (
                                                    <p className="mb-1 neo-regular font-size-90">Connect Wallet</p>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-1 neo-bold font-size-110">Rewards Earned</p>
                                                { state.isConnected ? (
                                                    <p className="mb-1 neo-regular font-size-90">0.000000000000 OWN/BUSD</p>
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
                                                <p className="mb-1 neo-regular font-size-90">1000000 OWN / week</p>
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
            </div>
        </Router>
    );
}

export default App
