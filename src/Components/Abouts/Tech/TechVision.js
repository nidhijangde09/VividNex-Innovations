import React from "react";
import "./TechVision.css";
import { Play } from "lucide-react"; // for play icon (or use your own image)

const TechVision = () => {
  return (
    <div className="techvision-container">
      {/* Left - Image with play button */}
      <div className="techvision-image">
        <img
          src="https://i.ibb.co/XxXhQ7S/sample.jpg" // replace with your image
          alt="Tech Vision"
        />
        <div className="play-button">
          <Play size={40} color="white" />
        </div>
      </div>

      {/* Right - Content */}
      <div className="techvision-content">
        <h2>Karthik Narain talks Tech Vision 2025</h2>
        <p>
          Karthik Narain, Accenture CTO and Group Chief Executive – Technology,
          hosts a fireside chat at CES 2025 on building trust in AI—drawing
          insights from our latest Tech Vision report.
        </p>
        <a href="#" className="read-more">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default TechVision;
