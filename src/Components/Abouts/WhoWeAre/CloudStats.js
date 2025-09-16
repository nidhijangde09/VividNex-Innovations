import React from 'react';
import './CloudStats.css';

const stats = [

  {
    number: '57%',
    text: 'A significant share of IT budgets still goes toward maintenance, not innovation through cloud or AI.',
  },
  {
    number: '2–3x',
    text: 'Cloud-driven organizations are significantly more likely to innovate across products and services.',
  },
  {
    number: '$10B+',
    text: 'Monthly innovation spend by leading cloud providers continues to rise sharply.',
  },
];

export default function CloudStats() {
  return (
    <div className="cloud-stats-section">
      
      <div className="cloud-stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="cloud-stat-box">
            <div className="underline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
