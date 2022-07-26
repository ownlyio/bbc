import React, { useState, useEffect } from 'react'
import BBCLogo from '../../assets/official logo.png'
import styled from 'styled-components'
import './style.css'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252525;
`

const PageLoader = () => {
  const [hidden, isHidden] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      isHidden(true)
    }, 1500)
  })
  return (
    <Wrapper id="loader" className={hidden && 'hide'}>
       <img className='animate__animated animate__bounce' src={BBCLogo} alt='loading-image' width='30%' />
    </Wrapper>
  )
}

export default PageLoader