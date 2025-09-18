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
        <h3>AI brings you closer to meeting your deadlines and budget goals.</h3>
        <p>
         "Leverage AI to gain real-time insights, automate contracts
          and workflows, test different execution strategies, and 
          strengthen compliance and risk detection—ensuring projects 
          are delivered on time, on budget, and securely."
        </p>
      </div>
    </div>
  );
};

export default AIInfrastructureSection;
