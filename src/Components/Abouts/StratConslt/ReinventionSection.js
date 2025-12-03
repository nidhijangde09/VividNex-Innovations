import React from "react";
import "./ReinventionSection.css";

const ReinventionSection = () => {
  return (
    <div className="reinvention-container">
      {/* Left Content */}
      <div className="reinvention-text">
        <h1>Reinvention starts </h1>
        <p>
          An extraordinary pace of change in technology, data, and AI—including generative AI—combined with rapidly shifting customer expectations and evolving workforce dynamics, requires businesses across all industries to innovate and transform at speed. How you compete. How you deliver value. How you drive agility and operational excellence. How you shape the workforce of tomorrow. In short, how you reinvent to become the next, stronger version of your organization.
        </p>
      </div>

      {/* Right Image */}
      <div className="reinvention-image">
        <img
          src="https://media.istockphoto.com/id/653506436/photo/lanzarote-night-sky-milky-way.jpg?b=1&s=612x612&w=0&k=20&c=t--4asqvn-gTAUHjQ6JpH54OleTNF7m-Tt6IHeIRLQc="
          alt="Reinvention"
        />
      </div>
    </div>
  );
};

export default ReinventionSection;
