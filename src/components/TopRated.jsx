import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import Banner from "./Banner";

function TopRated() {
  useEffect(() => fetchTopMovies, []);
  const [data, setData] = useState([]);
  const fetchTopMovies = async () => {
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
    setData(movies);
  };

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const renderMovies = () => {
    console.log(data);
    const movies = data;
    setBannerUrl(movies[0].backdrop_path);
    return movies.map((movie) => (
      <Poster baseUrl={baseUrl} url={movie.poster_path} title={movie.title} />
    ));
  };

  const [bannerUrl, setBannerUrl] = useState('');

  return (
    <div id='topRated' className='flex flex-col px-12 py-[60px] bg-black min-h-screen text-white'>
      <Banner url={bannerUrl} />
      <div className="py-4">
        <h2 className="font-bold text-3xl">Top Rated</h2>
        <div className="flex flex-wrap gap-4 overflow-x-auto">
          {renderMovies()}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
