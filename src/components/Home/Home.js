import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from "react-router-hash-link"
import { faCoins, faReceipt, faWallet } from '@fortawesome/free-solid-svg-icons'

import ItemOWNMustachio from '../../staking_items/NFT/OWN-Mustachio/ItemOWN_Mustachio'
import ItemCakeLPOWN from '../../staking_items/Liquidity/CakeLP-OWN/ItemCakeLP_OWN'

import ownly from '../../img/ownly/own-token.webp'

export default function Home(props) {
    const acct = props.account
    const isConnected = props.isConnected

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const filterStakingOptions = (e, type) => {
        // add active class
        const activeElement = document.querySelectorAll('.splatform-btn-item.active')[0]
        activeElement.classList.remove('active')
        
        const clickedElement = e.target
        clickedElement.classList.add("active")

        // remove items with display none
        const itemsWithDisplayNone = document.querySelectorAll('.s-item.d-none')
        for (let x = 0; x < itemsWithDisplayNone.length; x++) {
            itemsWithDisplayNone[x].classList.remove('d-none')
        }

        // filter staking options by class name
        // for type = 0, just remove the display none for all items
        if (type === 1) { // liquidity
            const otherItems = document.querySelectorAll(".s-item:not(.liquidity)")
            for (let i = 0; i < otherItems.length; i++) {
                otherItems[i].classList.add('d-none')
            }
        } else if (type === 2) { // nft
            const otherItems = document.querySelectorAll(".s-item:not(.nft)")
            for (let j = 0; j < otherItems.length; j++) {
                otherItems[j].classList.add('d-none')
            }
        }
    }

    return (
        <section>
            <div id="home">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-6">
                            <div className="home-content">
                                <p className="home-title font-size-320 text-color-3 neo-bold mb-4">Stake your Tokens, Earn Rewards</p>
                                <p className="home-sub font-size-130 text-color-6 mb-5">Collect OWN, other Tokens, and even Ownly NFTs as rewards by just staking in our platform! Bring in some interest to your wallet while effortlessly #HODLing your tokens.</p>
                                <div className="home-cta d-flex align-items-center">
                                    <HashLink smooth to="#staking-platforms" className="home-btn-1 btn btn-custom-1 rounded-lg" scroll={el => scrollWithOffset(el)}>See Staking Options</HashLink>
                                    <HashLink smooth to="#how-it-works" className="home-btn-2 btn btn-custom-8 rounded-lg" scroll={el => scrollWithOffset(el)}>How it works</HashLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block">
                            <div className="home-img">
                                <img src={ownly} alt="Ownly Logo" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="how-it-works">
                <div className="container h-100">
                    <p className="hiw-title font-size-250 text-center text-color-2 neo-bold mb-3">How this works</p>
                    <p className="hiw-sub font-size-130 text-center text-color-7 mb-2">3 simple steps to stake and earn rewards through our platform</p>

                    <div className="row justify-content-center align-items-start">
                        <div className="col-12 col-md-4 mt-3">
                            <div className="hiw-item-content">
                                <div className="hiw-icon mb-3 text-center">
                                    <FontAwesomeIcon icon={faWallet} size="4x" color="#616161" />
                                </div>
                                <p className="hiw-item-title font-size-150 text-center font-semibold text-color-3 mb-3">Use your Metamask Wallet</p>
                                <p className="hiw-item-sub font-size-110 text-center neo-light text-color-6 mb-0">Connect your Metamask wallet and add the amount you’re willing to stake.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <div className="hiw-item-content">
                                <div className="hiw-icon mb-3 text-center">
                                    <FontAwesomeIcon icon={faReceipt} size="4x" color="#616161" />
                                </div>
                                <p className="hiw-item-title font-size-150 text-center font-semibold text-color-3 mb-3">Stake your tokens</p>
                                <p className="hiw-item-sub font-size-110 text-center neo-light text-color-6 mb-0">Approve and stake your tokens from your own wallet to our platform.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <div className="hiw-item-content">
                                <div className="hiw-icon mb-3 text-center">
                                    <FontAwesomeIcon icon={faCoins} size="4x" color="#616161" />
                                </div>
                                <p className="hiw-item-title font-size-150 text-center font-semibold text-color-3 mb-3">Earn your rewards</p>
                                <p className="hiw-item-sub font-size-110 text-center neo-light text-color-6 mb-0">Sit back, relax, and receive rewards directly to your wallet in tokens and/or NFTs!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="staking-platforms" className="mb-5">
                <div className="container">
                    <p className="splatform-title font-size-250 text-center text-color-4 neo-bold mb-3">Our Staking Platforms</p>
                    <p className="splatform-sub font-size-130 text-center text-color-7 mb-5">Staking options to choose from to earn tokens or NFTs as rewards</p>

                    <div className="splatform-btns mb-4">
                        <div className="d-flex w-100">
                            <button onClick={(e) => filterStakingOptions(e, 0)} className="btn splatform-btn-item neo-bold active">All</button>
                            <button onClick={(e) => filterStakingOptions(e, 1)} className="btn splatform-btn-item neo-bold">Liquidity</button>
                            <button onClick={(e) => filterStakingOptions(e, 2)} className="btn splatform-btn-item neo-bold">NFTs</button>
                        </div>
                    </div>
                    <div className="row justify-content-start align-items-center">
                        {/* Start from the recent ones */}
                        <ItemOWNMustachio
                            isConnected={isConnected} 
                            account={acct} />
                        <ItemCakeLPOWN 
                            isConnected={isConnected} 
                            account={acct} />
                    </div>
                </div>
            </div>
        </section>
    )
}
