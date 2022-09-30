import React, { useState } from "react";
import axios from "axios";
import BG7 from '../../assets/bg/pane7.png'
import styled from "styled-components";
import { toast } from "react-toastify";
import { Text, Heading } from "../../components/Text";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Button } from "react-bootstrap";
import useTheme from "../../hooks/useTheme";
import { TextWrap } from "../About";
import Input from "../../components/Input";

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
    <PageLayout margin="0">
      <ContainerWithBackground background={BG7}>
        <TextWrap className="text-center">
          <Heading fontSize="3em" color={theme.colors.secondary}>
            SUBSCRIBE FOR THE LATEST EVENT UPDATES
          </Heading>
          <Text fontSize="1.5em" color="#fff">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            tempora quos aut amet nobis. Nesciunt consequatur aperiam soluta
            iste tempora eum doloribus nobis nulla, magni quibusdam velit
            consequuntur culpa temporibus!
          </Text>
        </TextWrap>
        <form
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "2em" }}
          onSubmit={handleSubmit}
        >
          <Input value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)} placeholder="Email Address" type="email" required/>
          <Button variant="outline" type='submit'>
            <Heading color={theme.colors.secondary}>Get Updates</Heading>
          </Button>
        </form>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default Subscribe;
