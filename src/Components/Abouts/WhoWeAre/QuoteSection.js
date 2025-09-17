import React from "react";
import "./QuoteSection.css";
import sir1 from '../../../assets/images/sir1.jpg';
const QuoteSection = () => {
  return (
    <div className="quote-container">
      {/* Left Side - Image */}
      <div className="quote-image">
        <img
          src={sir1}
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
        <p className="author">Virendra Kamble / Founder & CEO</p>
      </div>
    </div>
  );
};

export default QuoteSection;
