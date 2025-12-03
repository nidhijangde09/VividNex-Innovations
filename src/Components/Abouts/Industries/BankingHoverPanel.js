// ServiceHoverPanel.js
import React, { useState } from 'react';
import './BankingHoverPanel.css';

const items = [

     {
        label: "Strategy & Consulting",
        description:"We believe the success of organizations comes from understanding every key function and enabling them to work in harmony.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        
    },
     {
        label: "Song",
        description:"Challenging perspectives. Unlocking insights. Delivering outcomes.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
     
    },
     {
        label: "Technology",
        description:"VividNex is consistently recognized as a best-in-class technology innovator by independent research organizations and third-party networks.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
       
    },
     {
        label: "Operations",
        description:"At VividNex, Intelligent Operations means designing and scaling smart operating models that fuel sustainable growth with speed, precision, and security.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
        
    },
     
     {
        label: "Industry X",
        description:"At VividNex, Industry X merges cutting-edge digital innovation with engineering and manufacturing know-how, driving smarter products, processes, and sustainable growth.",
        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
       
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
