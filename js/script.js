const URL = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const requset = await fetch(URL);
  const data = await requset.json();
  data.forEach((data) => {
    if (data.id <= 5) console.log(data);
  });
}
getData();
