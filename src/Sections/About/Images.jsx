import React from "react";
import styled from "styled-components";
import ImageT1 from "../../assets/images/about-image1.jpg";
import ImageT2 from "../../assets/images/about-image11.jpg";
import ImageT3 from "../../assets/images/about-image12.jpg";
import { Container, Img } from './style'

const Images = () => {
  return (
    <Container>
      <Img src={ImageT1} alt="image1" width="200px" style={{ flex: "2 0"}} />
      <Wrapper style={{ flex: "1 2" }}>
        <Img src={ImageT2} alt="image1" width="100px"  style={{flex: 1}}/>
        <Img src={ImageT3} alt="image1" width="100px" style={{flex: 1}} />
      </Wrapper>
    </Container>
  );
};

export default Images;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 980px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1400px)  {
    flex-direction: column;
  }
  @media screen and (min-width: 2000px)  {
    flex-direction: column;
  }
`