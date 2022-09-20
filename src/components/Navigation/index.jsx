import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./style.css";
import config from './config'

const Component = ({ children }) => {

  const [ active, setActive ] = useState(false)

  return (
    <div className="wrapper">
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">BBC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
            <Nav className="me-right">
              { config.map((link) => <Nav.Link className={`nav-item ${active && 'active'}`} href={link.href}>{link.name}</Nav.Link>)}
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
