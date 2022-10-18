import React from "react";
import styled from "styled-components";
const LogoBox = ({ background, border, src, padding, width }) => {
  return (
    <LogoBG background={background} border={border} padding={padding}>
      <Logo alt="logo" src={src} width={width}/>
    </LogoBG>
  );
};

export default LogoBox;

export const LogoBG = styled.div`
  background-color: ${(props) => props.background ?? props.theme.colors.light};
  padding: ${(props) => props.padding ?? "25px"};
  ${(props) =>
    props.border &&
    `
    border-left: 2rem solid rgba(188,152,73,1);
  `}
  display: flex;
  margin: 12px 0px;
  align-items: center;
  ${props => props.theme.mediaQueries.md}{
    margin: 12px;
  }
`;

export const Logo = styled.img`
  width: ${props => props.width ? props.width : '150px'};
  filter: ${(props) => props.filter ?? "none"};

  @media screen and (min-width: 1250px) {
    width: ${props => props.width? `calc(${props.width} + 70px)` : '250px'};
  }
`;
