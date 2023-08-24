import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieContext } from "./MovieContext";

function Poster({ movie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const [movieObject, setMovieObject] = useState({});

  useEffect(() => {
    setMovieObject(movie);
  }, [movie]);

  const { setSelectedMovieObject } = useMovieContext();
  const handleClick = () => {
    setSelectedMovieObject(movieObject);
  }
  
  const title = movieObject.title;
  const url = movieObject.poster_path;
  const bgStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  }

  return (
    <Link to='moreInfo' onClick={handleClick}>
      <div style={bgStyle} className="group relative w-[125px] sm:w-[150px] aspect-poster background-center rounded overflow-hidden transitioning hover:scale-105">
        <div className="flex justify-center items-center w-full h-full group-hover:backdrop-brightness-50">
          <p className="text-center px-2 hidden group-hover:block text-lg text-white font-bold">{title}</p>
        </div>
      </div>      
    </Link>
  );
}

export default Poster;
