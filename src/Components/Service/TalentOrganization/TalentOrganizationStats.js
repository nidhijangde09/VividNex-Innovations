import React from 'react';
import './TalentOrganizationStats.css';

const stats = [
  {
    number: '97%',
    text: 'say generative AI is set to reshape business models and company operations..',
  },
  {
    number: '67%',
    text: 'report higher technology spending with a strong emphasis on data and AI.',
  },
  {
    number: '75%',
    text: 'of leaders cite high-quality data as the key to unlocking generative AI’s full potential.',
  },
  {
    number: '10–15%',
    text: 'higher revenue growth is typical for companies leveraging data-driven strategies.',
  }
];

export default function TalentOrganizationStats() {
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
