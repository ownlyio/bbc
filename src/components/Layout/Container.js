import styled from "styled-components";

export const Container = styled.div`
  min-height: ${props => props.minHeight};
  height: 100%;
  padding: ${props => props.padding ?? '4em 3em 5em 3em'};
  @media screen and (max-width: 500px) {
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 3rem 15rem;
  }
  @media screen and (min-width: 2400px) {
    padding: 3rem 20rem;
  }
`

export const ContainerWithBackground = styled(Container)` 
  background: ${props => `url(${props.background})`};
  background-blend-mode: overlay;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

`