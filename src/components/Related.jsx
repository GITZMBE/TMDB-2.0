import React, { useState, useEffect } from "react";
import { fetchRelated } from "../api/fetch";
import Poster from "./Poster";
import Draggable from "./Draggable";

function Related({ id }) {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    fetchRelated(id, setMovies);
  }, [movies, id]);

  return (
    <div className='py-4'>
      <h2 className='font-bold text-3xl'>Related</h2>
      <Draggable>
        <div className='flex gap-4'>
          {Object.keys(movies).length > 0
            ? movies.map((movie) => <Poster key={movie.id} movie={movie} />)
            : null}
        </div>
      </Draggable>
    </div>
  );
}

export default Related;
