import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
// import DAJBanner from "../assets/DAJBanner.jpg";
import DAJBanner from "../assets/Banner.png";

const Styles = styled.div`
  // .jumbo {
  //   background-size: cover;
  //   color: #0000;
  //   height: 330px;
  //   position: relative;
  //   z-index: -2;
  // }

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
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container style={{ color: "#000" }}>
        <h1 style={{color: "#901e33"}}></h1>
      </Container>
    </Jumbo>
  </Styles>
);
