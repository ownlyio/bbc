import React, { useState } from "react";
import axios from "axios";
import BG7 from '../../assets/bg/pane7.png'
import styled from "styled-components";
import { toast } from "react-toastify";
import { Text, Heading } from "../../components/Text";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import {Button} from '../../components/Button';
import useTheme from "../../hooks/useTheme";
import { TextWrap } from "../About";
import Input from "../../components/Input";
import './style.css'

const Subscribe = () => {
  const [emailAdd, setEmailAdd] = useState("");
  const [showSubscribed, setShowSubscribed] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const { theme } = useTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (re.test(emailAdd)) {
      axios
        .post("https://ownly.market/api/email-signup", {
          email: emailAdd,
          type: "bbc",
        })
        .then((res) => {
          toast.success('Thank you for subscribing!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
          setEmailAdd("");
          setShowSubscribed(true);
        });
    } else {
      toast.error('Please provide a valid email address and try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setShowErrorEmail(true)
    }
  };

  return (
    <PageLayout margin="0" id="contact-us" >
      <StyledCont background={BG7} minHeight="70vh">
        <TextWrap className="text-center">
          <Heading fontSize="3em" color={theme.colors.secondary}>
            SUBSCRIBE FOR THE LATEST EVENT UPDATES
          </Heading>
          <Text fontSize="1.4em" color="#fff" style={{textAlign: 'center'}}>
          Wanna be the first to get notified about the latest event updates of the first-ever Bicol Blockchain Conference? Join our VIP List to be first to know.
          </Text>
          <Text fontSize="1.6em" color="#fff" style={{textAlign: 'center'}}>
          By joining our Ownly VIP list, you agree to receive updates from Ownly for our upcoming IRL events. You can opt out of our marketing emails anytime. Your email will be stored on our database and will not be shared with any third-party.
          </Text>
        </TextWrap>
        <form
          className="form-subscribe"
          onSubmit={handleSubmit}
        >
          <Input value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)} placeholder="Email Address" type="email" width="400px" required/>
          <Button type='submit' className='submit-btn'>
            <Heading>Get Updates</Heading>
          </Button>
        </form>
      </StyledCont>
    </PageLayout>
  );
};

export default Subscribe;

const StyledCont = styled(ContainerWithBackground)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`