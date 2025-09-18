import React from "react";
import "./AiReinvention.css";
import { Play } from "lucide-react"; // play icon

const AiReinvention = () => {
  return (
    <div className="ai-container">
      {/* Left Content */}
      <div className="ai-content">
        <h2>Inside Telstra’s AI reinvention with Accenture</h2>
        <p>
          This joint venture powers the telco leader’s ambitions of reinventing
          its business with AI and growing connections with customers.
        </p>
        <a href="#" className="read-more">
          Read more →
        </a>
      </div>

      {/* Right Image */}
      <div className="ai-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/ACN-Telstra-hero-v2%3Arad-3x2?ts=1757666752026&fit=constrain&qlt=11&dpr=off" 
          alt="AI Reinvention"
        />
       
      </div>
    </div>
  );
};

export default AiReinvention;
