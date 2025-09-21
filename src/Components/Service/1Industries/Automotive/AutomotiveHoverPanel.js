// ServiceHoverPanel.js
import React, { useState } from 'react';
import './AutomotiveHoverPanel.css';

const items = [

     {
       label: "Customer-Centric Growth",
       title: "Accelerate at the Pace of Your Customers",
       description: "In an era of instant influence and shifting demand, delivering seamless, personalized experiences is key to staying relevant and driving growth.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Purpose-Driven Strategy",
        title: "Shape Tomorrow. Deliver Value Today.",
        description: "Strategy is more than plans—it’s about leading with purpose, adapting continuously, and generating meaningful impact for all stakeholders.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Next-Gen Supply",
        title: "Smart, Resilient, Future-Ready Supply Chains",
        description: "Transform your supply chain into a responsive, intelligent network that drives innovation, efficiency, and sustainable growth across industries.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Purpose & Impact",
        title: "Drive Change. Deliver Value.",
        description: "Sustainability is now a business imperative. From environmental stewardship to social impact and governance, leading with purpose creates resilience, growth, and lasting value.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     
    
];

const AutomotiveHoverPanel = () => {
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

export default AutomotiveHoverPanel;
