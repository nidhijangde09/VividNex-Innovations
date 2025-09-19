import React from "react";
import "./InsightsSection.css";

const insights = [
  [
  {
    title: "Standardization reduces complexity and cost",
    description:
      "Developing modular, repeatable components across projects simplifies adoption, lowers costs, and ensures consistent performance across the industrial landscape."
  },
  {
    title: "Data-driven insights enable smarter decisions",
    description:
      "Continuous collection and analysis of operational data helps organizations identify inefficiencies, optimize energy use, and prioritize high-impact decarbonization initiatives."
  },
  {
    title: "Workforce innovation powers sustainable growth",
    description:
      "Equipping teams with AI tools, advanced analytics, and cross-functional skills ensures they can execute low-carbon projects effectively and sustainably."
  }
]

];

const InsightsSection = () => {
  return (
    <div className="insights-container">
      {insights.map((item, index) => (
        <div key={index} className="insight-item">
          <span className="insight-bullet"></span>
          <p>
            <strong>{item.title}</strong> – {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InsightsSection;
