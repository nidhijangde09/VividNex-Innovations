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
       
        
        <p>Growing project demands, fueled by regulatory changes, manufacturing advances, and the global energy transition, are colliding with fragmented systems and labor shortages. Vividnex helps organizations align strategy with real-time insights and provide hands-on field support, turning challenges into opportunities for resilience and sustainable growth.</p>


      </div>

      <div className="capital-card">
        <div className="card-header">
          <h5>DATA</h5>
          <button className="toggle-btn" onClick={toggleCard}>
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <h2>8 of 10</h2>
        <p>Construction projects frequently experience</p>

        {isExpanded && (
          <div className="expanded-data">
            <div className="data-item">
              <h3>13%</h3>
          <p>Inefficiencies and mismanagement cause a chunk of every project dollar to go to waste.</p>

            </div>
            <div className="data-item">
              <h3>47%</h3>
              <p>
              Organizations often rely on spreadsheets to capture infrastructure and CAPEX performance, limiting efficiency and insight.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalProjects;
