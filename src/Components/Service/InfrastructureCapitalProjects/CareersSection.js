import React from "react";
import "./CareersSection.css";
import { ArrowUpRight } from "lucide-react";

const CareersSection = () => {
  return (
    <div className="careers-container">
      

      <div className="related-capabilities">
        <h2>Discover Related Solutions</h2>
        <ul>
          <li>
            <ArrowUpRight size={18} strokeWidth={2} />
            <span>Innovating Infrastructure & Urban Spaces</span>
          </li>
          <li>
            <ArrowUpRight size={18} strokeWidth={2} />
            <span>Reinventing the way utilities operate for a sustainable, net-zero world.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareersSection;
