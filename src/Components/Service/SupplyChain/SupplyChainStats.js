import React from 'react';
import './SupplyChainStats.css';

const stats = [
[
  {
    number: '97%',
    text: 'of executives agree that generative AI will reshape their industry and company operations.',
  },
  {
    number: '67%',
    text: 'of firms are increasing technology budgets with a strong focus on data and AI.',
  },
  {
    number: '75%',
    text: 'of leaders cite high-quality data as key to unlocking generative AI’s full potential.',
  },
  {
    number: '10–15%',
    text: 'higher revenue growth is typical for companies leveraging data-driven strategies.',
  }
]
];

export default function SupplyChainStats() {
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
