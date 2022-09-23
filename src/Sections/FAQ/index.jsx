import React, { useState } from 'react'
import styled from 'styled-components'
import faq from '../../config/constant/faq'
import PageLayout from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import Tabs from '../../components/Tabs'


const FAQ = () => {

  const [ activeIndex, setActiveIndex ] = useState(0)

  return (
    <PageLayout>
      <ContainerWithBackground>
      <Tabs details={faq} />
      </ContainerWithBackground>
    </PageLayout>
    
  )
}

export default FAQ;