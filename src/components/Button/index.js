import styled from 'styled-components'
import { Button as RBButton }from 'react-bootstrap';

export const Button = styled(RBButton)`
  background-color: ${props => props.bgcolor ?? '#fff'};
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  color: ${props => props.color ?? '#906003'};
  border-radius: 0;
  border: none!important;
  ${ props => props.border && `
  border: 2px solid ${props.theme.colors.primary}!important;
  `}
  &:hover {
    background-color: #906003;
    color: ${props => props.color};
    outline:none;
    box-shadow: none;
  }
  &:focus, &:active {
    outline:none;
    box-shadow: none;
    color: ${props => props.color ?? '#906003'};
    background-color: #fff;
  }

`