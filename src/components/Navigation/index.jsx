import React, { useState } from "react";
import throttle from 'lodash/throttle'
import { Navbar, Nav, Container } from "react-bootstrap";
import BBCLogo from "../../assets/official logo.png";
import "./style.css";
import config from "./config";
import Linker from "../Linker";

const Component = ({ children }) => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = React.useState(true)
  const refPrevOffset = React.useRef(window.pageYOffset)
  React.useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage =
        window.document.body.clientHeight ===
        currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <Navbar collapseOnSelect expand="lg" className={`nav-bar ${!showMenu && 'hide'}`} fixed='top'>
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
