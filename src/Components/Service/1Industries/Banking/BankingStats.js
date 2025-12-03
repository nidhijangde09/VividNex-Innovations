import React from 'react';
import './BankingStats.css';

const stats = [
  {
    number: '60%',
    text: 'of executives say integrating AI across business functions is a top strategic priority for the next 12 months.',
  },
  {
    number: '80%',
    text: 'of digital transformation leaders link AI maturity to improved customer experience and operational efficiency.',
  },
  {
    number: '50%',
    text: 'reduction in time-to-market is reported by companies that embed AI into product development cycles.',
  },
  {
    number: '90%',
    text: 'of CEOs believe sustainability will be a key differentiator powered by data and AI.',
  }


];

export default function BankingStats() {
  return (
    <div className="dataaiStatsSection">

      <div className="dataaiStatsGrid">
        {stats.map((item, index) => (
          <div key={index} className="dataaiStatBox">
            <div className="cloud-card-underline" />
            <h3>{item.number}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
