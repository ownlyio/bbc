import React, { useState, useEffect } from 'react'
import BBCLogo from '../../assets/official logo.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
`

const PageLoader = () => {

  return (
    <Wrapper>
       <img className='animate__animated animate__bounce' src={BBCLogo} alt='loading-image' width='25%' />
    </Wrapper>
  )
}

export default PageLoader