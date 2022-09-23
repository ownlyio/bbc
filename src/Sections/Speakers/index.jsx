import React from 'react';
import styled from 'styled-components'
import CarouselRender from './CarouselRender'
import PageLayout from '../../components/Layout';
import { ContainerWithBackground } from '../../components/Layout/Container';
import { Heading, Text } from '../../components/Text';

const Speakers = () => {
  return (
    <PageLayout>
      <ContainerWithBackground>
        <SpeakersSection className='flex-column align-items-center'>
          <div className='intro-text text-justify d-flex flex-column align-items-center' style={{padding: '0 25px'}}>
            <Heading fontSize="3em">
              MEET THE SPEAKERS
            </Heading>
            <Text fontSize="1.5em">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quae nihil pariatur laborum similique, dolore architecto, minima dignissimos repellendus molestiae, facere autem! Minima tempora harum aliquid sapiente ipsa quia ab.
            </Text>
          </div>
          <div style={{margin: '3rem 0 ', width: '100%'}}>
            <CarouselRender />
          </div>
        </SpeakersSection>
      </ContainerWithBackground>
    </PageLayout>
  )
}

export default Speakers;

const Section = styled.div`
  display: flex;
`

const SpeakersSection = styled(Section)`
 & > .intro-text {
  font-size: 17px;
  & > ${Heading} {
    color: ${props => props.theme.colors.secondary};
  }
 }
`