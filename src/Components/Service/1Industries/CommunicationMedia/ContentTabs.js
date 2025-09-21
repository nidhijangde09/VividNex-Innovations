import React, { useState } from "react";
import "./ContentTabs.css";

const tabData = {
  communications: {
    title: "Accelerating Digital Communications",
    heading: "Accelerating Digital Communications",
    description:
      "We help communication firms embrace digital transformation, delivering scalable solutions that enhance customer experience and drive sustainable growth",
    image: "https://media.istockphoto.com/id/2216481617/photo/ai-coding-assistant-interface-with-vibe-coding-aesthetics.jpg?b=1&s=612x612&w=0&k=20&c=jsyusLVDzCVgBw-WkOukgxFhQ7-EyqZGqatOIDrn1sE=",
  },
  media: {
    title: "Media",
    heading: "Unlocking Media’s Next Wave",
    description:
      "We help media organizations leverage data-driven insights and AI to accelerate innovation, optimize operations, and seize emerging growth opportunities.",
    image: "https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.jpg?b=1&s=612x612&w=0&k=20&c=fFZN0kRHhnzBKp2ge0ZbYYKmsMloPrAbny_GLiWZ-io=",
  },
};

function ContentTabs() {
  const [activeTab, setActiveTab] = useState("media");

  return (
    <div className="content-container">
      {/* Tabs */}
      <div className="tabs">
        {Object.keys(tabData).map((key) => (
          <span
            key={key}
            className={`tab ${activeTab === key ? "active" : ""}`}
            onMouseEnter={() => setActiveTab(key)} // switch on hover
          >
            {tabData[key].title}
          </span>
        ))}
      </div>

      {/* Content side by side */}
      <div className="content-row">
        <div className="text-col">
          <h1>{tabData[activeTab].heading}</h1>
          <p>{tabData[activeTab].description}</p>
        </div>
        <div className="img-col">
          <img src={tabData[activeTab].image} alt={tabData[activeTab].title} />
        </div>
      </div>
    </div>
  );
}

export default ContentTabs;
