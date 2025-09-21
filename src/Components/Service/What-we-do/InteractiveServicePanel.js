import React, { useState } from 'react';
import './InteractiveServicePanel.css';

const items = [
  {
    label: "Aerospace and defense ",
    title: "Overcome Turbulence",
    description:
      "Amid rising costs, labor shortages, and fluctuating market demands, the Aerospace and Defense sector must adapt quickly. Embracing a digital-first approach is essential to stay competitive and resilient.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Aerospace-Defense-16x9?ts=1749798305318&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

   {
    label: "Automotive",
    title: "Redefining mobility for tomorrow",
    description:
      "The automotive industry is evolving beyond vehicles—into a connected, intelligent mobility ecosystem. At this pivotal moment, progress calls for bold collaboration across industries, leveraging innovation, data, and partnerships to drive the next era of transportation.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Automotive-16x9?ts=1749798305354&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

    {
    label: "Banking",
    title: "Shape the future of finance",
    description:"With evolving technologies and rising customer expectations, the banking industry stands at a turning point. Traditional models are no longer enough—now is the time to reimagine banking with digital-first strategies, adaptive platforms, and bold innovation.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Automotive-16x9?ts=1749798305354&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Capital Markets",
    title: "Turn disruption into advantage",
    description:"From rising retail participation and sustainability shifts to expanding infrastructure investments, the capital markets landscape is evolving fast. For those ready to adapt, every transformation opens new avenues for value and growth.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Capital-Markets-16x9?ts=1749798305422&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Chemicals",
    title: "Embrace change as a constant",
    description:  "Once viewed as a stable, mature sector, the chemical industry now faces mounting demands to innovate faster, adapt proactively, and lead in sustainability. Reinvention is no longer optional—it's imperative for growth.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Chemicals-16x9?ts=1749798305457&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Communications and Media",
    title: "Shape the future of seamless connection",
    description: "In a world where audiences and enterprises are always engaged, delivering real-time, relevant experiences is vital. To stay essential, organizations must blend innovation, personalization, and agility at scale.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Communications-Media-16x9?ts=1749798305491&&fmt=webp-alpha&dpr=off",
    link: "#",
  },
   {
    label: "Consumer Goods and Services",
    title: "Put people at the heart of reinvention",
    description:
      "Consumer behaviors are shifting fast—and unpredictably. To stay relevant, brands must deeply understand evolving expectations, prioritize trust, and create personalized, connected experiences that foster loyalty.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Consumer-Goods-and-Services-hero-image-16x9?qlt=85&wid=1600&ts=1749798305526&&fmt=webp-alpha&qlt=35&dpr=off",
    link: "#",
  },

    {
    label: "Energy",
    title: "Fuel the future through transformation",
    description:
      "The energy sector faces rising demand, fierce competition, and urgent sustainability pressures—amid inflation, market volatility, and supply chain disruptions. To stay competitive, companies must innovate, decarbonize, and go digital—reinventing how energy is produced, delivered, and consumed.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Energy-16x9?ts=1749798305562&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Health",
    title: "Humanizing Healthcare",
    description:
      "People now expect healthcare to be as seamless and personalized as any digital service. To meet this demand, providers must embrace innovation—using data and technology to deliver connected, human-centered care.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Health-16x9?ts=1749798305597&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "High Tech",
    title: "Leading the change that drives the world",
    description: "To stay ahead, tech companies must rethink products, talent, and operations—reinventing faster than the change they create.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-High-Tech-16x9?ts=1749798305632&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Industrial",
    title: "Shaping the Future of Industry, Faster",
    description:
      "A wave of trends—from technology disruption to changing B2B expectations, software-driven products, and value-rich services—is fueling the need for continuous reinvention. Today is the time to reimagine and redefine industrial business models.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-industrial-equipment-index-illustration-hero-image-1?ts=1754596500670&&fmt=webp-alpha&qlt=30&dpr=off",
    link: "#",
  },
     {
    label: "Insurance",
    title: "Change for resilience",
    description:
      "Insurance is protection. As people and societies evolve, carriers must digitize, connect, and personalize to meet increasingly complex customer needs.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Insurance-16x9?ts=1754596500704&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

    {

    label: "Life Sciences",
    title: "Transforming health, redefining possibility",
    description:
      "To meet patient needs, manage rising costs, deliver new treatments, and accelerate R&D, life sciences organizations must embrace modern transformation.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Life-Sciences-16x9?ts=1754596500738&&fmt=webp-alpha&qlt=75&dpr=off",
    link: "#",
  },

     {

    label: "Natural Resources",
    title: "Be a steward of the world’s resources",
    description:
      "In a decarbonizing world, companies in mining, metals, forest products, and building materials must transform their role—moving beyond extraction to long-term resource stewardship.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Natural-Resources-16x9?ts=1754596500772&&fmt=webp-alpha&dpr=off",

    link: "#",
  },

     {

    label: "Public Service",
    title: "Impact today. Stronger communities tomorrow.",
    description:
      "Amid limited resources, rapid technology shifts, and ongoing crises, public service organizations that embrace continuous change can deliver meaningful outcomes for people and communities.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Public-Services-Consulting-16x9?ts=1754596500806&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

  
     {
  
    label: "Private Equity",
    title: "Expanding the value equation",
    description:
      "Tomorrow’s private equity leaders will embrace new levers of growth and innovation to unlock superior returns.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-finance-and-risk-social-share-image?qlt=85&wid=1600&ts=1754596500840&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&dpr=off",
    link: "#",
  },
     {
    label: "Retail",
    title: "Responsibility at the Core",
    description:
      "The time to reset is now—responsibly. By balancing digital innovation with physical experiences, retailers can meet new expectations, uplift communities, and deliver results without compromise.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Retail-Consulting-16x9?ts=1754596500876&&fmt=webp-alpha&dpr=off",

    link: "#",
  },

    {
    label: "Software & Platforms",
    title: "Shaping the next chapter of growth",
    description:
      "With expanded technology, rising competition for attention, and macroeconomic shifts, the industry stands at a pivotal moment—one that unlocks new possibilities for growth and reinvention.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Software-Platforms-16x9?ts=1754596500911&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Travel",
    title: "Journeys Reimagined",
    description:
      "In a world reshaped by disruption, travel companies can redefine journeys—continuously innovating to provide seamless, memorable experiences that delight customers.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Travel-Consulting-16x9?ts=1754596500945&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "US Federal Government",
    title: "Leading change, achieving impact",
    description:
      "By anticipating change, federal agencies can meet every mission and mandate, ensuring the government continues to deliver extraordinary outcomes for the nation and its people.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Health-16x9?ts=1754596500602&&fmt=webp-alpha&dpr=off",
    link: "#",
  },

     {
    label: "Utilities",
    title: "Powering the transition to net zero",
    description:
      "Utilities play a pivotal role in the shift to a carbon-neutral future. Reaching net-zero ambitions demands transformative actions that deliver lasting value.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Utilities-Strategy-Consulting-16x9?ts=1754596500982&&fmt=webp-alpha&dpr=off",
    link: "#",
  },
    
];

const InteractiveServicePanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="interactive-panel">
      <div className="interactive-left-menu">
        {items.map((item, index) => (
          <div
            key={index}
            className={`interactive-menu-item ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="interactive-right-panel">
        <h2>{items[activeIndex].title}</h2>
        <p>{items[activeIndex].description}</p>
        <img src={items[activeIndex].image} alt={items[activeIndex].label} />
      </div>
    </div>
  );
};

export default InteractiveServicePanel;
