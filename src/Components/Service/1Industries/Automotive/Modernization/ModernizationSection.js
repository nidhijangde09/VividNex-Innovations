import React from "react";
import "./ModernizationSection.css";

const ModernizationSection = () => {
  return (
    <div className="modernization-section">
      {/* Left: Image */}
      <div className="modernization-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Edge-Computing-1664X1100%3Arad-3x2?ts=1754710810405&fit=constrain&dpr=off"
          alt="Modernization"
        />
      </div>

      {/* Right: Text */}
      <div className="modernization-text">
        <h1>Modernization services</h1>
        <p>Drive value with modernized cloud</p>
      </div>
    </div>
  );
};

export default ModernizationSection;
