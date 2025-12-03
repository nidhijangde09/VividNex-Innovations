import React from 'react';
import './CloudStats.css';

const stats = [
  {
    number: '1,200+',
    text: 'VividNex employees worldwide',
  },
  {
    number: '500+',
    text: 'Clients served across 40+ countries',
  },
  {
    number: '100+',
    text: 'Partners in our ecosystem',
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
