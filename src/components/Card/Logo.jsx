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
  margin: 12px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: ${props => `${props.width}!important`?? '150px'};
  filter: ${(props) => props.filter ?? "none"};

  ${(props) => props.theme.mediaQueries.lg} {
    width: ${(props) => props.size ?? "150px"};
  }
`;
