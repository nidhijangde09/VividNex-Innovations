import React from 'react';
import './SustainabilityConsultingStats.css';

const stats = [
  {
    number: '97%',
    text: 'agree generative AI will be a disruptive force across industries..',
  },
  {
  number: '67%',
  text: 'of organizations are increasing tech budgets with a strong focus on data and AI.',
},
{
  number: '75%',
  text: 'of business leaders identify high-quality data as critical to unlocking AI’s full potential.',
},
{
  number: '10–15%',
  text: 'typical revenue growth advantage for companies leveraging data-driven strategies.',
},
];

export default function SustainabilityConsultingStats() {
  return (
    <div className="dataaiStatsSection">
    
      <div className="dataaiStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="dataaiStatBox">
            <div className="dataaiUnderline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
