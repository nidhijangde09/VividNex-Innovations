// ServiceHoverPanel.js
import React, { useState } from 'react';
import './SustainabilityConsultingHoverPanel.css';

const items = [

     {
        label: "Digital Commerce",
        title: "Keep Up with Your Customers",
        description: "Deliver seamless, relevant experiences in a fast-moving world where customer expectations evolve instantly.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
        label: "Business Strategy",
        title: "Lead with Vision, Grow with Impact",
        description: "Adopt a mindset of continuous reinvention to achieve growth that benefits your business, clients, and the world.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
     {
       label: "Smart Supply Chains",
       title: "Supply Chains That Evolve with Your Business",
       description: "Turn your supply chain into a strategic, adaptive, and resilient engine for growth and efficiecy",
       image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
       link: "#",
    },
     {
      label: "Sustainable Leadership",
      title: "Lead with Purpose, Create Lasting Value",
      description: "Integrate sustainability across environmental, social, and governance initiatives to drive growth and resilience.",
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
