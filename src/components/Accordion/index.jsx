import React from "react";
import SCStyled from "styled-components";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Heading, Text } from "../Text";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, expanded }) => ({
  borderLeft: "2rem solid rgba(188,152,73,1)",
  backgroundColor: !expanded ? "rgba(0,0,0,0.5)" : "rgba(188,152,73,0.5)",
  color: "#fff",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem" }}
        style={{ color: "#fff" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  "& .Mui-expanded": {
    backgroundColor: "rgba(188,152,73,0.8)",
  },
}));

const CustomAccordion = ({ items }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Wrapper>
      {Object.entries(items).length !== 0 && (
        items.map((item, key) => {
          return (
            <Accordion
              key={key}
              expanded={expanded === `panel${key + 1}`}
              onChange={handleChange(`panel${key + 1}`)}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <FontResponsive>
                  <Heading fontSize="1.5em">{item.question}</Heading>
                </FontResponsive>
              </AccordionSummary>
              <AccordionDetails>
                <FontResponsive>
                  <Text fontSize="1.1em">{item.answer}</Text>
                </FontResponsive>
              </AccordionDetails>
            </Accordion>
          );
        })
      )} 
      {/* : (
        <StyledDiv className="d-flex align-items-center">
          <Heading fontSize="2em">
            {" "}
            Any inquires? Contact us at{" "}
            <a href="mailto: support@bicolblockchain.com" style={{ color: "#bc9849" }}>
              support@bicolblockchain.com
            </a>{" "}
          </Heading>
        </StyledDiv>
      )} */}
    </Wrapper>
  );
};

export default CustomAccordion;

const Wrapper = SCStyled.div`
  padding: 0 1.5rem;
  & > * {
    margin-bottom: 1rem;
  }
`;

const FontResponsive = SCStyled.div`
  font-size: 9px;
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }
  @media screen and (min-width: 2500px) {
    font-size: 25px;
  }
`;

const StyledDiv = SCStyled(FontResponsive)`
  color: #fff;
  background-color: rgba(0,0,0,0.5);
  border-left: 2rem solid rgba(188,152,73,1);
  padding: 12px;
  
`;
