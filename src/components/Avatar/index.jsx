import React from "react";
import styled from "styled-components";
import { Text, Heading } from "../Text";

const Avatar = () => {
  return (
    <Container className="d-flex flex-column">
      <AvatarBG>
        <LogoContainer>test</LogoContainer>
      </AvatarBG>
      <InfoDiv style={{marginTop: '24px', textAlign: 'center'}} >
        <Heading>NAME NAME</Heading>
        <Text>DESIGNATION, COMPANY</Text>
      </InfoDiv>
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  padding: 15px;
`;

const AvatarBG = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  min-height: 200px;
  min-width: 200px;
  border-radius: 50%;
  color: #fff;
`;

const LogoContainer = styled.div`
  height: 40px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 5px;
`;

const InfoDiv = styled.div`
  & > ${Heading}, ${Text} {
    color: ${props => props.theme.colors.secondary};
  }
`
