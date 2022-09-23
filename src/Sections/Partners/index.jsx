import React, { useState } from 'react'
import partners from '../../config/constant/partners'
import PageLayout from '../../components/Layout'
import { Heading, Text } from '../../components/Text'
import { ContainerWithBackground } from '../../components/Layout/Container'
import useTheme from '../../hooks/useTheme'
import Tabs from '../../components/Tabs'
import LogoBox from '../../components/Card/Logo'
import Album from './Albums'

const Partners = () => {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const [partnersCollection, setPartnersCollection ] = useState(partners[Object.keys(partners)[2]])
  console.log(partnersCollection)
  return (
    <PageLayout>
      <ContainerWithBackground>
        <div className='d-flex' style={{margin: '15px 0'}}>
          <div>
          <Heading>PARTNERSHIP</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem molestiae quod nesciunt esse, veniam, perferendis totam voluptas cumque possimus, iusto blanditiis et? Neque necessitatibus hic expedita illo soluta ipsam.</Text>
          </div>
          <div>
            <Heading>BECOME OUR PARTNER!</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ad iure. Error animi eos facere facilis quia, hic voluptatem fuga eius, repellat quod illum, quos sed ullam nesciunt non magnam!</Text>
          </div>
        </div>
        <Heading fontSize="3em" color={theme.colors.secondary}>
          OUR EVENT PARTNERS
        </Heading>
        <Tabs withAll details={partners} triggers={{setActiveIndex, activeIndex, setCollection: setPartnersCollection}} >
          <Album items={activeIndex === 0? partners: partnersCollection} activeIndex={activeIndex}/>
        </Tabs>
      </ContainerWithBackground>
    </PageLayout>
  )
}

export default Partners