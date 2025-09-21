import React from "react";
import "./QuoteSection.css";
import sir1 from '../../assets/images/sir1.jpg';
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
          “All innovations lead to transformation—businesses must reimagine every part of their operations using data, AI, and modern ways of working to drive resilience and unlock new growth opportunities.”
        </p>
        <p className="author">Virendra Kamble / Founder & CEO</p>
      </div>
    </div>
  );
};

export default QuoteSection;
