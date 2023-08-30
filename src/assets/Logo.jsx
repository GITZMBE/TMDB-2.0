import React from "react";
import { FaStream } from "react-icons/fa";

function Logo({ display }) {
  return (
    <div className={`${display === 'flex' ? 'flex items-center gap-4' : null} w-fit text-center uppercase text-gray-500 hover:text-tertiary`}>
      <FaStream size={38} className='w-full' />
      <div className="w-fit">
        <p className='flex justify-between text-xl'><span>T</span><span>M</span><span>D</span><span>B</span></p>
        <p className="w-28 text-sm">Take A Chill Pill</p>        
      </div>
    </div>
  );
}

export default Logo;
