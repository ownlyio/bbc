import React, { useState } from 'react'
import partners from '../../config/constant/partners'
import PageLayout from '../../components/Layout'
import { Heading, Text } from '../../components/Text'
import { ContainerWithBackground } from '../../components/Layout/Container'
import useTheme from '../../hooks/useTheme'
import Tabs from '../../components/Tabs'
import LogoBox from '../../components/Card/Logo'
import Album from './Albums'
import { TextWrap } from '../About'

const Partners = () => {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const [partnersCollection, setPartnersCollection ] = useState(partners[Object.keys(partners)[2]])
  return (
    <PageLayout>
      <ContainerWithBackground>
        <div className='d-flex flex-wrap' style={{margin: '15px 0'}}>
          <TextWrap>
          <Heading fontSize="3em">PARTNERSHIP</Heading>
          <Text fontSize="1.5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem molestiae quod nesciunt esse, veniam, perferendis totam voluptas cumque possimus, iusto blanditiis et? Neque necessitatibus hic expedita illo soluta ipsam.</Text>
          </TextWrap>
          <TextWrap>
            <Heading fontSize="3em">BECOME OUR PARTNER!</Heading>
            <Text fontSize="1.5em">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ad iure. Error animi eos facere facilis quia, hic voluptatem fuga eius, repellat quod illum, quos sed ullam nesciunt non magnam!</Text>
          </TextWrap>
        </div>
        <TextWrap>
        <Heading fontSize="3em" color={theme.colors.secondary}>
          OUR EVENT PARTNERS
        </Heading>
        </TextWrap>
        <Tabs withAll details={partners} triggers={{setActiveIndex, activeIndex, setCollection: setPartnersCollection}} >
          <Album items={activeIndex === 0? partners: partnersCollection} activeIndex={activeIndex}/>
        </Tabs>
      </ContainerWithBackground>
    </PageLayout>
  )
}

export default Partners