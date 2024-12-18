// script.js
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

// Add a new movie to the collection
const addMovie = (collection, movie) => {
    collection.push(movie);
    renderMovieCards(collection);
};

// Render movie cards to the UI
const renderMovieCards = (collection) => {
    const movieCardsContainer = document.getElementById("movieCards");
    movieCardsContainer.innerHTML = ""; // Clear current cards

    collection.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Rating: ${movie.rating}</p>
            <p>Released: ${movie.releaseYear}</p>
        `;

        movieCardsContainer.appendChild(card);
    });
};

// Add new movie from form input
const addNewMovie = () => {
    const title = document.getElementById("movieTitle").value;
    const genre = document.getElementById("movieGenre").value;
    const rating = parseFloat(document.getElementById("movieRating").value);
    const releaseYear = parseInt(document.getElementById("movieReleaseYear").value);

    if (title && genre && !isNaN(rating) && !isNaN(releaseYear)) {
        addMovie(movies, { title, genre, rating, releaseYear });
    } else {
        alert("Please fill in all fields correctly.");
    }
};

// List movies by genre
const listMoviesByGenreUI = () => {
    const genre = prompt("Enter genre:");
    const filteredMovies = listMoviesByGenre(movies, genre);
    displayResults(filteredMovies);
};

// List movies by genre
const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

// Find the highest-rated movie
const findHighestRatedMovieUI = () => {
    const highestRatedMovie = findHighestRatedMovie(movies);
    displayResults([highestRatedMovie]);
};

// Find highest-rated movie
const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

// Get all movie titles
const getMovieTitlesUI = () => {
    const titles = getMovieTitles(movies);
    displayResults(titles);
};

// Get movie titles
const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

// Movies released after a specific year
const moviesAfterYearUI = () => {
    const year = parseInt(prompt("Enter year:"));
    const filteredMovies = moviesAfterYear(movies, year);
    displayResults(filteredMovies);
};

// Filter movies after a given year
const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

// Display results in the UI
const displayResults = (data) => {
    const resultText = document.getElementById("resultText");

    if (Array.isArray(data)) {
        resultText.innerHTML = data.length > 0
            ? data.map(item => {
                if (item.title) {
                    return `${item.title} (${item.releaseYear}) - Rating: ${item.rating}`;
                } else {
                    return item; // Movie titles
                }
            }).join("<br>")
            : "No results found.";
    } else {
        resultText.textContent = "No results found.";
    }
};

// Initial render of movie list
renderMovieCards(movies);
