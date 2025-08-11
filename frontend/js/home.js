fetch('http://localhost:3000/api/movies')
  .then(res => res.json())
  .then(data => {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    data.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <img src="${movie.image_url}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p class="genre">${movie.genre} • ⭐ ${movie.rating}</p>
        <p class="desc">${movie.description}</p>
        <button onclick="bookMovie(${movie.id})">Book Now</button>
      `;
      movieContainer.appendChild(card);
    });
  })
  .catch(err => console.error(err));

function bookMovie(id) {
  window.location.href = `booking.html?movieId=${id}`;
}
