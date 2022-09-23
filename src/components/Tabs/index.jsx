import React from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";
import Accordion from "../Accordion";
import Faq from "../../config/constant/faq";

const Tabs = ({ triggers, details, children }) => {
  const { activeIndex, setActiveIndex, setfaqCollection } = triggers;
  const { theme } = useTheme();
  const [optionCollection, setOptions] = React.useState(
    Object.keys(details)[0]
  );
  const options = Object.keys(details).map((item) => item);

  return (
    <Container className="d-flex">
      <OptionsContainer className="flex-wrap">
        {options.map((option, key) => (
          <Tab
            key={key}
            activeindex={(activeIndex === key + 1).toString()}
            onClick={() => {
              setActiveIndex(key + 1);
              setfaqCollection(Faq[option])
            }}
            variant="outline"
            color={theme.colors.light}
          >
            {option.toUpperCase()}
          </Tab>
        ))}
      </OptionsContainer>
      <div>{children}</div>
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  flex-direction: column;
  & > * {
    padding: 5px;
  }
  ${(props) => props.theme.mediaQueries.lg} {
    padding: 15px;
    flex-direction: row;
    & > :first-child {
      flex: 1 1 10rem;
    }
    & > :nth-child(2) {
      flex: 3 3 10rem;
    }
  }
`;

const Tab = styled(Button)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5em;
  font-weight: bold;
  text-align: right;
  padding: 10px;
  ${(props) =>
    props.activeindex &&
    `
    background-color: #fff;
  `}
  &:hover {
    background-color: #fff;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  font-size: 8px;
  justify-content: center;
  ${(props) => props.theme.mediaQueries.lg} {
    font-size: 17px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    border-right: ${(props) => `5px solid ${props.theme.colors.secondary}`};
  }
`;
