import React, { useEffect, useState } from "react";
import { fetchFilter, fetchGenres, fetchTranslations } from "../api/fetch";
import Poster from "../components/Poster";
import { BsFilterSquare } from "react-icons/bs";

function Filter() {
  const [genresList, setGenresList] = useState([]);
  const [translationsList, setTranslationsList] = useState([]);
  useEffect(() => {
    fetchGenres(setGenresList);
    fetchTranslations(setTranslationsList);
  }, []);

  const [selectedGenre, setSelectedGenre] = useState("");
  const changeGenre = (e) => {
    setSelectedGenre(e.target.value);
  };

  const [page, setPage] = useState(1);
  const changePage = (e) => {
    setPage(e.target.value);
  };

  const [translation, setTranslation] = useState("en-US");
  const changeTranslation = (e) => {
    setTranslation(e.target.value);
  };

  const currentDate = new Date();
  const currectYear = currentDate.getFullYear();
  const [year, setYear] = useState("");
  const changeYear = (e) => {
    setYear(e.target.value);
  };

  const filterSearch = () => {
    selectedGenre !== "" &&
      page >= 1 &&
      page <= 1000 &&
      translation !== "" &&
      year >= 1900 &&
      year <= currectYear &&
      fetchFilter(selectedGenre, page, translation, year, setMovies);
  };
  const [movies, setMovies] = useState([]);
  return (
    <div id='filter' className='pt-[92px] sm:pt-headerHeight bg-primary'>
      <div className='px-12 min-h-[100vh]'>
        <div className='flex flex-wrap gap-4 w-full pt-8 sm:pt-16 pb-4'>
          <select
            name=''
            id='genre'
            className='bg-secondary text-tertiary px-2 cursor-pointer'
            onChange={changeGenre}
          >
            <option value='' className='text-gray-500'>
              Genre
            </option>
            {Object.keys(genresList).length > 0
              ? genresList.map((genre, index) => (
                  <option key={index} value={genre.id}>
                    {genre.name}
                  </option>
                ))
              : null}
          </select>
          <input
            type='number'
            name=''
            id='page'
            className='bg-secondary text-tertiary pl-2 input-number-btn-none cursor-pointer'
            min={1}
            max={2000}
            value={page}
            onChange={changePage}
          />
          <select
            name=''
            id='translation'
            className='bg-secondary px-2 text-tertiary hide-scrollbar cursor-pointer'
            onChange={changeTranslation}
          >
            <option value='en-US'>en-US</option>
            <option value='' className='text-gray-500'>
              Translation
            </option>
            {Object.keys(translationsList).length > 0
              ? translationsList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))
              : null}
          </select>
          <select
            name=''
            id='releaseYear'
            className='bg-secondary text-tertiary hide-scrollbar cursor-pointer'
            value={year}
            onChange={changeYear}
          >
            {/* <option value="2023">2023</option> */}
            <option value='' className='text-gray-500'>
              Release Year
            </option>
            {Array.from({ length: currectYear - 1900 + 1 }, (_, index) => (
              <option key={currectYear - index} value={currectYear - index}>
                {currectYear - index}
              </option>
            ))}
          </select>
          <button
            className='flex items-center gap-4 px-2 text-gray-500 hover:text-tertiary bg-secondary hover:bg-quaternary rounded'
            onClick={filterSearch}
          >
            Filter <BsFilterSquare />
          </button>
        </div>
        <div className='flex flex-wrap justify-center sm:justify-start gap-4 w-full py-4'>
          {Object.keys(movies).length > 0
            ? movies.map((movie, index) => <Poster key={index} movie={movie} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default Filter;
