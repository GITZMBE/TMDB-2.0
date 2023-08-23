import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaStream } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  useEffect(() => {
    const searchBar = document.getElementById('searchBar');
    openSearch ? searchBar.classList.remove('w-0') : searchBar.classList.add('w-0');
    openSearch ? searchBar.classList.add('w-56') : searchBar.classList.remove('w-56');
    openSearch ? searchBar.classList.add('px-2') : searchBar.classList.remove('px-2');
    openSearch ? searchBar.focus(): searchBar.blur();    
  }, [openSearch])
  
  const handleClick = () => {
    setOpenSearch(!openSearch);
  }

  return (
    <header id="header" className='fixed z-10 flex justify-between items-center w-full px-12 py-4 bg-quaternary'>
      <Link to='home'>
        <FaStream size={28} className='fill-gray-400' />
      </Link>
      <div className='flex gap-4'>
        <div id="search-container" className="flex items-center">
          <input type='text' id="searchBar" className="w-0 outline-none text-sm transitioning" />
          <button className='px-2'>
            <BiSearch size={22} className='fill-gray-400 hover:fill-white' onClick={handleClick} />
          </button>          
        </div>
        <AiOutlineMenu size={22} className='fill-gray-400 hover:fill-white cursor hidden sm:block' />
      </div>
    </header>
  );
}

export default Header;
