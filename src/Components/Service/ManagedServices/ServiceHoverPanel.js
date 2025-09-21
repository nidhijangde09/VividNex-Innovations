// ServiceHoverPanel.js
import React, { useState } from 'react';
import './ServiceHoverPanel.css';

const items = [
 
    {
        label: "Cloud",
title: "Innovate Faster with Cloud",
description: "Cloud technology empowers organizations to transform operations, innovate quickly, and meet evolving business and human needs in real time.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Digital-Engineering-And-Manufacturing-Hero-Image-SVG-2?ts=1749798304182&&fmt=webp-alpha&qlt=75&dpr=off",
    },
    {
       label: "Cloud Solutions",
title: "Empower Your Business with Cloud",
description: "From startups to enterprises, the cloud drives transformation, enabling organizations to meet evolving business and human needs in real time.",
       image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
    },
    {
       label: "Cloud Innovation",
title: "Transform Operations with Cloud",
description: "Whether for startups or global enterprises, cloud technology fuels reinvention and adapts to changing business and human demands instantly.",
  image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Enterprise-Platforms-16x9?ts=1749798304246&&fmt=webp-alpha&qlt=50&dpr=off", // Replace with your image URL
        link: "#"
    },
    {
      label: "Digital Cloud",
title: "Cloud Solutions for Every Organization",
description: "Cloud solutions empower organizations of all sizes to reinvent operations and respond to evolving business and human needs in real time.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture%20Finance-and-Risk-Mgmt-16_9?qlt=85&wid=1600&ts=1749798304276&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Cloud Transformation",
title: "Reinvent and Innovate with Cloud",
description: "From small businesses to large enterprises, cloud enables reinvention and delivers real-time solutions to meet dynamic business and human demands.",
   image: "https://dynamicmedia.accenture.com/is/content/accenture/Customer-Service-Solutions-Illustrations-640x360?ts=1749798304086&&fmt=webp-alpha&qlt=75&dpr=off",
         link: "#",
    },
     {
       label: "Next-Gen Cloud",
title: "Next-Level Cloud Transformation",
description: "Cloud technology empowers organizations to transform operations, innovate quickly, and meet evolving business and human needs in real time.",
image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-3840x2160-learning-services:rad-16x9?ts=1749798304339&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&qlt=50&dpr=on,1&wid=480",
         link: "#",
    },
     {
        label: "Cloud Strategy",
title: "Accelerate Growth with Cloud",
description: "From startups to enterprises, cloud solutions drive reinvention and deliver real-time, adaptive business capabilities.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Cloud Advantage",
title: "Smarter Business with Cloud",
description: "Cloud enables organizations of all sizes to transform, innovate, and respond instantly to dynamic business and human demands.",
       image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
       label: "Cloud Innovation Hub",
title: "Unleash Potential with Cloud",
description: "From startups to enterprises, cloud solutions empower organizations to innovate, adapt, and meet evolving business and human needs in real time.",

        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Metaverse-16x9?ts=1749798304433&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Cloud Strategy & Solutions",
title: "Drive Transformation with Cloud",
description: "Cloud technology enables organizations of all sizes to reinvent operations, accelerate growth, and respond dynamically to business and human demands.",
image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
       label: "Next-Gen Cloud Services",
title: "Redefine Business with Cloud",
description: "Cloud solutions fuel operational excellence and innovation, helping organizations stay ahead in a rapidly evolving digital landscape.",
       image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
      label: "Digital Cloud Solutions",
title: "Accelerate Growth with Cloud",
description: "Cloud technology enables organizations to innovate faster, optimize processes, and meet evolving business and human needs seamlessly.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
       label: "Cloud Power",
title: "Innovate, Adapt, Succeed with Cloud",
description: "Harness the power of cloud to drive operational efficiency, foster innovation, and respond to changing business and human needs.",
      image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Sustainability-16x9?ts=1749798304557&&fmt=webp-alpha&qlt=10&dpr=off",
         link: "#",
    },
     {
        label: "Cloud Excellence",
title: "Empower Change Through Cloud",
description: "From small businesses to global enterprises, cloud drives transformation, enhances agility, and delivers real-time business insights.",
   image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Talent-Org-16x9?ts=1749798304588&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
       label: "Tech Transformation",
title: "Reinvent Your Tech Foundation for Agile Growth",
description: "Modernize your digital core with strategic investments, skilled talent, and scalable solutions that unlock efficiency, maximize ROI, and drive continuous innovation.",
 image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Technology-Transformation-16x9?ts=1749798304618&&fmt=webp-alpha&qlt=75&dpr=off",
         link: "#",
    },
    
];

const ServiceHoverPanel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="panel-container">
            <div className="left-menu">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${index === activeIndex ? 'active' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
            <div className="right-panel">
                <h2>{items[activeIndex].title}</h2>
                <p>{items[activeIndex].description}</p>
                <img src={items[activeIndex].image} alt={items[activeIndex].label} />
            </div>
        </div>
    );
};

export default ServiceHoverPanel;
