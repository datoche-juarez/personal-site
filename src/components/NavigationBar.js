import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import { Container } from "react-bootstrap";
import DAJLogo from "../assets/DajLogo3.png";


const Styles = styled.div`
  .navbar {
    background-color: #292c2f;
    font-size: 22px;
    display: flex;
  }

  .navbar-toggler {
    // background-color: red;
    margin: 5px;
    float: right;
    margin-right: 0px;
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #ffffff;

    &:hover {
      color: #ed2224;
    }
  }
  .navbar-brand {
    float: right;
  }

  .navbar-brand:hover {
    
    .frame {
      box-shadow: 3px 5px 10px gray !important;
      background-color: #292c2f;
    }
  }

  #nav-div {
    // background-color: green;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect (() => {
    if (!activeLink) {
      if (window.location.pathname === "/") {
        setActiveLink('home-link');
      }
      if (window.location.pathname === "/about") {
        setActiveLink('about-link');
      }
      if (window.location.pathname === "/projects") {
        setActiveLink('projects-link');
    }
    if (window.location.pathname === "/contact") {
      setActiveLink('contact-link');
    }
    }
  }, []);

  // handleClick function:
  const handleClick = (linkId) => {
    if (expanded) {
      setExpanded(!expanded);
    }
      setActiveLink(linkId);

  }

  return(
  <Styles>
    <Navbar expand="lg" variant="dark" expanded={expanded}>
      <Container>
        <div className="w-100 small text-center align-self-end" id='nav-div'>
          <Navbar.Brand href="/">
            <div className="frame">
              <img src={DAJLogo} weign="40" height="60" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link id='home-link' style={ activeLink === 'home-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>
                  <Link to="/" onClick={() => handleClick('home-link')}>HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={ activeLink === 'about-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>
                <Nav.Link id='about-link'>
                  <Link to="/about" onClick={() => handleClick('about-link')}>ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id='projects-link' style={ activeLink === 'projects-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>
                  <Link to="/projects" onClick={() => handleClick('projects-link')}>PROJECTS</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link to="/blog">BLOG</Link>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link id='contact-link' style={ activeLink === 'contact-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>
                  <Link to="/contact" onClick={() => handleClick('contact-link')}>CONTACT</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  </Styles>
);
};

export default NavigationBar;