import React from "react";
import { Mail } from 'react-feather'
import { Nav } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import config from "../../components/Navigation/config";
import OWNLYLogo from "../../assets/ownly.png";
import SRKLogo from "../../assets/SRK_wordmark.svg";
import { socials } from "./config";
import "./style.css";

const Component = () => {
  return (
    <div className="footer-wrapper">
      <div className="section">
        <div className="logo">
          <p>Logo</p>
          <text className="title-1">BICOL BLOCKCHAIN CONFERENCE 2022</text>
          <text className="subtitle-1">
            11.14.22 | LEGAZPI CITY, PHILIPPINES
          </text>
        </div>
        <div className="div-organizer">
          <text>ORGANIZED BY:</text>
          <div className="logo-group">
            <div className="ownly-logo">
              <img src={OWNLYLogo} alt="org-logo" className="img-org-logo" />
            </div>
            <div className="srk-logo">
              <img src={SRKLogo} alt="org-logo" className="img-org-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="section links">
        <text style={{ marginBottom: "0.5rem" }}>QUICK LINKS</text>
        <Nav className="flex-column align-items-start add-space flex-grow-1 justify-content-evenly">
          {config.map((link) => (
            <Nav.Link href={link.href} style={{ color: "#fff" }}>
              {" "}
              > &nbsp;{link.name.toUpperCase()}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      <div className="section socials">
        <div>
          <text>FOLLOW US</text>
          <div className="social-group-icons">
          {Object.values(socials).map((social) => (
            <SocialIcon fgColor="#fff" url={social} target="_blank" />
          ))}
          </div>
        </div>
        <div className="div-reach-us flex-column" style={{marginTop: '1rem'}}>
          <text>REACH US</text>
          <div className="div-reach-us">
            <text><Mail size={40} /> hello@bicolbc.io</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
