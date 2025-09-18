import React from 'react';
import './EmergingStats.css';

const stats = [
  {
    number: '96%',
    text: 'of companies accelerated their cloud adoption in the last two years',
  },
  {
    number: '71%',
    text: 'Cloud leaders invest billions every month to power continuous technological advancement.',
  },
  {
    number: '2–4x',
    text: 'rganizations leveraging cloud for transformation unlock greater innovation potential.',
  },
  {
    number: "$10B+",
     text: "Leading cloud providers invest billions each month to drive ongoing innovation.",

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
