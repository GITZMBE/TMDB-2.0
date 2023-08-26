import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { fetchQuery } from "../utils/fetch";
import Poster from "./Poster";

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  useEffect(() => {
    const searchBar = document.getElementById("searchBar");
    const header = document.getElementById("header");
    const movieSection = document.getElementById("movieSection");
    if (openSearch) {
      searchBar.classList.remove("w-0");
      searchBar.classList.add("w-[50vw]", "sm:w-[70vw]", "md:w-[75vw]", "px-2");
      searchBar.focus();
      header.classList.add("h-screen", "items-start");
      header.classList.remove("max-h-[60px]", "items-center");
      movieSection.classList.add("py-4");
      setBackgroundOpacity(1);
    } else {
      searchBar.classList.add("w-0");
      searchBar.classList.remove(
        "w-[50vw]",
        "sm:w-[70vw]",
        "md:w-[75vw]",
        "px-2"
      );
      searchBar.blur();
      header.classList.remove("h-screen", "items-start");
      header.classList.add("max-h-[60px]", "items-center");
      movieSection.classList.remove("py-4");
      const calculatedOpacity = Math.min(
        window.scrollY / header.clientHeight,
        1
      );
      setBackgroundOpacity(calculatedOpacity);
    }
  }, [openSearch]);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setOpenSearch(!openSearch);
    setSearch("");
    setSearchObject({});
  };
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const [searchObject, setSearchObject] = useState({});
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchQuery(search, setSearchObject);
    }
  };
  const handleClickPoster = () => {
    setOpenSearch(!openSearch);
  };

  window.addEventListener("scroll", (e) => {
    const header = document.getElementById("header");
    const calculatedOpacity = Math.min(window.scrollY / header.clientHeight, 1);
    setBackgroundOpacity(calculatedOpacity);
  });

  return (
    <header
      id='header'
      className='fixed z-10 flex flex-col justify-start w-full max-h-[60px] overflow-y-hidden bg-quaternary'
      style={{ backgroundColor: `rgb(11, 20, 22, ${backgroundOpacity})` }}
    >
      <div className='flex justify-between items-center w-full py-4 px-4 sm:px-12'>
        <Link to={window.location.pathname === '/moreInfo' ? '../' : ''}>
          <FaStream size={28} className='fill-gray-400' />
        </Link>
        <div className='flex gap-4 items-center'>
          <div id='search-container' className='flex items-center'>
            <input
              type='text'
              id='searchBar'
              className='w-0 outline-none text-sm transitioning'
              value={search}
              onChange={onSearch}
              onKeyPress={handleKeyPress}
            />
            <button className='px-2'>
              <BiSearch
                size={22}
                className='fill-gray-400 hover:fill-white z-30'
                onClick={handleClick}
              />
            </button>
          </div>
          <AiOutlineMenu
            size={22}
            className='fill-gray-400 hover:fill-white cursor hidden sm:block'
          />
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div
          id='movieSection'
          className='flex flex-wrap items-start gap-4 px-12 w-full max-w-[1408px] max-h-full overflow-y-auto hide-scrollbar'
        >
          {Object.keys(searchObject).length > 0
            ? searchObject.map((movie) => (
                <div
                  key={movie.id}
                  className='w-fit h-fit'
                  onClick={handleClickPoster}
                >
                  <Poster movie={movie} />
                </div>
              ))
            : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
