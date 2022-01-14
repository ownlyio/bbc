import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useState, useEffect } from 'react'
import { stakingAddress } from "../../utils/contracts/staking"
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function TopStakers() {
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
        <div className="table-responsive px-4">
            <p className="text-center font-size-170 text-color-2 neo-bold my-3">Stakers' Leaderboard</p>

            {!isLoaded ? (
                <>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="grey" size="6x" icon={faSpinner} spin />
                    </div>
                    <p className="app-error-modal-content text-center font-andes text-lg">Please wait...</p>
                </>
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-color-3">#</th>
                            <th className="text-color-3">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {earners.map((x, i) => (
                            <tr>
                                <td className="neo-black">{i + 1}</td>
                                <td>{x.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TopStakers