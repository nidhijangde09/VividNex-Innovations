import React from "react";
import "./ConductSection.css";

// Import icons from local files
import DiamondIcon from "../../../assets/images/diamond.png";
import  GlobeIcon from "../../../assets/images/globe.png";
import  FundIcon from '../../../assets/images/fund.png';

function ConductSection() {
  const items = [
    {
      icon: DiamondIcon,
      title: "1 (777) 889-9009",
      text: "Toll-free from the United States and Canada"
    },
    {
      icon: GlobeIcon,
      title: "1 (877) 809-9009",
      text: "Outside the United States and Canada"
    },
    {
      icon: FundIcon,
      title: "Find A Location",
      text: "View a list of local Accenture office information."
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
