import React from 'react';
import './AerospaceStats.css';

const stats = [
 {
  number: '80%',
  text: 'of organizations adopting AI at scale report faster innovation cycles.',
},
{
  number: '60%',
  text: 'of business leaders say AI integration is critical to staying competitive over the next 3 years.',
},
{
  number: '40%',
  text: 'reduction in operational costs is achievable through AI-powered automation and analytics.',
},
{
  number: '$15B+',
  text: 'in annual investment is projected for generative AI innovation by leading enterprises.',
}

];

export default function AerospaceStats() {
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
