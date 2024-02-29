// MovieModal.js
import React from 'react';
import './MovieModal.css'; 

const MovieModal = ({ movie, onClose }) => {
   // Formatting date and time can be adjusted based on how data is stored
   const formatDates = (dates) => {
    // If dates is an array, join them with a comma or format as needed
    return Array.isArray(dates) ? dates.join(', ') : dates;
  };

  const formatTimes = (times) => {
    // If times is an array, join them or format as needed
    return Array.isArray(times) ? times.join(', ') : times;
  };
  
    return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <div className="modal-trailer">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p><strong>Category:</strong> {movie.category}</p>
        <p><strong>Cast:</strong> {movie.cast}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Producer:</strong> {movie.producer}</p>
        <p><strong>Synopsis:</strong> {movie.synopsis}</p>
        <p><strong>Reviews:</strong> {movie.reviews}</p>
        <p><strong>MPAA Rating:</strong> {movie.mpaaRating}</p>
        <p><strong>Show Dates:</strong> {formatDates(movie.showDates)}</p>
        <p><strong>Show Times:</strong> {formatTimes(movie.showTimes)}</p>
        {/* Booking button */}
        <a href="/SeatBooking.html" className="booking-button">Book Now</a>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;
