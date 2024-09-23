const getPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const postData = document.getElementById("post-data");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if(!response.ok){
      throw new Error("Error al obtener los datos")
    }

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
    postData.innerHTML = `<p>${error.message}</p>`;
  }
};
