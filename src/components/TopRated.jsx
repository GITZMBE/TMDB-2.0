import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import Banner from "./Banner";

function TopRated() {
  const [data, setData] = useState([]);
  const [bannerObject, setBannerObject] = useState('');  
  useEffect(() => {
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
      const movies = results.results;
      setData(movies);
      setBannerObject(movies);
    };

    fetchTopMovies();
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const renderMovies = () => {
    console.log(data);
    const movies = data;
    return movies.map((movie) => (
      <Poster key={movie.id} baseUrl={baseUrl} movie={movie} />
    ));
  };

  return (
    <div id='topRated' className='flex flex-col px-12 py-[60px] bg-quaternary min-h-screen text-white'>
      <Banner object={bannerObject} />
      <div className="py-4">
        <h2 className="font-bold text-3xl">Top Rated</h2>
        <div className="flex flex-wrap gap-4 py-4">
          {renderMovies()}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
