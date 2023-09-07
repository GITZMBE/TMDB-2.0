import React, { useState } from "react";
import YouTube from "react-youtube";

export function Trailer({ videoKey }) {
  const [videoStyle, setVideoStyle] = useState("");
  const handleEnd = () => {
    setVideoStyle("animate-fade-out");
  };
  const handlePlay = () => {
    setVideoStyle("animate-fade-in");
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      loop: 1,
      autoplay: 1,
      playsinline: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      id='trailer'
      className={`absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 ${videoStyle}`}
      videoId={videoKey}
      opts={opts}
      onEnd={handleEnd}
      onPlay={handlePlay}
    />
  );
}

export default Trailer;
