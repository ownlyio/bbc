import React from "react";
import styled from "styled-components";
import useTheme from '../../hooks/useTheme'
import { Heading } from "../../components/Text";
import { Mail } from "react-feather";
import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import { Text } from "../../components/Text";
import {footerConfig as config} from "../../components/Navigation/config";
import BBCLogo from "../../assets/official logo.png";
import OWNLYLogo from "../../assets/ownly.png";
import SRKLogo from "../../assets/SRK_wordmark.svg";
import { socials } from "./config";
import "./style.css";
import Linker from "../Linker";

const Component = () => {
  return (
    <div className="footer-wrapper">
      <div className="section mb-5 mb-md-0">
        <div className="d-flex align-items-center align-items-md-start logo text-center text-md-start">
          <img
            alt="bbc-logo"
            src={BBCLogo}
            width="160px"
            style={{ marginBottom: "15px" }}
          />
          <p className="title-1">BICOL BLOCKCHAIN CONFERENCE 2022</p>
          <p className="subtitle-1">11.14.22 | LEGAZPI CITY, PHILIPPINES</p>
        </div>
        <div className="div-organizer">
          <p>ORGANIZED BY:</p>
          <div className="logo-group">
            <img src={OWNLYLogo} alt="org-logo" className="img-org-logo" />
            <Heading color="#d9b84c">&nbsp;X &nbsp; </Heading>
            <img src={SRKLogo} alt="org-logo" className="img-org-logo" />
          </div>
        </div>
      </div>
      <DivLink>
        <div className="section links">
          <Text>QUICK LINKS</Text>
          <Nav className="nav-quick-links">
            {config.map((link, key) => (
              <Linker href={`#${link.href}`} key={key}>
                <Nav.Link
                  key={link.name}
                  style={{ color: "#fff" }}
                  as="div"
                >
                  > &nbsp;{link.name.toUpperCase()}
                </Nav.Link>
              </Linker>
            ))}
          </Nav>
        </div>
        <div className="section socials">
          <div>
            <Text>FOLLOW AND GET IN TOUCH</Text>
            <div className="social-group-icons">
              {Object.values(socials).map((social) => (
                <SocialIcon
                  key={social}
                  fgColor="#fff"
                  url={social}
                  target="_blank"
                />
              ))}
            </div>
          </div>
          {/* <div className="flex-column" style={{ marginTop: "1rem" }}>
            <Text>REACH US</Text>
            <div className="div-reach-us">
              <a
                href="mailto:support@bicolblockchain.com"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Mail size={40} /> support@bicolblockchain.com
              </a>
            </div>
          </div> */}
        </div>
      </DivLink>
    </div>
  );
};

export default Component;

const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  & > div.section.links {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    & > div.nav-quick-links {
      display: flex;
      justify-content: center;
      align-items: center;
      & > * {
        display: flex;
        flex: 1;
        padding: 2px;
      }
    }
  }
  & > div.section.socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      text-align: center;
    }
  }

  @media screen and (min-width: 375px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & > div.section.links {
      margin-bottom: 0rem;
    }
    & > div.section.socials {
      align-items: flex-end;
      & > div {
        text-align: right;
      }
    }
  }

  @media screen and (min-width: 425px) {
    .nav-quick-links {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start!important;
    }
  }

  @media screen and (min-width: 651px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    width: 30vw;
  }
`;
