import React, { useState, useEffect } from "react";
import { Trailer } from './Trailer';
import Banner from "./Banner";
import { fetchTopMovie, fetchVideoKey, fetchTopMovies, fetchPopular, fetchUpcoming } from "../api/fetch";
import Favorites from "./Favorites";
import MoviesContainer from "./MoviesContainer";

function Movies() {
  const [bannerObject, setBannerObject] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    fetchTopMovie(setBannerObject);
    bannerObject ? fetchVideoKey(bannerObject.id, setVideoInfo) : setVideoInfo({});
  }, [bannerObject]);

  return (
    <div id='movies' className='flex flex-col pb-[60px] bg-primary min-h-screen'>
      <Banner topMovie={bannerObject}>
        <Trailer videoKey={videoInfo.key} className='hidden' />
      </Banner>
      <main className="w-full text-white">
        <Favorites />
        <MoviesContainer title='Top Rated' fetchFunction={fetchTopMovies} />
        <MoviesContainer title='Popular' fetchFunction={fetchPopular} />
        <MoviesContainer title='Upcoming' fetchFunction={fetchUpcoming} />
      </main>
    </div>
  );
}

export default Movies;
