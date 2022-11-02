import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';
import BG1 from "../../assets/bg/bg_carousel1.png";
import PageLayout from '../../components/Layout'
import CarouselRenderer from './CarouselRender'
import { ContainerWithBackground } from '../../components/Layout/Container'

const Hero = () => {

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1547px)'})
  
  return (
    <section id="hero">
      <ContainerWithBackground background={BG1} padding={isLargeScreen? '1rem 10rem 3rem 10rem': '1rem 0rem 3rem 0rem'}>
        <CarouselRenderer />
      </ContainerWithBackground>
    </section>
  )
}

export default Hero
