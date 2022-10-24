import React, { useState } from "react";
import styled from "styled-components";
import SpeakersList from "../../config/constant/speakers";
import { Text, Heading } from "../../components/Text";
import Avatar from "../../components/Avatar";
import AppCarousel from "../../components/Carousel";
import { Button as CustomBtn } from "../../components/Button";
import { Grid } from "@mui/material";


const CarouselRender = () => {
  const [showAll, setShowAll] = useState(true);
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  const item1 = () => {

    return SpeakersList.map((spkr, key) => (
        <Avatar key={key} name={spkr.name} title={spkr.title} desc={spkr.description} src={spkr.src} />
    ));
  };

  return (
    <div style={{ textAlign: "center" }}>
      { 
      !showAll? <AppCarousel type="Elastic" options={{breakpoints}} components={{ item1 }}/> : (
        <Grid container columnSpacing={3} rowSpacing={3} direction="row"
        justifyContent="center">
          {
            SpeakersList.map((spkr, key) => (
              <Grid key={key} item xs={12} sm={6} md={3}>
              <Avatar name={spkr.name} title={spkr.title} desc={spkr.description} src={spkr.src} />
              </Grid>
          ))
          }
        </Grid>
      )}
      <CustomBtn onClick={() => setShowAll(!showAll)} style={{marginTop: '2rem'}}>{!showAll? 'More >' : ' < less'}</CustomBtn>
      {/* <div style={{margin: '0 auto'}}>
      <StyledTBADiv style={{margin: '0 auto'}}>
        <Text color="rgba(255,255,255,0.8)" fontSize="2.5rem">
          To be announced!
        </Text>
        <hr style={{color: '#bc9849', width: '100%', height: '5px', opacity: '1'}} />
      </StyledTBADiv>
      </div> */}
    </div>
  );
};

export default CarouselRender;

const StyledAllDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 1rem 0;
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const StyledTBADiv = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
