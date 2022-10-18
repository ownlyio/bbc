import React from 'react'
import styled from 'styled-components'
import BG1 from "../../assets/bg/bg_carousel1.png";
import PageLayout from '../../components/Layout'
import CarouselRenderer from './CarouselRender'
import { ContainerWithBackground } from '../../components/Layout/Container'

const Hero = () => {
  return (
    <section id="hero">
      <ContainerWithBackground background={BG1}>
      <CarouselRenderer />
      </ContainerWithBackground>
    </section>
  )
}

export default Hero
