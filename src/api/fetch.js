const AUTHENTICATION_KEY = process.env.REACT_APP_AUTHENTICATION_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchTopMovies = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = await results.results;
  callback(movies);
};

export const fetchTopMovie = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = await results.results;
  const topMovie = await movies[0];
  callback(topMovie);
};

export const fetchVideoKey = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(
    url,
    options
  );
  const results = await response.json();
  callback(results.results[0]);
};

export const fetchPopular = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(
    url,
    options
  );
  const results = await response.json();
  const data = results.results;
  callback(data);
};

export const fetchQuery = async (query, callback) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchUpcoming = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchRelated = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchFavorites = async (callback) => {
  const url = "https://api.themoviedb.org/3/account/20315792/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchAddFavorites = async (object, callback) => {
  const url = "https://api.themoviedb.org/3/account/20315792/favorite";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
      body: JSON.stringify(`'${object}'`),
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchGenres = async (callback) => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const genres = results.genres;
  callback(genres);
};

export const fetchProviders = async (callback) => {
  const url =
    "https://api.themoviedb.org/3/watch/providers/movie?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const data = results.results;
  callback(data);
};

export const fetchMovieCredits = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const cast = results.cast;
  callback(cast);
};

export const fetchReviews = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const reviews = results.results;
  callback(reviews);
};

export const fetchFilter = async (genreId, page, translation, year, callback) => {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}&language=${translation}&with_release_year=${year}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  const movies = results.results;
  callback(movies);
};

export const fetchTranslations = async (callback) => {
  const url = "https://api.themoviedb.org/3/configuration/primary_translations";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  callback(results);
};

export const fetchLanguages = async (callback) => {
  const url = "https://api.themoviedb.org/3/configuration/languages";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  callback(results);
};

export const fetchCountries = async (callback) => {
  const url = "https://api.themoviedb.org/3/configuration/countries";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
      `Bearer ${AUTHENTICATION_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const results = await response.json();
  callback(results);
};