import React, { useState, useEffect } from "react";
import { fetchUpcoming } from "../api/fetch";
import Poster from "./Poster";
import Draggable from "./Draggable";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchUpcoming(setMovies);
  }, [])



  return (
    <div className="py-4 px-4 sm:px-12">
      <h2 className="font-bold text-3xl">Upcoming</h2>
      <Draggable>
        <div 
          className="flex gap-4" 
        >
          {Object.keys(movies).length > 0 ? (
            movies.map(movie => (
              <Poster key={movie.id} movie={movie} />
            ))
          ): null }
        </div>
      </Draggable>      
    </div>
  );
}

export default Upcoming;