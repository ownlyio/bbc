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
        <Img src={ImageT2} alt="image1" width="250px"  style={{flex: 1}}/>
        <Img src={ImageT3} alt="image1" width="250px" style={{flex: 1}} />
      </Wrapper>
    </Container>
  );
};

export default Images;

const Img = styled.img`
  width: ${props => props.width? '80px' : '160px'};

  ${props => props.theme.mediaQueries.sm} {
    width: ${props => props.width? '125px' : '250px'};
  }

  ${(props) => props.theme.mediaQueries.md} {
    width: ${(props) => props.width ? '200px': "400px"};
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

  ${props => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
  ${props => props.theme.mediaQueries.xl} {
    flex-direction: column;
  }
`