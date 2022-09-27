import React from "react";
import styled from "styled-components";
import { Text, Heading } from "../../components/Text";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Button } from "react-bootstrap";
import useTheme from "../../hooks/useTheme";
import { TextWrap } from "../About";

const Subscribe = () => {
  const { theme } = useTheme()
  return (
    <PageLayout>
      <ContainerWithBackground>
        <TextWrap className="text-center">
          <Heading fontSize="3em" color={theme.colors.secondary}>SUBSCRIBE FOR THE LATEST EVENT UPDATES</Heading>
          <Text fontSize="1.5em">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            tempora quos aut amet nobis. Nesciunt consequatur aperiam soluta
            iste tempora eum doloribus nobis nulla, magni quibusdam velit
            consequuntur culpa temporibus!
          </Text>
        </TextWrap>
        <div className="d-flex align-items-center justify-content-center" style={{marginTop: '2em'}}>
          <Button variant="outline"><Heading color={theme.colors.secondary}>Get Updates</Heading></Button>
        </div>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default Subscribe;
