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
          <Img src={SLETI} alt="image" width="75px" />
        </ImageContainer>
        <ImageContainer background='#e4c24f'>
          <Img src={ImageT3} alt="image" width="75px" />
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
  background-color: ${(props) => props.background};
  padding: 15px;

  @media screen and (min-width: 980px) {
    padding: 45px;
  }

`;

const Img = styled.img`
  width: ${(props) => props.width ?? "100px"};

  @media screen and (min-width: 570px) {
    width: ${(props) => props.width? `calc(${props.width} * 2)`: '200px'};
  }

  @media screen and (min-width: 980px) {
    width: ${(props) => props.width? `calc(${props.width} * 3)`: '300px'};
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

  @media screen and (min-width: 851px)  {
    flex-direction: row;
  }
  @media screen and (min-width: 980px)  {
    flex-direction: column;
  }
  @media screen and (min-width: 1400px) {
    flex-direction: column;
  }
`;
