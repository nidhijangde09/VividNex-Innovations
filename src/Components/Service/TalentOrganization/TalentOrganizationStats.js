import React from 'react';
import './TalentOrganizationStats.css';

const stats = [
  {
    number: '97%',
    text: 'of executives agree generative AI will reshape their industry and company operations.',
  },
  {
    number: '67%',
    text: 'of firms are boosting technology budgets with a strong focus on data and AI.',
  },
  {
    number: '75%',
    text: 'of leaders cite good quality data as the key to unlocking generative AI’s full potential.',
  },
  {
    number: '10-15%',
    text: 'higher revenue growth is typical for companies leveraging data-driven strategies..',
  },
];

export default function TalentOrganizationStats() {
  return (
    <div className="dataaiStatsSection">
    
      <div className="dataaiStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="dataaiStatBox">
            <div className="dataaiUnderline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
