import React from 'react'
import styled from 'styled-components'
import PageLayout from '../../components/Layout'
import { ContainerWithBackground } from '../../components/Layout/Container'
import { Heading, Text } from '../../components/Text'
import useTheme from '../../hooks/useTheme'
import { TextWrap } from '../About'


const Schedule = () => {
  const { theme } = useTheme()

  return (
    <PageLayout bgColor="#232323" margin="0">
      <ContainerWithBackground>
        <TextWrap className="text-center">
        <Heading fontSize="3em" color={theme.colors.secondary}>SCHEDULE</Heading>
        <Text fontSize="2em" color='#fff'>Watch this space as we collate insightful segments and fun activities for BBC 2022.</Text>
        </TextWrap>
      </ContainerWithBackground>
    </PageLayout>

  )
}

export default Schedule
