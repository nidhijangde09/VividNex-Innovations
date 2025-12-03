import React from 'react';
import './SalesCommerceStats.css';

const stats = [
[
  {
    number: '97%',
    text: 'of executives agree that generative AI will reshape their industry and operations.',
  },
  {
    number: '67%',
    text: 'of firms are increasing technology budgets with a strong focus on data and AI.',
  },
  {
    number: '75%',
    text: 'of leaders say high-quality data is key to unlocking generative AI’s full potential.',
  },
  {
    number: '10–15%',
    text: 'higher revenue growth is typical for companies leveraging data-driven strategies.',
  }
]

];

export default function SalesCommerceStats() {
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
