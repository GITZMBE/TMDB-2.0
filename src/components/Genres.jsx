import { useEffect, useState } from "react";
import { fetchGenres } from "../api/fetch";
import { Link, Outlet } from "react-router-dom";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  useEffect(() => {
    fetchGenres(setGenres);
  }, []);
  return (
    <div id='genres' className='pt-[92px] sm:pt-headerHeight bg-primary'>
      <div className='px-12 min-h-[100vh]'>
        <div className='flex flex-wrap gap-4 w-full pt-8 sm:pt-16 pb-4 text-white'>
          {genres.length > 0
            ? genres.map((genre, i) => (
                <Link
                  key={i}
                  to={`/genres/${genre.id}`}
                  className={`py-1 px-2 hover:bg-secondary ${
                    selectedGenre === genre.id ? "bg-secondary" : ""
                  }`}
                  onClick={() => setSelectedGenre(genre.id)}
                >
                  {genre.name}
                </Link>
              ))
            : null}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Genres;
