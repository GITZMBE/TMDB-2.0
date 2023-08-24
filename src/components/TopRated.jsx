import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import Banner from "./Banner";
import { fetchTopMovie, fetchTopMovies } from '../utils/fetch';

function TopRated() {
  const [data, setData] = useState([]);
  const [bannerObject, setBannerObject] = useState('');  
  useEffect(() => {
    fetchTopMovies(setData);
    fetchTopMovie(setBannerObject);
  }, []);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const renderMovies = () => {
    const movies = data;
    return movies.map((movie) => (
      <Poster key={movie.id} baseUrl={baseUrl} movie={movie} />
    ));
  };

  return (
    <div id='topRated' className='flex flex-col px-12 py-[60px] bg-quaternary min-h-screen text-white'>
      <Banner topMovie={bannerObject} />
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
