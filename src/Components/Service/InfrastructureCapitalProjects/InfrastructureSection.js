import React from "react";
import "./InfrastructureSection.css";

const leaders = [
  {
   name: "Rachel Kim",
   title: "CFO & Enterprise Value Lead",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Jason-Dess-420x420%3Arad-3x4?ts=1693989717831&fit=constrain&dpr=off", // replace with real image
    linkedin: "#",
  },
  {
    name: "David Patel",
    title: "Director, CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Craig-Richey-1-420x420%3Arad-3x4?ts=1742323474776&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Samantha Lee",
     title: "Head of Growth Markets – CFO & Enterprise Value",
     image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-Paul-Prendergast-Headshot%3Arad-3x4?ts=1745300283952&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Alex Morgan",
    title: "Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
    {
    name: "Jordan Blake",
    title: "Senior Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-Paul-Prendergast-Headshot%3Arad-3x4?ts=1745300283952&fit=constrain&dpr=off",
    linkedin: "#",
  },
  
];

const InfrastructureSection = () => {
  return (
    <div className="leaders-section">
      <h2>Our leaders</h2>
      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div className="leader-card" key={index}>
            <img src={leader.image} alt={leader.name} className="leader-img" />
            <div className="leader-details">
              <h3>{leader.name}</h3>
              <p>{leader.title}</p>
              <a href={leader.linkedin} target="_blank" rel="noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="linkedin-icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureSection;
