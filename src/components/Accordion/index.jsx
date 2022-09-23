import React from 'react'
import SCStyled from 'styled-components'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Heading, Text } from '../Text';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, expanded}) => ({
  borderLeft: '2rem solid rgba(188,152,73,1)',
  backgroundColor: !expanded? 'rgba(0,0,0,0.5)' : 'rgba(188,152,73,0.5)',
  color: '#fff',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} style={{color: '#fff'}} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .Mui-expanded': {
    backgroundColor: 'rgba(188,152,73,0.8)',
  }
}));



const CustomAccordion = ({items}) => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Wrapper>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Heading fontSize="1.5em">Accordion 1</Heading>
        </AccordionSummary>
        <AccordionDetails>
          <Text fontSize="1.1em">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Text>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

export default CustomAccordion;

const Wrapper = SCStyled.div`
  & > * {
    margin-bottom: 1rem;
  }
`