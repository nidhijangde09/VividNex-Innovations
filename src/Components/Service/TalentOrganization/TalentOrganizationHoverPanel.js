// ServiceHoverPanel.js
import React, { useState } from 'react';
import './SustainabilityConsultingHoverPanel.css';

const items = [

     {
        label: "Customer Experience",
        title: "Deliver at the speed of life",
        description: "In a world of instant influence and rising expectations, success means creating seamless, human-centered experiences that customers value.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
       label: "Growth & Transformation",
       title: "Lead change with confidence",
       description: "Harness strategy and innovation to achieve lasting growth while delivering meaningful impact for stakeholders everywhere.",
       image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
       link: "#",
    },
     {
        label: "Connected Supply Chain",
        title: "Adapt with agility. Deliver with confidence.",
        description: "Modern supply chains must be connected, data-driven, and sustainable—ensuring flexibility, speed, and resilience to meet shifting global demands.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
        label: "Purpose & Sustainability",
        title: "Essential for resilience. Critical for growth.",
        description: "Sustainability is no longer optional—it’s the foundation of trust, competitiveness, and long-term success.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     
    
];

const SustainabilityConsultingHoverPanel = () => {
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

export default SustainabilityConsultingHoverPanel;
