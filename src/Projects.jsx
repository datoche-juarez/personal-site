import React from "react";
import "./Projects.css";
import { Button, Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import RAAScreenshot from "./assets/RAAScreenshot.png";
import PingScreenshot from "./assets/PingScreenshot.png";
import CordialScreenshot from "./assets/CSScreenshot.png";

export const Projects = () => (
  <div>
    <h3>Projects:</h3>

    <Container style={{ paddingTop: "20px", paddingBottom: "30px" }}>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={RAAScreenshot}
            style={{ height: "55%" }}
          />
          <Card.Body>
            <Card.Title>RAALive.com</Card.Title>
            <Card.Text>
              An online auction platform for charities to host events.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="http://raalive.com"
              target="_blank"
              className="card-button"
            >
              Go
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={PingScreenshot}
            style={{ height: "55%" }}
          />
          <Card.Body>
            <Card.Title>Ping Software USA</Card.Title>
            <Card.Text>
              A company website for a tech startup that offers a variety of
              software and web development services.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://www.pingsoftwareusa.com/home"
              target="_blank"
              className="card-button"
            >
              Go
            </Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={CordialScreenshot}
            style={{ height: "55%" }}
          />
          <Card.Body>
            <Card.Title>The Cordial Shoppe</Card.Title>
            <Card.Text>
              An e-commerce website for a local business in Taylor, MI.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              href="https://www.cordial-shoppe.com/index"
              target="_blank"
              className="card-button"
            >
              Go
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
    <p>
      As these projects are done for private clients, the GitHub repositories
      are private. Feel free to contact me for further inquiries.
    </p>
    <p>
      For other examples of my work, visit my:{" "}
      <Button
        variant="dark"
        href="https://github.com/datoche-juarez/"
        target="_blank"
        className="project-button"
        style={{ margin: "20px" }}
      >
        Github
      </Button>
    </p>
  </div>
);
