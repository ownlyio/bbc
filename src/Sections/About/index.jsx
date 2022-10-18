import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import BG from "../../assets/bg/pane2.png";
import BG2 from "../../assets/bg/pane3.png";
import DICTLogo from "../../assets/logos/dict.png";
import DTILogo from "../../assets/logos/dti.png";
import BICOLITLogo from "../../assets/logos/bicolIT.png";
import BlockTidesLogo from "../../assets/logos/blocktides.jpeg";
import Panel from "../../assets/images/panel.jpg";
import BreakoutSessions from "../../assets/images/breakout.jpg";
import SideSessions from "../../assets/images/side-sessions.jpg";
import Networking from "../../assets/images/networking.jpg";
import PageLayout from "../../components/Layout";
import { Logo, LogoBG } from "../../components/Card/Logo";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";
import useTheme from "../../hooks/useTheme";
import Images from "./Images";
import Techlist from "./Techlist";

const AboutSection = () => {
  const { theme } = useTheme();
  return (
    <PageLayout margin="0" id="about">
      <ContainerWithBackground padding="2.5rem 0" background={BG}>
        <NewHome>
          <TextWrap>
            <Heading fontSize="3em">
              BLOCKCHAIN FOUND ITS NEW HOME, BICOL
            </Heading>
            <Text
              fontSize="1.5em"
              color="#fff"
              style={{ textAlign: "justify" }}
            >
              Bicol Blockchain Conference or simply “BBC” is the latest local
              blockchain community event in the Philippines. <br /> <br />
              It aims to gather everyone to discuss and talk about Blockchain
              Technology and Web3, its various use-cases, applications, and
              explore the opportunities it provides to our everyday life. <br />
              <br /> It will be the largest gathering for blockchain tech at the
              south of Metro Manila.
            </Text>
          </TextWrap>
          <ImageWrap align="flex-end">
            <Images />
          </ImageWrap>
        </NewHome>
        <Organizer>
          <ImageWrap align="flex-start" padding="24px 24px 24px 0px">
            <Techlist />
          </ImageWrap>
          <TextWrap>
            <Heading fontSize="3em">
              A SHOWCASE OF BICOL’S ORAGON SPIRIT IN TECH
            </Heading>
            <Text
              fontSize="1.5em"
              color="#fff"
              style={{ textAlign: "justify" }}
            >
              With the booming tech industry in the country, new concepts to
              speed up mass adoption of blockchain tech came into inception:{" "}
              <br />
              <br />
              SparkLearn EdTech and MetaGaming Guild, which are now paving the
              way for blockchain adoption through education and upskilling, and
              gaming.
            </Text>
            <Text
              fontSize="1.5em"
              color="#fff"
              style={{ textAlign: "justify" }}
            >
              These projects have become the true testament of the Bicolano
              spirit, being “oragon” or feisty in their aspiration to become the
              breeding ground of the cutting-edge tech in the Philippines.
              Welcome to Bicol.
            </Text>
          </TextWrap>
        </Organizer>
      </ContainerWithBackground>
      <ContainerWithBackground background={BG2}>
        {/* <Sponsors>
          <TextWrap>
            <Heading fontSize="2.5em">IN SPECIAL COLLABORATION</Heading>
          </TextWrap>
          <CollabDiv className="d-flex flex-wrap justify-content-center">
            <LogoBG>
              <Logo alt="logo-1" src={DICTLogo} width="75px"/>
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={DTILogo} width="75px" />
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={BICOLITLogo}  width="75px" />
            </LogoBG>
            <LogoBG>
              <Logo alt="logo-1" src={BlockTidesLogo}  width="75px"/>
            </LogoBG>
          </CollabDiv>
        </Sponsors> */}
        <BlockchainInfo className="flex-column align-items-center">
          <TextWrap
            style={{ margin: "15px 0px", textAlign: "center" }}
            className="d-flex flex-column align-items-center"
          >
            <Heading fontSize="3em">A DAY FOR ALL-THINGS-BLOCKCHAIN</Heading>
            <Text
              fontSize="1.5em"
              color="#fff"
              style={{ textAlign: "justify" }}
            >
              The conference provides an avenue for founders and leads of
              blockchain-based projects, spectators, media, enthusiasts and all
              the curious minds to spark discussions about the latest trends,
              developments, new products and applications, thoughts and
              opinions, opportunities, right in the newest blockchain tech
              hotspot in the Philippines, Bicol.
            </Text>
          </TextWrap>
          <Sessions>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={Panel}
                width="300px"
                filter="sepia(100%)"
              />
              <Text
                margin="15px 0px"
                fontSize="1.5em"
                color={theme.colors.light}
              >
                PANEL DISCUSSIONS
              </Text>
            </LogoBG>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            ></LogoBG>
            <LogoBG
              padding="0"
              className="flex-column align-items-start"
              background="transparent"
            >
              <Logo
                alt="logo-1"
                src={SideSessions}
                width="300px"
                filter="sepia(100%)"
              />
              <Text
                margin="15px 0px"
                fontSize="1.5em"
                color={theme.colors.light}
              >
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
                width="300px"
                filter="sepia(100%)"
              />
              <Text
                margin="15px 0px"
                fontSize="1.5em"
                color={theme.colors.light}
              >
                NETWORKING
              </Text>
            </LogoBG>
          </Sessions>
        </BlockchainInfo>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default AboutSection;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 980px) {
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

export const TextWrap = styled(Wrapper)`
  padding: 24px;
  font-size: 10px;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  & > ${Heading} {
    color: ${(props) => props.theme.colors.secondary};
  }
  & > * {
    margin: 10px 24px;
  }

  ${(props) => props.theme.mediaQueries.md} {
    font-size: 17px;
  }
`;
const ImageWrap = styled(Wrapper)`
  padding: 10px;
  align-items: ${(props) => props.align};
  ${(props) => props.theme.mediaQueries.md} {
    padding: 0;
  }
`;

const Organizer = styled(Section)`
  & > * {
    flex: 1;
  }
`;

const Sponsors = styled(Section)`
  justify-content: space-around;
`;

const BlockchainInfo = styled(Section)`
  justify-content: space-around;
`;

const Sessions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }

`;

const CollabDiv = styled.div`
  & > * {
    margin: 5px;
  }
`;
