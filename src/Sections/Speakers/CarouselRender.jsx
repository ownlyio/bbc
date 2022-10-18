import React, { useState } from "react";
import styled from "styled-components";
import SpeakersList from "../../config/constant/speakers";
import { Text, Heading } from "../../components/Text";
import Avatar from "../../components/Avatar";
import AppCarousel from "../../components/Carousel";
import { Button as CustomBtn } from "../../components/Button";


const CarouselRender = () => {
  const [showAll, setShowAll] = useState(false);
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  const item1 = () => {
    return SpeakersList.map((spkr, key) => (
      <div key={key}>
        <Avatar name={spkr.name} title={spkr.title} desc={spkr.description} />
      </div>
    ));
  };

  return (
    <div className="d-flex" style={{ textAlign: "center" }}>
      {/* { 
      !showAll? <AppCarousel type="Elastic" options={{breakpoints}} components={{ item1 }}/> : (
        <div className='d-flex flex-wrap justify-content-center'>
          {item1()}
        </div>
      )}
      <CustomBtn onClick={() => setShowAll(!showAll)} style={{marginTop: '2rem'}}>More ></CustomBtn> */}
      <div style={{margin: '0 auto'}}>
      <StyledTBADiv style={{margin: '0 auto'}}>
        <Text color="rgba(255,255,255,0.8)" fontSize="2.5rem">
          To be announced!
        </Text>
        <hr style={{color: '#bc9849', width: '100%', height: '5px', opacity: '1'}} />
      </StyledTBADiv>
      </div>
    </div>
  );
};

export default CarouselRender;
const StyledTBADiv = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
