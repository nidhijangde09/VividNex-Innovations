// ServiceHoverPanel.js
import React, { useState } from 'react';
import './SupplyChainHoverPanel.css';

const items = [

     {
        label: "Customer Experience",
        title: "Move at the Speed of Your Customers",
        description: "In a world of instant influence and shifting demand, relevance means delivering seamless experiences that keep pace with your customers’ expectations.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
        label: "Strategy & Growth",
        title: "Lead with Purpose. Grow with Impact.",
        description: "Embrace continuous reinvention to achieve sustainable growth—delivering lasting value for your business, your customers, and the world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
        label: "Supply Chain Innovation",
        title: "Adaptive, Intelligent, and Resilient Supply Chains",
        description: "Transform your supply chain from a back-office function into a strategic driver of growth, powered by data and sustainability.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
       label: "Sustainable Leadership",
       title: "Lead with Purpose, Create Lasting Value",
       description: "Embrace sustainability across environmental, social, and governance dimensions to drive growth and resilience.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     
    
];

const SupplyChainHoverPanel = () => {
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

export default SupplyChainHoverPanel;
