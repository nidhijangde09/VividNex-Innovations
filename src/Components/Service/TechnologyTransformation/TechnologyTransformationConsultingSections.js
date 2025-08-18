import React from "react";
import "./TechnologyTransformationConsultingSections.css";

const leaders = [
  
    {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
     {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },   {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
  
];

const TechnologyTransformationConsultingSections = () => {
  return (
    <div className="leaders-section">
      
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

export default TechnologyTransformationConsultingSections;
