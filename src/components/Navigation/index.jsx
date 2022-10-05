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
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll('a .nav-item');

  React.useEffect(() => {
    const handleScroll = () => {
      var current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id"); 
        }
      })

      navLi.forEach((li) => {
        li.classList.remove("active");
        console.log(li.classList.contains(current))
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <Navbar collapseOnSelect expand="lg" className="nav-bar" fixed='top'>
        <Container>
          <Linker href="#top">
          <Navbar.Brand>
            <img alt="bbc-logo" src={BBCLogo} width="150px" />
          </Navbar.Brand>
          </Linker>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-right bold">
              {config.map((link, key) => (
                <Linker key={key} href={link.href}>
                  <Nav.Link
                    key={link.name}
                    className={`nav-item ${link.name.toLowerCase()}`}
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
