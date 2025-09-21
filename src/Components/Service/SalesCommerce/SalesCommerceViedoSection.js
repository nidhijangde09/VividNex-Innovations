import React, { useRef, useState } from "react";
import "./SalesCommerceViedoSection.css";
import { FaPlay, FaPause } from "react-icons/fa";


const SalesCommerceViedoSection = () => {
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
        Your browser does not support the video tag.
      </video>

      <div className="resilience-content">
        <h1>Your next-generation sales and commerce partne</h1>
        <p>
          empowering businesses with tech-driven innovation.
        </p>
        <button className="read-more-btn">Read more</button>
      </div>

      <button className="play-pause-btn" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default SalesCommerceViedoSection;
