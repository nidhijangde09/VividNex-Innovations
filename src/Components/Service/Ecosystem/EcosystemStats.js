import React from 'react'
import './EcosystemStats.css';

const stats = [
  {
    number: '88%',
    text: 'of executives say generative AI will be critical to driving future competitiveness.',
  },
  {
    number: '67%',
    text: 'of executives agree generative AI adoption is essential for operational',
  },
  {
    number: '75%',
    text: 'of organizations expect generative AI to significantly impact their business models.',
  },
  {
    number: '10-15%',
      text: 'firms leveraging data-driven insights often realize greater revenue gains.',
    
  },
];
function EcosystemStats() {
  return (
    <div>
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
    </div>
  )
}

export default EcosystemStats
