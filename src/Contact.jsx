import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Contact.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";

const submitForm = () => {
  document.getElementById('submitFormBtn').disabled = true;
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .post(
      "https://ovetc22hoh.execute-api.us-east-2.amazonaws.com/dev/contact",
      {
        Name:
          document.getElementById("fname").value +
          " " +
          document.getElementById("lname").value,
        Email: document.getElementById("email").value,
        Service: "The Way Forward Project",
        Mobile: document.getElementById("mobile").value,
        Message: document.getElementById("message").value,
      },
      headers
    )
    .then((res) => {
      document.getElementById("success_alert").style.display = "block";
      document.getElementById("error_alert").style.display = "none";
      document.getElementById('submitFormBtn').disabled = false;
    })
    .catch((err) => {
      document.getElementById("success_alert").style.display = "none";
      document.getElementById("error_alert").style.display = "block";
      document.getElementById('submitFormBtn').disabled = false;
    });
};

const Contact = () => (
  <div className="container p-3 my-3 light text-black">
    <Container className="justify-content-lg-center">
      <h1 className="text-left" >Contact Me</h1>
      <br />
      <Form>
        <Form.Row>
          <Col>
            <Form.Label text-color="warning">First Name</Form.Label>
            <Form.Control id="fname" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="lname" />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Col>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" id="email" />
          </Col>
          <Col>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="phone" id="mobile" />
          </Col>
        </Form.Row>
        <br />
        <Form.Group>
          <Form.Label>Type message here</Form.Label>
          <Form.Control as="textarea" rows="5" id="message" />
        </Form.Group>
        <br />
        <div
          class="alert alert-danger"
          id="error_alert"
          style={{ display: "none" }}
          role="alert"
        >
          Sorry, there was an error!
        </div>
        <div
          class="alert alert-success"
          id="success_alert"
          style={{ display: "none" }}
          role="alert"
        >
          Thank you for the feedback!
        </div>
        <br />
        {/* <Button 
          onClick={() => submitForm()}
          as="input"
          type="submit"
          value="Submit"
          className="dans-button"
          id="submitFormBtn"
          // style= {{ backgroundColor: "#7a7a7a", borderRadius: '10px' }}
        />{" "} */}
        <button className="button-84" onClick={() => submitForm()}
        as="input"
        type="submit"
        value="Submit"
        id="submitFormBtn"
        >Submit</button>{""}
      </Form>
    </Container>
    <Container className="justify-content-lg-center" style={{marginTop: '20px'}}>
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
