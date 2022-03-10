import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import CakeLP_OWN from './components/Liquidity/CakeLP-OWN/CakeLP_OWN'
import OWN_Mustachio from './components/NFT/OWN-Mustachio/OWN_Mustachio'

import metamask from './img/metamask.png'

// Utils
import { configureWeb3 } from './utils/web3Init'
import networks from './utils/networks'

function App() {
    let web3
    const [_web3, setWeb3] = useState()
    const [state, setState] = useState({
        isConnected: false,
        account: "",
        hasMetamask: false,
    })

    // Modals
    const [showOnError, setShowOnError] = useState(false)
    const handleCloseOnError = () => setShowOnError(false)
    const handleShowOnError = () => setShowOnError(true)
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
            web3 = configureWeb3("https://bsc-dataseed.binance.org/")
            // WEB3 RPC - BSC TESTNET (COMMENT WHEN PRODUCTION)
            // web3 = configureWeb3("https://data-seed-prebsc-1-s1.binance.org:8545/")

            // Metamask
            const web3Metamask = configureWeb3()

            if (web3Metamask !== 1) {
                setWeb3(web3Metamask)
                _setState("hasMetamask", true)
            } else {
                _setState("hasMetamask", false)
            }
        }
        
        _init()
        accountChangedListener()
        networkChangedListener()
    }, [])

    // connect wallet
    const connect = async () => {
        if (state.hasMetamask) {
            const netId = await _web3.eth.net.getId() // 97 - BSC testnet, 56 - BSC Mainnet
            
            // PRODUCTION
            if (netId === 56) {
            // DEVELOPMENT
            // if (netId === 97) {
                const acct = await window.ethereum.request({ method: "eth_requestAccounts"})
                if (acct.length > 0) {
                    _setState("isConnected", true)
                    _setState("account", acct[0])
                }
            } else {
                handleShowWrongNetwork()
            }
        } else {
            handleShowMetamaskInstall()
        }
    }

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
                if (chainId !== "0x38") {
                // DEVELOPMENT
                // if (chainId !== "0x61") { 
                    _setState("detectedChangeMessage", "Network change detected!")
                    handleShowDetected()
                }
            })
        }
    }

    // switch network      
    const switchNetwork = async (networkName) => {
        try {
            await _web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                // PRODUCTION
                params: [{ chainId: "0x38" }],
                // DEVELOPMENT
                // params: [{ chainId: "0x61" }],
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

    // make an address short
    const shortenAddress = (address, prefixCount, postfixCount) => {
        let prefix = address.substr(0, prefixCount);
        let postfix = address.substr(address.length - postfixCount, address.length);
    
        return prefix + "..." + postfix;
    }

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="app" style={{"backgroundColor": "rgb(244, 246, 248)"}}>
                <Navbar connect={connect} isConnected={state.isConnected} account={state.account} shortenAddress={shortenAddress} />

                <Switch>
                    <Route exact path="/" render={props => <Home 
                        isConnected={state.isConnected} 
                        account={state.account} 
                        {...props} />}>    
                    </Route>
                    <Route exact path="/cakelp-own" component={CakeLP_OWN}></Route>
                    <Route exact path="/own-marauders" component={OWN_Mustachio}></Route>
                </Switch>

                <Footer />

                {/* Modals */}
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
                        <p className="app-network-modal-content text-center font-andes text-lg">Please connect to BSC Mainnet</p>
                        {/* DEVELOPMENT */}
                        {/* <p className="app-network-modal-content text-center font-andes text-lg">Please connect to BSC Testnet</p> */}
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseWrongNetwork}>
                            Close
                        </Button>
                        {/* PRODUCTION */}
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => switchNetwork("bscmainnet")}>
                            Switch Network
                        </Button>
                        {/* DEVELOPMENT */}
                        {/* <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => switchNetwork("bsctestnet")}>
                            Switch Network
                        </Button> */}
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
