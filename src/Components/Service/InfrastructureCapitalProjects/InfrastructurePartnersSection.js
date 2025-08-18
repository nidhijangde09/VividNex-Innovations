import React from 'react';
import './InfrastructurePartnersSection.css';


const partners = [
  { name: 'AWS', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-aws-logo?qlt=85&ts=1738576014600&&fmt=webp-alpha&dpr=off' },
  { name: 'Claroty', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-crowdstrike-logo?qlt=85&ts=1734490172360&&fmt=webp-alpha&dpr=off' },
  { name: 'CrowdStrike', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-claroty-logo?qlt=85&ts=1734503937369&&fmt=webp-alpha&dpr=off' },
  { name: 'CyberArk', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyberark-logo?qlt=85&ts=1733757184988&&fmt=webp-alpha&dpr=off' },
  { name: 'ForgeRock', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-forgerock-logo?qlt=85&ts=1734490438350&&fmt=webp-alpha&dpr=off' },
  { name: 'Fortinet', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-fortinet-logo?qlt=85&ts=1735653057485&&fmt=webp-alpha&dpr=off' },
  { name: 'Google', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-google-logo?qlt=85&ts=1737456092396&&fmt=webp-alpha&dpr=off' },
  { name: 'Micro Focus', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microfocus-logo?qlt=85&ts=1734478688288&&fmt=webp-alpha&dpr=off' },
  { name: 'Microsoft', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microsoft-logo?qlt=85&ts=1749636519681&&fmt=webp-alpha&dpr=off' },
  
];

export default function InfrastructurePartnersSection() {
  return (
    <div className="partners-section">
    
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
