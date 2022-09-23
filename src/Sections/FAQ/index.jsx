import React, { useState } from 'react'
import styled from 'styled-components'
import faq from '../../config/constant/faq'
import PageLayout from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import Tabs from '../../components/Tabs'
import CustomAccordion from '../../components/Accordion'


const FAQ = () => {

  const [ activeIndex, setActiveIndex ] = useState(0)

  return (
    <PageLayout>
      <ContainerWithBackground>
      <Tabs details={faq}>
        <CustomAccordion />
      </Tabs>
      </ContainerWithBackground>
    </PageLayout>
    
  )
}

export default FAQ;