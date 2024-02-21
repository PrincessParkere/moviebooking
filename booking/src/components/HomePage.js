import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext'; // Import the MoviesContext
import './HomePage.css';

function HomePage() {
  const { movies } = useContext(MoviesContext); // Use the movies from context
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = searchTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : movies;

  return (
    <div>
      <h1>Movie Ticket Booking Website</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img
              src={movie.poster} // Assuming you have a poster property
              alt={`${movie.title} Poster`}
              onClick={() => window.open(movie.trailer, '_blank')} // Opens the trailer URL in a new tab
              className="movie-poster"
            />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
