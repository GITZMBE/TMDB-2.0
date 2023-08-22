import React from "react";

function Banner({ url }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const bannerStyle = {
    backgroundImage: baseUrl + url,
  }

  return (
    <div id='banner' style={bannerStyle} className='w-full h-[80vh]'></div>
  );
}

export default Banner;
