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
        The convergence of regulatory shifts, manufacturing innovation, the energy transition, and aging infrastructure is driving project growth—but fragmented systems and labor shortages pose major challenges. Vividnex aligns strategy with real-time insights and provides hands-on support to help companies achieve resilient, sustainable outcomes.
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
        <p>construction projects have cost overruns — regularly up to 50%</p>

        {isExpanded && (
          <div className="expanded-data">
            <div className="data-item">
              <h3>13%</h3>
              <p>
           Inefficiencies and mismanagement result in a chunk of every project dollar being wasted.

              </p>
            </div>
            <div className="data-item">
              <h3>47%</h3>
           <p>
            Despite modern tools, much of infrastructure and CAPEX data is still captured manually in spreadsheets, slowing decision-making.
            </p>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CapitalProjects;
