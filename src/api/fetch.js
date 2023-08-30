export const fetchTopMovies = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990",
    },
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = await results.results;
  callback(movies);
}

export const fetchTopMovie = async (callback) => {
  const url = "https://api.themoviedb.org/3/movie/top_rated";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990",
    },
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = await results.results;
  const topMovie = await movies[0];
  callback(topMovie);
}

export const fetchVideoKey = async (id, callback) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    },
  };
  const responce = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
  const results = await responce.json();
  callback(results.results[0]);
}

export const fetchPopular = async (callback) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
  const results = await responce.json();
  const data = results.results;
  callback(data);
}

export const fetchQuery = async (query, callback) => {
  const API_KEY = 'ccda47217fd6c20a4894163443768c54';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990",
    },
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = results.results;
  callback(movies);
}

export const fetchUpcoming = async (callback) => {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = results.results;
  callback(movies);
}

export const fetchRelated = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = results.results;
  callback(movies);
}

export const fetchFavorites = async (callback) => {
  const url = 'https://api.themoviedb.org/3/account/20315792/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = results.results;
  callback(movies);
}

export const fetchAddFavorites = async (object, callback) => {
  const url = 'https://api.themoviedb.org/3/account/20315792/favorite';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990',
      body: JSON.stringify(`'${object}'`)
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const movies = results.results;
  callback(movies);
}

export const fetchGenres = async (callback) => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const genres = results.genres;
  callback(genres);
}

export const fetchProviders = async (callback) => {
  const url = 'https://api.themoviedb.org/3/watch/providers/movie?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const data = results.results;
  callback(data);
}

export const fetchMovieCredits = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const cast = results.cast;
  callback(cast);
}

export const fetchReviews = async (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2RhNDcyMTdmZDZjMjBhNDg5NDE2MzQ0Mzc2OGM1NCIsInN1YiI6IjY0ZGU0Y2JlNWFiODFhMDExYzJkZmY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vt5XySh4REc7XSFZD_Hw4g0oW3r9O0VKnmPt1W-J990'
    }
  };
  const responce = await fetch(url, options);
  const results = await responce.json();
  const reviews = results.results;
  callback(reviews);
}