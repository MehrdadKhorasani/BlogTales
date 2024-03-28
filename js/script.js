"strict mode";
const URL = "js/posts.json";
const postsEL = document.querySelector(".posts-container");

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((post) => {
//       postsEL.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="post">
//           <h1>${post.title}</h1>
//           <p>${post.body}</p>
//         </div>
//       `
//       );
//     });
//   });

async function getData() {
  const res = await fetch(URL);
  const data = await res.json();
  data.forEach((post) => {
    postsEL.insertAdjacentHTML(
      "beforeend",
      `
        <div class="post">
          <img src=${post.img} alt="post picture">
          <h1>${post.title}</h1>
          <div>
          <a href="#">${post.date}</a>
          <a href="#">${post.categories}</a>
          </div>
          <p>${post.body}...<span style="margin-left:8px;text-decoration:underline;cursor:pointer;">READ MORE</span></p>
        </div>
      `
    );
  });
}
getData();
