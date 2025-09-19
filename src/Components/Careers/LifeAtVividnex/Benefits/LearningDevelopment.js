import React from "react";
import "./LearningDevelopment.css";
import Learning from '../../../Service/Learning/Learning';
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
          From certifications to immersive VR experiences, Vividnex
           provides the tools and programs you need to
            learn, grow, and excel in your career every year.
        </p>
        <a href="/Learning" className="read-more">
          Read more <span>➜</span>
        </a>
      </div>
    </div>
  );
}

export default LearningDevelopment;
