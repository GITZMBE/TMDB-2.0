import React from "react";

function Trailer({ embededUrl }) {
  setTimeout(() => {
      const trailer = document.getElementById('trailer');
      trailer.classList.remove('hidden');
      trailer.classList.add('animate-fade-in')
  }, 4000);

  return (
    <iframe
      id='trailer'
      className='absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 hidden'
      src={embededUrl}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    ></iframe>
  );
}

export default Trailer;
