import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";
import background from "./img/bbc-banner.jpg";
import dti5 from "./img/dti-logo.png";
import {
  About,
  FAQ,
  Hero,
  Partners,
  Schedule,
  Speakers,
  Subscription,
} from "./Sections";
import PageLoader from "./components/Loader";

function App() {
  const [emailAdd, setEmailAdd] = useState(false);
  const [showSubscribed, setShowSubscribed] = useState(false);
  const handleCloseSubscribed = () => setShowSubscribed(false);
  const handleShowSubscribed = () => setShowSubscribed(true);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const handleCloseErrorEmail = () => setShowErrorEmail(false);
  const handleShowErrorEmail = () => setShowErrorEmail(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;

    if (re.test(emailAdd)) {
      axios
        .post("https://ownly.market/api/email-signup", {
          email: emailAdd,
          type: "bbc",
        })
        .then((res) => {
          document.getElementById("emailAdd").value = "";
          setEmailAdd("");
          handleShowSubscribed();
        });
    } else {
      handleShowErrorEmail();
    }
  };

  return loading? <PageLoader /> : (
    <div className="main">
      <Navigation />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Partners />
      <FAQ />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
