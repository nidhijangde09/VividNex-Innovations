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
        <h1>Implement a service strategy powered by AI</h1>
        <p>Generative AI is reshaping customer service—moving from reactive support to proactive engagement. By delivering smarter, contextual interactions across the customer journey, it helps businesses anticipate needs, elevate experiences, and equip talent to provide faster, more personalized service.</p>
      </div>
    </div>
  );
};

export default ModernizationSection;
