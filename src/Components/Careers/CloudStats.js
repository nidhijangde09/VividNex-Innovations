import React from 'react';
import './CloudStats.css';

const stats = [
  {
    number: '86%',
    text: 'A growing number of companies accelerated their cloud initiatives over the past two years.',
  },
  {
    number: '57%',
    text: 'A significant share of IT budgets still goes toward maintenance, not innovation through cloud or AI.',
  },
  {
    number: '2–3x',
    text: 'Cloud-driven organizations are significantly more likely to innovate across products and services.',
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
