import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import { Container } from "react-bootstrap";
import DAJLogo from '../assets/DajLogo3.png';

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
    padding-top: 15px;;
    text-align: center;

    &:hover {
      color: #ed2224;
    }
  }
  .navbar-brand {
    float: left;
    margin: 5px;
  }
  .container {
    margin: auto;
  }

`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" variant="dark" >
    <Container>
        <div className="w-100 small text-right align-self-end">
        <Navbar.Brand href="/"><img src={DAJLogo} weign="40" height="60"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">HOME</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/about">ABOUT</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/projects">PROJECTS</Link>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link to="/blog">BLOG</Link>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link>
                  <Link to="/contact">CONTACT</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  </Styles>
);
