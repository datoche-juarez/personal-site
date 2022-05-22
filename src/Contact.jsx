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
      <p>Email: <a href="mailto:danatochejuarez@gmail.com">danatochejuarez@gmail.com</a></p>
      <p>Phone: <a href="tel:3136752860">313-675-2860</a></p>
    </Container>
    <Container>
      <Row>
        <Col xs={1}>
          <a
            href="https://www.facebook.com/daniel.atochejuarez"
            target="_blank"
            class="fa fa-facebook"
          ></a>
        </Col>
        <Col xs={1}>
          <a
            href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
            target="_blank"
            class="fa fa-linkedin"
          ></a>
        </Col>
        <Col xs={1}>
          <a href="https://github.com/datoche-juarez/" target="_blank" class="fa fa-github"></a>
        </Col>
        <Col xs={1}>
          <a href="https://wa.me/13136752860" target="_blank" class="fa fa-whatsapp"></a>
        </Col>
      </Row>
      {/* <Row>     
        <Col xs={1}>
          <a href="#" class="fa fa-pinterest"></a>
        </Col>
        <Col xs={1}>
          <a href="https://soundcloud.com/daniel-atoche-juarez" class="fa fa-soundcloud"></a>
        </Col>
         <Col xs={1}>
          <a href="https://twitter.com/dee_jaurez" class="fa fa-twitter"></a>
        </Col>
        <Col xs={1}>
          <a href="#" class="fa fa-instagram"></a>
        </Col>
      </Row> */}
    </Container>
  </div>
);

export default Contact;
