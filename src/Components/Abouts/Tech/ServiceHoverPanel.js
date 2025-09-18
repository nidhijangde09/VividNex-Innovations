// ServiceHoverPanel.js
import React, { useState } from 'react';
import './ServiceHoverPanel.css';

const items = [
    {
        label: "Cloud",
        title: "Empower the World Through Cloud",
        description:
            "From startups to enterprises, cloud drives reinvention and meets evolving human and business needs in real time.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cloud-16x9?ts=1749798304054&&fmt=webp-alpha&qlt=75&dpr=off", // Replace with your image URL
        link: "#",
    },
    {
        label: "Customer Service",
        title: "Transform customer care into a catalyst for growth",
        description:
            "Disjointed and impersonal experiences are pushing organizations to rethink how they connect with customers. Creating seamless, insight-driven interactions that anticipate needs—not just react to them—is key to fueling growth.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Customer-Service-Solutions-Illustrations-640x360?ts=1749798304086&&fmt=webp-alpha&qlt=75&dpr=off",
    },
    {
        label: "Cyber Security",
        title: "Build trust and resilience through proactive cybersecurity",
        description:
            "Embed cybersecurity into every layer of your strategy to safeguard value, mitigate risk, and earn customer trust at scale.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cybersecurity-16x9?ts=1749798304118&&fmt=webp-alpha&qlt=75&dpr=off",
    },
    {
        label: "Data & Artificial intelligence",
        title: "Apply AI with intention",
        description:
            "AI is reshaping industries and daily life—but it’s how you harness it that defines the value. Purposeful implementation drives differentiation, resilience, and next-level performance.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Data-AI-16x9?ts=1749798304150&&fmt=webp-alpha&qlt=75&dpr=off", // Replace with your image URL
        link: "#"
    },
    {
        label: "Digital Engineering and Manufacturing",
        title: "Transform your products. Reinvent your processes.",
        description:
            "Harness the power of data, AI, and digital innovation to reshape how you design, build, and deliver. Boost resilience, enhance productivity, and create more sustainable operations end to end.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Digital-Engineering-And-Manufacturing-Hero-Image-SVG-2?ts=1749798304182&&fmt=webp-alpha&qlt=75&dpr=off",
    },
    {
        label: "Emerging Technology",
        title: "Innovate with purpose",
        description:
            "Turn next-gen technology into a competitive edge—improving efficiency, enabling new models, and positioning your business for what’s next.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
    },
    {
        label: "Ecosystem Partners",
        title: "Accelerate transformation through collaboration",
        description:
            "Partnering with the right technology ecosystems helps you scale smarter and faster—combining innovation, data, and AI to fuel meaningful outcomes.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Enterprise-Platforms-16x9?ts=1749798304246&&fmt=webp-alpha&qlt=50&dpr=off", // Replace with your image URL
        link: "#"
    },
    {
        label: "Finances and risk management",
        title: "Strengthening enterprise resilience in uncertain times",
        description:"In a landscape shaped by disruption, financial and risk leaders must align strategic priorities to safeguard operations, sustain profitability, and enable transformation at scale.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture%20Finance-and-Risk-Mgmt-16_9?qlt=85&wid=1600&ts=1749798304276&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Infrastructure and Capital Projects",
        title: "Deliver complex projects with confidence",
        description:"Leverage advanced data, AI, and human expertise to manage capital projects at scale—on time, on budget, and aligned with long-term value and sustainability goals.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Customer-Service-Solutions-Illustrations-640x360?ts=1749798304086&&fmt=webp-alpha&qlt=75&dpr=off",
         link: "#",
    },
     {
        label: "Learning",
        title: "Shape talent for transformation",
        description:"In a reinvention-ready business, developing the right skills isn’t optional. Empower your teams to evolve, lead, and thrive in a fast-changing world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-3840x2160-learning-services:rad-16x9?ts=1749798304339&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&qlt=50&dpr=on,1&wid=480",
         link: "#",
    },
     {
        label: "Managed Services",
        title: "Operate smarter. Grow faster.",
        description:"Strategic managed services streamline operations, improve agility, and free up capacity—enabling organizations to focus on innovation and scalable value.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Marketing and Experience",
        title: "Create relevance at every moment",
        description:"In a world of shifting expectations and limitless choice, growth depends on delivering dynamic, personalized experiences that adapt in real time.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Metaverse",
        title: "Design beyond boundaries",
        description:"The metaverse redefines how we connect, collaborate, and create—opening the door to new markets, communities, and fully inclusive digital spaces.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Metaverse-16x9?ts=1749798304433&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Sales and Commerce",
        title: "Move at the speed of your customers",
        description:"In a world of instant influence and shifting demand, relevance means delivering seamless experiences that match the pace of life.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Strategy",
        title: "Lead with purpose. Grow with impact.",
        description:"Embrace continuous reinvention to achieve sustainable growth—delivering long-term value for your business, your customers, and the world.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Supply Chain",
        title: "Build supply chains that think, adapt, and grow",
        description:"Supply chains are no longer just operational backbones—they’re strategic drivers of growth. Reinvent your supply chain to be more adaptive, data-driven, and sustainable, ensuring agility and resilience in an unpredictable world",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Emerging-Technology-16x9?ts=1749798304213&&fmt=webp-alpha&qlt=40&dpr=off",
         link: "#",
    },
     {
        label: "Sustainability",
        title: "Accelerate impact. Drive value.",
        description:"Sustainability is no longer optional—it’s essential. From environmental responsibility to social equity and governance, organizations must lead with purpose to remain competitive and resilient.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Sustainability-16x9?ts=1749798304557&&fmt=webp-alpha&qlt=10&dpr=off",
         link: "#",
    },
     {
        label: "Talent and Organization",
        title: "Enabling growth at the intersection of talent and tech",
        description:"The future of work lies in blending advanced technologies with human potential. Together, they create agile workforces, new ways of working, and environments where people and business thrive.",
        image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Talent-Org-16x9?ts=1749798304588&&fmt=webp-alpha&qlt=50&dpr=off",
         link: "#",
    },
     {
        label: "Technology Transformation",
        title: "Reinvent your tech foundation for agile growth",
        description:"Modernize your digital core with strategic investments, skilled talent, and scalable solutions that unlock efficiency, boost ROI, and fuel continuous innovation.",
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
