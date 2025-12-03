import React from "react";
import "./ConductSection.css";

// Import icons from local files
import DiamondIcon from "../../../../assets/images/diamond.png";
import  GlobeIcon from "../../../../assets/images/globe.png";
import  FundIcon from '../../../../assets/images/fund.png';

function ConductSection() {
  const items = [
    {
      icon: DiamondIcon,
      title: "Make your conduct count",
      text: "At VividNex, making your conduct count means leading with respect, fairness, and integrity. It’s about the behaviors we uphold every day—creating an environment where everyone feels valued, supported, and empowered to do their best work."
    },
    {
      icon: GlobeIcon,
      title: "Protect people, information and our business",
      text: "At Vividnex Innovations, we unite to shape a stronger tomorrow—protecting our vision, innovations, and people so future generations can thrive."
    },
    {
      icon: FundIcon,
      title: "Be a good corporate citizen",
      text: "At Vividnex Innovations, we uphold human rights, champion environmental responsibility, and encourage our people to actively contribute to the communities where we live and work."
    }
  ];

  return (
    <div className="conduct-container">
      {items.map((item, index) => (
        <div className="conduct-item" key={index}>
          <div className="conduct-icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ConductSection;
