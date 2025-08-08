window.onload = async () => {
  const res = await fetch('https://YOUR_BACKEND_HOST/api/movies');

  const movies = await res.json();

  const container = document.getElementById("moviesContainer");
  movies.forEach(movie => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${movie.title}</h3><p>${movie.genre}</p><p>${movie.rating}</p>`;
    container.appendChild(div);
  });
};
