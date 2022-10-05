import React from 'react'
import styled from 'styled-components'
import PageLayout from '../../components/Layout'
import CarouselRenderer from './CarouselRender'
import { ContainerWithBackground } from '../../components/Layout/Container'

const Hero = () => {
  return (
    <section id="hero">
      <CarouselRenderer />
    </section>
  )
}

export default Hero
