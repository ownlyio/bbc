import React, { Fragment } from "react";
import styled from "styled-components";
import BG4 from "../../assets/bg/pane4.png";
import SRK from '../../assets/logos/srk.png'
import OWNLY from '../../assets/logos/Ownly/ownly-icon.png'
import DTI from '../../assets/logos/dti.png'
import Schedule from "../../config/constant/schedule";
import PageLayout from "../../components/Layout";
import { ContainerWithBackground } from "../../components/Layout/Container";
import { Heading, Text } from "../../components/Text";
import useTheme from "../../hooks/useTheme";
import { TextWrap } from "../About";
import "./styles.css";
import { Grid } from "@mui/material";

const ScheduleSection = () => {
  const { theme } = useTheme();

  const Program = () => (
    <div className="program-body">
      <Grid container justifyContent="center">
        {Object.entries(Schedule).map((sched, key) => {
          const time = sched[0];
          const act = sched[1];
          return (
            <Fragment key={key}>
              <Grid  item xs={12} sm={4} md={4} padding="0rem" textAlign='center'>
                <Text color="#fff" fontSize="1.5em" className="time-txt">
                  {time}
                </Text>
              </Grid>
              <Grid item xs={12} sm={8} md={6} padding="0.5rem">
                <Text color="#fff" fontSize="1.5em" className="sched-txt">
                  {act.sched}
                </Text>
                {act.break && (
                  <Text color="#fff" fontSize="2.5em" style={{textAlign: 'center'}}>
                    {act.break}
                  </Text>
                )}
                {act.talks &&
                  act.talks.map((talks, key) => (
                    <Fragment  key={key}>
                      <Text 
                        key={key}
                        color={theme.colors.secondary}
                        style={{ fontWeight: "bold" }}
                        fontSize="1.5em"
                        className="sched-txt"
                      >
                        {talks.talk}
                      </Text>
                      <Text color="#fff" fontSize="1em" className="spkr-txt">
                      -{talks.speaker}
                      </Text>
                    </Fragment>
                  ))}
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    </div>
  );

  return (
    <PageLayout bgColor="#232323" margin="0" id="schedule">
      <ContainerWithBackground background={BG4} padding="4rem 5rem">
        <TextWrap className="text-center">
          <Heading fontSize="3em" color={theme.colors.secondary}>
            SCHEDULE
          </Heading>
        </TextWrap>
        <TextWrap padding="0">
          <div className="program-headers">
            <Heading fontSize="2em" color={theme.colors.primary}>
              Bicol Blockchain Conference 2022 Program
            </Heading>
            <Heading color="#fff" fontSize="1em">
              November 14, 2022 | Alicia Hotel, Legazpi City, Albay
            </Heading>
            <Text color="#fff" fontSize="1em">
              Master of Ceremonies:{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Carl Andrei Bongalos, CMO SparkPoint{" "}
              </span>
            </Text>
          </div>
          <div className="container-program">{Program()}</div>
        </TextWrap>
        <div className="d-flex justify-content-around pt-5 pb-5"> 
          { [SRK, OWNLY, DTI].map((src, key) => (
            <img key={key} alt='logo' src={src} width='15%' />
          ))}
        </div>
      </ContainerWithBackground>
    </PageLayout>
  );
};

export default ScheduleSection;
