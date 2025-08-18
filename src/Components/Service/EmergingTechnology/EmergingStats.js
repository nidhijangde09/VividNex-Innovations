import React from 'react';
import './EmergingStats.css';

const stats = [
  {
    number: '96%',
    text: 'of companies accelerated their cloud adoption in the last two years',
  },
  {
    number: '57%',
    text: 'of IT budgets still go to maintenance over innovation like cloud and AI',
  },
  {
    number: '2–3x',
    text: 'Companies using cloud to transform see higher innovation potential.',
  },
  {
    number: '$10B+',
    text: 'Major cloud providers collectively invest billions monthly to drive continuous innovation.',
  },
];

export default function EmergingStats() {
  return (
    <div className="cloud-stats-section">
      <h2>Cloud now</h2>
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
