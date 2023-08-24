import React from "react";

function Trailer({ embededUrl }) {
  return (
    <iframe
      className='absolute top-0 bottom-0 left-0 right-0 w-full h-full' 
      src={embededUrl}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    ></iframe>
  )
}

export default Trailer;