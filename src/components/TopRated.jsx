import React, { useState, useEffect } from "react";
import Poster from "./Poster";
import { fetchTopMovie, fetchTopMovies, fetchVideoKey } from '../utils/fetch';
import Banner from "./Banner";
import Trailer from "./Trailer";

function TopRated() {
  const [data, setData] = useState([]);
  const [bannerObject, setBannerObject] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    fetchTopMovies(setData);
    fetchTopMovie(setBannerObject);
    fetchVideoKey(bannerObject.id, setVideoInfo);
  }, [setData, setBannerObject, bannerObject, setVideoInfo]);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const renderMovies = () => {
    const movies = data;
    return movies.map((movie) => (
      <Poster key={movie.id} baseUrl={baseUrl} movie={movie} />
    ));
  };

  const embededBaseUrl = 'https://www.youtube.com/embed/';
  

  // console.log('id:', videoInfo.id,'\n key: ', videoInfo.key)
  const embededUrl = `${embededBaseUrl + videoInfo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`;

  return (
    <div id='topRated' className='flex flex-col px-12 py-[60px] bg-quaternary min-h-screen text-white'>
      <Banner topMovie={bannerObject}>
        <Trailer embededUrl={embededUrl} className='hidden' />
      </Banner>
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
