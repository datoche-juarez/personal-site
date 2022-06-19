import React from "react";
import Container from "react-bootstrap/Container";

import "./About.css";

export const About = () => (
  <Container className="about-container">
    <h3>About Me </h3>
    <p>
      I'm a Computer Science student curently working as a web developer. Since
      I was a young child, I have always been as interested in engaging with my
      creative side as I have with my more technical and logical side. This is
      why I've chosen to focus on the intersection of web development and
      design. Although I'm still relatively new in this space, I am more than
      willing to compensate by offering competative rates as well as an extra
      investment in time and focus. At this stage in my development as an
      engineer and designer, my focus is on developing a unique portfolio and
      building a diverse network of clients and partners in the community.
      Please feel free to contact me with inquiries <a href="/contact">here</a>.
    </p>
  </Container>
);
