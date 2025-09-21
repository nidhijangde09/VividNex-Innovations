// ServiceHoverPanel.js
import React, { useState } from 'react';
import './BankingHoverPanel.css';

const items = [

      {
    category: "Customer Experience Acceleration",
    title: "Move at the Speed of Your Customers",
    hoverText: "Vividnex helps brands adapt in real time—delivering seamless, personalized commerce experiences that meet rising expectations and fuel business growth.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
    link: "#",
    },
     {
    category: "Strategic Reinvention",
    title: "Lead with Purpose. Grow with Impact.",
    hoverText: "Vividnex enables continuous reinvention—aligning vision, technology, and execution to drive sustainable growth and long-term value for all stakeholders.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
    link: "#",
    },
     {
    category: "Intelligent Supply Chain",
    title: "Build Supply Chains That Think, Adapt, and Grow",
    hoverText: "Vividnex reimagines supply chains as strategic, data-driven networks—enhancing agility, resilience, and sustainability in an unpredictable world.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
    link: "#",
    },
     {
    category: "Sustainable Transformation",
    title: "Accelerate Impact. Drive Value.",
    hoverText: "Vividnex empowers organizations to embed sustainability at the core—aligning environmental, social, and governance goals with long-term growth and resilience.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
    link: "#",
    },
     
    
];

const BankingHoverPanel = () => {
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

export default BankingHoverPanel;
