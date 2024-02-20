import React, { useState } from 'react';

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
      <h2>Manage Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={movie.title} onChange={handleChange} />
        </label>
        {/* Add other fields similarly based on the structure above */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManageMovie;
