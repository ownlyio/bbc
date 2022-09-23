import styled from 'styled-components'
import { Button as RBButton }from 'react-bootstrap';

export const Button = styled(RBButton)`
  border: none;
  color: ${props => props.color ?? '#906003'};
  border-radius: 0;
  &:hover {
    background-color: ${props => props.bgColor ?? '#906003'};
    color: ${props => props.color};
  }
`