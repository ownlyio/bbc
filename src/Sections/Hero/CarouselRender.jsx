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
      <Container>
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
              style={{ textAlign: "left", marginTop: "1.3rem" }}
            >
              The biggest gathering of blockchain enthusiasts, <br /> crypto
              curious, influencers, and experts <br /> in south of the metro.
            </Text>
          </TextWrapper>
          <RegisterDiv>
          <a href="https://www.eventbrite.com/e/bicol-blockchain-conference-tickets-440189066347" target="_blank" style={{textDecoration: 'none', color:'inherit'}}>
            <Button
              bgcolor="#fff"
              color="rgb(0,0,0)"
            >
              <Heading>REGISTER HERE</Heading>
            </Button>
            </a>
            <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
              EVENT IS FREE! LIMITED SLOTS ONLY.
            </Text>
          </RegisterDiv>
        </Wrapper>
        <Wrapper>
          <DetailsContainer>
            <TextWrapper>
              <Heading color="#fff" fontSize="5.3em">
                14 NOV 2022
              </Heading>
              <Heading color="#fff" fontSize="3em">
                CASA BLANCA HOTEL
              </Heading>
              <Text color="rgba(255,255,255,0.5)" fontSize="2em">
                LEGAZPI CITY, ALBAY
              </Text>
            </TextWrapper>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <DivShowCase>
                <Text color="#fff" fontSize="1.5em">
                  Media Partners:
                </Text>
                <MediaDiv>
                  <Media alt="icn" src={MediaGroup.BLKTides} size="30px" />
                  <Media alt="icn" src={MediaGroup.BitPinas} size="50px" />
                  <Media alt="icn" src={MediaGroup.AsiaTokenFund} size="50px" />
                  <Media alt="icn" src={MediaGroup.CoinVoice} size="50px" />
                </MediaDiv>
              </DivShowCase>
              <DivShowCase>
                <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
                  Organized and Co-presented by:
                </Text>
                <MediaDiv>
                  <Media alt="icn" src={MediaGroup.Ownly} size="70px" />
                  <Media alt="icn" src={MediaGroup.SRK} size="70px" />
                  <Media alt="icn" src={MediaGroup.DTI} size="40px" />
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

const RegisterDiv = styled.div`
  text-align: left;
  
  & > a > ${Button} {
    border-radius: 15px;
    padding: 10px;
    width: 150px;
    height: 40px;
    margin-bottom: 5px;
    & > ${Heading} {
      font-size: 1em;
    }
  }
  @media screen and (min-width: 750px) {
    text-align: left;
    & > a > ${Button} {
      width: 150px;
      height: 50px;
  
    }
  }
  @media screen and (min-width: 970px) {
    text-align: left;
    & > a > ${Button} {
      width: 225px;
      height: 60px;
    }
  }
  @media screen and (min-width: 1360px) {
    text-align: left;
    & > a > ${Button} {
      width: 350px;
      height: 70px;
    }
  }
`

const BBCText = styled(Text)`
  margin-top: 0.5rem;
  font-size: 2.9em;

  @media screen and (min-width: 1476px) {
    font-size: 2.8em;
  }

  @media screen and (min-width: 2000px) {
    font-size: 2.9em;
  }
`;

const Container = styled(ContainerWithBackground)`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 670px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 0rem 2.5rem;
  }
  @media screen and (min-width: 2000px) {
    padding: 5rem 0rem;
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
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 2rem 1rem;
  min-height: 35vh;
  & > button {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }

  @media screen and (min-width: 750px) {
    align-items: flex-start;
    justify-content: space-between;
    padding: 0rem 2rem;
    min-height: 5vh;
  }

  @media screen and (min-width: 970px) {
    // padding: 1.5rem 3rem 0rem 3rem;
    width: ${props => props.width};
  }

  @media screen and (min-width: 2000px) {
    min-height: 30vh;
    padding-left: 15rem;
  }
`;

const LogoImage = styled.img`
  width: 275px !important;

  @media screen and (min-width: 420px) {
    width: 300px !important;
  }

  @media screen and (min-width: 970px) {
    width: 400px !important;
  }

  @media screen and (min-width: 1360px) {
    width: 600px !important;
  }

  @media screen and (min-width: 1460px) {
    width: 650px !important;
  }
`;

const LogoWrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextWrapper = styled(FontResponsive)`
  text-align: left;
  margin-bottom: 2rem;
`;

const DivShowCase = styled(FontResponsive)`
  width: 100%;
  margin-top: 1rem;
  flex: 1;
`;
const MediaDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Media = styled.img`
  width: ${(props) => props.size ?? "55px"} !important;
  margin-right: 1rem;
  @media screen and (min-width: 770px) {
    margin-right: 3rem;
  }
  @media screen and (min-width: 1366px) {
    width: ${(props) => `calc(${props.size} + 35px)`}!important;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
`;
