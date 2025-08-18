// CapitalProjects.js

import React, { useState } from 'react';
import './CapitalProjects.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CapitalProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="capital-section">
      <div className="capital-text">
        <h1>Why transform capital project delivery?</h1>
        <p>
        Shifting regulations, advances in manufacturing, the global energy transition, and aging infrastructure are driving a surge in project demand. However, fragmented systems, labor shortages, and disconnected workflows are making it increasingly difficult for organizations to meet their project goals. By aligning strategy with real-time data and providing hands-on support in the field, companies can overcome these challenges and lay the foundation for a more resilient and sustainable future.
        </p>
      </div>

      <div className="capital-card">
        <div className="card-header">
          <h5>DATA</h5>
          <button className="toggle-btn" onClick={toggleCard}>
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <h2>9 of 10</h2>
        <p>construction projects have cost overruns — regularly up to 50%</p>

        {isExpanded && (
          <div className="expanded-data">
            <div className="data-item">
              <h3>11%</h3>
              <p>
           A portion of every dollar is lost to poor project performance.
              </p>
            </div>
            <div className="data-item">
              <h3>47%</h3>
              <p>
                Many organizations still record infrastructure/capex performance data manually in spreadsheets.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalProjects;
