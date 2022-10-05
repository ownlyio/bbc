import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <StyledInput {...props} />
  )
}

export default Input;

const StyledInput = styled.input`
 max-width: 400px;
 min-width: 250px;
 width: 100%;
 background-color: transparent;
 padding: 10px;
 border: none;
 color: #fff;
 border-bottom: 5px solid ${props => props.theme.colors.secondary};
 &:focus {
  outline: none;
 }
`