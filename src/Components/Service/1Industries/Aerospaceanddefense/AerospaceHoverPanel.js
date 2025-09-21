// ServiceHoverPanel.js
import React, { useState } from 'react';
import './AerospaceHoverPanel.css';

const items = [
    
{
  label: "Customer Experience",
  title: "Design experiences that inspire loyalty",
  description: "Today’s customers expect more than transactions—they want personalized, meaningful interactions. Reinvent your customer experience to foster trust, connection, and lasting relationships.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
  link: "#",
},
{
  label: "Technology Innovation",
  title: "Turn bold ideas into real-world impact",
  description: "From generative AI to quantum and beyond, innovation is reshaping industries. Harness emerging technologies to unlock growth and create value at scale.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
},
{
  label: "Talent & Organization",
  title: "Empower people. Enable performance.",
  description: "The future of work is human + machine. Build agile organizations, reskill talent, and nurture inclusive cultures where people thrive.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
  link: "#",
},
{
  label: "Operations",
  title: "Reimagine operations for the next frontier",
  description: "Agility, efficiency, and intelligence are the new imperatives. By embedding automation, analytics, and AI, operations evolve into engines of transformation.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-cyber-protection-1707x1138:rad-16x9?ts=1749490438545&fit=constrain&dpr=on,0.8999999761581421&wid=480",
  link: "#",
}

];

const AerospaceHoverPanel = () => {
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

export default AerospaceHoverPanel;
