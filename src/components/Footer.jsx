// import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import styled from "styled-components";


// const Styles = styled.div`
//   .navbar {
//     background-color: #535353;
//     // position: sticky;
//     // flex-direction: column;
//     // bottom: 0;
   
//   }

//   a,
//   .navbar-brand,
//   .navbar-nav,
//   .nav-link {
//     color: #ffffff;

//     &:hover {
//       color: #ed2224;
//     }
//   }
// `;

// export const Footer = () => (
//   <div id="dansFooter" style={{marginTop: "auto"}}>
//   <Styles>
//     <Navbar expand="lg" >
//       <Navbar.Brand href="/">DAJ</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/">Home</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/about">About</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/about">Projects</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/about">Blog</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/contact">Contact</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <p class="text-white">&copy; Daniel Atoche-Juarez</p>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles>
//   </div>
// );






import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "./Footer.css";

export const Footer = () => (
  <footer class="footer-distributed">

  <div class="footer-right">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

  <div class="footer-left">

    <p class="footer-links">
      <a class="link-1" href="/">HOME</a>

      <a href="/about">ABOUT</a>

      <a href="/projects">PROJECTS</a>

      <a href="/blog">BLOG</a>

      <a href="/contact">CONTACT</a>
    </p>

    <p> &copy; Daniel Atoche-Juarez 2021</p>
  </div>

</footer>
);
