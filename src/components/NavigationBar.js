import { React, useState } from "react";
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
                <Nav.Link>
                  <Link to="/" onClick={() => setExpanded(false)}>HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about" onClick={() => setExpanded(false)}>ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/projects" onClick={() => setExpanded(false)}>PROJECTS</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link to="/blog">BLOG</Link>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link>
                  <Link to="/contact" onClick={() => setExpanded(false)}>CONTACT</Link>
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