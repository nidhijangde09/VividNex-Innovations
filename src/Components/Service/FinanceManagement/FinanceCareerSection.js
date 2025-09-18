import React from "react";
import "./FinanceCareerSection.css";

const FinanceCareerSection = () => {
  return (
    <div className="career-section">
      <div className="career-content">
        <h1>Careers in Finance & Risk Management</h1>
        <p>
          "Success begins with smart strategy. Leverage your insights and strategic thinking to help our clients reinvent and stay ahead of change."
        </p>
        <div className="career-buttons">
          <button className="btn-primary">Finance consulting open roles</button>
          <button className="btn-outline">Risk management open roles</button>
        </div>
      </div>
    </div>
  );
};

export default FinanceCareerSection;
