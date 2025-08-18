import React from 'react';
import './PartnersCards.css';

const partnersData = [
  {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-adobe-logo?ts=1753170336348&$1024-PNG$&dpr=off",
    description:
      "Imagine, create and bring any digital experience to life real-time and at scale. Unleash your customer data to transform marketing, boost engagement, and drive business growth.",
    link: "#"
  },
  {
 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-blueyonder-logo?ts=1753170336509&$1024-PNG$&dpr=off",
    description:
      "Achieve comprehensive supply chain transformation, spanning planning to fulfillment, using Blue Yonder’s Cognitive Platform. With a unified data model and advanced AI/ML, it automates processes and optimizes decisions across silos.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-adobe-logo?ts=1753170336348&$1024-PNG$&dpr=off",
    description:
      "Imagine, create and bring any digital experience to life real-time and at scale. Unleash your customer data to transform marketing, boost engagement, and drive business growth.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-databricks-logo?ts=1753170336726&$1024-PNG$&dpr=off",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-google-logo?ts=1753170336807&$1024-PNG$&dpr=off",
    description:
      "Achieve comprehensive supply chain transformation, spanning planning to fulfillment, using Blue Yonder’s Cognitive Platform. With a unified data model and advanced AI/ML, it automates processes and optimizes decisions across silos.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-microsoft-logo?ts=1753170336883&$1024-PNG$&dpr=off",
    description:
      "Revolutionizing Privileged Access Management to help you ensure secure access across any device—anywhere, and at the right time.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-White-Nvidia-Logo?ts=1753170336958&$1024-PNG$&dpr=off",
    description:
      "Imagine, create and bring any digital experience to life real-time and at scale. Unleash your customer data to transform marketing, boost engagement, and drive business growth.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-oracle-logo?ts=1753170337101&$1024-PNG$&dpr=off",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-service-now-logo?ts=1753170337560&$1024-PNG$&dpr=off",
    description:
      "Achieve comprehensive supply chain transformation, spanning planning to fulfillment, using Blue Yonder’s Cognitive Platform. With a unified data model and advanced AI/ML, it automates processes and optimizes decisions across silos.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-snowflakes-logo?ts=1753170337633&$1024-PNG$&dpr=off",
    description:
      "Revolutionizing Privileged Access Management to help you ensure secure access across any device—anywhere, and at the right time.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-workday-logo?ts=1753170337709&$1024-PNG$&dpr=off",
    description:
      "Revolutionizing Privileged Access Management to help you ensure secure access across any device—anywhere, and at the right time.",
    link: "#"
  },
  {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-SAP-logo-1?ts=1753170337479&$1024-PNG$&dpr=off",
    description:
      "Imagine, create and bring any digital experience to life real-time and at scale. Unleash your customer data to transform marketing, boost engagement, and drive business growth.",
    link: "#"
  },
  {
 
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-paloalto-logo?ts=1753170337186&$1024-PNG$&dpr=off",
    description:
      "Build solutions that transform industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
    link: "#"
  },
  {
   
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-sailpoint-logo?ts=1753170337262&$1024-PNG$&dpr=off",
    description:
      "Achieve comprehensive supply chain transformation, spanning planning to fulfillment, using Blue Yonder’s Cognitive Platform. With a unified data model and advanced AI/ML, it automates processes and optimizes decisions across silos.",
    link: "#"
  },
   {
    
    logo: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-salesforce-logo?ts=1753170337338&$1024-PNG$&dpr=off",
    description:
      "Imagine, create and bring any digital experience to life real-time and at scale. Unleash your customer data to transform marketing, boost engagement, and drive business growth.",
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
          <a href={partner.link} className="partner-learn-more">
            Learn more <span>➡</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PartnersCards;
