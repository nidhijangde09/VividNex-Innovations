import React from 'react';
import './CloudStats.css';

const stats = [
  {
  number: '82%',
  text: 'Companies around the world have accelerated their cloud initiatives over the past two years.',
},
{
  number: '54%',
  text: 'A large portion of IT budgets still focuses on maintenance rather than innovation via cloud or AI.',
},
{
  number: '2–5x',
  text: 'Organizations leveraging cloud effectively are 2–3 times more likely to innovate across products and services.',
},
{
  number: '$11B+',
  text: 'Leading cloud providers continue to invest over $10B monthly in innovation.',
},

];

export default function CloudStats() {
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
