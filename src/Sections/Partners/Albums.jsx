import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import LogoBox from "../../components/Card/PartnersImg";
import IconModules from "./FetchLogo";

const sizes = {
  presenters: { width: "150px", grid: {} },
  gold: { width: "150px", grid: {xs: 6, sm: 3, md: 3, lg: 2}},
  silver: { width: "100px", grid: {}},
  bronze: { width: "100px", grid: {}},
  media: { width: "100px", grid: {xs: 3, sm:2, md: 2, lg: 1}},
  community: { width: "100px", grid: {}},
};

const Album = ({ items, activeIndex }) => {
  return (
    <Wrapper>
      {/* { activeIndex === 0 ? (
        <>
        { Object.values(items).map((list) => Object.values(list).map(item => <LogoBox key={item} background="#fff" border src={IconModules[item]} width="50px" padding='10px'/>))}
        </>
      ) : (
        <>
        {
          Object.keys(items).length !==0 && items.map(item => {
          return (
            <LogoBox background="#fff" border src={IconModules[item]} width="50px" padding='10px'/>
          )
        })}
        </>
      )} */}
      {Object.entries(items).map((partners, key) => {
        return (
          partners[1].length !== 0 && (
            <Grid key={key} container justifyContent='center' alignItems='justify' spacing={{xs: 1, sm: 1, md: 0}}>
              {partners[1].map((partner) => (
                <Grid key={partner} item xs={sizes[partners[0]].grid.xs} sm={sizes[partners[0]].grid.sm} md={sizes[partners[0]].grid.md} lg={sizes[partners[0]].grid.lg}  >
                <LogoBox
                  key={partner}
                  background="#fff"
                  border
                  src={IconModules[partner]}
                  // width={sizes[partners[0]].width}
                  padding="0.5rem"
                />
                </Grid>
              ))}
            </Grid>
          )
        );
      })}
    </Wrapper>
  );
};

export default Album;

const PartnersDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: stretch;
  & > * {
    margin: 0.6rem;
  }
  ${(props) => props.theme.mediaQueries.sm} {
    flex-direction: row;
  }
  & > * {
    margin: 0.6rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 1rem 0;
  }
  ${(props) => props.theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`;
