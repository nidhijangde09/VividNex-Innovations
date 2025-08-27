import React from "react";
import "./FlexConnect.css";
import { Play } from "lucide-react"; // play icon


const FlexConnect = () => {
  return (
    <div className="flexconnect-container">
      {/* Left Section */}
      <div className="flexconnect-text">
        <h3 className="section-title">Flex and connect</h3>
        <p className="section-desc">
          Flexibility extends beyond where you work—to what you do and when and
          how you do it. For all of us, making connections is a key part of
          flexible working. We believe in its power to build strong
          relationships and innovate to create change.
        </p>
      </div>

      {/* Right Section */}
      <div className="flexconnect-video">
        <div className="video-overlay">
          <img
            src="https://media.istockphoto.com/id/2192038455/video/futuristic-ai-brain-in-data-center.jpg?b=1&s=640x640&k=20&c=AXWX9qBJDL5fIXPBZr44EFz3QHIvjUnCji3CE2ino7k=" 
            alt="Flex and Connect"
            className="video-thumbnail"
          />
          <button className="play-btn">
            <Play size={40} />
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default FlexConnect;
