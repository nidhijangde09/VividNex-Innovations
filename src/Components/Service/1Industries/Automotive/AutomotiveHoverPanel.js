// ServiceHoverPanel.js
import React, { useState } from 'react';
import './AutomotiveHoverPanel.css';

const items = [

    {
        label: "Industrial and Automotive Suppliers",
        description: "Delivering innovative components, systems, and software that help industrial manufacturers and automotive suppliers accelerate growth.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },
    {
        label: "Rail and Transit",
        description: "Delivering smarter mobility solutions that create seamless journeys for passengers and greater value for operators.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        link: "#",
    },

    {
        label: "Tolling",
        description: "Transforming tolling systems with digital-first solutions that deliver seamless travel and operational excellence.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
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
