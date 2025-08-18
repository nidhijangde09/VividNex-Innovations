import React from "react";
import "./LeadersSection.css";

const leaders = [
  {
    name: "Jason Dess",
    title: "Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Jason-Dess-420x420%3Arad-3x4?ts=1693989717831&fit=constrain&dpr=off", // replace with real image
    linkedin: "#",
  },
  {
    name: "Craig Richey",
    title: "North America Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Craig-Richey-1-420x420%3Arad-3x4?ts=1742323474776&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Paul Prendergast",
    title: "Europe Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/accenture-Paul-Prendergast-Headshot%3Arad-3x4?ts=1745300283952&fit=constrain&dpr=off",
    linkedin: "#",
  },
  {
    name: "Paul Zanker",
    title: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paul-Zanker-660x880%3Arad-3x4?ts=1720595330414&fit=constrain&dpr=off",
    linkedin: "#",
  },
];

const LeadersSection = () => {
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

export default LeadersSection;
