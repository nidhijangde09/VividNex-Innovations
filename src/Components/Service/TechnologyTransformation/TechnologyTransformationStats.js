import React from 'react';
import './TechnologyTransformationStats.css';

const stats = [
  [
  {
    number: '97%',
    text: 'of executives believe generative AI will fundamentally transform their industries and business operations.',
  },
  {
    number: '67%',
    text: 'of organizations are ramping up technology investments, prioritizing AI and data-driven initiatives.',
  },
  {
    number: '75%',
    text: 'of leaders highlight high-quality data as essential to realizing generative AI’s full potential.',
  },
  {
    number: '10–15%',
    text: 'additional revenue growth is observed in companies effectively leveraging data-driven strategies.',
  }
],
]

export default function TechnologyTransformationStats() {
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
