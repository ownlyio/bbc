import './Navbar.css'
import ownTokenWebpLogo from '../../img/ownly/own-token.webp'

function Navbar({ connect, disconnect, active, account, shortenAddress }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
            <div className="container">
                <div className="d-flex align-items-center" style={{"minHeight": "63px"}}>
                    <a className="#" href="https://stake.ownly.market">
                        <img src={ownTokenWebpLogo} width="53" alt="Ownly" />
                    </a>
                    <div className="ps-2">
                        <a href="#" className="link-color-1 text-decoration-none website-home-link">
                            <div className="">
                                <div className="d-flex align-items-center">
                                    <div className="font-size-150 font-size-sm-200 rubik-black website-home-link line-height-90">OWNLY</div>
                                    <div className="bg-color-6 text-center text-white py-1 px-2 ms-2">
                                        <div className="font-size-60 font-size-sm-70 rubik-bold line-height-100" id="app-version">BETA</div>
                                    </div>
                                </div>
                                <div className="font-size-70 font-size-sm-100 rubik-bold line-height-90" id="market-label">STAKING</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="justify-content-between" id="navbarSupportedContent" style={{"flexGrow": "initial"}}>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="text-color-6 text-decoration-none" href="#" id="account-address"></a>
                        </li>
                        { active ? (
                            <li className="nav-item" id="connect-to-metamask-container">
                                <button onClick={disconnect} type="button" className="d-none d-sm-block btn btn-custom-9 shadow-sm font-size-90 py-2 px-4" id="connect-to-metamask" style={{"borderRadius": "100px"}}>Connected: {shortenAddress(account, 6, 6)}</button>
                            </li>
                        ) : (
                            <li className="nav-item" id="connect-to-metamask-container">
                                <button onClick={connect} type="button" className="d-none d-sm-block btn btn-custom-9 shadow-sm font-size-90 py-2 px-4" id="connect-to-metamask" style={{"borderRadius": "100px"}}>Connect&nbsp;Wallet</button>
                                <button onClick={connect} type="button" className="d-block d-sm-none btn btn-custom-9 shadow-sm font-size-90 py-2 px-4" id="connect-to-metamask" style={{"borderRadius": "100px"}}>Connect</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar