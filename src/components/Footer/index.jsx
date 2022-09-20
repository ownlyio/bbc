import React from "react";
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
      <div className="section">
        <p>Links</p>
      </div>
      <div className="section">
        <p>Socials</p>
      </div>
    </div>
  );
};

export default Component;
