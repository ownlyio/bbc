import './TopStakers.css'
import axios from "axios"
import { useState, useEffect } from 'react'
import { stakingAddress } from "../../utils/contracts/staking"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal, faSpinner } from '@fortawesome/free-solid-svg-icons'

function TopStakers({shortenAddress, addCommasToNumber}) {
    const [earners, setEarners] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const url = "https://ownly.tk/api/get-staking-top-earners/"

    useEffect(() => {
        async function getTopEarners() {
            const earnersList = await axios.get(`${url}${stakingAddress}`)
            setEarners(earnersList.data)
            setIsLoaded(true)
        }

        getTopEarners()
    }, [])

    return (
        <div>
            <p className="text-center font-size-170 text-color-2 neo-bold mt-3 mb-2">Stakers' Leaderboard</p>
            <p className="text-center font-size-100 neo-bold mb-3">The Top 3 Earners at the end of the staking period will receive a <a className="stake-link neo-bold" href="https://mustachioverse.com" target="_blank" rel="noreferrer">Mustachio NFT</a> each as a reward.</p>

            <div className="table-responsive px-4">
                {!isLoaded ? (
                    <>
                        <div className="text-center my-3">
                            <FontAwesomeIcon color="grey" size="6x" icon={faSpinner} spin />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Please wait...</p>
                    </>
                ) : (
                    <table className="table table-hover" style={{"verticalAlign": "middle"}}>
                        <thead>
                            <tr>
                                <th className="text-center text-color-3"></th>
                                <th className="text-center text-color-3">Address</th>
                                <th className="text-center text-color-3">Amount Staked</th>
                                <th className="text-center text-color-3">Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {earners.map((x, i) => (
                                <tr>
                                    { (i+1 <= 3) ? (
                                        <td>
                                            <div className="medal">
                                                <div className="ribbon"></div>
                                                <div className={`coin
                                                    ${(i+1 === 1) ? "gold" : ""}
                                                    ${(i+1 === 2) ? "silver" : ""}
                                                    ${(i+1 === 3) ? "bronze" : ""}
                                                `}>
                                                    <span className={`neo-black font-size-110
                                                        ${(i+1 === 1) ? "gold" : ""}
                                                        ${(i+1 === 2) ? "silver" : ""}
                                                        ${(i+1 === 3) ? "bronze" : ""}
                                                    `}>{i + 1}</span>
                                                </div>
                                            </div>
                                        </td>
                                    ) : (
                                        <td className="text-center">
                                            <span className="neo-black">{i + 1}</span>
                                        </td>
                                    )}
                                    <td className={`text-center 
                                        ${(i+1 === 1) ? "neo-bold font-size-150" : ""}
                                        ${(i+1 === 2) ? "neo-bold font-size-140" : ""}
                                        ${(i+1 === 3) ? "neo-bold font-size-120" : ""}
                                    `}>
                                        <a className="stake-link" href={`https://bscscan.com/address/${x.address}`} target="_blank" rel="noreferrer">{shortenAddress(x.address, 6, 6)}</a>
                                    </td>
                                    <td className={`text-center 
                                        ${(i+1 === 1) ? "neo-bold font-size-150" : ""}
                                        ${(i+1 === 2) ? "neo-bold font-size-140" : ""}
                                        ${(i+1 === 3) ? "neo-bold font-size-120" : ""}
                                    `}>{addCommasToNumber(x.staked)}</td>
                                    <td className={`text-center 
                                        ${(i+1 === 1) ? "neo-bold font-size-150" : ""}
                                        ${(i+1 === 2) ? "neo-bold font-size-140" : ""}
                                        ${(i+1 === 3) ? "neo-bold font-size-120" : ""}
                                    `}>{addCommasToNumber(x.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default TopStakers