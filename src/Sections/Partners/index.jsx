import React, { useState } from "react";
import styled from "styled-components";
import BG5 from "../../assets/bg/pane5.png";
import partners from "../../config/constant/partners";
import PageLayout from "../../components/Layout";
import { Heading, Text } from "../../components/Text";
import { ContainerWithBackground } from "../../components/Layout/Container";
import useTheme from "../../hooks/useTheme";
import Tabs from "../../components/Tabs";
import LogoBox from "../../components/Card/Logo";
import Album from "./Albums";
import Input from "../../components/Input";

import { TextWrap } from "../About";
import { Button } from "../../components/Button";

const opportunities = ['Speaking slot', 'Branded side events','Branded main event segments','Expo booths', 'And many more!']

const Partners = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [partnersCollection, setPartnersCollection] = useState(
    partners[Object.keys(partners)[2]]
  );
  return (
    <PageLayout margin="0" id="partners">
      <ContainerWithBackground background={BG5}>
        {/* <StyledDiv style={{ padding: "10px 0" }}>
          <TextWrap style={{flex: 1}} align='flex-start'>
            <Heading fontSize="3em">PARTNERSHIP</Heading>
            <Text fontSize="1.5em" color="#fff">
            Searching for brand exposure and interaction in the rapidly evolving Web 3 space? We provide several opportunities for you to present your project at our event:
            </Text>
            <ul>
              {opportunities.map((list, key) => {
                return (
                  <li key={key} style={{color: '#fff'}}>
                    <Text fontSize="1.5em" color="#fff">{list}</Text>
                  </li>
                )
              })}
            </ul>
          </TextWrap>
          <TextWrap style={{flex: 1, overflow: 'hidden'}} align='flex-start'>
            <Heading fontSize="3em">BECOME OUR PARTNER!</Heading>
            <Text fontSize="1.5em" color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ad iure. Error animi eos facere facilis quia, hic voluptatem fuga
              eius, repellat quod illum, quos sed ullam nesciunt non magnam!
            </Text>
            <Input placeholder='Email Address' width='75vw'/>
            <ActionBtnGrp className="d-flex" style={{width: '100%'}} >
            <Button >Request Sponsorship Deck</Button>
            </ActionBtnGrp>
          </TextWrap>
        </StyledDiv> */}
        <TextWrap style={{alignItems: 'flex-start'}}>
          <Heading fontSize="3em" color={theme.colors.secondary}>
            OUR EVENT PARTNERS
          </Heading>
        </TextWrap>
        <Tabs
          withAll
          details={partners}
          triggers={{
            setActiveIndex,
            activeIndex,
            setCollection: setPartnersCollection,
          }}
        >
          <Album
            items={activeIndex === 0 ? partners : partnersCollection}
            activeIndex={activeIndex}
          />
        </Tabs>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default Partners;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 615px) {
    flex-direction: row;
  }
`

const ActionBtnGrp = styled.div`
  justify-content: center;

  @media screen and (min-width: 650px) {
    justify-content: flex-end;
  }
`