import React from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useMovieContext } from "./MovieContext";

function Banner({ topMovie, children }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const url = topMovie.backdrop_path;
  const bannerStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  }
  const title = topMovie.title;
  let rating = topMovie.vote_average * 10;
  rating = rating.toString().substring(0, 2);
  const releaseDate = topMovie.release_date;
  const synopsis = topMovie.overview;

  const { setSelectedMovieObject } = useMovieContext();
  const handleClick = () => {
    setSelectedMovieObject(topMovie);
  }

  return (
    <div id='banner' style={bannerStyle} className='relative w-full aspect-video min-h-[50vh] max-h-screen background-center'>
      {children}
      <Link to='moreInfo' onClick={handleClick} >
        <div id="filter" className="absolute top-0 left-0 bottom-0 right-0 text-white pt-[60px] pb-8 px-4 sm:px-12 w-full bg-gradient-to-r from-black from-30% opacity-90">
          <div className="flex flex-col justify-center gap-2 md:w-3/5 lg:w-2/5 h-full">
            <div id="title-container" className="flex items-center gap-4 py-2">
              <h1 className="text-3xl sm:text-5xl font-bold">{title}</h1>
              <AiFillPlayCircle size={36} className="fill-primary min-w-[36px]" />
            </div>
            <p className="space-x-2 font-bold text-white text-sm uppercase">
              <span className="px-1 sm:px-2 py-[2px] sm:py-1 text-sm sm:text-base rounded bg-green-600">{rating} %</span>
              <span className="px-1 sm:px-2 py-[2px] sm:py-1 text-sm sm:text-base rounded bg-gray-800">HD</span>
              <span className="px-1 sm:px-2 py-[2px] sm:py-1 text-sm sm:text-base rounded bg-gray-800">{releaseDate}</span>
            </p>
            <p className="max-h-16 sm:max-h-none overflow-y-hidden text-sm sm:text-base">{synopsis}</p>          
          </div>
        </div>      
      </Link>
      
    </div>
  );
}

export default Banner;
