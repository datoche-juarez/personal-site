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
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #ffffff;
    padding-top: 15px;
    text-align: center;

    &:hover {
      color: #ed2224;
    }
  }
  .navbar-brand {
    float: left;
    margin: 5px;
  }

  .navbar-brand:hover {
    margin-bottom: 5px;
    .frame {
      box-shadow: 3px 5px 10px gray !important;
    }
  }

  .container {
    margin: auto;
  }
`;

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    console.log("activeLink useEffect:", activeLink);
  }, [activeLink])

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
        <div className="w-100 small text-right align-self-end">
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
                <Nav.Link id='home-link'>
                  <Link to="/" onClick={() => handleClick('home-link')}>HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id='about-link'>
                  <Link to="/about" onClick={() => handleClick('about-link')}>ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id='projects-link'>
                  <Link to="/projects" onClick={() => handleClick('projects-link')}>PROJECTS</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link to="/blog">BLOG</Link>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link id='contact-link'>
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