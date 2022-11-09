import React from "react";
import styled from "styled-components";
import SpeakersImages from './fetchSpeakerLogo'
import { Text, Heading } from "../Text";

const Avatar = ({ name, title, desc, src }) => {
    const image = SpeakersImages[`${src}`]
    return (
        <Container className="d-flex flex-column">
            <AvatarBG style={{"backgroundImage":"url('" + image + "')"}}></AvatarBG>
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
  padding:0 30px;
  
  @media screen and (min-width: 576px) {
    padding:0 20px;
  }
`;

const AvatarBG = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  padding-top:100%;
  border-radius: 20px;
`;

const ProfilePic = styled.img`
  width: 220px;
  height: 188px;
  border-radius: 20px;

  @media screen and (min-width: 1500px) {
    width: 280px;
    height: 288px;  
  }
`;

const InfoDiv = styled.div`
  font-size: 14px;
  .avtr-name {
    color: #fff;
    font-size: 1.3em;
  }
 .avtr-desc {
    font-size: 1em;
    color: #fff;
    font-weight: 300;
  }

  @media screen and (min-width: 1360px) {
    font-size: 17px;
  }
`;
