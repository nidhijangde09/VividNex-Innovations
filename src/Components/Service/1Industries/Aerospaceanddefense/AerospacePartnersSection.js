import React from 'react';
import './AerospacePartnersSection.css';


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
  { name: 'Nozomi Networks', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-nozomi-logo?qlt=85&ts=1734583659368&&fmt=webp-alpha&dpr=off' },
  { name: 'Okta', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-okta-logo?qlt=85&ts=1735728800876&$1024-PNG$&dpr=off' },
  { name: 'Oracle', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-oracle-logo?qlt=85&ts=1741254605898&&fmt=webp-alpha&dpr=off' },
  { name: 'Palo Alto', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-paloalto-logo?qlt=85&ts=1735739469512&$1024-PNG$&fit=constrain&dpr=off' },
  { name: 'Ping Identity', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-ping-logo?qlt=85&ts=1733741545459&&fmt=webp-alpha&dpr=off' },
  { name: 'SailPoint', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-sailpoint-logo?qlt=85&ts=1733495961607&$1024-PNG$&fit=constrain&dpr=off            ' },
  { name: 'Salesforce', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?qlt=85&ts=1738594219921&$auto-png-alpha$&&fmt=webp-alpha&dpr=off' },
  { name: 'Saviynt', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-saviynt-logo?qlt=85&ts=1735652592629&&fmt=webp-alpha&dpr=off' },
  { name: 'SAP', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-service-now-logo?qlt=85&ts=1742182340135&&fmt=webp-alpha&dpr=off' },
  { name: 'ServiceNow', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-splunk-logo?qlt=85&ts=1735750109423&&fmt=webp-alpha&dpr=off' },
  { name: 'Splunk', logo: 'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-zscaler-logo?qlt=85&ts=1733378742753&&fmt=webp-alpha&dpr=off' },
];

export default function AerospacePartnersSection() {
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
