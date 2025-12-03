import React from 'react';
import './DataAIGridHoverCard.css';

const cardData = [
  {
    title: "VividNex Innovations Named a Leader in the 2025 Global Technology Excellence Report",
    description: "VividNex Innovations was recognized for its strong execution and innovation capabilities in delivering next-generation digital transformation solutions. The report evaluated leading technology service providers worldwide, and VividNex achieved top placement for its ability to execute and commitment to driving client success.",
    bgColor: "#045e85", // blue
  },
  {
    title: "Vividnex named a Leader in Everest Group’s 2024 Marketing Services PEAK Matrix.",
    description: "Per the report, “Vividnex streamlined its digital and creative units to form Vividnex Spark...",
    bgColor: "#d11761", // red
  },
  {
    title: "VividNex Innovations recognized as a Leader in Everest Group’s 2025 Digital Transformation Services PEAK Matrix® Assessment.",
    description: "Assessment 2025, recognized for strong execution, innovation, and impact. Positioned among the top providers for Vision and Capability, we continue to drive measurable value through advanced technology and sustainable innovation.",
    bgColor: "#4b0076", // purple
  },
  {
    title: "VividNex Innovations is named a Leader in Everest Group’s Digital Transformation Services PEAK Matrix® Assessment 2025",
    description: "VividNex Innovations is the highest-designated Leader on both the Vision and Capability axis as well as the Market Impact axis in its Digital Transformation Services PEAK Matrix® Assessment 2025.",
    bgColor: "#4b0076", // purple
  },

  {
    title: "VividNex Innovations is named a Leader in Everest Group’s Digital Transformation Services PEAK Matrix® Assessment 2025",
    description: "As noted in the report, “Leaders demonstrate comprehensive digital transformation capabilities, combining strategy, design, and execution to deliver impactful outcomes across industries with depth and scalability.”",
    bgColor: "#045e85", // blue
  },
  {
    title: "Vividnex named a Leader in Everest Group’s 2024 Marketing Services PEAK Matrix.",
    description: "Per the report, “Vividnex streamlined its digital and creative units to form Vividnex Spark...",
    bgColor: "#d11761", // red
  },

];

const DataAIGridHoverCards = () => {
  return (
    <div className="dataai-grid-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="dataai-grid-card"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="dataai-grid-card-pattern" />
          <h2 className="dataai-grid-card-title">{card.title}</h2>
          <div className="dataai-grid-card-description">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataAIGridHoverCards;
