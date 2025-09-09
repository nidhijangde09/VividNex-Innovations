import React, { useState } from "react";
import "./ContentTabs.css";

const tabData = {
  communications: {
    title: "Communications",
    heading: "Communications",
    description:
      "We help communication companies innovate faster, scale efficiently, and stay competitive in the digital era.",
    image: "https://media.istockphoto.com/id/2216481617/photo/ai-coding-assistant-interface-with-vibe-coding-aesthetics.jpg?b=1&s=612x612&w=0&k=20&c=jsyusLVDzCVgBw-WkOukgxFhQ7-EyqZGqatOIDrn1sE=",
  },
  media: {
    title: "Media",
    heading: "Media",
    description:
      "We help media companies use the new investment cycle to capture the next wave of growth and innovation. We unlock the power of data and AI to improve their efficiencies and open new opportunities.",
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
