import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Button } from "../../components/Button";
import { H1, Heading } from "../../components/Text";
import AppCarousel from "../../components/Carousel";

const Wrapper = ({ children }) => (
  <div className="d-flex flex-column align-items-start">{children}</div>
);

const CarouselRenderer = () => {
  const item1 = () => {
    return (
      <Container fluid="md">
        <Row>
          <Col>
            <Wrapper>
              <Heading size="md" style={{color: '#fff'}}>BLOCKCHAIN FOUND ITS NEW HOME.</Heading>
              <div style={{color: '#bc9849', textAlign: 'left'}}>
                <Heading size='lg'>SEE YOU IN</Heading>
                <Heading fontSize="10em">BICOL</Heading>
              </div>
              <Button variant="outline-primary">Register</Button>
            </Wrapper>
          </Col>
          <Col>
            <Wrapper>
              <div style={{color: '#fff'}}>
              <Heading size='lg'>BICOL BLOCKCHAIN CONFERENCE</Heading>
              <Heading size='xl'>11.14.22 | LEGAZPI CITY</Heading>
              </div>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    );
  };
  
  const item2 = () => (
    <div> </div>
  )
  const item3 = () => (
    <div> </div>
  )
  return <AppCarousel components={{ item1, item2, item3}} />;
};

export default CarouselRenderer;
