import React, { useState, useEffect, useRef } from "react";
// import { fetchFavorites } from "../utils/fetch";
import Poster from "./Poster";

function Favorites() {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    const updateFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setMovies(storedFavorites);
    };
    updateFavorites();
    window.addEventListener("storage", (event) => {
      if (event.key === "favorites") {
        updateFavorites();
      }
    });
    return () => {
      window.removeEventListener("storage", updateFavorites);
    };
  }, []);

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
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="py-4 px-4 sm:px-12">
      <h2 className="font-bold text-3xl">Favorites</h2>
      <div 
        id='popular' 
        className="overflow-auto hide-scrollbar py-4"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        >
        <div 
          className="flex gap-4" 
        >
          {Object.keys(movies).length > 0 ? (
            movies.map(movie => (
              <Poster key={movie.id} movie={movie} />
            ))
          ): null }
        </div>
      </div>      
    </div>
  );
}

export default Favorites;