import React, { useState } from 'react'
import styled from 'styled-components'
import BG6 from '../../assets/bg/pane6.png'
import Faq from '../../config/constant/faq'
import { Heading } from '../../components/Text'
import PageLayout from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import Tabs from '../../components/Tabs'
import CustomAccordion from '../../components/Accordion'
import useTheme from '../../hooks/useTheme'
import { TextWrap } from '../About'

const FAQ = () => {
  const { theme  } = useTheme()
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [faqCollection, setfaqCollection] = useState(Faq[Object.keys(Faq)[0]])
  return (
    <PageLayout margin="0" height='90vh'>
      <ContainerWithBackground background={BG6}>
        <TextWrap>
      <Heading className="text-center" fontSize="3em" color={theme.colors.secondary}>FREQUENTLY ASKED QUESTIONS</Heading>
      </TextWrap>
      <Tabs details={Faq} triggers={{activeIndex, setActiveIndex, setCollection: setfaqCollection}}>
        <CustomAccordion items={faqCollection} />
      </Tabs>
      </ContainerWithBackground>
    </PageLayout>
    
  )
}

export default FAQ;