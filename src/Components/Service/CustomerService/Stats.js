import React from 'react';
import './Stats.css';

const stats = [
  {
    number: '86%',
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

export default function Stats() {
  return (
     
    <div className="stats-section">

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stat-box">
            <div className="underline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
   
  
  );
}
