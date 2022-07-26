import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import LogoBox from "../../components/Card/PartnersImg";
import IconModules from "./FetchLogo";
import { Heading, Text } from "../../components/Text";

const sizes = {
  presenters: { width: "100px", grid: {xs: 8, sm: 5, md: 5, lg: 3} },
  gold: { width: "100px", grid: { xs: 8, sm: 5, md: 5, lg: 3 } },
  silver: { width: "100px", grid: {} },
  ['Supported By']: {width: '100px', grid: {xs:5, sm: 4,  lg: 3}},
  bronze: { width: "100px", grid: {} },
  media: { width: "100px", grid: { xs: 5, sm: 3, md: 3, lg: 2 } },
  community: { width: "100px", grid: { xs: 6, sm: 12, md: 12, lg: 12 } },
  ['Organized By']: {width: '100px', grid: {xs: 4, sm: 3, md: 3, lg: 2}}
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
            <div key={key} style={{textAlign: 'center', margin: '2rem 0'}}>
            <Heading size="lg" style={{marginBottom: '1.5rem', color: '#fff', textDecoration: 'underline #bc9849', textUnderlineOffset: '0.5em'}}>{partners[0].toUpperCase()}</Heading>
              <Grid
                key={key}
                container
                justifyContent="space-evenly"
                alignItems="justify"
                // spacing={{ xs: 2, sm: 1 }}
              >
                {partners[1].map((partner) => (
                  <Grid
                    key={partner}
                    item
                    xs={sizes[partners[0]].grid.xs}
                    sm={sizes[partners[0]].grid.sm}
                    md={sizes[partners[0]].grid.md}
                    lg={sizes[partners[0]].grid.lg}
                    xl={sizes[partners[0]].grid.xl}
                  >
                    <LogoBox
                      key={partner}
                      background="transparent"
                      src={IconModules[partner]}
                      // width={sizes[partners[0]].width}
                      padding="0.5rem"
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
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
