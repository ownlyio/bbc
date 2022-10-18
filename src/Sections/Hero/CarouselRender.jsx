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
          <Text
            color="rgba(255,255,255,0.5)"
            fontSize="3em"
            style={{ textAlign: "left", marginTop: '3rem'}}
          >
            The biggest gathering of blockchain enthusiasts, crypto curious,
            influencers, and experts in south of the metro.
          </Text>
          <div style={{ padding: "1rem 0" }}>
            <Button
              variant="outline-primary"
              border='true'
              style={{
                borderRadius: "5px",
                marginBottom: "5px",
                width: "250px",
                height: "70px",
              }}
              bgcolor="transparent"
              color="#fff"
            >
              REGISTER HERE
            </Button>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              EVENT IS FREE! LIMITED SLOTS ONLY.
            </Text>
          </div>
        </Wrapper>
        <Wrapper>
          <TextWrapper>
            <Heading color="#fff" fontSize="6em">
              14 NOV 2022
            </Heading>
            <Heading color="#fff" fontSize="4em">
              CASA BLANCA HOTEL
            </Heading>
            <Text color="rgba(255,255,255,0.5)" fontSize="3em">
              LEGAZPI CITY, ALBAY
            </Text>
          </TextWrapper>
          <DivShowCase>
            <Text color="#fff" fontSize="1.5em">
              Supported by:
            </Text>
          </DivShowCase>
          <DivShowCase>
            <Text color="#fff" fontSize="1.5em">
              Media Partners:
            </Text>
            <MediaDiv>
              <Media alt="icn" src={MediaGroup.BLKTides} size="55px" />
              <Media alt="icn" src={MediaGroup.BitPinas} size="55px" />
              <Media alt="icn" src={MediaGroup.AsiaTokenFund} size="55px" />
              <Media alt="icn" src={MediaGroup.CoinVoice} size="55px" />
            </MediaDiv>
          </DivShowCase>
          <DivShowCase>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              Organized and Co-presented by:
            </Text>
            <MediaDiv>
              <Media alt="icn" src={MediaGroup.Ownly} size="75px" />
              <Media alt="icn" src={MediaGroup.SRK} size="75px"/>
              <Media alt="icn" src={MediaGroup.DTI} size="75px"/>
            </MediaDiv>
          </DivShowCase>
        </Wrapper>
      </Container>
    );
  };

  return <AppCarousel components={{ item1 }} />;
};

export default CarouselRenderer;

const BBCText = styled(Text)`
  font-size: 2.7em;

  @media screen and (min-width: 1476px) {
    font-size: 3.5em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 5em;
  }
`

const Container = styled(ContainerWithBackground)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  
  ${(props) => props.theme.mediaQueries.sm} {
    flex-direction: row;
    padding: 5rem 2.5rem;
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
    padding: 3rem;
  }

  @media screen and (min-width: 970px) {
    padding: 3rem;
    width: 50vw;
  }

  @media screen and (min-width: 2000px) {
    & > * {
      margin-top: 5rem;
    }
  }
`;

const LogoImage = styled.img`
  padding: 5px;
  @media screen and (min-width: 425px) {
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 0px;
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
  min-height: 10vh;
  width: 100%;
  padding: 2rem 0;
`;
const MediaDiv = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Media = styled.img`
  width: ${props => props.size ?? '55px'} !important;
  @media screen and (min-width: 400px) {
    width: ${props => `calc(${props.size} + 20px)`} !important;
  }

  @media screen and (min-width: 400px) {
    width: ${props => `calc(${props.size} + 20px)`} !important;
  }

  @media screen and (min-width: 968px) {
    width: ${props => `calc(${props.size} + 50px)`} !important;
    margin: 5px;
  }

  @media screen and (min-width: 1440px) {
    width: ${props => `calc(${props.size} + 70px)`} !important;
    margin: 10px;
  }

  @media screen and (min-width: 2000px) {
    width: ${props => `calc(${props.size} + 200px)`} !important;
  }

`;
