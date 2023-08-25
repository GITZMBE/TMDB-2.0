import React, { useState, useEffect, useRef } from "react";
import Poster from "./Poster";

function MoviesContainer({ title, fetchFunction }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchFunction(setMovies);
  }, [fetchFunction, setMovies]);

  const scrollContainerRef = useRef(null);
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
    if (isDragging) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
      <div className="py-4 px-4 sm:px-12">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div 
          className="overflow-auto hide-scrollbar py-4" 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-4">
            {Object.keys(movies).length > 0 ? (
              movies.map((movie) => (
                <Poster key={movie.id} movie={movie} />
              ))
            ) : null}
          </div>
        </div>
      </div>
  );
}

export default MoviesContainer