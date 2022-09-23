import React from 'react';
import { Button } from '../../components/Button';
import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';
import Accordion from '../Accordion';

const Tabs = ({details, children}) => {
  const { theme } = useTheme()
  const options = Object.keys(details).map(item => item);
  
  return (
    <Container className='d-flex'>
      <OptionsContainer className='flex-wrap'>
        { 
          options.map((option, key) => (
            <Tab variant="outline" color={theme.colors.secondary} bgColor='#fff'>{option.toUpperCase()}</Tab>
          ))
        }
      </OptionsContainer>
      <div>
        {children}
      </div>
    </Container>
  )
}

export default Tabs;

const Container = styled.div`
flex-direction: column;
  & > * {
    padding: 5px;
  }
  ${props => props.theme.mediaQueries.lg} {
    padding: 15px;
    flex-direction: row;
    & > :first-child {
      flex: 1 1 10rem;
    }
    & > :nth-child(2){
      flex: 3 3 10rem;
    }
  }
`

const Tab = styled(Button)`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
  ${props => props.active && `
    background-color: #fff;
  `}
  & :hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const OptionsContainer = styled.div`
  display: flex;
  font-size: 8px;
  justify-content: center;
  ${props => props.theme.mediaQueries.lg} {
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    border-right: ${props => `5px solid ${props.theme.colors.secondary}`};
  }
`