import React, { useEffect, useState, useRef } from "react";
import { fetchProviders } from "../api/fetch";

function Providers() {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    fetchProviders(setProviders);
  }, []);

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = "grab";
    }
  };
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = "grab";
    }
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div id='providers' className="w-full px-12" >
      <div 
        className='flex overflow-hidden'
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {Object.keys(providers).length > 0
          ? providers.map((item, i) => {
              return (
                <img
                  key={i}
                  src={baseUrl + item.logo_path}
                  alt=''
                  className='w-12 h-12'
                ></img>
              );
            })
          : null}
      </div>      
    </div>
  );
}

export default Providers;
