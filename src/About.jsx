// import React from "react";
// import Counters from "./components/Counters";
// import Dan from "./components/Dan";
// import Social from "./components/Social";

// export const About = () => (
//   <div>
//     <h1>About Us:</h1>

//     <p>
//       Our mission is to remove the barriers that stand between those that have
//       had interactions with the criminal justice system and the opportunity to
//       pursuit a healthy life, specifically employment opportunities and housing.
//       The denial of these opportunities to those that have repaid their debt to
//       society is not only cruel, but it also actively inhibits the reintegration
//       process. This destructive cycle does not function, not for the individual,
//       and not for our communities.
//     </p>
//     <p>
//       At a time when millions of Americans are asking what they can do to be a
//       part of the solution, and are looking for opportunities to work towards
//       tangible results, we are working to create a space for those who have
//       previously been denied the most basic of freedoms to connect with places
//       of business and landlords who have made a commitment to move beyond
//       denying opportunities to those with criminal records. Our hope is that
//       everyone with the desire and the willingness has the chance to better
//       their lives and that our communities will reap the rewards of healthier,
//       more inclusive, and more productive society.
//     </p>
//     <p>
//       If you own have a place of business or a rental property and believe in
//       our mission, please contact us to be added to our list of resources.
//       Although our goal is to begin building our network in the Metro Detroit
//       area, we hope to expand further as this project picks up momentum. Head
//       over to our contact page to join our movement.
//     </p>

//     <br></br>
//     <p>Come find us on social media: </p>
//     <a
//       href="https://www.facebook.com/daniel.atochejuarez"
//       class="fa fa-facebook"
//     ></a>
//     <a href="#" className="fa fa-twitter"></a>
//     <a href="#" className="fa fa-google"></a>
//     <a href="#" className="fa fa-youtube"></a>
//     <a href="#" className="fa fa-instagram"></a>
//     <br></br>
//     <Counters></Counters>
//     <Dan></Dan>
//     <Social></Social>
//   </div>
// );

import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const About = () => (
  <div>
    <h1>About Me </h1>

    <p>
      I'm a Computer Science student curently working in the web development
      space. Since I was a young child, I have always been as interested in
      engaging with my creative side as I have with my technical, uber logical
      side. This is why I've chosen to focus on the intersection of web
      development and design. Although I'm still relatively new in this space, I
      am more than willing to compensate by offering competative rates as well
      as an extra investment in time and focus. At this stage in my development
      as an engineer and designer, my focus is on developing a unique portfolio
      and building a diverse network of clients and partners in the community.
      Please feel free to contact me with any inquiries{" "}
      <a href="/contact">here</a>.
    </p>

    {/* <Container>
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
        <Col xs={1}>
          <a href="#" class="fa fa-instagram"></a>
        </Col>
        <Col xs={1}>
          <a href="#" class="fa fa-linkedin"></a>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs={1}>
          <a href="#" class="fa fa-github"></a>
        </Col>
        <Col xs={1}>
          <a href="#" class="fa fa-whatsapp"></a>
        </Col>
        <Col xs={1}>
          <a href="#" class="fa fa-pinterest"></a>
        </Col>
        <Col xs={1}>
          <a href="#" class="fa fa-soundcloud"></a>
        </Col>
      </Row>
    </Container> */}
  </div>
);
