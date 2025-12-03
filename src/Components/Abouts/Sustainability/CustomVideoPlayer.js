import React, { useRef, useState } from "react";
import "./CustomVideoPlayer.css";

const CustomVideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} className="video" preload="metadata">
        <source src="https://media.istockphoto.com/id/2154449780/video/an-icon-of-reusability-and-recycling-made-of-small-white-sponges-as-a-metaphor-for.jpg?b=1&s=640x640&k=20&c=mlv2u89vUgue8raGUvgnHzp_U52LPJKiD1MtLjDCVYg=" type="video/mp4" />
        <track
          src="https://media.istockphoto.com/id/2142013936/video/mountain-range-in-hong-kong.jpg?b=1&s=640x640&k=20&c=QX2RVV641lMBuMubjd-KU5DFgKRgFSWGhBaSxrUrxZ4="
          kind="subtitles"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button className="play-btn" onClick={handlePlay}>
          ▶
        </button>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
