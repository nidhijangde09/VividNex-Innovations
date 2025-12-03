import React from 'react';
import './AutomotiveStats.css';

const stats = [
{
  number: '82%',
  text: 'of organizations report faster decision-making when using AI-driven insights across operations.',
},
{
  number: '60%',
  text: 'of enterprises are prioritizing cloud modernization to accelerate innovation and resilience.',
},
{
  number: '45%',
  text: 'increase in customer engagement is seen when personalized experiences are powered by AI and analytics.',
},
{
  number: '3x',
  text: 'higher innovation output is achieved by companies integrating AI with human expertise across projects.',
},


];

export default function AutomotiveStats() {
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
