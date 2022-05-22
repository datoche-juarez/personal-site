import React from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";
// import styled from "styled-components";
import "./Footer.css";

export const Footer = () => (
  <footer class="footer-distributed">

  <div class="footer-right">

    <a href="https://www.facebook.com/daniel.atochejuarez"><i class="fa fa-facebook"></i></a>
    {/* <a href="https://twitter.com/dee_jaurez"><i class="fa fa-twitter"></i></a> */}
    <a href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"><i class="fa fa-linkedin"></i></a>
    <a href="https://github.com/datoche-juarez"><i class="fa fa-github"></i></a>
    <a href="https://wa.me/13136752860"><i class="fa fa-whatsapp"></i></a>

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
