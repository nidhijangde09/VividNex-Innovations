// ServiceHoverPanel.js
import React, { useState } from 'react';
import './BankingHoverPanel.css';

const items = [

     {
       label: "Sales & Commerce",
title: "Keep pace with your customers",
description: "In a world of rapid change and shifting demands, staying relevant means delivering seamless, personalized experiences that move at the speed of life.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Strategy",
        title: "Lead with purpose, grow with impact",
        description: "Drive continuous reinvention to achieve sustainable growth—creating long-term value for your business, your customers, and the world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Supply Chain",
        title: "Build supply chains that adapt and thrive",
        description: "Supply chains are no longer just operational backbones—they’re strategic growth drivers. Make them adaptive, data-driven, and sustainable to ensure resilience and agility in a changing world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
       label: "Sustainability",
       title: "Drive impact, deliver value",
       description: "Sustainability is essential for success. From environmental stewardship to social equity and governance, organizations must lead with purpose to stay resilient and competitive.",
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
