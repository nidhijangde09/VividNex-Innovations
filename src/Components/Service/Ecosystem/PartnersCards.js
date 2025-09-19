import React from 'react';
import './PartnersCards.css';

const partnersData = [
  {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-adobe-logo?ts=1753170336348&$1024-PNG$&dpr=off",
    description:
      "Design, innovate, and deliver digital experiences in real time and at scale. Harness customer data to personalize marketing, deepen engagement, and accelerate growth.",
    link: "#"
  },
  {
 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description:
     "Create solutions that reshape industries, communities, and lives with AWS’s leading cloud technologies. Together, we help organizations modernize, optimize, and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-blueyonder-logo?ts=1753170336509&$1024-PNG$&dpr=off",
    description:
     "Enable full-scale supply chain transformation, covering everything from planning to fulfillment, using Blue Yonder’s Cognitive Platform. Its unified data model and AI/ML intelligence automate workflows and optimize performance across silos.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-adobe-logo?ts=1753170336348&$1024-PNG$&dpr=off",
    description:
      "Envision, build, and bring digital experiences to life at speed and scale. Leverage customer data to boost marketing impact, strengthen engagement, and drive growth.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-databricks-logo?ts=1753170336726&$1024-PNG$&dpr=off",
    description:
      "Create solutions that reshape industries, strengthen communities, and improve lives using AWS’s advanced cloud technologies. Together, we help organizations modernize, streamline, and innovate globally.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-google-logo?ts=1753170336807&$1024-PNG$&dpr=off",
    description:
     "Enable full-scale supply chain transformation, covering everything from planning to fulfillment, using Blue Yonder’s Cognitive Platform. Its unified data model and AI/ML intelligence automate workflows and optimize performance across silos.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microsoft-logo?ts=1753170336883&$1024-PNG$&dpr=off",
    description:
      "Transforming Privileged Access Management to deliver secure, seamless access on any device—anywhere, exactly when it’s needed.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-White-Nvidia-Logo?ts=1753170336958&$1024-PNG$&dpr=off",
    description:
      "Envision, build, and deliver digital experiences instantly and at scale. Unlock customer insights to boost marketing, strengthen connections, and fuel business success.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-oracle-logo?ts=1753170337101&$1024-PNG$&dpr=off",
    description:
      "Create solutions that transform industries, empower communities, and enrich lives through AWS’s industry-leading cloud technologies. Together, we help organizations modernize, streamline, and innovate globally.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-service-now-logo?ts=1753170337560&$1024-PNG$&dpr=off",
    description:
      "Enable end-to-end supply chain transformation, from planning to fulfillment, with Blue Yonder’s Cognitive Platform. Powered by a unified data model and advanced AI/ML, it automates workflows and drives smarter decisions across silos.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-snowflakes-logo?ts=1753170337633&$1024-PNG$&dpr=off",
    description:
    "Reimagining Privileged Access Management to provide seamless, secure access from any device—anywhere, precisely when required.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-workday-logo?ts=1753170337709&$1024-PNG$&dpr=off",
    description:
     "Redefining Privileged Access Management to provide seamless, secure access from any device—anywhere, precisely when required.",
    link: "#"
  },
  {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-SAP-logo-1?ts=1753170337479&$1024-PNG$&dpr=off",
    description:
     "Imagine, design, and deliver digital experiences in real time and at scale. Harness customer data to transform marketing, elevate engagement, and accelerate growth.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-paloalto-logo?ts=1753170337186&$1024-PNG$&dpr=off",
    description:
    "Build solutions that transform industries, strengthen communities, and improve lives with AWS’s world-leading cloud technologies. Together, we enable organizations to modernize, optimize, and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-sailpoint-logo?ts=1753170337262&$1024-PNG$&dpr=off",
    description:
    "Unlock complete supply chain transformation—spanning planning to fulfillment—using Blue Yonder’s Cognitive Platform. Its unified data model and AI/ML capabilities automate operations and optimize decision-making at scale.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?ts=1753170337338&$1024-PNG$&dpr=off",
    description:
   "Envision, build, and launch digital experiences instantly and at scale. Unlock customer insights to boost marketing impact, strengthen connections, and drive business success.",
    link: "#"
  }
];

const PartnersCards = () => {
  return (
    <div className="partners-cards-container">
      {partnersData.map((partner, index) => (
        <div className="partner-card" key={index}>
          <div className="partner-logo-name">
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <h3>{partner.name}</h3>
          </div>
          <p>{partner.description}</p>
         
        </div>
      ))}
    </div>
  );
};

export default PartnersCards;
