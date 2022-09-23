import React from "react";
import styled from "styled-components";
import CarouselRender from "./CarouselRender";
import PageLayout from "../../components/Layout";
import useTheme from "../../hooks/useTheme";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";
import { Button } from "react-bootstrap";

const Speakers = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <PageLayout>
      <ContainerWithBackground>
        <SpeakersSection className="flex-column align-items-center">
          <div
            className="intro-text d-flex flex-column align-items-center"
            style={{ padding: "0 25px" }}
          >
            <Heading fontSize="3em">MEET THE SPEAKERS</Heading>
            <Text fontSize="1.5em">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              quae nihil pariatur laborum similique, dolore architecto, minima
              dignissimos repellendus molestiae, facere autem! Minima tempora
              harum aliquid sapiente ipsa quia ab.
            </Text>
          </div>
          <div style={{ margin: "3rem 0 ", width: "100%" }}>
            <CarouselRender />
          </div>
          <ApplySection className="d-flex flex-column flex-md-row">
            <div className="d-flex flex-column align-items-lg-start justify-content-lg-between align-items-sm-center justify-content-sm-center">
              <Heading fontSize="3em">APPLY AS SPEAKER</Heading>
              <Button variant="outline">
                <Heading fontSize="1.5em" color={theme.colors.secondary}>
                  Apply Here >
                </Heading>
              </Button>
            </div>
            <div>
              <Text fontSize="1.5em">
                BBC's door is always open for brilliant, speaking mind, that are
                well-versed in the field of Blockchain Technology and Web3.
              </Text>
              <Text fontSize="1.5em">
                If you are a founder, project lead or anyone that has been
                integral in developing blockchain-based products and services
                and is willing to share your expertise, passion, knowledge and
                wants to become an evangelist of this disruptive tech, then BBC
                is the starting point for you.
              </Text>
            </div>
          </ApplySection>
        </SpeakersSection>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default Speakers;

const Section = styled.div`
  display: flex;
  margin: 10px 0px;
  & > * {
    padding: 5px;
  }
`;

const SpeakersSection = styled(Section)`
& > div {
  text-align: center;
}
  & > .intro-text {
    font-size: 17px;
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
