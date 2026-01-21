import React from "react";
import "./ResearchReport.css";
import { Linkedin } from "lucide-react"; // for LinkedIn icon

const ResearchReport = () => {
  return (
    <div className="report-container">
      {/* Left Side */}
      <div className="report-left">
        <p className="report-label">RESEARCH REPORT</p>
        <h1 className="report-title">Powered for Change 2025</h1>
        <h3 className="report-subtitle">
          Industrial decarbonization in the age of gen AI
        </h3>
        <div className="report-meta">
          <span>10-MINUTE READ</span>
          <span>September 15, 2025</span>
        </div>
        <div className="report-divider"></div>
      </div>

      {/* Right Side
      <div className="report-right">
        <p className="report-label">WRITTEN BY</p>
        <div className="author">
          <h4>Stephanie Jamison</h4>
          <p>
            Global Resources Industry Practice Chair and Global Sustainability
            Services Lead
          </p>
          <a href="#" className="linkedin-icon">
            <Linkedin size={18} />
          </a>
        </div>
        <div className="author">
          <h4>Rob Hopkin</h4>
          <p>
            Managing Director – Global Resources Group, Energy Transition &
            Sustainability Services
          </p>
          <a href="#" className="linkedin-icon">
            <Linkedin size={18} />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ResearchReport;
