import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import DICTLogo from "../../assets/logos/dict.png";
import DTILogo from "../../assets/logos/dti.png";
import BICOLITLogo from "../../assets/logos/bicolIT.png";
import BlockTidesLogo from "../../assets/logos/blocktides.jpeg";
import Panel from "../../assets/images/panel.jpg";
import BreakoutSessions from "../../assets/images/breakout.jpg";
import SideSessions from "../../assets/images/side-sessions.jpg";
import Networking from "../../assets/images/networking.jpg";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";

const AboutSection = () => {
  return (
    <PageLayout>
      <ContainerWithBackground padding="0">
        <NewHome>
          <TextWrap>
            <Heading fontSize="3em">
              BLOCKCHAIN FOUND ITS NEW HOME, BICOL
            </Heading>
            <Text fontSize="1.5em">
              Bicol Blockchain Conference or simply “BBC” is the latest local
              blockchain community event in the Philippines. It aims to gather
              everyone to discuss and talk about Blockchain Technology and Web3,
              its various use-cases, applications, and explore the opportunities
              it provides to our everyday life. It will be the largest gathering
              for blockchain tech at the south of Metro Manila.
            </Text>
          </TextWrap>
          <ImageWrap>IMG</ImageWrap>
        </NewHome>
        <Organizer>
          <ImageWrap padding="24px 24px 24px 0px">IMG</ImageWrap>
          <TextWrap>
            <Heading fontSize="3em">
              A SHOWCASE OF BICOL’S ORAGON SPIRIT IN TECH
            </Heading>
            <Text fontSize="1.5em">
              With the booming tech industry in the country, new concepts to
              speed up mass adoption of blockchain tech came into inception:
              SparkLearn EdTech and MetaGaming Guild, which are now paving the
              way for blockchain adoption through education and upskilling, and
              gaming.
            </Text>
            <Text fontSize="1.5em">
              These projects have become the true testament of the Bicolano
              spirit, being “oragon” or feisty in their aspiration to become the
              breeding ground of the cutting-edge tech in the Philippines.
              Welcome to Bicol.
            </Text>
          </TextWrap>
        </Organizer>
      </ContainerWithBackground>
      <ContainerWithBackground>
        <Sponsors>
          <TextWrap>
            <Heading fontSize="2.5em">IN SPECIAL COLLABORATION</Heading>
          </TextWrap>
          <div className="d-flex flex-wrap justify-content-center">
            <LogoBG>
              <Logo alt="logo-1" src={DICTLogo} />
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={DTILogo} />
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={BICOLITLogo} />
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={BlockTidesLogo} />
            </LogoBG>
          </div>
        </Sponsors>
        <BlockchainInfo className="flex-column align-items-center">
          <TextWrap
            style={{ margin: "15px 0px", textAlign: "center" }}
            className="d-flex flex-column align-items-center"
          >
            <Heading fontSize="3em">A DAY FOR ALL-THINGS-BLOCKCHAIN</Heading>
            <Text fontSize="1.5em">
              The conference provides an avenue for founders and leads of
              blockchain-based projects, spectators, media, enthusiasts and all
              the curious minds to spark discussions about the latest trends,
              developments, new products and applications, thoughts and
              opinions, opportunities, right in the newest blockchain tech
              hotspot in the Philippines, Bicol.
            </Text>
          </TextWrap>
          <div className="d-flex flex-wrap">
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={Panel}
                size="400px"
                filter="sepia(100%)"
              />
              <Text margin="15px 0px" fontSize="1.5em">
                PANEL DISCUSSIONS
              </Text>
            </LogoBG>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={BreakoutSessions}
                size="400px"
                filter="sepia(100%)"
              />
              <Text margin="15px 0px" fontSize="1.5em">
                BREAKOUT SESSIONS
              </Text>
            </LogoBG>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={SideSessions}
                size="400px"
                filter="sepia(100%)"
              />
              <Text margin="15px 0px" fontSize="1.5em">
                SIDE SESSIONS
              </Text>
            </LogoBG>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={Networking}
                size="400px"
                filter="sepia(100%)"
              />
              <Text margin="15px 0px" fontSize="1.5em">
                NETWORKING
              </Text>
            </LogoBG>
          </div>
        </BlockchainInfo>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default AboutSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NewHome = styled(Section)`
  & > * {
    flex: 1;
  }
`;

const TextWrap = styled(Wrapper)`
  padding: 24px;
  font-size: 10px;
   & > ${Heading} {
    color: ${props => props.theme.colors.secondary};
  }
  & > * {
    margin: 10px 24px;
  }

  ${(props) => props.theme.mediaQueries.md} {
    font-size: 17px;
  }
`;
const ImageWrap = styled(Wrapper)`
  padding: ${(props) => props.padding ?? "24px 0px 24px 24px;"};
`;

const Organizer = styled(Section)`
  & > * {
    flex: 1;
  }
`;

const Sponsors = styled(Section)`
  justify-content: space-around;
`;
const LogoBG = styled.div`
  background-color: ${(props) => props.background ?? props.theme.colors.light};
  padding: ${(props) => props.padding ?? "25px"};
  margin: 12px;
  display: flex;
  align-items: center;
  & > ${Text} { 
    color: ${props => props.theme.colors.light};
  }
`;
const Logo = styled.img`
  width: 150px;
  filter: ${(props) => props.filter ?? "none"};

  ${props => props.theme.mediaQueries.lg} {
    width: ${(props) => props.size ?? "150px"};
  }
`;

const BlockchainInfo = styled(Section)`
  justify-content: space-around;
`;
