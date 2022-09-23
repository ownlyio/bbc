import React from 'react'
import styled from 'styled-components'
import PageSection from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import { Heading, Text } from '../../components/Text'
import useTheme from '../../hooks/useTheme'


const Schedule = () => {
  const { theme } = useTheme()

  return (
    <PageSection>
      <ContainerWithBackground>
        <div className="text-center">
        <Heading fontSize="3em" color={theme.colors.secondary}>SCHEDULE</Heading>
        <Text fontSize="2em">Watch this space as we collate insightful segments and fun activities for BBC 2022.</Text>
        </div>
      </ContainerWithBackground>
    </PageSection>

  )
}

export default Schedule