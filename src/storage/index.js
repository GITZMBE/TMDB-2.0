export const saveSelectedMovie = (movie) => {
  localStorage.setItem("selectedMovie", JSON.stringify(movie));
};

export const getSelectedMovie = () => {
  return JSON.parse(localStorage.getItem("selectedMovie"));
};

export const saveFavoritMovies = (movies) => {
  localStorage.setItem("favoritMovies", JSON.stringify(movies));
};

export const getFavoritMovies = () => {
  return JSON.parse(localStorage.getItem("favoritMovies"));
};