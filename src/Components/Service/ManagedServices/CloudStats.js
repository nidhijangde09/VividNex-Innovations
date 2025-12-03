import React from 'react';
import './CloudStats.css';

const stats = [
  {
  number: '85%',
  text: 'Most companies accelerated their cloud initiatives over the past two years.',
},
{
  number: '54%',
  text: 'A large portion of IT budgets still goes to maintenance instead of cloud or AI-driven innovation.',
},
{
  number: '2–4x',
  text: 'Organizations leveraging cloud are 2–3 times more likely to innovate across products and services.',
},
{
  number: '$11B+',
  text: 'Leading cloud providers continue to invest over $10B monthly to drive continuous innovation.',
},

];

export default function CloudStats() {
  return (
    <div className="cloud-stats-section">
  
      <div className="cloud-stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="cloud-stat-box">
             <div className="cloud-card-underline"/>
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
