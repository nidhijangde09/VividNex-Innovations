import React from 'react';
import './CybersecurityStats.css';

const stats = [
  {
    number: '$10.5T in 2025',
    text: 'Cybercrime to cost the world $10.5 trillion annually by 2025.',
  },
  {
    number: '82%',
    text: 'of business leaders foresee a catastrophic cyber event in the next two years due to geopolitical instability.',
  },
  {
    number: '180% ',
    text: 'Disruption levels surged by 200% from 2017 to 2022.',
  },
  
];

export default function CybersecurityStats() {
  return (
    <div className="cybersecurityStatsSection">
      <h2>Cybersecurity now</h2>
      <div className="cybersecurityStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="cybersecurityStatBox">
            <div className="cybersecurityUnderline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
