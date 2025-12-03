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
        <p className="quotes">
         Virendra Kamble recognized as a Visionary Leader
        </p>
        <p className="authors">VividNex Founder & CEO, Virendra Kamble, has been recognized as a 2025 Visionary Leader for his transformative contributions to innovation and technology, driving impactful digital solutions that shape the future of businesses.</p>
      </div>
    </div>
  );
};

export default QuoteSection;
