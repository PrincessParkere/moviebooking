// HomePage.js
import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';
import MovieModal from './MovieModal';
import './HomePage.css';

function HomePage() {
  const { movies } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null); // State to keep track of the selected movie for the modal
  const [modalVisible, setModalVisible] = useState(false);

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredMovies = searchTerm
  ? movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : movies;

// Open modal with movie details and trailer
const openModal = (movie) => {
  setSelectedMovie(movie);
  setModalVisible(true);
};

// Close the modal
const closeModal = () => {
  setModalVisible(false);
};

return (
  <div>
    <h1>Movie Ticket Booking Website</h1>
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
    <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card" onClick={() => openModal(movie)}>
            <img
              src={movie.poster}
              alt={`${movie.title} Poster`}
              className="movie-poster"
            />
            <div className="movie-title">{movie.title}</div> {/* Movie title displayed under the poster */}
          </div>
        ))}
      </div>

    {modalVisible && selectedMovie && (
      <MovieModal movie={selectedMovie} onClose={closeModal} />
    )}
  </div>
);
}

export default HomePage;
