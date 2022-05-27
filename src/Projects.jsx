import React from "react";
import "./Projects.css";
import { Button, Container, Row, Col, Card, CardGroup } from "react-bootstrap";



export const Projects = () => (
  <div>
    <h1>Projects:</h1>
    <p>Projects section coming soon...</p>
    <p>For now, check out my projects on GitHub...</p>
    {/*TODO: Add a square github icon for projects..*/}
    {/* <a href="#" class="fa fa-github"></a> */}
    <Button
      variant="dark"
      href="https://github.com/datoche-juarez/"
      target="_blank"
      className="project-button"
    >
      Github
    </Button>
    <Container style={{paddingTop: '20px', paddingBottom: '30px'}}>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="assets/RAA-Screenshot.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </Container>
  </div>
);
