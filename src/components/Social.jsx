import React, { Component } from "react";
import "../App.css";

const facebookBtn = document.querySelector(".facebook-btn");
// const twitterBtn = document.querySelector(".twitter-btn");
// const pinterestBtn = document.querySelector(".pinterest-btn");
// const linkedinBtn = document.querySelector(".linkedin-btn");
// const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  //   const pinterestImg = document.querySelector(".pinterest-img");

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  //   let postImg = encodeURI(pinterestImg.src);

  //   facebookBtn.setAttribute(
  //     "href",
  //     `https://www.facebook.com/sharer.php?u=${postUrl}`
  //   );

  //   twitterBtn.setAttribute(
  //     "href",
  //     `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  //   );

  //   pinterestBtn.setAttribute(
  //     "href",
  //     `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  //   );

  //   linkedinBtn.setAttribute(
  //     "href",
  //     `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //   );

  //   whatsappBtn.setAttribute(
  //     "href",
  //     `https://wa.me/?text=${postTitle} ${postUrl}`
  //   );
}

init();

class Social extends Component {
  state = {
    url: "https://www.facebook.com/sharer.php?u=",
  };
  render() {
    return (
      <div class="share-btn-container">
        <a href="#" class="facebook-btn">
          <i class="fab fa-facebook"></i>
        </a>

        <a href="#" class="twitter-btn">
          <i class="fab fa-twitter"></i>
        </a>

        <a href="#" class="pinterest-btn">
          <i class="fab fa-pinterest"></i>
        </a>

        <a href="#" class="linkedin-btn">
          <i class="fab fa-linkedin"></i>
        </a>

        <a href="#" class="whatsapp-btn">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    );
  }
}

export default Social;
