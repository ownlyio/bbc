import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (min-width: 980px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: ${props => props.width};

  @media screen and (min-width: 549px) {
    width: ${props => `calc(${props.width} + 20px)`};
  }

  @media screen and (min-width: 852px) {
    width: ${props => `calc(${props.width} * 1.75)`};
  }
  @media screen and (min-width: 980px) {
    width: ${props => `calc(${props.width} * 2)`};
  }

  @media screen and (min-width: 2000px) {
    width: ${props => `calc(${props.width} * 3)`};
  }
`