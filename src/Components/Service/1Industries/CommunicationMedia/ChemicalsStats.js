import React from 'react';
import './ChemicalsStats.css';

const stats = [
[
  {
    number: "72%",
    text: "Of chemical companies are investing heavily in digital transformation to improve operational efficiency."
  },
  {
    number: "80%",
    text: "Of chemical executives prioritize sustainability initiatives as key drivers for future growth."
  },
  {
    number: "69%",
    text: "Of organizations report improved decision-making through AI-powered analytics and insights."
  },
  {
    number: "85%",
    text: "Of chemical leaders believe that innovation ecosystems and partnerships are critical to staying competitive."
  }
]

];

export default function ChemicalsStats() {
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
