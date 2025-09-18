import React from 'react';
import './FinanceManagementStats.css';

const stats = [
  {
   number: "84%",
text: "of enterprises accelerated cloud adoption in the last two years to drive transformation.",

  },
  {
    number: '54%',
    text: 'Most IT budgets are still spent on maintenance rather than innovation, including cloud and AI initiatives.',
  },
  {
    number: '2–4x',
    text: 'Businesses using cloud to modernize operations realize increased innovation opportunities.',
  },
  {
    number: '$10B+',
    text: 'Top cloud companies collectively spend billions monthly to accelerate continuous innovation.',
  },
];

export default function FinanceManagementStats() {
  return (
    <div className="cloud-stats-section">
      <h2>Finance and Risk in the Present Landscape</h2>
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
