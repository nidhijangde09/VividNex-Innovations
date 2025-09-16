import React from "react";
import "./CareersSection.css";
import { ArrowUpRight } from "lucide-react";

const CareersSection = () => {
  return (
    <div>

      <div className="related-capabilities">
        <h2>Related capabilities</h2>
        <ul>
          <li>
            <ArrowUpRight size={18} strokeWidth={2} />
            <span>Cities, transportation and infrastructure</span>
          </li>
          <li>
            <ArrowUpRight size={18} strokeWidth={2} />
            <span>Radically reinventing utilities for net zero</span>
          </li>
        </ul>
      </div>
      </div>
    
  );
};

export default CareersSection;
