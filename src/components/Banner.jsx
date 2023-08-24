import React from "react";
import { AiFillPlayCircle } from 'react-icons/ai';

function Banner({ topMovie, children }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const url = topMovie.backdrop_path;
  const bannerStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  }
  const title = topMovie.title;
  const rating = topMovie.vote_average * 10;
  const releaseDate = topMovie.release_date;
  const synopsis = topMovie.overview;

  return (
    <div id='banner' style={bannerStyle} className='relative w-full aspect-video background-center'>
      {children}
      <div id="filter" className="absolute top-0 left-0 bottom-0 right-0 py-8 px-4 w-full bg-gradient-to-r from-black from-30%">
        <div className="flex flex-col justify-center gap-2 md:w-3/5 lg:w-2/5 h-full">
          <div id="title-container" className="flex items-center gap-4 py-2">
            <h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
            <AiFillPlayCircle size={36} className="fill-primary min-w-[36px]" />
          </div>
          <p className="space-x-2 font-bold text-white text-sm uppercase">
            <span className="px-2 py-1 rounded bg-green-600">{rating} %</span>
            <span className="px-2 py-1 rounded bg-gray-800">HD</span>
            <span className="px-2 py-1 rounded bg-gray-800">{releaseDate}</span>
          </p>
          <p className="text-sm sm:text-base">{synopsis}</p>          
        </div>
      </div>
    </div>
  );
}

export default Banner;
