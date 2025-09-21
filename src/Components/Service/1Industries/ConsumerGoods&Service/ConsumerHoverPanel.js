// ServiceHoverPanel.js
import React, { useState } from 'react';
import './ConsumerHoverPanel.css';

const items = [

     {
       label: "Customer Experience",
       title: "Deliver seamless, personalized journeys",
        description: "In today’s fast-paced market, customer loyalty depends on intuitive, tailored experiences that meet expectations at every touchpoint.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Business Strategy",
        title: "Drive innovation with purpose and agility",
        description:"Adopt dynamic strategies that empower your business to adapt, lead, and create lasting value in a rapidly changing world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Supply Chain Innovation",
    title: "Create resilient, data-driven supply networks",
    description: "Transform your supply chain into a competitive advantage by leveraging real-time data, automation, and sustainability principles.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
       label: "Sustainability Leadership",
    title: "Integrate purpose into every business decision",
    description: "Lead the way with sustainable practices that drive growth, meet stakeholder expectations, and build a resilient future.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
    
];

const ConsumerHoverPanel = () => {
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

export default ConsumerHoverPanel;
