import React, { useState, useEffect, useRef } from "react";
import Poster from "./Poster";
import { fetchTopMovies } from '../utils/fetch';

function TopRated() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchTopMovies(setData);
  }, [setData]);

  const renderMovies = () => {
    const movies = data;
    return movies.map((movie) => (
      <Poster key={movie.id} movie={movie} />
    ));
  };

  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
      <div className="py-4 px-4 sm:px-12">
        <h2 className="font-bold text-3xl">Top Rated</h2>
        <div 
          className="overflow-auto hide-scrollbar py-4" 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-4" rel={scrollContentRef}>
            {renderMovies()}
          </div>
        </div>
      </div>
  );
}

export default TopRated;
