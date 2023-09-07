export const saveSelectedMovie = (movie) => {
  localStorage.setItem("selectedMovie", JSON.stringify(movie));
};

export const getSelectedMovie = () => {
  return JSON.parse(localStorage.getItem("selectedMovie"));
};
