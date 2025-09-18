// ServiceHoverPanel.js
import React, { useState } from 'react';
import './EmergingHoverPanel.css';

const items = [

     {
       label: "Sales & Commerce",
       title: "Keep Pace with Your Customers",
       description: "In a world of rapid change and evolving expectations, staying relevant means delivering seamless experiences that move at your customers’ speed.",

        image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Commerce & Sales Solutions",
        title: "Move as Fast as Your Customers",
        description: "With instant influence and shifting demands, relevance comes from creating seamless experiences that align with your customers’ pace of life.",

        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Customer Commerce",
        title: "Deliver at the Speed of Demand",
        description: "In today’s fast-moving marketplace, relevance is defined by providing seamless experiences that match the speed of your customers’ expectations.",

        image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
    },
     {
        label: "Sales & Customer Experience",
        title: "Adapt at the Speed of Your Customers",
        description: "As customer expectations shift instantly, delivering relevant, seamless experiences is key to staying ahead.",

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
