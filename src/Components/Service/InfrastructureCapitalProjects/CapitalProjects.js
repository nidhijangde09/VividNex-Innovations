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
       
        <p>
       "Shifting regulations, advances in manufacturing, the global energy transition, and aging infrastructure are driving a surge in project demand. However, fragmented systems, labor shortages, and disconnected workflows are making it increasingly difficult for organizations to meet their project goals. By aligning strategy with real-time data and providing hands-on support in the field, VividNex-Innovations helps companies overcome these challenges and lay the foundation for a more resilient and sustainable future."
        </p>
      </div>

      <div className="capital-card">
        <div className="card-header">
          <h5>DATA</h5>
          <button className="toggle-btn" onClick={toggleCard}>
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <h2>8 of 10</h2>
        <p>Construction projects often face cost overruns, sometimes reaching half the original budget</p>

        {isExpanded && (
          <div className="expanded-data">
            <div className="data-item">
              <h3>10%</h3>
              <p>
           "Inefficient project execution results in a loss of part of every dollar."
              </p>
            </div>
            <div className="data-item">
              <h3>45%</h3>
              <p>
                Manual spreadsheet recording is still how many organizations monitor infrastructure and CAPEX performance
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalProjects;
