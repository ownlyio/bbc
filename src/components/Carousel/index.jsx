import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";

const AppCarousel = ({ components }) => {

  return (
    <Carousel
      className="carousel"
      showArrows={false}
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      centerMode={Object.values(components).length > 1}
    >
      {Object.values(components).map((component, key) => {
        return (
          <CarouselItem key={key}>
            {component()}
          </CarouselItem>
        )
      })}
    </Carousel>
  );
};

export default AppCarousel;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const CarouselItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
