import React from "react";
import "./FinanceCareerSection.css";

const FinanceCareerSection = () => {
  return (
    <div className="career-section">
      <div className="career-content">
        <h1>Finance and risk management careers</h1>
        <p>
          Success is rooted in smart strategy. Use your insights and strategic
          thinking to understand how our clients can reinvent to stay ahead of change.
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
