import React from "react";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";
import { Carousel as RRCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import { Button } from "react-bootstrap";
import { Heading } from "../Text";

const AppCarousel = ({ options, type, components }) => {
  switch (type) {
    case "Elastic":
      const CustomArrows = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? "<" : ">";
        return (
          <ArrowButtons variant="outline" onClick={onClick} disabled={isEdge}>
            <Heading size="xl"> {pointer}</Heading>
          </ArrowButtons>
        );
      };
      return (
        <Carousel
          breakPoints={options.breakpoints}
          itemsToShow={options.display ?? 1}
          pagination={options.pagination ?? false}
          renderArrow={CustomArrows}
        >
          {Object.values(components).map((component, key) => {
            console.log(component())
            if (component().length > 1) {
              return component().map((item) => <div>{item}</div>);
            }
            return <div>{component()}</div>;
          })}
        </Carousel>
      );
    case "Hero":
    default:
      return (
        <RRCarousel
          className="carousel"
          showArrows={false}
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          centerMode={Object.values(components).length > 1}
        >
          {Object.values(components).map((component, key) => {
            return <CarouselItem key={key}>{component()}</CarouselItem>;
          })}
        </RRCarousel>
      );
  }
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

const ArrowButtons = styled(Button)`
  height: 50%;
  & > ${Heading} {
    color: ${(props) => props.theme.colors.primary};
  }
`;
