import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import BG4 from '../../assets/bg/pane4.png'
import CarouselRender from "./CarouselRender";
import PageLayout from "../../components/Layout";
import useTheme from "../../hooks/useTheme";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";

import { TextWrap } from "../About";

const Speakers = () => {
  const { theme } = useTheme();
  
  return (
    <PageLayout margin="0" id="speakers">
      <ContainerWithBackground background={BG4} padding="4rem 5rem">
        <SpeakersSection className="flex-column align-items-center">
          <TextWrap
            className="intro-text d-flex flex-column align-items-center"
          >
            <Heading fontSize="3em">MEET THE SPEAKERS</Heading>
            <Text fontSize="1.5em" color="#fff" style={{textAlign: 'center'}}>
            We are pleased to introduce our line up of distinguished speakers for this conference. Each one has combined their knowledge in Web3, metaverse, and blockchain technology to develop a unique expertise that can benefit the audience in their areas of interest.
            </Text>
          </TextWrap>
          <div style={{ margin: "3rem 0 ", width: "100%"}} >
            <CarouselRender />
          </div>
          {/* <ApplySection className="d-flex flex-column flex-md-row">
            <StyledTextWrap className="d-flex flex-column">
              <Heading fontSize="3.6em">APPLY AS SPEAKER</Heading>
              <StyledButton variant="outline">
                <Heading fontSize="1.5em" color={theme.colors.secondary}>
                  Apply Here >
                </Heading>
              </StyledButton>
            </StyledTextWrap>
            <TextWrap>
              <Text fontSize="1.5em" color="#fff">
                BBC's door is always open for brilliant, speaking mind, that are
                well-versed in the field of Blockchain Technology and Web3.
              </Text>
              <Text fontSize="1.5em" color="#fff">
                If you are a founder, project lead or anyone that has been
                integral in developing blockchain-based products and services
                and is willing to share your expertise, passion, knowledge and
                wants to become an evangelist of this disruptive tech, then BBC
                is the starting point for you.
              </Text>
            </TextWrap>
          </ApplySection> */}
        </SpeakersSection>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default Speakers;
const StyledButton = styled(Button)`
  &:hover {
    & > * {
      color: #fff;
    }
  }
`;

const Section = styled.div`
  display: flex;
  padding: 10px 0px;
  & > * {
    padding: 5px;
  }
`;

const SpeakersSection = styled(Section)`
& > div {
  text-align: center;
}
  & > .intro-text {
    & > ${Heading} {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
  ${(props) => props.theme.mediaQueries.lg} {
    & > div {
      text-align: left;
    }
  }
`;

const ApplySection = styled(Section)`
  & > :first-child {
    flex: 1 1 20rem;
    color: ${(props) => props.theme.colors.secondary};
  }
  & > :nth-child(2) {
    flex: 2 2 20rem;
    & > :first-child {
      margin-bottom: 2rem;
    }
  }
`;

const StyledTextWrap = styled(TextWrap)`
  display: flex;
  flex-column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`