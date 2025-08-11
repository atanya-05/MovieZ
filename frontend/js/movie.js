console.log("Now Showing Page Loaded");

window.onload = async () => {
  try {
    // Fetch movie data from backend
    const res = await fetch("https://moviez-backend.onrender.com/api/movies");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const movies = await res.json();
    const container = document.getElementById("moviesContainer");
    container.innerHTML = ""; // Clear before adding new content

    movies.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="movie-img">
        <div class="movie-details">
          <h3>${movie.title}</h3>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <p><strong>Rating:</strong> ${movie.rating}</p>
          <button class="book-btn" onclick="bookMovie(${movie.id})">Book Now</button>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching movies:", error);
    document.getElementById("moviesContainer").innerHTML = `<p>Failed to load movies. Please try again later.</p>`;
  }
};

// Redirect to booking page with movieId in URL
function bookMovie(movieId) {
  window.location.href = `booking.html?movieId=${movieId}`;
}
