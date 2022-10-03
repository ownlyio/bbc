import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BBCLogo from "../../assets/official logo.png";
import "./style.css";
import config from "./config";
import Linker from "../Linker";

const Component = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="wrapper">
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="bbc-logo" src={BBCLogo} width="150px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-right bold">
              {config.map((link) => (
                <Linker href={link.href} key={link.name}>
                <Nav.Link
                  key={link.name}
                  className={`nav-item ${active && "active"}`}
                  href={link.href}
                >
                  {link.name.toUpperCase()}
                </Nav.Link>
                </Linker>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="body-wrapper">
        <div className="inner">{children}</div>
      </div>
    </div>
  );
};

export default Component;
