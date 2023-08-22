import React from "react";

function Poster({ baseUrl, url }) {

  
  const bgStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  }

  return (
    <div style={bgStyle} className="relative w-[150px] h-[225px] bg-center bg-cover rounded before:hidden hover:before:flex before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:opacity-75"></div>
  );
}

export default Poster;
