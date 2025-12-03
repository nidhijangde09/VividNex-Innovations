import React from 'react';
import './EnergyStats.css';

const stats = [
  {
    number: "91%",
    text: "of companies report that AI adoption has improved operational efficiency."
  },
  {
    number: "70%",
    text: "of organizations are prioritizing data security alongside AI investments."
  },
  {
    number: "78%",
    text: "of executives see AI-driven insights as key to better decision-making."
  },
  {
    number: "15-20%",
    text: "increase in customer satisfaction for businesses using AI-powered personalization."
  }
];

export default function EnergyStats() {
  return (
    <div className="dataaiStatsSection">
    
      <div className="dataaiStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="dataaiStatBox">
             <div className="cloud-card-underline"/>
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
