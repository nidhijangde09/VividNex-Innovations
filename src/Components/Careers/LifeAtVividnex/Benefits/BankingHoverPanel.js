// ServiceHoverPanel.js
import React, { useState } from 'react';
import './BankingHoverPanel.css';

const items = [

     {
        label: "Customer Commerce",
        title: "Stay Ahead with Vividnex",
        description: "With Vividnex, businesses respond instantly to shifting demand, ensuring experiences that are timely, relevant, and impactful.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
       label: "Strategy & Growth",
       title: "Grow with Impact",
       description: "With Vividnex, strategic reinvention enables businesses to achieve sustainable growth and meaningful outcomes for all stakeholders.",
       image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Smart Supply Chains",
        title: "Think, Adapt, Grow",
        description: "With Vividnex, supply chains evolve from operational backbones to agile, sustainable, and data-driven engines of growth.",
       image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Sustainable Impact",
        title: "Accelerate Impact with Vividnex",
        description: "Vividnex empowers organizations to lead with purpose—driving environmental responsibility, social equity, and governance to create lasting value and resilience.",
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
