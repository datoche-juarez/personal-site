import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import "./Contact.css";

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
      "https://0iou5sn1he.execute-api.us-east-2.amazonaws.com/dev/contact",
      {
        Name:
          document.getElementById("fname").value +
          " " +
          document.getElementById("lname").value,
        Email: document.getElementById("email").value,
        Service: "danatochejuarez.com",
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
      <h3 className="text-left" >Contact Me:</h3>
      <br />
      <Form className='contact-form'>
        <Form.Row>
          <Col lg={true}>
            <Form.Label text-color="warning">First Name:</Form.Label>
            <Form.Control id="fname" />
          </Col>
          <Col lg={true}>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control id="lname" />
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Col lg={true}>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" id="email" />
          </Col>
          <Col lg={true}>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="phone" id="mobile" />
          </Col>
        </Form.Row>
        <br />
        <Form.Group>
          <Form.Label>Message:</Form.Label>
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
          Message sent successfully! I will get back to you as soon as possible.
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
    <Container className="justify-content-lg-center" style={{marginTop: '50px'}}>
      <h5>Contact info:</h5>
      <br></br>
      <p>Email: <a href="mailto:danatochejuarez@gmail.com">danatochejuarez@gmail.com</a></p>
      <p>Phone: <a href="tel:3136752860">313-675-2860</a></p>
    </Container>
    <Container className='social-icon-container'>
      <Row className='social-row'>
        <Col xs={1} id='facebook-contact' style={{  padding: '20px'}}>
          <a
            href="https://www.facebook.com/daniel.atochejuarez"
            target="_blank"
            rel="noopener noreferrer"
            class="fa fa-facebook"
          ></a>
        </Col>
        <Col xs={1} id='linkedin-contact' style={{  padding: '20px'}}>
          <a
            href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
            target="_blank"
            rel="noopener noreferrer"
            class="fa fa-linkedin"
          ></a>
        </Col>
        <Col xs={1} id='github-contact' style={{  padding: '20px'}}>
          <a href="https://github.com/datoche-juarez/" target="_blank" rel="noopener noreferrer" class="fa fa-github"></a>
        </Col>
        <Col xs={1} id='whatsapp-contact' style={{  padding: '20px'}}>
          <a href="https://wa.me/13136752860" target="_blank" rel="noopener noreferrer" class="fa fa-whatsapp"></a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
