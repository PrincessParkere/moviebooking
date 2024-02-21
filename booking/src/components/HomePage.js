// HomePage.js
import React, { useState } from 'react';
import './HomePage.css'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    // ... more movie objects
  ]);

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
      <div>
        {filteredMovies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
