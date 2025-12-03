// ServiceHoverPanel.js
import React, { useState } from 'react';
import './AerospaceHoverPanel.css';

const items = [
    
{
  label: "Commercial",
  description: "Driving global connectivity with commercial, business, general aviation, and eVTOL aircraft and engines designed for passengers and cargo.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Two-man-discussing-drawing:rad-16x9?ts=1749490438465&fit=constrain&dpr=on,0.8999999761581421&wid=480",
  link: "#",
},
{
  label: "Defense",
  description: "Safeguarding national security with advanced combat and non-combat aircraft, including fixed-wing, rotorcraft, unmanned systems, and engines.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-utilities-image4:rad-16x9?ts=1749490438491&fit=constrain&dpr=on,0.8999999761581421&wid=480",
         link: "#",
},
{
  label: "Space",
  description: "Driving the space economy with cutting-edge innovation—spanning government and commercial launch, satellites, cargo and crew vehicles, and mission services.",
  image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-RAD-software-platforms-image7:rad-16x9?ts=1749490438519&fit=constrain&dpr=on,0.8999999761581421&wid=480",
  link: "#",
},
{
  label: "Maritime",
  description: "Transforming naval shipbuilding with advanced surface ships, submarines, and unmanned systems.",
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
