import React from "react";

function Poster({ baseUrl, url, title }) {

  
  const bgStyle = {
    backgroundImage: `url('${baseUrl + url}')`,
  }

  return (
    <div style={bgStyle} className="group relative w-[100px] sm:w-[150px] aspect-video background-center rounded overflow-hidden">
      <div className="flex justify-center items-center w-full h-full group-hover:backdrop-brightness-50">
        <p className="text-center px-2 hidden group-hover:block text-lg font-bold">{title}</p>
      </div>
    </div>
  );
}

export default Poster;
