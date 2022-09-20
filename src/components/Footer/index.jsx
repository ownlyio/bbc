import React from "react";
import { Nav } from 'react-bootstrap'
import config from '../../components/Navigation/config'
import OWNLYLogo from '../../assets/ownly.png'
import SRKLogo from '../../assets/SRK_wordmark.svg'
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
          <text>
            ORGANIZED BY:
          </text>
          <div className="logo-group">
              <div className="ownly-logo">
                <img 
                  src={OWNLYLogo}
                  alt='org-logo'
                  className="img-org-logo"
                />
              </div>
              <div className="srk-logo">
                <img src={SRKLogo} alt='org-logo'className="img-org-logo" />
              </div>
          </div>
        </div>
      </div>
      <div className="section links">
        <text style={{marginBottom: '0.5rem'}}>QUICK LINKS</text>
        <Nav className="flex-column align-items-start add-space flex-grow-1 justify-content-evenly">
          {config.map(link => (
            <Nav.Link href={link.href} style={{color: '#fff'}}> > &nbsp;{link.name.toUpperCase()}</Nav.Link>
          ))}
        </Nav>
      </div>
      <div className="section">
        <p>Socials</p>
      </div>
    </div>
  );
};

export default Component;
