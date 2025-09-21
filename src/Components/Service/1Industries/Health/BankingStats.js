import React from 'react';
import './BankingStats.css';

const stats = [
{
  number: "60%",
  text: "of CEOs say their organization is already experimenting with generative AI in key functions."
},
{
  number: "80%",
  text: "of digital transformation leaders rank cloud and AI as their top strategic priorities."
},
{
  number: "90%",
  text: "of companies adopting AI at scale report improved decision-making and faster time-to-value."
},
{
  number: "58%",
  text: "of enterprises struggle to scale AI due to fragmented data and legacy systems."
},
{
  number: "70%",
  text: "of executives say AI will be critical."
}
];

export default function BankingStats() {
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
