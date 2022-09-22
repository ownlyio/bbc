import React from "react";
import { Mail } from 'react-feather'
import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import config from "../../components/Navigation/config";
import BBCLogo from '../../assets/official logo.png'
import OWNLYLogo from "../../assets/ownly.png";
import SRKLogo from "../../assets/SRK_wordmark.svg";
import { socials } from "./config";
import "./style.css";

const Component = () => {
  return (
    <div className="footer-wrapper">
      <div className="section">
        <div className="logo">
        <img alt='bbc-logo' src={BBCLogo} width="250px"/>
          <p className="title-1">BICOL BLOCKCHAIN CONFERENCE 2022</p>
          <p className="subtitle-1">
            11.14.22 | LEGAZPI CITY, PHILIPPINES
          </p>
        </div>
        <div className="div-organizer">
          <p>ORGANIZED BY:</p>
          <div className="logo-group">
              <img src={OWNLYLogo} alt="org-logo" className="img-org-logo" />
              <img src={SRKLogo} alt="org-logo" className="img-org-logo" />
          </div>
        </div>
      </div>
      <div className="section links">
        <p style={{ marginBottom: "0.5rem" }}>QUICK LINKS</p>
        <Nav className="flex-column align-items-start flex-grow-1 justify-content-evenly">
          {config.map((link) => (
            <Nav.Link key={link.name} href={link.href} style={{ color: "#fff" }}>
              > &nbsp;{link.name.toUpperCase()}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      <div className="section socials">
        <div>
          <p>FOLLOW US</p>
          <div className="social-group-icons">
          {Object.values(socials).map((social) => (
            <SocialIcon key={social} fgColor="#fff" url={social} target="_blank" />
          ))}
          </div>
        </div>
        <div className="flex-column" style={{marginTop: '1rem'}}>
          <p>REACH US</p>
          <div className="div-reach-us">
            <p><Mail size={40} /> hello@bicolbc.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
