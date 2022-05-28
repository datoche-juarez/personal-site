import React from "react";
import "./Projects.css";
import { Button, Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import RAAScreenshot from "./assets/RAAScreenshot.png";
import PingScreenshot from "./assets/PingScreenshot.png";
import CordialScreenshot from "./assets/CSScreenshot.png";

export const Projects = () => (
  <div>
    <h1>Projects:</h1>

    <Container style={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={RAAScreenshot}
            style={{ height: "45%" }}
          />
          <Card.Body>
            <Card.Title>RAALive.com</Card.Title>
            <Card.Text>
              An online auction platform for charities to host events.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={PingScreenshot}
            style={{ height: "45%" }}
          />
          <Card.Body>
            <Card.Title>Ping Software USA</Card.Title>
            <Card.Text>
              A company website for a tech startup that offers a variety of
              software and web development services.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={CordialScreenshot}
            style={{ height: "45%" }}
          />
          <Card.Body>
            <Card.Title>The Cordial Shoppe</Card.Title>
            <Card.Text>
              An e-commerce website for a local business in Taylor, MI.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
    <p>
      As these projects are done for private clients, the GitHub repositories
      are private. Feel free to contact me for further inquiries.
    </p>
    <p>For other examples of my work, visit my:   <Button
      variant="dark"
      href="https://github.com/datoche-juarez/"
      target="_blank"
      className="button-84"
      style={{ margin: "20px" }}
    >
      Github
    </Button></p>
    {/*TODO: Add a square github icon for projects..*/}
    {/* <a href="#" class="fa fa-github"></a> */}
    {/* <Button
      variant="dark"
      href="https://github.com/datoche-juarez/"
      target="_blank"
      className="button-84"
      style={{ margin: "20px" }}
    >
      Github
    </Button> */}
  </div>
);
