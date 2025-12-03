import React from 'react';
import './ChemicalsStats.css';

const stats = [
{
  number: "62%",
  text: "of chemical executives identify inflation and price volatility as their most urgent challenges."
},
{
  number: "89%",
  text: "of chemical CXOs say their organizations are undergoing accelerated transformation."
},
{
  number: "68%",
  text: "of leaders in the chemical sector are pursuing coordinated, enterprise-wide reinvention strategies."
},
{
  number: "84%",
  text: "of chemical executives are inspired by the possibilities unlocked through AI foundation models."
}

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
