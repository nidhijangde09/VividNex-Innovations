import React from 'react';
import './LearningStats.css';

const stats = [
  {
    number: '84%',
    text: 'Over the past two years, companies have increasingly accelerated their move to the cloud',
  },
  {
    number: '53%',
    text: 'Most IT spending continues to focus on maintenance rather than transformative technologies like cloud and AI.',
  },
  {
    number: '2–4x',
    text: 'Companies leveraging cloud transformation unlock greater innovation potential.',
  },
  {
    number: '$10B+',
    text: 'Top cloud companies collectively spend billions monthly to accelerate continuous innovation.',
  },
];

export default function LearningStats() {
  return (
    <div className="cloud-stats-section">
      <h2>Why reinvent learning?</h2>
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
