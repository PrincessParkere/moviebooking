import React, { useState, useContext } from 'react';
import { MoviesContext } from './MoviesContext';
import './ManageMovie.css';

function ManageMovie() {
    const { addMovie } = useContext(MoviesContext);

  const [movie, setMovie] = useState({
    title: '',
    category: '',
    cast: '',
    director: '',
    producer: '',
    synopsis: '',
    reviews: '',
    poster: '',
    tailer: '',
    mpaaRating: '',
    showDates: '',
    showTimes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie(movie); // Add the movie to the context state
    setMovie({ // Reset the form
      title: '',
      category: '',
      cast: '',
      director: '',
      producer: '',
      synopsis: '',
      reviews: '',
      poster: '',
      trailer: '',
      mpaaRating: '',
      showDates: '',
      showTimes: '',
    });
  };

  return (
    <div>
      <h2>Manage Movies</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={movie.title} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={movie.category} onChange={handleChange} />
        </label>
        <label>
          Cast:
          <input type="text" name="cast" value={movie.cast} onChange={handleChange} />
        </label>
        <label>
          Director:
          <input type="text" name="director" value={movie.director} onChange={handleChange} />
        </label>
        <label>
          Producer:
          <input type="text" name="producer" value={movie.producer} onChange={handleChange} />
        </label>
        <label>
          Synopsis:
          <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} />
        </label>
        <label>
          Reviews:
          <textarea name="reviews" value={movie.reviews} onChange={handleChange} />
        </label>
        <label>
          Poster URL:
          <input 
            type="text" 
            name="poster" 
            value={movie.poster} 
            onChange={handleChange} 
            placeholder="Enter URL for the movie poster" 
          />
        </label>

        {/* Input field for the movie trailer URL */}
        <label>
          Trailer URL:
          <input 
            type="text" 
            name="trailer" 
            value={movie.trailer} 
            onChange={handleChange} 
            placeholder="Enter YouTube URL for the trailer" 
          />
        </label>
        <label>
          MPAA Rating:
          <select name="mpaaRating" value={movie.mpaaRating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </label>
        <label>
          Show Dates:
          <input 
            type="date" 
            name="showDates" 
            value={movie.showDates} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Show Times:
          <input 
            type="time" 
            name="showTimes" 
            value={movie.showTimes} 
            onChange={handleChange} 
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default ManageMovie;
