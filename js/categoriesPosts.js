"strict mode";
const URL = "js/posts.json";
const postsEL = document.querySelector(".layout__posts");
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

async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  data.forEach((post) => {
    if (post.categories === "MUSIC")
      postsEL.insertAdjacentHTML(
        "beforeend",
        `
        <div class="post">
          <img src=${post.img} alt="post image" class="post__img" />
          <div class="post__content-container">
            <a href="post.html" class="post__h1">
              ${post.title}
            </a>
            <div class="post__info">
              <span class="post__info-date">${post.date}</span>
              <span>|</span>
              <a href="Category.html" class="post__info-cat"> ${post.categories} </a>
            </div>
            <div class="post__content">
              <p class="post__content-paragraph">
                ${post.body}&nbsp;
              </p>
              <a href="post.html" class="post__content-more"> Read more... </a>
            </div>
          </div>
        </div>

      `
      );
  });
}
getData();
