import React from 'react'
import Avatar from '../../components/Avatar'
import AppCarousel from '../../components/Carousel'

const CarouselRender = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  const item1 = () => {
    return [<Avatar />, <Avatar />, <Avatar />, <Avatar />, <Avatar />, <Avatar />, ]
  }

  return <AppCarousel type="Elastic" options={{breakpoints}} components={{ item1 }}/>;
}

export default CarouselRender
