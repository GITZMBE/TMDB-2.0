import React, { useState, useEffect } from "react";
import { Trailer } from './Trailer';
import Banner from "./Banner";
import TopRated from "./TopRated";
import { fetchTopMovie, fetchVideoKey } from "../utils/fetch";
import Popular from "./Popular";
// import MoviesContainer from "./MoviesContainer";

function Movies() {
  const [bannerObject, setBannerObject] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
  useEffect(() => {
    fetchTopMovie(setBannerObject);
    bannerObject ? fetchVideoKey(bannerObject.id, setVideoInfo) : setVideoInfo({});
  }, [setBannerObject, bannerObject, setVideoInfo]);

  const embededBaseUrl = 'https://www.youtube.com/embed/';
  const embededUrl = `${embededBaseUrl + videoInfo.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`;

  return (
    <div id='movies' className='flex flex-col pb-[60px] bg-quaternary min-h-screen text-white'>
      <Banner topMovie={bannerObject}>
        <Trailer embededUrl={embededUrl} className='hidden' />
      </Banner>
      <main className="w-full">
        <TopRated />
        <Popular />
        {/* <MoviesContainer title='Top Rated' fetchFunction={fetchTopMovie} />
        <MoviesContainer title='Popular' fetchFunction={fetchPopular} /> */}
      </main>
    </div>
  );
}

export default Movies;
