import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import { Container } from "react-bootstrap";

const Styles = styled.div`
  .navbar {
    background-color: #292c2f;
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
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">DAJ</Navbar.Brand>
      <Container>
        <div className="w-50 small text-center align-self-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
              <Nav.Item>
                <Nav.Link>
                  <Link to="/blog">BLOG</Link>
                </Nav.Link>
              </Nav.Item>
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
