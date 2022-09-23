import React, { useState } from 'react'
import styled from 'styled-components'
import Faq from '../../config/constant/faq'
import { Heading } from '../../components/Text'
import PageLayout from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import Tabs from '../../components/Tabs'
import CustomAccordion from '../../components/Accordion'
import useTheme from '../../hooks/useTheme'


const FAQ = () => {
  const { theme  } = useTheme()
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [faqCollection, setfaqCollection] = useState(Faq[Object.keys(Faq)[0]])
  return (
    <PageLayout>
      <ContainerWithBackground>
      <Heading className="text-center" fontSize="3em" color={theme.colors.secondary}>FREQUENTLY ASKED QUESTIONS</Heading>
      <Tabs details={Faq} triggers={{activeIndex, setActiveIndex, setCollection: setfaqCollection}}>
        <CustomAccordion items={faqCollection} />
      </Tabs>
      </ContainerWithBackground>
    </PageLayout>
    
  )
}

export default FAQ;