import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import NewHomeImage from "../../assets/about-image-1.jpeg";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";

const AboutSection = () => {
  return (
    <PageLayout>
      <ContainerWithBackground padding="0">
        <Wrapper>
          <TextWrapper
            className="d-flex flex-column justify-content-center"
            style={{ padding: "50px" }}
          >
            <Heading bold size="xl" color="#bc9849">
              BLOCKCHAIN FOUND ITS <br /> NEW HOME, BICOL.
            </Heading>
            <Text fontSize="1.2em">
              Bicol Blockchain Conference or simply "BBC" is the latest local{" "}
              <br />
              blockchain community event in the Philippines. It aims to gather{" "}
              <br />
              everyone to discuss and talk about Blockchain Technology and
              <br />
              Web3, its various use-cases, applications, and explore the
              <br />
              opportunities it provides to our everyday life. It will be the
              <br />
              largest gathering for blockchain tech at the south of Metro
              <br />
              Manila.
            </Text>
          </TextWrapper>
          <div className="d-flex justify-content-end">
            <img
              alt="new-home-image"
              src={NewHomeImage}
              width="90%"
              height="auto"
            />
          </div>
        </Wrapper>
        <Wrapper>
          <div className="d-flex justify-content-start">
            <img
              alt="new-home-image"
              src={NewHomeImage}
              width="90%"
              height="auto"
            />
          </div>
          <TextWrapper
            className="d-flex flex-column"
            style={{ padding: "50px" }}
          >
            <Heading bold size="xl" color="#bc9849">
              A SHOWCASE OF BICOL'S <br />
              ORAGON SPIRIT IN TECH
            </Heading>
            <Text fontSize="1.2em">
              With the booming tech industry in the country, new <br />
              concepts to speediup mass adoption of blockchain tech <br /> came
              into inception: SparkLearn EdTech and <br /> MetaGaming Guild,
              which are now paving the way for <br /> blockchain adoption
              through education and upskilling, <br /> and gaming.
            </Text>
            <Text fontSize="1.2em">
              These projects have become the true testament of the <br />{" "}
              Bicolano spirit, being "oragon" or feisty in their <br />{" "}
              aspiration to become the breeding ground of the <br />{" "}
              cutting-edge tech in the Philippines. Welcome to Bicol.
            </Text>
          </TextWrapper>
        </Wrapper>
      </ContainerWithBackground>
      <ContainerWithBackground padding="0">
        <Wrapper>
          <TextWrapper
            className="d-flex flex-column justify-content-center"
            style={{ padding: "50px" }}
          >
            <Heading size="xl" color="#bc9849">
              IN SPECIAL <br /> COLLABORATION
            </Heading>
          </TextWrapper>
          <LogoWrapper className="d-flex align-items-center">
            <Logo className="d-flex justify-content-center align-items-center">
              <p>sa</p>
            </Logo>
            <Logo className="d-flex justify-content-center align-items-center">
              <p>sa</p>
            </Logo>
            <Logo className="d-flex justify-content-center align-items-center">
              <p>sa</p>
            </Logo>
            <Logo className="d-flex justify-content-center align-items-center">
              <p>sa</p>
            </Logo>
          </LogoWrapper>
        </Wrapper>
        <Wrapper
          className="d-flex align-items-center flex-column"
          style={{ padding: "3em" }}
        >
          <Heading size="xl" color="#bc9849">
            A DAY FOR ALL-THINGS-BLOCKCHAIN
          </Heading>
          <Text fontSize="1.5em" style={{ textAlign: "center" }}>
            The conference provides an avenue for founders and leads of
            blockchain-based projects, spectators, media, enthusiasts and all
            the curious minds to spark discussions about the latest trends,
            developments, new products and applications, thoughts and opinions,
            opportunities, right in the newest blockchain tech hotspot in the
            Philippines, Bicol.
          </Text>
        </Wrapper>
        <div className="d-flex justify-content-center" style={{margin: '2em 0'}}>
          <Logo className="d-flex justify-content-center align-items-center">
            <p>sa</p>
          </Logo>
          <Logo className="d-flex justify-content-center align-items-center">
            <p>sa</p>
          </Logo>
          <Logo className="d-flex justify-content-center align-items-center">
            <p>sa</p>
          </Logo>
          <Logo className="d-flex justify-content-center align-items-center">
            <p>sa</p>
          </Logo>
        </div>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  & > div {
    flex: 2 1 auto;
  }
`;
const TextWrapper = styled.div`
  & > * {
    margin: 5px 0px;
  }
`;
const LogoWrapper = styled.div`
  & > * {
    flex: 1;
  }
`;
const Logo = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ffeac1;
  margin: 0px 2rem;
`;
