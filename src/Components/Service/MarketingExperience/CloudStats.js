import React from 'react';
import './CloudStats.css';

const stats = [
{
  number: '85%',
  text: 'An increasing number of companies have accelerated their cloud initiatives over the past two years.',
},
{
  number: '54%',
  text: 'A significant portion of IT budgets still goes to maintenance rather than innovation through cloud or AI.',
},
{
  number: '2–5x',
  text: 'Cloud-driven organizations are 2–3 times more likely to innovate across products and services.',
},
{
  number: '$10B+',
  text: 'Leading cloud providers continue to increase monthly innovation spending sharply.',
},

];

export default function CloudStats() {
  return (
    <div className="cloud-stats-section">

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
