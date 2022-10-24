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
        <Heading className='avtr-name'>{name.toUpperCase()}</Heading>
        <Text className='avtr-desc'>{title}</Text>
        <Text className='avtr-desc'>{desc}</Text>
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
  color: #fff;
`;

const ProfilePic = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const InfoDiv = styled.div`
  font-size: 14px;
  .avtr-name {
    color: #fff;
    font-size: 0.9em;
  }
 .avtr-desc {
    font-size: 0.8em;
    color: #fff;
  }

  @media screen and (min-width: 1360px) {
    font-size: 24px;
  }
`;
