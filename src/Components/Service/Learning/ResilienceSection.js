import React, { useRef, useState } from "react";
import "./ResilienceSection.css";
import { FaPlay, FaPause } from "react-icons/fa";


const ResilienceSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="resilience-section">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/9240561/9240561-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        unable to play the video. Your browser may not support this format
      </video>

      <div className="resilience-content">
        <h1>Enable people resilience</h1>
        <p>
         Create a resilient organization and empower a workforce that is motivated, skilled, and supported, with a structure built for agility, speed, and accountability.
        </p>
        <button className="read-more-btn">Read more</button>
      </div>

      <button className="play-pause-btn" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default ResilienceSection;
