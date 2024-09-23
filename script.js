const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const postData = document.getElementById("post-data");

    const ul = `
        <ul>${data
          .map(
            (post) =>
              `<li>
            <b>${post.title}</b>
            <div>${post.body}</div>
            </li>
            `
          )
          .join("")}
        </ul>
        `;
    postData.innerHTML = ul;
  } catch (error) {
    console.log("Error", error);
  }
};
