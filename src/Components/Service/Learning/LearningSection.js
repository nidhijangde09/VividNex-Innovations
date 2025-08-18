import React from "react";
import "./LearningSection.css";

const leaders = [
  {
    name: "Jason Dess",
    role: "Lead – CFO & Enterprise Value",
    image: "https://www.accenture.com/t20231101T093340Z__w__/us-en/_acnmedia/Accenture/Images/Executive/jason-dess.jpg",
    linkedin: "https://www.linkedin.com/in/jason-dess",
  },
  {
    name: "Craig Richey",
    role: "North America Lead – CFO & Enterprise Value",
    image: "https://www.accenture.com/t20221220T060505Z__w__/us-en/_acnmedia/Accenture/Images/Executive/craig-richey.jpg",
    linkedin: "https://www.linkedin.com/in/craig-richey",
  },
  {
    name: "Paul Prendergast",
    role: "Europe Lead – CFO & Enterprise Value",
    image: "https://www.accenture.com/t20230907T062356Z__w__/us-en/_acnmedia/Accenture/Images/Executive/paul-prendergast.jpg",
    linkedin: "https://www.linkedin.com/in/paul-prendergast",
  },
  {
    name: "Paul Zanker",
    role: "Growth Markets Lead – CFO & Enterprise Value",
    image: "https://www.accenture.com/t20230907T062349Z__w__/us-en/_acnmedia/Accenture/Images/Executive/paul-zanker.jpg",
    linkedin: "https://www.linkedin.com/in/paul-zanker",
  },
];

const LearningSection = () => {
  return (
    <div className="leaders-section">
      <h2>Our leaders</h2>
      <div className="leaders-container">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <img src={leader.image} alt={leader.name} className="leader-img" />
            <div className="leader-details">
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
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

export default LearningSection;
