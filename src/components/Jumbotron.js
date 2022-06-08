import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
// import DAJBanner from "../assets/DAJBanner.jpg";
import DAJBanner from "../assets/Banner.png";

const Styles = styled.div`
  .jumbo {
    background: url(${DAJBanner}) no-repeat fixed bottom;
    background-size: cover;
    color: #0000;
    height: 530px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #ff7733;
    opacity: 0.13;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .dan-text {
    font-size: 100px;
    font-color: #ed2224;
    font-weight: 1000;
    opacity: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 70px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container style={{ color: "#FFF" }}>
        <div className="dan-text">
        <p>Daniel Atoche-Juarez</p>
        </div>
      </Container>
    </Jumbo>
  </Styles>
);
