import React from "react";
import styled from "styled-components";
import SpeakersImages from './fetchSpeakerLogo'
import { Text, Heading } from "../Text";

const Avatar = ({ name, title, desc, src }) => {
  const image = SpeakersImages[`${src}`]
  return (
    <Container className="d-flex flex-column">
      <AvatarBG>
        <ProfilePic alt="speaker-img" src={image}/>
      </AvatarBG>
      <InfoDiv style={{ marginTop: "24px", textAlign: "center" }}>
        <Heading>{name.toUpperCase()}</Heading>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </InfoDiv>
    </Container>
  );
};

export default Avatar;

const Container = styled.div`
  flex: 1;
  height: auto;
  width: auto;
  align-items: center;
`;

const AvatarBG = styled.div`
  display: flex;
  
  width: 300px;
  min-height: 200px;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;
  // background: rgb(254,253,249);
  // background: linear-gradient(71deg, rgba(254,253,249,1) 15%, rgba(255,217,122,1) 54%);
  color: #fff;
`;

const ProfilePic = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const InfoDiv = styled.div`
  font-size: 14px;
  & > ${Heading}, ${Text} {
    color: #fff;
    font-size: 1em;
  }

  @media screen and (min-width: 1360px) {
    font-size: 24px;
  }
`;
