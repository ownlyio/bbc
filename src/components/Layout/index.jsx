import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex-direction: ${(props) => props.direction? props.direction : 'row'};
  height: ${props => props.height?? 'auto'};
  width: 100%;
  line-height: normal;
  position: relative;
`
const Layout = ({direction, height, children}) => {
  return (
    <Container direction={direction} height={height}>
      {children}
    </Container>
  )
}

export default Layout;