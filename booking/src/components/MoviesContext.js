import React, { createContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie }}>
      {children}
    </MoviesContext.Provider>
  );
};
