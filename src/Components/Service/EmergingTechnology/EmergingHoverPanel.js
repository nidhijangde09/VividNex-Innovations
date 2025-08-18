// ServiceHoverPanel.js
import React, { useState } from 'react';
import './EmergingHoverPanel.css';

const items = [

     {
        label: "Sales and Commerce",
        title: "Move at the speed of your customers",
        description:"In a world of instant influence and shifting demand, relevance means delivering seamless experiences that match the pace of life.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Strategy",
        title: "Lead with purpose. Grow with impact.",
        description:"Embrace continuous reinvention to achieve sustainable growth—delivering long-term value for your business, your customers, and the world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Supply Chain",
        title: "Build supply chains that think, adapt, and grow",
        description:"Supply chains are no longer just operational backbones—they’re strategic drivers of growth. Reinvent your supply chain to be more adaptive, data-driven, and sustainable, ensuring agility and resilience in an unpredictable world",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Sustainability",
        title: "Accelerate impact. Drive value.",
        description:"Sustainability is no longer optional—it’s essential. From environmental responsibility to social equity and governance, organizations must lead with purpose to remain competitive and resilient.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     
    
];

const EmergingHoverPanel = () => {
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

export default EmergingHoverPanel;
