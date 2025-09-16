import React from "react";
import "./ReinventionSection.css";

const ReinventionSection = () => {
  return (
    <div className="reinvention-container">
      {/* Left Content */}
      <div className="reinvention-text">
        <h1>Reinvention starts here</h1>
        <p>
          An unprecedented rate of change in technology, data and AI—including
          generative AI, fast-shifting consumer preferences and evolving
          workforce dynamics call for businesses in every industry to innovate
          and rapidly transform. How you compete. How you define and deliver
          value. How you create greater agility and operational excellence. How
          you define new talent strategies. In short, how you reinvent to be the
          next best version of yourself.
        </p>
      </div>

      {/* Right Image */}
      <div className="reinvention-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Strategy-Consulting-hero-featured-3840px-2160?qlt=85&wid=1600&ts=1756708891564&wid=1200&fit=constrain&dpr=off" 
          alt="Reinvention"
        />
      </div>
    </div>
  );
};

export default ReinventionSection;
