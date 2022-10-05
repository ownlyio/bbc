import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import BG1 from '../../assets/bg/bg_carousel1.png';
import BBCLogo from "../../assets/official logo.png";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Button } from "../../components/Button";
import { H1, Heading, Text } from "../../components/Text";
import AppCarousel from "../../components/Carousel";

const CarouselRenderer = () => {
  const item1 = () => {
    return (
      <Container background={BG1}>
        <Wrapper>
          <Heading fontSize="2.1em" color="#fff">BLOCKCHAIN FOUND ITS NEW HOME.</Heading>
          <TextWrapper>
            <Heading fontSize="5em">SEE YOU IN</Heading>
            <Heading fontSize="15em">BICOL</Heading>
          </TextWrapper>
          <Button variant="outline-primary">
            <Text fontSize="2em">Register</Text>
          </Button>
        </Wrapper>
        <Wrapper className="align-items-center">
          <LogoWrapper>
            <LogoImage alt="bbc-logo" src={BBCLogo} />
            <Text color="#fff" className='logo-subtitle' fontSize="2.8em">
              BICOL BLOCKCHAIN CONFERENCE
            </Text>
          </LogoWrapper>
          <Heading color="#fff" fontSize="3em">11.14.22 | LEGAZPI CITY</Heading>
        </Wrapper>
      </Container>
    );
  };

  return <AppCarousel components={{ item1 }} />;
};

export default CarouselRenderer;

const Container = styled(ContainerWithBackground)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
  }

  ${props => props.theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 10rem 5rem;
  }
`

const FontResponsive = styled.div`
  font-size: 17px;
  ${props => props.theme.mediaQueries.xxs} {
    font-size: 5px;
  }
  ${props => props.theme.mediaQueries.sm} {
    font-size: 10px;
  }
  ${props => props.theme.mediaQueries.xl} {
    font-size: 15px;
  }
`

const Wrapper = styled(FontResponsive)`
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: space-between;

  & > button {
    border: ${props => `1px solid ${props.theme.colors.primary}`};
  }

  @media screen and (max-width: 500px) {
    & > button {
      margin: 0 auto;
    }
  }
`;

const LogoImage = styled.img``

const LogoWrapper = styled(FontResponsive)`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  text-align: center;
`;

const TextWrapper = styled(FontResponsive)`
  padding: 2rem 0;
  text-align: left;
  color: ${(props) => props.theme.colors.secondary};
`;
