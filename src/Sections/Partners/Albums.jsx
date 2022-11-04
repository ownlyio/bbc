import React from "react";
import styled from "styled-components";
import LogoBox from "../../components/Card/Logo";
import IconModules from "./FetchLogo";

const sizes = {
  presenters: "150px",
  gold: "100px",
  silver: "50px",
  bronze: "25px",
  media: "25px",
  community: "25px",
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
      {Object.entries(items).map((partners) => {
        return (
          partners[1].length !== 0 && (
            <PartnersDiv>
              {partners[1].map((partner) => (
                <LogoBox
                  key={partner}
                  background="#fff"
                  border
                  src={IconModules[partner]}
                  width={sizes[partners[0]]}
                  height={sizes[partners[0]]}
                  padding="2rem"
                />
              ))}
            </PartnersDiv>
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
  flex-wrap: wrap;
  // margin: 0 auto;
  justify-content: center;

  & > * {
    margin: 1rem;
  }

  ${(props) => props.theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 5px;
  }
  ${(props) => props.theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`;
