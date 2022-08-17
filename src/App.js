import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import './App.css'

import background from './img/bbc-banner.jpg'
import dti5 from './img/dti-logo.png'

function App() {
    const [emailAdd, setEmailAdd] = useState("")
    const [showSubscribed, setShowSubscribed] = useState(false);
    const handleCloseSubscribed = () => setShowSubscribed(false);
    const handleShowSubscribed = () => setShowSubscribed(true);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const handleCloseErrorEmail = () => setShowErrorEmail(false);   
    const handleShowErrorEmail = () => setShowErrorEmail(true);

    const submitForm = (e) => {
        e.preventDefault()

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
        if (re.test(emailAdd)) {
            axios.post('https://ownly.market/api/email-signup', {email: emailAdd, type: 'bbc'}).then(res => {
                document.getElementById("emailAdd").value = ""
                setEmailAdd("")
                handleShowSubscribed()
            })
        } else {
            handleShowErrorEmail()
        }
    }

    return (
        <section id="app" className="background-image-cover h-screen" style={{ "backgroundImage": `url(${background})` }}>
            <div className="container h-full">
                <div className="d-flex justify-content-center align-items-center h-full">
                    <div className="app-wrap">
                        <h1 className="app-title text-center font-size-250 font-size-md-350 font-size-lg-430 font-size-xl-470 text-white neo-bold">BICOL BLOCKCHAIN CONFERENCE</h1>
                        <p className="app-sub text-center font-size-150 font-size-md-180 font-size-lg-230 font-size-xl-300 text-white alegreya-regular mb-3 mb-sm-5">11.14.2022 | Legazpi City, Albay</p>

                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <p className="alegreya-regular text-white font-size-100 font-size-sm-130 text-center px-md-5 mb-4">Wanna be the first to get notified when we announce the details of the first-ever Bicol Blockchain Conference? Join our VIP List to be first to know.</p>
                                <div className="px-lg-5 mx-lg-5">
                                    <form className="app-bbm-form" onSubmit={submitForm}>
                                        <div className="d-flex align-items-center flex-wrap mb-2">
                                            <div className="app-form app-input-wrapper d-flex flex-fill justify-content-center">
                                                <input id="emailAdd" type="email" name="email_address" className="form-control d-block px-3 py-1 font-size-90 neo-regular" style={{ "borderRadius": "5px 0 0 5px" }} placeholder="Your email address" required onChange={(e) => setEmailAdd(e.target.value)} />
                                            </div>
                                            <div className="app-form app-btn-form-wrapper">
                                                <button type="submit" className="btn btn-custom-7 px-3 py-1 font-size-90 neo-regular" style={{ "letterSpacing": "0.05em", "borderRadius": "0 5px 5px 0" }}>Join VIP List</button>
                                            </div>
                                        </div>
                                        <div className="form-check d-flex align-items-start mb-3">
                                            <div>
                                                <input className="form-check-input" type="checkbox" id="agreement" required />
                                            </div>
                                            <div className="ps-1">
                                                <label className="form-check-label font-size-80 text-white" for="agreement">
                                                By joining our Ownly VIP list, you agree to receive updates from Ownly for our upcoming IRL events. You can opt out of our marketing emails anytime. Your email will be stored on our database and will not be shared with any third-party.
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 mt-sm-3 mt-lg-5">
                            <p className="alegreya-regular text-center font-size-110 font-size-md-140 font-size-lg-180 font-size-xl-200 text-white mb-2">Co-presented by:</p>
                            <div className="partner-img mx-auto">
                                <img src={dti5} alt="DTI Region 5" className="w-100" />
                            </div>
                            <p className="alegreya-regular text-center font-size-90 font-size-md-110 font-size-lg-150 font-size-xl-170 text-white mb-2">Region 5</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-socmed-icons py-4">
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="mx-3">
                        <a href="https://web.facebook.com/BicolBlockchain/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon color="white" size="2x" icon={faFacebookF} />
                        </a>
                    </div>
                    <div className="mx-3">
                        <a href="https://twitter.com/BicolBlockchain" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon color="white" size="2x" icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal for successful subscription */}
            <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for error in email */}
            <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default App
