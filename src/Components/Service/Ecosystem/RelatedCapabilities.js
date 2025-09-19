import React from 'react';
import './RelatedCapabilities.css';
import Cloud from '../Cloud/Cloud';
import DataAi from '../DataAi/Dataai';
import  ManagedServices from '../ManagedServices/ManagedServices' ;
import TechnologyTransformation from '../TechnologyTransformation/TechnologyTransformation'

const capabilities = [
  { name: 'Cloud', link: '/Cloud' },
  { name: 'Data and AI', link: '/DataAi' },
  { name: 'Managed Services', link: '/ManagedServices' },
  { name: 'Technology transformation', link: '/TechnologyTransformation' }
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
