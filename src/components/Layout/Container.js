import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: ${props => props.padding ?? '4em 3em 5em 3em'};
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`

export const ContainerWithBackground = styled(Container)``