import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';
import MovieModal from './MovieModal';
import './HomePage.css';

function HomePage() {
  const { movies } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const today = new Date();
  
  const showingNowMovies = movies.filter((movie) => {
    const showDate = new Date(movie.showDates);
    return showDate <= today;
  });

  const comingSoonMovies = movies.filter((movie) => {
    const showDate = new Date(movie.showDates);
    return showDate > today;
  });

  const filteredShowingNowMovies = searchTerm
    ? showingNowMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : showingNowMovies;

  const filteredComingSoonMovies = searchTerm
    ? comingSoonMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : comingSoonMovies;

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

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
      <section>
        <h2 className="section-heading">Showing Now</h2>
        <div className="movie-grid">
          {filteredShowingNowMovies.map((movie, index) => (
            <div key={index} className="movie-card" onClick={() => openModal(movie)}>
              <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" />
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-heading">Coming Soon</h2>
        <div className="movie-grid">
          {filteredComingSoonMovies.map((movie, index) => (
            <div key={index} className="movie-card" onClick={() => openModal(movie)}>
              <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" />
              <div className="movie-title">{movie.title}</div>
            </div>
          ))}
        </div>
      </section>
      {modalVisible && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
}

export default HomePage;
