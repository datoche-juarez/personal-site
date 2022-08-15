import { React, useState, useEffect } from "react";
import "./Footer.css";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

var currentYear = dayjs().format("YYYY");

const Footer = () => {
const [activeFooterLink, setActiveFooterLink] = useState("");

let location = useLocation();

useEffect (() => {
    if (location.pathname === "/") {
      setActiveFooterLink('home-link');
    }
    if (location.pathname === "/about") {
      setActiveFooterLink('about-link');
    }
    if (location.pathname === "/projects") {
      setActiveFooterLink('projects-link');
  }
  if (location.pathname === "/contact") {
    setActiveFooterLink('contact-link');
  }
  
  // console.log("location.pathname:", location.pathname);
}, [location]);

// useEffect (() => {
//   console.log("window.location.pathname in footer component: ", window.location.pathname);
// } , [window.location.pathname]);

// handleClick function:
const handleClick = (linkId) => {
    setActiveFooterLink(linkId);
}

return (
  <footer class="footer-distributed">
    <div class="footer-right">
      <a href="https://www.facebook.com/daniel.atochejuarez" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-facebook"></i>
      </a>
      {/* <a href="https://twitter.com/dee_jaurez"><i class="fa fa-twitter"></i></a> */}
      <a
        href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/datoche-juarez" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-github"></i>
      </a>
      <a href="https://wa.me/13136752860" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-whatsapp"></i>
      </a>
    </div>

    <div class="footer-left">
      <p class="footer-links">
        <a class="link-1" id='footer-home-link' onClick={() => handleClick('home-link')} style={ activeFooterLink === 'home-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)} href="/">
          HOME
        </a>

        <a href="/about" id='footer-about-link' onClick={() => handleClick('about-link')} style={ activeFooterLink === 'about-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>ABOUT</a>

        <a href="/projects" onClick={() => handleClick('projects-link')} style={ activeFooterLink === 'projects-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>PROJECTS</a>

        {/* <a href="/blog">BLOG</a> */}

        <a href="/contact" onClick={() => handleClick('contact-link')} style={ activeFooterLink === 'contact-link' ? { textDecoration: 'underline red', textDecorationThickness: '2px'} : (null)}>CONTACT</a>
      </p>

      <p> &copy; Daniel Atoche-Juarez {currentYear}</p>
    </div>
  </footer>
);
};

export default Footer;