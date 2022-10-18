import React from "react";
import styled from "styled-components";
import BG1 from "../../assets/bg/bg_carousel1.png";
import BBCLogo from "../../assets/official logo.png";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Button } from "../../components/Button";
import { H1, Heading, Text } from "../../components/Text";
import AppCarousel from "../../components/Carousel";
import { MediaGroup } from "./fetchImage";

const CarouselRenderer = () => {
  const item1 = () => {
    return (
      <Container background={BG1}>
        <Wrapper>
          <LogoWrapper>
            <LogoImage alt="bbc-logo" src={BBCLogo} />
            <BBCText color="#fff" className="logo-subtitle" bold>
              BICOL BLOCKCHAIN CONFERENCE
            </BBCText>
          </LogoWrapper>
          <TextWrapper>
          <Text
            color="rgba(255,255,255,0.5)"
            fontSize="2em"
            style={{ textAlign: "left", marginTop: '1.3rem'}}
          >
            The biggest gathering of blockchain enthusiasts, <br /> crypto curious,
            influencers, and experts <br /> in south of the metro.
          </Text>
          </TextWrapper>
          <div style={{ padding: "1rem 0" }}>
            <Button
             
             
              style={{
                borderRadius: "25px",
                marginBottom: "5px",
                width: "250px",
                height: "70px",
              }}
              bgcolor="#fff"
              color="rgb(0,0,0)"
            >
              <Heading>
              REGISTER HERE
              </Heading>
            </Button>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              EVENT IS FREE! LIMITED SLOTS ONLY.
            </Text>
          </div>
        </Wrapper>
        <Wrapper>
          <DetailsContainer>
          <TextWrapper>
            <Heading color="#fff" fontSize="4em">
              14 NOV 2022
            </Heading>
            <Heading color="#fff" fontSize="3em">
              CASA BLANCA HOTEL
            </Heading>
            <Text color="rgba(255,255,255,0.5)" fontSize="2em">
              LEGAZPI CITY, ALBAY
            </Text>
          </TextWrapper>
          <div>
          <DivShowCase>
            <Text color="#fff" fontSize="1.5em">
              Media Partners:
            </Text>
            <MediaDiv>
              <Media alt="icn" src={MediaGroup.BLKTides} size="40px" />
              <Media alt="icn" src={MediaGroup.BitPinas} size="40px" />
              <Media alt="icn" src={MediaGroup.AsiaTokenFund} size="40px" />
              <Media alt="icn" src={MediaGroup.CoinVoice} size="40px" />
            </MediaDiv>
          </DivShowCase>
          <DivShowCase>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              Organized and Co-presented by:
            </Text>
            <MediaDiv>
              <Media alt="icn" src={MediaGroup.Ownly} size="70px" />
              <Media alt="icn" src={MediaGroup.SRK} size="70px"/>
              <Media alt="icn" src={MediaGroup.DTI} size="70px"/>
            </MediaDiv>
          </DivShowCase>
          </div>
          </DetailsContainer>
        </Wrapper>
      </Container>
    );
  };

  return <AppCarousel components={{ item1 }} />;
};

export default CarouselRenderer;

const BBCText = styled(Text)`
  font-size: 2.6em;

  @media screen and (min-width: 1476px) {
    font-size: 2.8em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 2.9em;
  }
`

const Container = styled(ContainerWithBackground)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 670px) {
    flex-direction: row;
    padding: 5rem 2.5rem;
    margin-top: 2.5rem;
  }
`;

const FontResponsive = styled.div`
  font-size: 5px;

  @media screen and (min-width: 350px) {
    font-size: 6px;
  }

  @media screen and (min-width: 750px) {
    font-size: 5px;
  }

  @media screen and (min-width: 970px) {
    font-size: 7.8px;
  }

  @media screen and (min-width: 1360px) {
    font-size: 13px;
  }
`;

const Wrapper = styled(FontResponsive)`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 5vh;
  & > button {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }

  @media screen and (min-width: 750px) {
    padding: 2.5rem;
  }

  @media screen and (min-width: 970px) {
    padding: 1.5rem 3rem 0rem 3rem;
    width: 50vw;
  }

  @media screen and (min-width: 2000px) {
    & > * {
      margin-top: 5rem;
    }
  }
`;

const LogoImage = styled.img`
  width: 245px!important;

  @media screen and (min-width: 420px) {
    width: 300px!important;
  }

  @media screen and (min-width: 970px) {
    width: 400px!important;
  }
  
  @media screen and (min-width: 1360px) {
    width: 600px!important;
  }

  @media screen and (min-width: 1460px) {
    width: 650px!important;
  }
`;

const LogoWrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TextWrapper = styled(FontResponsive)`
  text-align: left;
  margin-bottom: 2rem;
`;

const DivShowCase = styled(FontResponsive)`
  width: 100%;
  padding: 1rem 0;
`;
const MediaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Media = styled.img`
  width: ${props => props.size ?? '55px'} !important;

  @media screen and (min-width: 1366px) {
    width: ${props => `calc(${props.size} + 25px)`}!important;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`