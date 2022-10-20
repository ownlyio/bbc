import React from "react";
import styled from "styled-components";
import { Text, Heading} from "../../components/Text";
import SRK from "../../assets/SRK_wordmark.svg";
import Ownly from "../../assets/logos/Ownly/ownly-icon-text-horizontal.png";
import SLETI from "../../assets/logos/SparkLearn EdTech/Black_wLogo.svg"
import MGG from "../../assets/logos/mgg.png";
import useTheme from "../../hooks/useTheme";

const Techlist = () => {
  const { theme } = useTheme();
  return (
    <Container style={{ display: "flex" }}>
      <Wrapper style={{flex: '2 0'}}>
        <ImageContainer background={theme.colors.dark}>
          <Img src={SRK} alt="image" />
        </ImageContainer>
        <ImageContainer background={theme.colors.dark}>
          <Img src={Ownly} alt="image" />
        </ImageContainer>
      </Wrapper>
      <Wrapper style={{flex: '1 2'}}>
        <ImageContainer background={theme.colors.light}>
          <Img src={SLETI} alt="image" width="120px" />
        </ImageContainer>
        <ImageContainer background='#e4c24f'>
          <Img src={MGG} alt="image" width="40px" />
          <Heading fontSize="1.2em" style={{fontStyle: 'italic', marginLeft: '5px'}}>MetaGaming Guild</Heading>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Techlist;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props) => props.background};
  padding: 15px;
  font-size: 7px;

  @media screen and (min-width: 550px) {
    font-size: 14px;
  }

  @media screen and (min-width: 980px) {
    font-size: 22px;
    padding: 45px;
  }

`;

const Img = styled.img`
  width: ${(props) => props.width ?? "120px"};

  @media screen and (min-width: 570px) {
    width: ${(props) => props.width? `calc(${props.width} * 2)`: '250px'};
  }

  @media screen and (min-width: 980px) {
    width: ${(props) => props.width? `calc(${props.width} * 3)`: '350px'};
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
