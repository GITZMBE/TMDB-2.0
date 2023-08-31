import React, { useState, useEffect } from "react";
import { Trailer } from './Trailer';
import Banner from "./Banner";
import TopRated from "./TopRated";
import { fetchPopular, fetchTopMovie, fetchUpcoming, fetchVideoKey } from "../api/fetch";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
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
        <TopRated />
        <Popular />
        <Upcoming />
        <MoviesContainer title='Top Rated' fetchFunction={fetchTopMovie} />
        <MoviesContainer title='Popular' fetchFunction={fetchPopular} />
        <MoviesContainer title='Upcoming' fetchFunction={fetchUpcoming} />
      </main>
    </div>
  );
}

export default Movies;
