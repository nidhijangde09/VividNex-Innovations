import React from 'react';
import './CloudStats.css';

const stats = [
  {
    number: '86%',
    text: '[X]% of organizations have fast-tracked their digital transformation with innovative technology and AI-driven solutions.',
  },
 
];

export default function CloudStats() {
  return (
    <div className="cloud-stats-section">
      <div className="cloud-stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="cloud-stat-box">
           <div className="cloud-card-underline"/>
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
