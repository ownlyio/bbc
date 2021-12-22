import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import ownlyLogo from './img/ownly/own-token.webp'
import busdLogo from './img/busd/busd.webp'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app" style={{"backgroundColor": "rgb(244, 246, 248)"}}>
                <Navbar />

                <div className="container">
                    <section id="app-staking" className="mb-4">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-5">
                                <p className="text-center font-size-170 text-color-3 neo-bold mb-1">Get OWN/BUSD LP Tokens</p>
                                <p className="text-center font-size-90 text-color-6 neo-light mb-4">Add liquidity to OWN/BUSD on <b>PancakeSwap</b></p>
                                <p className="total-dep bg-color-5 text-white text-center font-size-90 neo-light mb-4"><b>YOUR BALANCE:</b> 0.000000000000 OWN/BUSD</p>
                                <div className="d-flex justify-content-center mb-3">
                                    <div style={{"width": "50px"}}>
                                        <img src={ownlyLogo} className="w-100" alt="Ownly Logo" />
                                    </div>
                                    <div style={{"width": "50px"}}>
                                        <img src={busdLogo} className="w-100" alt="BUSD Logo" />
                                    </div>
                                </div>
                                <div className="mx-auto" style={{"width": "60%"}}>
                                    <button className="w-100 btn btn-custom-7 rounded-lg">ADD LIQUIDITY FOR OWN/BUSD</button>
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <p className="text-center font-size-170 text-color-2 neo-bold mb-1">Stake OWN/BUSD LP Tokens</p>
                                <p className="text-center font-size-90 text-color-6 neo-light mb-4">Stake your <b>CAKE LP Tokens</b> and receive <b>OWN</b></p>
                                <p className="total-dep bg-color-4 text-white text-center font-size-110 neo-light mb-2"><b>TOTAL DEPOSITS:</b> 0.000000000000 OWN/BUSD</p>
                                <p className="text-center font-size-90 text-color-6 neo-light mb-4"><b>Smart Contract:</b> <a href="#" target="_blank" rel="noreferrer" className="stake-link">0xabcdefabcdefabcdefabcdefabcdefabcdef</a></p>

                                <div className="mx-auto" style={{"width": "85%"}}>
                                    <div className="app-card">
                                        <form>
                                            <p className="font-size-110 neo-light mb-1">Stake</p>
                                            <div className="form-group stake-form">
                                                <input type="text" className="form-control form-control-lg stake-input" placeholder="Amount" />
                                                {/* <small id="stake-help" className="form-text text-muted">We'll never share your email with anyone else.</small> */}

                                                <button className="font-size-80 btn stake-btn neo-bold">MAX</button>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <button className="btn stake-btn-func btn-custom-2">APPROVE</button>
                                                <button className="btn stake-btn-func btn-custom-2" disabled>STAKE</button>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <button className="btn stake-btn-func btn-custom-2" disabled>UNSTAKE</button>
                                                <button className="btn stake-btn-func btn-custom-2" disabled>WITHDRAW</button>
                                            </div>
                                        </form>

                                        <hr className="my-4" />

                                        <div className="d-flex justify-content-between">
                                            <p className="mb-3 neo-bold font-size-90">Your Total LP Tokens Staked</p>
                                            <p className="mb-3 neo-regular font-size-90">0.000000000000 OWN/BUSD</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-3 neo-bold font-size-90">Rewards Earned</p>
                                            <p className="mb-3 neo-regular font-size-90">0.000000000000 OWN</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-3 neo-bold font-size-90">APR</p>
                                            <p className="mb-3 neo-regular font-size-90">-- %</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-3 neo-bold font-size-90">Rate</p>
                                            <p className="mb-3 neo-regular font-size-90">0.000000000000 OWN / week</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-3 neo-bold font-size-90">Duration</p>
                                            <p className="mb-3 neo-regular font-size-90">-- Days</p>
                                        </div>
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
