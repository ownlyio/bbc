import React, { useState } from "react";
import styled from "styled-components";
import BG6 from "../../assets/bg/pane6.png";
import Faq from "../../config/constant/faq";
import { Heading } from "../../components/Text";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import Tabs from "../../components/Tabs";
import CustomAccordion from "../../components/Accordion";
import useTheme from "../../hooks/useTheme";
import { TextWrap } from "../About";
import { useMediaQuery } from "react-responsive";

const FAQ = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(1);
  // const [faqCollection, setfaqCollection] = useState(Faq[Object.keys(Faq)[0]]);
  const isBigScreen = useMediaQuery({query: '(min-width: 769px)'})
  const [faqCollection, setfaqCollection] = useState(Faq);
  return (
    <PageLayout margin="0" id="faqs" >
      <ContainerWithBackground background={BG6} minHeight="70vh" padding={isBigScreen? '4rem 15rem': '4rem 5rem'}>
        <TextWrap>
          <Heading
            className="text-center"
            fontSize="3em"
            color={theme.colors.secondary}
          >
            FREQUENTLY ASKED QUESTIONS
          </Heading>
        </TextWrap>
        <div style={{marginTop: '1.5rem'}}>
        <CustomAccordion items={faqCollection} />
        </div>
        {/* <CustomAccordion items={faqCollection} /> */}
        {/* <Tabs
          details={Faq}
          triggers={{
            activeIndex,
            setActiveIndex,
            setCollection: setfaqCollection,
          }}
        >
          <CustomAccordion items={faqCollection} />
        </Tabs> */}
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default FAQ;
