import React from 'react';
import './ChemicalsStats.css';

const stats = [
  {
    number: '65%',
    text: 'A majority of chemical executives cite inflation and price volatility as their most urgent challenge.',
  },
  {
    number: '87%',
    text: 'Many chemical CXOs report that their organizations are in the midst of accelerated transformation.',
  },
  {
    number: '58%',
    text: 'A significant share of chemical executives have embraced a coordinated, enterprise-wide strategy to reinvent every function and business unit.',
  },
  {
    number: '94%',
    text: 'Many chemical executives feel highly inspired by the new possibilities unlocked through AI foundation models.',
  },
];

export default function ChemicalsStats() {
  return (
    <div className="dataaiStatsSection">
    
      <div className="dataaiStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="dataaiStatBox">
               <div className="cloud-card-underline"/>
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
