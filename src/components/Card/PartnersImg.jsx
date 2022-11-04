import React from "react";
import styled from "styled-components";
const LogoBox = ({ background, border, src, padding, width, height }) => {
  return (
    <LogoBG background={background} border={border} padding={padding} width={width}>
      <Logo alt="logo" src={src} height={height ?? 'auto'}/>
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
    border-left: 1rem solid rgba(188,152,73,1);
  `}
  display: flex;
  margin: 12px 0px;
  align-items: center;
  ${props => props.theme.mediaQueries.md}{
    margin: 12px;
  }
  height: 100%;
  width: ${props => props.width ? props.width : 'auto'};
  @media screen and (min-width: 1250px) {
    width: ${props => props.width? `calc(${props.width} + 70px)` : 'auto'};
    ${(props) =>
      props.border &&
      `
      border-left: 2rem solid rgba(188,152,73,1);
    `}
    padding: ${(props) => `calc(${props.padding}+1rem)` ?? "25px"};
  }
`;

export const Logo = styled.img`
  width: 100%;
  filter: ${(props) => props.filter ?? "none"};
`;
