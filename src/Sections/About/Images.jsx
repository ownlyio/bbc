import React from "react";
import styled from "styled-components";
import ImageT1 from "../../assets/images/about-image1.jpg";
import ImageT2 from "../../assets/images/about-image11.jpg";
import ImageT3 from "../../assets/images/about-image12.jpg";

const Images = () => {
  return (
    <Container style={{ display: "flex" }}>
      <Img src={ImageT1} alt="image1" style={{ flex: "2" }} />
      <Wrapper style={{ flex: "1" }}>
        <Img src={ImageT2} alt="image1" subImg  style={{flex: 1}}/>
        <Img src={ImageT3} alt="image1" subImg style={{flex: 1}} />
      </Wrapper>
    </Container>
  );
};

export default Images;

const Img = styled.img`
  width: ${props => props.subImg? '100px' : '200px'};

  ${props => props.theme.mediaQueries.sm} {
    width: ${props => props.subImg? '150px' : '300px'};
  }

  @media screen and (min-width: 851px) {
    width: ${(props) => props.subImg ? '200px': "400px"};
  }

  @media screen and (min-width: 1230px) {
    width: ${(props) => props.subImg ? '200px': "600px"};
  }
  @media screen and (min-width: 2000px) {
    width: ${(props) => props.subImg ? '300px': "750px"};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  ${props => props.theme.mediaQueries.md} {
    flex-direction: column;
  }
  @media only screen and (min-width: 1400px) {
    flex-direction: row;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 851px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1400px)  {
    flex-direction: column;
  }
`