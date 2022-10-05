import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  flex-direction: ${(props) => props.direction? props.direction : 'row'};
  min-height: ${props => props.height};
  height: ${props => props.height ?? 'auto'};
  width: 100%;
  line-height: normal;
  position: relative;
  margin: ${props => props.margin ?? '10px 0px;'};
  ${props => props.bgColor && `
    background-color: ${props.bgColor};
  `}
  @media screen and (max-width: 800px) {
    height: auto;
    min-height: auto;
  }
`
const Layout = ({direction, height, margin, bgColor, children, id}) => {
  return (
    <Container direction={direction} height={height} margin={margin} bgColor={bgColor} id={id}>
      {children}
    </Container>
  )
}

export default Layout;