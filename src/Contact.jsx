import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";

const Contact = () => (
  <div className="container p-3 my-3 light text-black">
    <Container className="justify-content-lg-center">
      <h1>Contact</h1>
      <br></br>
      <h5>Contact info:</h5>
      <br></br>
      <p>Email: dtoch123@gmail.com</p>
      <p>Phone: 313-675-2860</p>
    </Container>

    <Container>
      <Row>
        <Col xs={1}>
          <a
            href="https://www.facebook.com/daniel.atochejuarez"
            class="fa fa-facebook"
          ></a>
        </Col>
        <Col xs={1}>
          <a href="https://twitter.com/dee_jaurez" class="fa fa-twitter"></a>
        </Col>
        {/* <Col xs={1}>
          <a href="#" class="fa fa-instagram"></a>
        </Col> */}
        <Col xs={1}>
          <a
            href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
            class="fa fa-linkedin"
          ></a>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs={1}>
          <a href="https://github.com/datoche-juarez/" class="fa fa-github"></a>
        </Col>
        <Col xs={1}>
          <a href="https://wa.me/13136752860" class="fa fa-whatsapp"></a>
        </Col>
        {/* <Col xs={1}>
          <a href="#" class="fa fa-pinterest"></a>
        </Col> */}
        <Col xs={1}>
          <a href="https://soundcloud.com/daniel-atoche-juarez" class="fa fa-soundcloud"></a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
