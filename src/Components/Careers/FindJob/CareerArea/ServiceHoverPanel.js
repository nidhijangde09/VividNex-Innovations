// ServiceHoverPanel.js
import React, { useState } from 'react';
import './ServiceHoverPanel.css';

const items = [
    { 
        label: "Cloud Solutions",
        title: "Transform with Vividnex Cloud",
        description: "Across industries, Vividnex Cloud powers innovation, delivering real-time solutions to meet dynamic business and human demands.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cloud-16x9?ts=1749798304054&&fmt=webp-alpha&qlt=75&dpr=off", // Replace with your image URL
        link: "#",
    },
    {
        label: "Customer Experience",
        title: "Transform Customer Care into a Growth Engine",
        description: "Vividnex helps organizations turn customer interactions into seamless, insight-driven experiences that anticipate needs and drive lasting growth.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Customer-Service-Solutions-Illustrations-640x360?ts=1749798304086&&fmt=webp-alpha&qlt=75&dpr=off",
         link: "#",
    },
    {
        label: "Cyber Defense",
        title: "Proactive Security with Vividnex",
        description: "Vividnex strengthens organizations with proactive cybersecurity, protecting assets, minimizing risks, and fostering trust.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cybersecurity-16x9?ts=1749798304118&&fmt=webp-alpha&qlt=75&dpr=off", 
         link: "#",
    },
    {
        label: "Intelligent Solutions",
        title: "Transform with AI at Vividnex",
        description: "With Vividnex, AI is applied intentionally to deliver smarter insights, resilient strategies, and measurable business value.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Data-AI-16x9?ts=1749798304150&&fmt=webp-alpha&qlt=75&dpr=off", // Replace with your image URL
        link: "#"
    },
    {
       label: "Digital Engineering",
       title: "Transform Products and Processes with Vividnex",
       description: "Vividnex leverages data, AI, and digital innovation to reshape design, build, and delivery—boosting resilience, productivity, and sustainability end to end.",
       image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Digital-Engineering-And-Manufacturing-Hero-Image-SVG-2?ts=1749798304182&&fmt=webp-alpha&qlt=75&dpr=off",
        link: "#",
    },
    {
        label: "Tech Innovation",
        title: "Shape the Future with Vividnex",
        description: "With Vividnex, next-gen technology drives efficiency, creates new opportunities, and positions businesses for what’s next.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
    },
    {
        label: "Ecosystem Innovation",
        title: "Drive Impact Through Collaboration",
        description: "With Vividnex, partnerships with top technology ecosystems unlock faster, smarter, and more innovative solutions.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Enterprise-Platforms-16x9?ts=1749798304246&&fmt=webp-alpha&qlt=50&dpr=off", // Replace with your image URL
        link: "#"
    },
    {
        label: "Strategic Finance",
        title: "Build Resilient Enterprises",
        description: "With Vividnex, organizations strengthen resilience, manage risk, and enable large-scale transformation in an uncertain world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture%20Finance-and-Risk-Mgmt-16_9?qlt=85&wid=1600&ts=1749798304276&&fmt=webp-alpha&qlt=50&dpr=off",
        link: "#",
    },
     {
        label: "Infrastructure Solutions",
        title: "Confidently Execute Projects",
        description: "With Vividnex, complex infrastructure and capital projects are delivered efficiently, sustainably, and with maximum impact.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Customer-Service-Solutions-Illustrations-640x360?ts=1749798304086&&fmt=webp-alpha&qlt=75&dpr=off",
        link: "#",
    },
     { 
        label: "Talent Development",
        title: "Empower Teams for Transformation",
        description: "With Vividnex, organizations cultivate skills and capabilities that enable teams to adapt, lead, and excel in a rapidly evolving world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-3840x2160-learning-services:rad-16x9?ts=1749798304339&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&qlt=50&dpr=on,1&wid=480",
        link: "#",
    },
     {
        label: "Service Solutions",
        title: "Streamline Operations, Accelerate Growth",
        description: "With Vividnex, managed services optimize operations, boost agility, and enable businesses to innovate and scale efficiently.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
        link: "#",
    },
     {
        label: "Experience Innovation",
        title: "Engage Customers at Every Moment",
        description: "Vividnex helps organizations explore the metaverse—redefining connection, collaboration, and creation while unlocking new markets and inclusive digital spaces.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
        link: "#",
    },
     {
        label: "Virtual Experiences",
        title: "Create Without Limits",
        description: "With Vividnex, the metaverse opens doors to new communities, markets, and immersive digital experiences that drive innovation.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Metaverse-16x9?ts=1749798304433&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
      label: "Sales & Commerce",
      title: "Move at the Speed of Customers with Vividnex",
      description: "Vividnex helps organizations deliver seamless, relevant experiences that keep pace with evolving customer needs and market demand.",
      image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Business Strategy",
        title: "Transform and Lead with Vividnex",
        description: "Vividnex empowers organizations to lead with purpose, innovate continuously, and create lasting impact for business and society.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Smart Supply Chains",
        title: "Think, Adapt, Grow",
        description: "With Vividnex, supply chains evolve from operational backbones to agile, sustainable, and data-driven engines of growth.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Sustainability Solutions",
        title: "Drive Value Through Sustainability",
        description: "With Vividnex, sustainability is a strategic advantage—helping organizations act responsibly, innovate sustainably, and remain resilient.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Sustainability-16x9?ts=1749798304557&&fmt=webp-alpha&qlt=10&dpr=off",
         link: "#",
    },
     {
        label: "Future of Work",
        title: "Transform Talent and Technology",
        description: "With Vividnex, organizations align human potential and technology to foster agility, innovation, and sustainable growth.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Talent-Org-16x9?ts=1749798304588&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Digital Transformation",
        title: "Agile Growth Through Technology",
        description: "With Vividnex, organizations modernize their tech foundation to enhance efficiency, scale effectively, and fuel ongoing innovation.",
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
