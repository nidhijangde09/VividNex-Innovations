import React from 'react';
import './DataAIStats.css';

const stats = [
  {
    number: '95%',
    text: 'of executives agree generative AI will reshape their industry and company operations.',
  },
  {
    number: '63%',
    text: 'of firms are boosting technology budgets with a strong focus on data and AI.',
  },
  {
    number: '71%',
    text: 'of leaders cite good quality data as the key to unlocking generative AI’s full potential.',
  },
  {
    number: '15-20%',
    text: 'higher revenue growth is typical for companies leveraging data-driven strategies..',
  },
];

export default function DataAIStats() {
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
