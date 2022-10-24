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
              color="#fff"
              fontSize="3em"
              style={{marginTop: '1rem'}}
              weight="100"
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
            <Text color="rgba(255,255,255,0.9)" fontSize="1.5em" weight="100">
              EVENT IS FREE! LIMITED SLOTS ONLY.
            </Text>
          </RegisterDiv>
        </Wrapper>
        <Wrapper>
          <DetailsContainer>
            <TextWrapper>
              <Heading color="#fff" fontSize="6.5em">
                14 NOV 2022
              </Heading>
              <Heading color="#fff" fontSize="3.6em">
                CASA BLANCA HOTEL
              </Heading>
              <Text color="rgba(255,255,255,0.5)" fontSize="2.4em">
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
                  <Media alt="icn" src={MediaGroup.BitPinas} size="70px" />
                  <Media alt="icn" src={MediaGroup.AsiaTokenFund} size="70px" />
                  <Media alt="icn" src={MediaGroup.CoinVoice} size="70px" />
                </MediaDiv>
              </DivShowCase>
              <DivShowCase>
                <Text color="rgba(255,255,255,0.5)" fontSize="1.5em">
                  Organized and Co-presented by:
                </Text>
                <MediaDiv>
                  <Media alt="icn" src={MediaGroup.Ownly} size="100px" />
                  <Media alt="icn" src={MediaGroup.SRK} size="100px" />
                  <Media alt="icn" src={MediaGroup.DTI} size="50px" />
                </MediaDiv>
              </DivShowCase>
            </div>
          </DetailsContainer>
      
        </Wrapper>
      </Container>
    );
};

export default CarouselRenderer;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  @media screen and (min-width: 700px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (min-width: 2000px) {
    padding: 5rem 0rem;
  }
`;


const FontResponsive = styled.div`
  font-size: 4.5px;

  @media screen and (min-width: 400px) {
    font-size: 6px;
  }

  @media screen and (min-width: 670px) {
    font-size: 7px;
  }


  @media screen and (min-width: 970px) {
    font-size: 9px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 11px;
  }

  @media screen and (min-width: 2500px) {
    font-size: 16px;
  }
`;



const Wrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  min-height: 45vh;
  justify-content: space-around;
  padding: 2.5rem 0rem;
  & > button {
    border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }

  @media screen and (min-width: 700px) {
    align-items: flex-start;
    padding: 2.5rem 1rem;
  }

  @media screen and (min-width: 750px) {
    justify-content: space-between;
  }

`;

const RegisterDiv = styled.div`
  text-align: center;
  & > a > ${Button} {
    border-radius: 15px;
    padding: 10px;
    width: 200px;
    height: 50px;
    margin-bottom: 5px;
    & > ${Heading} {
      font-size: 1.3em;
    }
  }
  @media screen and (min-width: 400px) {
    & > a > ${Button} {
      width: 200px;
      height: 50px;
  
    }
  }
  @media screen and (min-width: 670px) {
    text-align: left;
    & > a > ${Button} {
      width: 320px;
      height: 80px;
      & > ${Heading} {
        font-size: 2em;
      }
    }
    & > ${Text} {
      font-size: 2.4em;
    }
  }
  @media screen and (min-width: 970px) {
    text-align: left;
    & > ${Text} {
      font-size: 1.9em;
    }
  }
  @media screen and (min-width: 1440px) {
    & > a > ${Button} {
      width: 400px;
      height: 100px;
      & > ${Heading} {
        font-size: 2.8em;
      }
    }
    & > ${Text} {
      font-size: 1.9em;
    }
  }
  @media screen and (min-width: 2500px) {
    & > a > ${Button} {
      width: 600px;
      height: 120px;
      & > ${Heading} {
        font-size: 3.5em;
      }
    }
    & > ${Text} {
      font-size: 2em;
    }
  }
`

const BBCText = styled(Text)`
  margin-top: 0.5rem;
  font-size: 3em;
  font-weight: 600;
  @media screen and (min-width: 670px) {
    font-size: 3.2em;
  }
  @media screen and (min-width: 900px) {
    font-size: 3.25em;
  }

  @media screen and (min-width: 1440px) {
    font-size: 3.3em;
  }
  @media screen and (min-width: 2500px) {
    font-size: 3.5em;
  }

`;



const LogoImage = styled.img`
  width: 280px !important;

  @media screen and (min-width: 400px) {
    width: 320px!important;
  }

  @media screen and (min-width: 670px) {
    width: 400px!important;
  }

  @media screen and (min-width: 970px) {
    width: 510px !important;
  }

  @media screen and (min-width: 1440px) {
    width: 650px !important;
  }
  @media screen and (min-width: 2500px) {
    width: 1000px !important;
  }
`;

const LogoWrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 670px) {
    align-items: flex-start;
  }
`;

const TextWrapper = styled(FontResponsive)`
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: 700px) {
    text-align: left;
  }
`;

const DivShowCase = styled(FontResponsive)`
  width: 100%;
  margin-top: 1rem;
  flex: 1;
  font-size: 13px;
`;
const MediaDiv = styled.div`
  margin-top:5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 670px) {
    justify-content: space-between;
  }

`;

const Media = styled.img`
  width: ${(props) => props.size ?? "55px"} !important;
  margin-right: 1rem;
  @media screen and (min-width: 692px) {
    width: ${(props) => `calc(${props.size} + 0px)`}!important;
  }
  @media screen and (min-width: 900px) {
    width: ${(props) => `calc(${props.size} + 25px)`}!important;
  }
  @media screen and (min-width: 1200px) {
    width: ${(props) => `calc(${props.size} + 35px)`}!important;
  }
  @media screen and (min-width: 2000px) {
    width: ${(props) => `calc(${props.size} + 100px)`}!important;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
`;
