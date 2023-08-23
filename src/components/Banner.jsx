import React, { useState, useEffect } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';

function Banner({ object }) {
  // const [movieNumber, setMovieNumber] = useState(0);
  // const topMovie = object[movieNumber];

  const topMovie = object[0];

  // useEffect(() => {
  //   setInterval(() => {
  //     setMovieNumber(movieNumber + 1);
  //   }, 10000);    
  // }, [movieNumber])

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
    <div id='banner' style={bannerStyle} className='relative w-full h-[80vh] background-center'>
      <div id="filter" className="flex flex-col justify-center gap-2 absolute top-0 left-0 bottom-0 w-[60vw] py-8 px-4 bg-gradient-to-r from-black from-50%">
        <div id="title-container" className="flex items-center gap-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <AiFillPlayCircle size={36} className="fill-primary" />
        </div>
        <p className="space-x-2 font-bold text-white text-sm uppercase">
          <span className="px-2 py-1 rounded bg-green-600">{rating} %</span>
          <span className="px-2 py-1 rounded bg-gray-800">HD</span>
          <span className="px-2 py-1 rounded bg-gray-800">{releaseDate}</span>
        </p>
        <p className="w-1/2">{synopsis}</p>
      </div>
    </div>
  );
}

export default Banner;
