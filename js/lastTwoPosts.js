"use strict";
const URL = "js/posts.json";
const linksEL = document.querySelector(".side__links");

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post) => {
      if (post.id > 3) {
        linksEL.insertAdjacentHTML(
          "beforeend",
          `
          <a href="post.html" class="side__links-link"
          >${post.title}</a
          >
          `
        );
      }
    });
  });
