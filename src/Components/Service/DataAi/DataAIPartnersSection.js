import React from 'react';
import './DataAIPartnersSection.css';

const partners = [
  { name: 'AWS', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-aws-logo?qlt=85&ts=1738576014600&&fmt=webp-alpha&dpr=off' },
  
  { name: 'Google', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-google-logo?qlt=85&ts=1737456092396&&fmt=webp-alpha&dpr=off' },
 
  { name: 'Microsoft', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microsoft-logo?qlt=85&ts=1749636519681&&fmt=webp-alpha&dpr=off' },
 
  { name: 'Oracle', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-oracle-logo?qlt=85&ts=1741254605898&&fmt=webp-alpha&dpr=off' },
 { name: 'teradata', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-teradata-logo?qlt=85&ts=1733327386269&&fmt=webp-alpha&dpr=off' },
 { name: 'Ibm', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-ibm-logo?qlt=85&ts=1739270539538&&fmt=webp-alpha&dpr=off' },
  { name: 'Salesforce', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1738594219921&$auto-png-alpha$&&fmt=webp-alpha&dpr=off' },
  { name: 'Snowflakes', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-snowflakes-logo?qlt=85&ts=1735728794334&&fmt=webp-alpha&dpr=off' },
  { name: 'SAP', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-service-now-logo?qlt=85&ts=1742182340135&&fmt=webp-alpha&dpr=off' },
  { name: 'ServiceNow', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-splunk-logo?qlt=85&ts=1735750109423&&fmt=webp-alpha&dpr=off' },
  { name: 'Splunk', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-zscaler-logo?qlt=85&ts=1733378742753&&fmt=webp-alpha&dpr=off' },
];

export default function DataAIPartnersSection() {
  return (
    <div className="dataai-partners-section">

      <div className="dataai-partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="dataai-partner-card">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
