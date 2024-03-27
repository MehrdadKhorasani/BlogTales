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
          <h1>${post.title}</h1>
          <p>${post.body}</p>
        </div>
      `
    );
  });
}
getData();
