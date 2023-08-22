import React from "react";
import { FaStream } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header className='flex justify-between items-center w-full px-12 py-4 bg-black opacity-50'>
      <FaStream size={28} className='fill-gray-400' />
      <div className='flex'>
        <input type='text' />
        <button className='px-2'>
          <BiSearch size={22} className='fill-gray-400' />
        </button>
      </div>
    </header>
  );
}

export default Header;