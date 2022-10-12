import React, { useState } from 'react'
import SpeakersList from '../../config/constant/speakers'
import Avatar from '../../components/Avatar'
import AppCarousel from '../../components/Carousel'
import {Button as CustomBtn } from '../../components/Button'

const CarouselRender = () => {
  const [ showAll, setShowAll ] = useState(false)
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  const item1 = () => {
    return SpeakersList.map((spkr) => (
      <div>
        <Avatar name={spkr.name} title={spkr.title} desc={spkr.description} />
      </div>
    ))
    
  }

  return (
    <div style={{textAlign: 'center'}}>
      { 
      !showAll? <AppCarousel type="Elastic" options={{breakpoints}} components={{ item1 }}/> : (
        <div className='d-flex flex-wrap justify-content-center'>
          {item1()}
        </div>
      )}
      <CustomBtn onClick={() => setShowAll(!showAll)} style={{marginTop: '2rem'}}>More ></CustomBtn>
    </div>
  );
}

export default CarouselRender
