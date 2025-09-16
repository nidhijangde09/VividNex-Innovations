// AIInfrastructureSection.js
import React from "react";
import "./AIInfrastructureSection.css";
import engeneer1 from "../../../assets/images//engeer1.jpg"; // Replace with actual path

const AIInfrastructureSection = () => {
  return (
    <div className="ai-infra-container">
      <div className="ai-infra-image">
        <img src={engeneer1} alt="Engineer at work" />
      </div>
      <div className="ai-infra-text">
        
        <div className="highlight-bar"></div>
        <h3>AI can get you closer to ‘on time’ and ‘on budget’</h3>
        <p>
          Imagine having reliable insights for quick decision making. Or
          automation that improves efficiency in contracts, workflows, and
          reporting. Picture being able to test different design and execution
          options to perfect plans and solve construction issues before starting
          work onsite. Think about the added security from better compliance and
          risk detection. AI provides the necessary support to deliver project
          performance.
        </p>
      </div>
    </div>
  );
};

export default AIInfrastructureSection;
