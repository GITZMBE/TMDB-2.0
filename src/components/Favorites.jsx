import React from "react";
import Poster from "./Poster";
import Draggable from "./Draggable";
import { useRecoilState } from "recoil";
import { FavoriteMoviesState } from "../states";

function Favorites() {
  const [favorites] = useRecoilState(FavoriteMoviesState);

  return (
    <>
      {Object.keys(favorites).length > 0 ? (
        <div className='py-4 px-4 sm:px-12'>
          <h2 className='font-bold text-3xl'>Favorites</h2>
          <Draggable>
            <div className='flex gap-4'>
              {favorites.map((movie) => (
                <Poster key={movie.id} movie={movie} />
              ))}
            </div>
          </Draggable>
        </div>
      ) : null}
    </>
  );
}

export default Favorites;
