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
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },
     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

    {
    label: "",
    title: "",
    description: "",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Life-Sciences-16x9?ts=1754596500738&&fmt=webp-alpha&qlt=75&dpr=off",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },
     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

    {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },
     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

    {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
    link: "#",
  },

     {
    label: "",
    title: "",
    description:
      "",
    image: "a",
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
