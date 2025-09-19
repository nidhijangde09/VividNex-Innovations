import React, { useState } from "react";
import "./SustainabilityTabs.css";

const tabsData = [
  {
    key: "climate",
    title: "Climate change mitigation",
    text: `We continue to work toward our 2025 carbon removal goal by first focusing on 
    reductions across our Scope 1, 2, and 3 emissions and then removing any remaining emissions 
    through nature-based carbon removal projects.`,
    img: "https://media.istockphoto.com/id/2185887801/photo/businessman-analyze-investment-sustainability-esg-icons-esg-environmental-protection-concept.jpg?b=1&s=612x612&w=0&k=20&c=bZVWpkNL_13w57ajF4-gyXi8TAFnl_gWBF3mqyJmm_E=",
  },
  {
    key: "carbonReduction",
    title: "Carbon reduction",
    text: `We are a signatory to the UN Global Compact Business Ambition for 1.5°C Pledge, 
    committing to do our part to keep global warming below 1.5° Celsius in alignment 
    with the Paris Agreement and the criteria of the Science Based Targets initiative.`,
    img: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
  },
  {
    key: "carbonRemoval",
    title: "Carbon removal",
    text: `In 2018, we established a SBTi 2025 near-term emissions reduction target, 
    which we have surpassed. During fiscal 2024, we received approval for net-zero GHG targets.`,
    img: "https://media.istockphoto.com/id/2019990812/photo/diversity-team-discussion-focused-on-esg-for-net-zero-goals-in-a-sustainable-green-office.jpg?b=1&s=612x612&w=0&k=20&c=IcKyxRwKCQXYQble_FByAivyO9pb0tbM-rYyX6lbg_s=",
  },
  {
    key: "zeroWaste",
    title: "Toward zero waste",
    text: `We aim to eliminate waste by improving recycling, reusing materials, 
    and adopting circular economy practices.`,
    img: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
  },
  {
    key: "waterRisk",
    title: "Water risk",
    text: `We actively manage water risk by implementing efficient water usage 
    and conservation practices.`,
    img: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg",
  },
  {
    key: "cleanAir",
    title: "Alliance for Clean Air",
    text: `We are proud members of the Alliance for Clean Air, 
    working to minimize emissions and improve air quality globally.`,
    img: "https://media.istockphoto.com/id/2220160468/photo/managers-collaborating-on-sustainable-business-strategies-in-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=z1xdZvfEhBLIQF0jJvIw9euNi01Mp6bavfoGVGf3Ul8=",
  },
];

export default function SustainabilityTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <div className="sustainability-container">
      {/* Tabs */}
      <div className="tabs">
        {tabsData.map((tab) => (
          <span
            key={tab.key}
            className={`tab ${activeTab.key === tab.key ? "active" : ""}`}
            onMouseEnter={() => setActiveTab(tab)}
          >
            {tab.title}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        <div className="text">
          <p>{activeTab.text}</p>
        </div>
        <div className="image">
          <img src={activeTab.img} alt={activeTab.title} />
        </div>
      </div>
    </div>
  );
}
