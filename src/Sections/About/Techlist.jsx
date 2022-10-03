import React from "react";
import styled from "styled-components";
import SRK from "../../assets/SRK_wordmark.svg";
import Ownly from "../../assets/logos/Ownly/ownly-icon-text-horizontal.png";
import SLETI from "../../assets/logos/SparkLearn EdTech/Black_wLogo.svg"
import ImageT3 from "../../assets/logos/SparkLearn EdTech/Black_wLogo.svg";
import useTheme from "../../hooks/useTheme";

const Techlist = () => {
  const { theme } = useTheme();
  return (
    <Container style={{ display: "flex" }}>
      <Wrapper>
        <ImageContainer background={theme.colors.dark}>
          <Img src={SRK} alt="image" />
        </ImageContainer>
        <ImageContainer background={theme.colors.dark}>
          <Img src={Ownly} alt="image" />
        </ImageContainer>
      </Wrapper>
      <Wrapper>
        <ImageContainer background={theme.colors.light}>
          <Img src={SLETI} alt="image" width="250px" />
        </ImageContainer>
        <ImageContainer background='#e4c24f'>
          <Img src={ImageT3} alt="image" width="250px" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Techlist;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.background};

  ${props => props.theme.mediaQueries.lg} {
    padding: 24px;
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? "80px" : "160px")};

  ${(props) => props.theme.mediaQueries.sm} {
    width: ${(props) => (props.width ? "125px" : "250px")};
  }

  ${(props) => props.theme.mediaQueries.xl} {
    width: ${(props) => props.width ?? "550px"};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: column;
  }
  @media only screen and (min-width: 1400px) {
    flex-direction: row;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
  ${(props) => props.theme.mediaQueries.xl} {
    flex-direction: column;
  }
`;
