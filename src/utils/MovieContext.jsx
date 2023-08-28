import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [selectedMovieObject, setSelectedMovieObject] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovieObject, setSelectedMovieObject }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}