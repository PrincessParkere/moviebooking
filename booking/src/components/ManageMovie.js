import React, { useState } from 'react';
import './ManageMovie.css';

function ManageMovie() {
  const [movie, setMovie] = useState({
    title: '',
    category: '',
    cast: '',
    director: '',
    producer: '',
    synopsis: '',
    reviews: '',
    trailerPicture: '',
    trailerVideo: '',
    mpaaRating: '',
    showDatesAndTimes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here. You might want to save the data to a database.
    console.log(movie);
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
          Trailer Picture (URL):
          <input type="text" name="trailerPicture" value={movie.trailerPicture} onChange={handleChange} />
        </label>
        <label>
          Trailer Video (URL):
          <input type="text" name="trailerVideo" value={movie.trailerVideo} onChange={handleChange} />
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
          Show Dates and Times:
          <input type="text" name="showDatesAndTimes" value={movie.showDatesAndTimes} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManageMovie;
