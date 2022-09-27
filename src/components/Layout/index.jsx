import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-direction: ${(props) => props.direction? props.direction : 'row'};
  height: ${props => props.height?? 'auto'};
  width: 100%;
  line-height: normal;
  position: relative;
  margin: ${props => props.margin ?? '10px 0px;'};
  @media screen and (max-width: 800px) {
    height: auto;
  }
`
const Layout = ({direction, height, margin, children}) => {
  return (
    <Container direction={direction} height={height} margin={margin}>
      {children}
    </Container>
  )
}

export default Layout;