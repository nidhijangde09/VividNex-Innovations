import React from "react";
import "./LearningDevelopment.css";

function LearningDevelopment() {
  return (
    <div className="learning-container">
      {/* Left side image */}
      <div className="learning-image">
        <img
          src="https://dynamicmedia.accenture.com/is/image/accenture/Youll-Get-Access-to-Specialized-Certifications%3Arad-3x2?ts=1720608804977&fit=constrain&dpr=off"
          alt="Learning and development"
        />
      </div>

      {/* Right side text */}
      <div className="learning-text">
        <h2>Learning and development</h2>
        <p>
          We invest each year in continuous learning and professional development
          programs. Depending on your roles and goals, you’ll get access to
          specialized certifications, deep-tech training, workshops, online
          games, hackathons, virtual reality experiences and more.
        </p>
        <a href="#" className="read-more">
          Read more <span>➜</span>
        </a>
      </div>
    </div>
  );
}

export default LearningDevelopment;
