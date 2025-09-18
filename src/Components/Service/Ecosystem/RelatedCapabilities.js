import React from 'react';
import './RelatedCapabilities.css';


const capabilities = [
  { name: 'Cloud', link: '/Cloud' },
  { name: 'Data and AI', link: '#' },
  { name: 'Managed Services', link: '#' },
  { name: 'Technology transformation', link: '#' }
];

export default function RelatedCapabilities() {
  return (
    <div className="related-capabilities-container">
      <h3>Supporting Capabilities</h3>
      <ul>
        {capabilities.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <span className="arrow">↗</span> {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
