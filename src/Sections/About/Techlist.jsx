import React from "react";
import styled from "styled-components";
import { Text, Heading} from "../../components/Text";
import SRK from "../../assets/SRK_wordmark.svg";
import Ownly from "../../assets/logos/Ownly/ownly-icon-text-horizontal.png";
import SLETI from "../../assets/logos/SparkLearn EdTech/Black_wLogo.svg"
import MGG from "../../assets/logos/mgg.png";
import useTheme from "../../hooks/useTheme";
import { Container, Img } from './style'

const Techlist = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <Wrapper style={{flex: '2 0'}}>
        <ImageContainer background={theme.colors.dark}>
          <Img src={SRK} alt="image" width="125px" />
        </ImageContainer>
        <ImageContainer background={theme.colors.dark}>
          <Img src={Ownly} alt="image" width="125px" />
        </ImageContainer>
      </Wrapper>
      <Wrapper style={{flex: '1 2'}}>
        <ImageContainer background={theme.colors.light}>
          <Img src={SLETI} alt="image" width="120px" />
        </ImageContainer>
        <ImageContainer background='#e4c24f' justify="space-between">
          <Img src={MGG} alt="image" width="30px" />
          <Heading fontSize="1.2em" style={{fontStyle: 'italic', marginLeft: '2px'}}>MetaGaming Guild</Heading>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Techlist;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify ?? 'center'};
  flex: 1;
  background-color: ${(props) => props.background};
  padding: 15px;
  font-size: 7px;
  @media screen and (min-width: 550px) {
    font-size: 9px;
  }

  @media screen and (min-width: 852px) {
    padding: 25px;
  }

  @media screen and (min-width: 980px) {
    font-size: 17px;
    padding: 45px;
  }

  @media screen and (min-width: 2400px) {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
