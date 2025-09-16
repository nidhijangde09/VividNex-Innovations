import React from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  return (
    <div className="quote-container">
      {/* Left Side - Image */}
      <div className="quote-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Julie-Sweet-Headshot-600x800:rad-3x4?ts=1757430408034&fit=constrain&dpr=on,1&wid=480" 
          alt="Profile"
        />
      </div>

      {/* Right Side - Quote */}
      <div className="quote-text">
        <p className="quote">
          “All strategies lead to technology—companies must reinvent all parts
          of the enterprise with data, AI and new ways of working to build
          resilience and find paths to new growth.”
        </p>
        <p className="author">Julie Sweet / Chair & CEO</p>
      </div>
    </div>
  );
};

export default QuoteSection;
